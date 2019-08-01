const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// config bringing in contents of config folder
const config = require('config');

const { check, validationResult } = require('express-validator/check');

const db = require('../models');

//@route    POST api/users
//@desc     Register User
//@access   Public

router.post(
  '/',
  [
    // https://express-validator.github.io/docs/
    // username is required must not be empty
    // middleware
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  // using async await
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructuring req.body means we don't have to keep using it.
    const { name, email, password } = req.body;

    try {
      // See if user exists
      // find one takes in a field
      let user = await db.Users.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        //size
        s: '200',
        //rating
        r: 'pg',
        //default, default image
        d: 'mm'
      });

      //creating an instance of user
      user = new User({
        name,
        email,
        avatar,
        password
      });

      // Encrypt password (using bcrypt) hash the password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Get the payload, this includes user id
      const payload = {
        user: {
          id: user.id
        }
      };

      //sign the token, pass in the payload, pass in the secret, the expiration
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        // 3600 seconds is an hour will remove the last 2 zeros later
        { expiresIn: 360000 },
        //If we don't get an error we send the token back to the client
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;

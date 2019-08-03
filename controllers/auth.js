const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

router.get('/', auth, async (req, res) => {
  try {
    //('-password') will leave the password off when we return the user's data
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route get api/auth
//@desc Authenticate User & get token
//@access Public

router.post(
  '/',
  [
    // password must be at least 5 chars long
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  // using async await
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructuring req.body means we don't have to keep using it.
    const { email, password } = req.body;

    try {
      // See if user exists
      // fine one takes in a field
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      //bcrypt has a method called compare which takes a plain text password and an encrypted password,
      //compares the two and tells you whether it's a match or not.

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

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
        { expiresIn: 3600 },
        //If we don't get an error we send the token back to the client
        (err, token) => {
          if (err) throw err;
          res.json({ token, user: email });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;

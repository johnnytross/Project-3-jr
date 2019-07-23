const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/recipeDB"
);

const recipeSeed = [
  {
    userName: "johnny@aol.com",
  recipeName: "Vegan nachos",
  recipeLink: "https://minimalistbaker.com/the-best-damn-vegan-nachos/",
  recipeImage: "https://minimalistbaker.com/wp-content/uploads/2014/04/The-Best-Damn-Vegan-Nachos.jpg"
  }
];

db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " recipes inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

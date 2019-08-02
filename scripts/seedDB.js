const mongoose = require("mongoose");
const db = require("../models");

// This file inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://tcollins:Sugarbone1433@veganizer-pbyzy.mongodb.net/test?retryWrites=true&w=majority'
);

const recipeSeed = [
  {
    userName: "johnny@aol.com",
  recipeName: "Vegan nachos",
  recipeLink: "https://minimalistbaker.com/the-best-damn-vegan-nachos/",
  recipeImage: "https://minimalistbaker.com/wp-content/uploads/2014/04/The-Best-Damn-Vegan-Nachos.jpg"
  },
{
    userName: "rawvegan@aol.com",
    recipeName: "Vegan Mac and Cheese",
    recipeLink: "https://cookieandkate.com/vegan-mac-and-cheese-recipe/",
    recipeImage: "https://cookieandkate.com/images/2017/06/best-vegan-mac-and-cheese-recipe-550x757.jpg"
},
{

    userName: "prettyhippy@aol.com",
    recipeName: "Spicy Thai Peanut Sauce over Roasted Sweet Potatoes and Rice",
    recipeLink: "https://cookieandkate.com/spicy-thai-peanut-sauce-over-roasted-sweet-potatoes-and-rice/",
    recipeImage: "https://cookieandkate.com/images/2018/10/spicy-thai-peanut-sauce-over-roasted-sweet-potatoes-and-rice-4-768x1152.jpg"
}
];

// db.Recipe
//   .remove({})
//   .then(() => db.Recipe.collection.insertMany(recipeSeed))
//   .then(data => {
//     console.log(data.result.n + " recipes inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  userName: { type: String, required: true },
  recipeName: { type: String, required: true },
  recipeLink: { type: String, required: true },
  recipeImage: { type: String, required: true }, 
  // // -- This code stops the app from saving new recipes
  // recipeHealth: { type: String, required: false },
  // recipeCautions: { type: String, required: false },
  // recipeIngredients: { type: String, required: false }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;

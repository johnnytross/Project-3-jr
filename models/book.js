const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  userName: { type: String, required: true },
  recipeName: { type: String, required: true },
  recipeLink: { type: String, required: true },
  recipeImage: { type: String, required: true }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;

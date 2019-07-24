// Comments model

// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the commentSchema with the schema object
var commentSchema = new Schema({
  // The headline is the article associate with the note
  _recipeId: {
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  // as is the noteText
  commentText: String
});

// Create the Comments model using the commentSchema
var Comments = mongoose.model("Comments", commentSchema);

// Export the Comments model
module.exports = Comments;

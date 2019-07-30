const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
<<<<<<< HEAD

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://tcollins:Sugarbone1433@veganizer-pbyzy.mongodb.net/test?retryWrites=true&w=majority'
);
=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipeDB");
>>>>>>> 7983b0a075dfd8b794a067c9c9ab23302a8a3d6b

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

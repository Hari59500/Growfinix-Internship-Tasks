const mongoose = require('mongoose');

// This defines the "shape" of a User document in MongoDB
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // no two users can have the same email
  },
  password: {
    type: String,
    required: true, // this will store the HASHED password, never plain text
  },
}, {
  timestamps: true, // automatically adds createdAt and updatedAt fields
});

// Create a "model" - this is what we actually use in our code to interact with this data
const User = mongoose.model('User', userSchema);

module.exports = User;
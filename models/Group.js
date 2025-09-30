const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the GroupSchema
const GroupSchema = new Schema({
  groupname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  profile: {
    type: String,
    required: true
  },
  avatarimage: {
    type: String,
    required: true
  }
});

// Create the Group model
const Group = mongoose.model('Group', GroupSchema);

// Export the model and schema for use in the main app component
module.exports = { Group, GroupSchema };

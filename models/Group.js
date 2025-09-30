const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the GroupSchema
const GroupSchema = new Schema({
  groupname: {
    type: String,
    lowercase: true,
    required: [true, 'Group name is required'],
    validate: {
      validator: function(v) {
        return /^[a-z0-9!@#$%^&?*\-+_.]+$/.test(v);
      },
      message: props => `${props.value} is not a valid group name. Only lowercase letters, numbers, and the following special characters are allowed: !@#$%^&?*-+_.`
    }
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    validate: {
      validator: function(v) {
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(v);
      },
      message: props => `${props.value} is not a valid email address.`
    }
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

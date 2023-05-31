const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
  user: {
    userId: {
      type: mongoose.Types.ObjectId}, 
    required: true 
  },
  message: {
    messageId: {
      type: mongoose.Types.ObjectId
    }
  }
});

const chatroom = mongoose.model('chatroom', chatroomSchema);

module.exports = chatroom;

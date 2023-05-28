const mongoose = require('mongoose');

const messagechema = new mongoose.Schema({
    type: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const message = mongoose.model('message', messageSchema);

module.exports = message;
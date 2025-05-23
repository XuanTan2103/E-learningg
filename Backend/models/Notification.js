const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({ 
    type: { type: String, enum: [ 'MEETING_REQUEST', 'MEETING_ACCEPTED', 'MEETING_REJECTED', 'MESSAGE' ], required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false }
  }, { timestamps: true }
);
module.exports = mongoose.model('Notification', notificationSchema, 'notifications');

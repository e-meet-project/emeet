const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  password: String,
  profilepicture: String,
  eventsAttended: [ { type: Schema.Types.ObjectId, ref: 'Event' } ],
  eventsCreated: [],
  inboxNotification: [{  type: Schema.Types.ObjectId, ref: 'User' , 
  messageContent: String , 
  read:Boolean }]
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;
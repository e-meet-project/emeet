const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  profileImage: String,
  eventsAttended: [ { type: Schema.Types.ObjectId, ref: 'Event'  } ],
  eventsCreated: [],
  inboxNotification: 
    [
      {
        type: Schema.Types.ObjectId, ref: 'User', 
        messageContent: String, 
        read: Boolean
      }  
    ]
  },
  //authentication- added dec 11 @11am
  {
    timestamps: true
  },
    
);

const User = mongoose.model('User', userSchema);
module.exports = User;

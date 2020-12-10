const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    title: String,
    description: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User'},
    image: String,
    googleLink: String,
    attendees: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    date: Date,
    startTime: [Number, Number],
    endTime: [Number, Number],
    
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
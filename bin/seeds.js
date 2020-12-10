const mongoose = require('mongoose');
const Event = require('../models/Event');
const User = require('../models/User');

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/emeet', {
  useNewUrlParser: true
});

const events = [
  {
    title: "learning JS",
    description: "an event to learn together the basic of",
    image: '',
    googleLink: '',
    attendees: [],
    owner: 'Joe',
    date: new Date(2020, 11, 15),
    startTime: [18, 00],
    endTime: [21, 00],
    maxCapacity: 32,
  },

  {
    title: "Yoga with Catalina",
    description: "practicing Yoga",
    image: '',
    google_link: '',
    attendees: [],
    owner: 'Catalina',
    date: new Date(2020, 09, 15) ,
    startTime: [10, 00],
    endTime: [13, 00],
    maxCapacity: 10,
  }
  // {
  //   title: "Board Games 101",
  //   description: "let's play some nostalgic Board Games together",
  //   image: '',
  //   google_link: '',
  //   attendees: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  //   owner: { type: Schema.Types.ObjectId, ref: 'User'},
  //   date: "2020-07-31",
  //   startTime: {
  //     year: "2020" ,
  //     month:  "07",
  //     day:  "31" ,
  //     hour:  "16",
  //     minutes:  "30",
  //   },
  //   endTime: {
  //     year:  "2020",
  //     month:  "07",
  //     day:  "31",
  //     hour:  "18",
  //     minutes:  "30",
  //   },
  //   maxCapacity: 16,
  // },
  // {
  //   title: "languages and Fun",
  //   description: "We all aspire to learn a new language, how about learning by doing tandem with other languages",
  //   imgage: '',
  //   google_link: '',
  //   attendees: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  //   owner: { type: Schema.Types.ObjectId, ref: 'User'},
  //   date: "2020-09-07",
  //   startTime: {
  //     year: "2020" ,
  //     month:  "09",
  //     day:  "07" ,
  //     hour:  "10",
  //     minutes:  "00" ,
      
  //   },
  //   endTime: {
  //     year:  "2020",
  //     month:  "09",
  //     day:  "07",
  //     hour:  "13",
  //     minutes:  "00",
      
  //   },
  //   maxCapacity: 50,
  // },
]
 

Event.insertMany(events).then(data => {


  console.log("successfully inserted");
  mongoose.connection.close();
}).catch(err => {
  console.log(err);
})

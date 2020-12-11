const mongoose = require('mongoose');
const Event = require('../models/Event');
const User = require('../models/User');

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/emeet', {
  useNewUrlParser: true
});


const users = [
  {
  username: "acolecrough0",
  profileImage: "https://robohash.org/utestest.png?size=50x50&set=set1"
}, 
{
  username: "mmclise1",
  profileImage: "https://robohash.org/atquenecessitatibuseveniet.png?size=50x50&set=set1"
}, {
  username: "lwarmington2",
  profileImage: "https://robohash.org/inoccaecatienim.png?size=50x50&set=set1"
}, {
  username: "ptommasi3",
  profileImage: "https://robohash.org/solutavoluptatererum.png?size=50x50&set=set1"
}, {
  username: "smussen4",
  profileImage: "https://robohash.org/quoinventorenulla.bmp?size=50x50&set=set1"
}, {
  username: "ebauduin5",
  profileImage: "https://robohash.org/quasplaceatqui.jpg?size=50x50&set=set1"
}, {
  username: "nrowett6",
  profileImage: "https://robohash.org/utveroesse.jpg?size=50x50&set=set1"
}, {
  username: "pnekrews7",
  profileImage: "https://robohash.org/praesentiumlaboriosamvoluptas.bmp?size=50x50&set=set1"
}, {
  username: "jenevoldsen8",
  profileImage: "https://robohash.org/eadictasequi.jpg?size=50x50&set=set1"
}, {
  username: "mtuckwell9",
  profileImage: "https://robohash.org/solutaautnecessitatibus.bmp?size=50x50&set=set1"
}, {
  username: "ehilla",
  profileImage: "https://robohash.org/suscipitblanditiisqui.png?size=50x50&set=set1"
}, {
  username: "gmickleboroughb",
  profileImage: "https://robohash.org/inciduntsitmaiores.png?size=50x50&set=set1"
}, {
  username: "naskellc",
  profileImage: "https://robohash.org/etdelenitiadipisci.jpg?size=50x50&set=set1"
}, {
  username: "dvanarsdalend",
  profileImage: "https://robohash.org/nonestunde.bmp?size=50x50&set=set1"
}, {
  username: "mjanaude",
  profileImage: "https://robohash.org/autpossimusnam.png?size=50x50&set=set1"
}, {
  username: "sheinemannf",
  profileImage: "https://robohash.org/nonautconsequatur.bmp?size=50x50&set=set1"
}, {
  username: "smatushevichg",
  profileImage: "https://robohash.org/nostrumoptiovoluptate.jpg?size=50x50&set=set1"
}, {
  username: "mpierceyh",
  profileImage: "https://robohash.org/eosvitaenatus.jpg?size=50x50&set=set1"
}, {
  username: "rtaptoni",
  profileImage: "https://robohash.org/voluptatibuseapariatur.jpg?size=50x50&set=set1"
}, {
  username: "flingej",
  profileImage: "https://robohash.org/inevenietvoluptatem.jpg?size=50x50&set=set1"
}, {
  username: "rmacsweenk",
  profileImage: "https://robohash.org/fugasedincidunt.png?size=50x50&set=set1"
}, {
  username: "mhillockl",
  profileImage: "https://robohash.org/atqueutoccaecati.jpg?size=50x50&set=set1"
}, {
  username: "rliggonsm",
  profileImage: "https://robohash.org/suntsitdoloribus.png?size=50x50&set=set1"
}, {
  username: "soscanlann",
  profileImage: "https://robohash.org/sitoptioconsequuntur.bmp?size=50x50&set=set1"
}, {
  username: "jhonywillo",
  profileImage: "https://robohash.org/utfugamolestiae.png?size=50x50&set=set1"
}, {
  username: "aornilsp",
  profileImage: "https://robohash.org/quisquamaboccaecati.jpg?size=50x50&set=set1"
}, {
  username: "mmcmychemq",
  profileImage: "https://robohash.org/avoluptatemsed.jpg?size=50x50&set=set1"
}, {
  username: "awartonbyr",
  profileImage: "https://robohash.org/maximecumnatus.png?size=50x50&set=set1"
}, {
  username: "dmcfadins",
  profileImage: "https://robohash.org/doloresimpeditmodi.bmp?size=50x50&set=set1"
}, {
  username: "agoardt",
  profileImage: "https://robohash.org/dictanecessitatibusaut.png?size=50x50&set=set1"
}, {
  username: "bquyeu",
  profileImage: "https://robohash.org/magnaminciduntin.png?size=50x50&set=set1"
}, {
  username: "ddollardv",
  profileImage: "https://robohash.org/eumconsequatursit.bmp?size=50x50&set=set1"
}, {
  username: "nbulleyw",
  profileImage: "https://robohash.org/fugiateaaut.png?size=50x50&set=set1"
}, {
  username: "npheasantx",
  profileImage: "https://robohash.org/nemoeaaliquid.jpg?size=50x50&set=set1"
}, {
  username: "nkleinbery",
  profileImage: "https://robohash.org/suntrerumiure.png?size=50x50&set=set1"
}, {
  username: "jmacenellyz",
  profileImage: "https://robohash.org/utofficiaodit.png?size=50x50&set=set1"
}, {
  username: "mbrixey10",
  profileImage: "https://robohash.org/vitaevoluptatesaut.png?size=50x50&set=set1"
}, {
  username: "redlyne11",
  profileImage: "https://robohash.org/etdeseruntblanditiis.jpg?size=50x50&set=set1"
}, {
  username: "hwoolham12",
  profileImage: "https://robohash.org/autemquimagni.png?size=50x50&set=set1"
}, {
  username: "nbaigrie13",
  profileImage: "https://robohash.org/teneturautratione.png?size=50x50&set=set1"
}]


User.insertMany(users).then(data => {


  console.log("successfully inserted");
  mongoose.connection.close();
}).catch(err => {
  console.log(err);
})
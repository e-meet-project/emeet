const mongoose = require('mongoose');
const Event = require('../models/Event');
const User = require('../models/User');

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/emeet', {
  useNewUrlParser: true
});

const events = 
[{
  "title": "Reactive zero defect application",
  "description": "evolve global interfaces",
  "image": "http://dummyimage.com/216x194.bmp/ff4444/ffffff",
  "googleLink": "https://yahoo.co.jp/facilisi/cras.aspx?tellus=consequat&nisi=morbi&eu=a&orci=ipsum&mauris=integer&lacinia=a&sapien=nibh&quis=in&libero=quis&nullam=justo&sit=maecenas&amet=rhoncus&turpis=aliquam&elementum=lacus&ligula=morbi&vehicula=quis&consequat=tortor&morbi=id&a=nulla&ipsum=ultrices&integer=aliquet&a=maecenas&nibh=leo&in=odio&quis=condimentum&justo=id&maecenas=luctus&rhoncus=nec&aliquam=molestie&lacus=sed&morbi=justo&quis=pellentesque&tortor=viverra&id=pede&nulla=ac&ultrices=diam&aliquet=cras&maecenas=pellentesque&leo=volutpat&odio=dui&condimentum=maecenas&id=tristique&luctus=est&nec=et&molestie=tempus&sed=semper&justo=est&pellentesque=quam&viverra=pharetra&pede=magna&ac=ac&diam=consequat&cras=metus&pellentesque=sapien&volutpat=ut&dui=nunc&maecenas=vestibulum&tristique=ante&est=ipsum&et=primis&tempus=in&semper=faucibus&est=orci&quam=luctus&pharetra=et",
  "date": new Date(2020, 09, 07),
  "startTime": "6:53",
  "endTime": "2:20",
  "maxCapacity": 100
}, {
  "title": "Organized maximized throughput",
  "description": "evolve ubiquitous niches",
  "image": "http://dummyimage.com/153x213.jpg/5fa2dd/ffffff",
  "googleLink": "http://acquirethisname.com/lobortis.json?dictumst=et&morbi=ultrices&vestibulum=posuere&velit=cubilia&id=curae&pretium=nulla&iaculis=dapibus&diam=dolor&erat=vel&fermentum=est&justo=donec&nec=odio&condimentum=justo&neque=sollicitudin&sapien=ut&placerat=suscipit&ante=a&nulla=feugiat&justo=et&aliquam=eros&quis=vestibulum&turpis=ac&eget=est&elit=lacinia&sodales=nisi&scelerisque=venenatis&mauris=tristique&sit=fusce&amet=congue&eros=diam&suspendisse=id&accumsan=ornare&tortor=imperdiet&quis=sapien&turpis=urna&sed=pretium&ante=nisl&vivamus=ut&tortor=volutpat&duis=sapien&mattis=arcu&egestas=sed&metus=augue&aenean=aliquam&fermentum=erat&donec=volutpat&ut=in&mauris=congue&eget=etiam&massa=justo&tempor=etiam&convallis=pretium&nulla=iaculis&neque=justo&libero=in&convallis=hac&eget=habitasse&eleifend=platea&luctus=dictumst&ultricies=etiam&eu=faucibus&nibh=cursus&quisque=urna&id=ut&justo=tellus&sit=nulla&amet=ut&sapien=erat&dignissim=id&vestibulum=mauris&vestibulum=vulputate&ante=elementum&ipsum=nullam&primis=varius&in=nulla&faucibus=facilisi&orci=cras&luctus=non&et=velit&ultrices=nec&posuere=nisi",
  "date": new Date(2020, 05, 18),
  "startTime": "15:48",
  "endTime": "21:35",
  "maxCapacity": 11
}, {
  "title": "Automated context-sensitive support",
  "description": "scale cross-media platforms",
  "image": "http://dummyimage.com/231x175.png/ff4444/ffffff",
  "googleLink": "https://howstuffworks.com/vestibulum/ante/ipsum/primis.jpg?convallis=arcu&nulla=sed&neque=augue&libero=aliquam&convallis=erat&eget=volutpat&eleifend=in&luctus=congue&ultricies=etiam&eu=justo&nibh=etiam&quisque=pretium&id=iaculis&justo=justo&sit=in&amet=hac&sapien=habitasse&dignissim=platea&vestibulum=dictumst&vestibulum=etiam&ante=faucibus&ipsum=cursus&primis=urna&in=ut&faucibus=tellus&orci=nulla&luctus=ut&et=erat&ultrices=id&posuere=mauris&cubilia=vulputate&curae=elementum&nulla=nullam&dapibus=varius&dolor=nulla&vel=facilisi&est=cras&donec=non&odio=velit&justo=nec&sollicitudin=nisi&ut=vulputate&suscipit=nonummy&a=maecenas&feugiat=tincidunt&et=lacus&eros=at&vestibulum=velit&ac=vivamus&est=vel&lacinia=nulla&nisi=eget&venenatis=eros&tristique=elementum&fusce=pellentesque&congue=quisque&diam=porta&id=volutpat&ornare=erat&imperdiet=quisque&sapien=erat&urna=eros&pretium=viverra&nisl=eget&ut=congue&volutpat=eget&sapien=semper&arcu=rutrum&sed=nulla&augue=nunc&aliquam=purus&erat=phasellus&volutpat=in&in=felis&congue=donec&etiam=semper&justo=sapien&etiam=a&pretium=libero",
  "date": new Date(2020, 01, 03),
  "startTime": "3:56",
  "endTime": "15:53",
  "maxCapacity": 84
}, {
  "title": "Multi-channelled attitude-oriented forecast",
  "description": "cultivate 24/365 bandwidth",
  "image": "http://dummyimage.com/250x165.jpg/dddddd/000000",
  "googleLink": "https://nsw.gov.au/facilisi.xml?sollicitudin=mus&mi=vivamus&sit=vestibulum&amet=sagittis&lobortis=sapien&sapien=cum&sapien=sociis&non=natoque&mi=penatibus&integer=et&ac=magnis&neque=dis&duis=parturient&bibendum=montes&morbi=nascetur&non=ridiculus&quam=mus&nec=etiam&dui=vel&luctus=augue&rutrum=vestibulum&nulla=rutrum&tellus=rutrum&in=neque&sagittis=aenean&dui=auctor&vel=gravida&nisl=sem&duis=praesent&ac=id&nibh=massa&fusce=id&lacus=nisl&purus=venenatis",
  "date": new Date(2020, 11, 05),
  "startTime": "7:25",
  "endTime": "7:31",
  "maxCapacity": 56
}, {
  "title": "Front-line encompassing alliance",
  "description": "innovate interactive paradigms",
  "image": "http://dummyimage.com/218x134.png/5fa2dd/ffffff",
  "googleLink": "http://topsy.com/odio/elementum/eu/interdum/eu/tincidunt/in.html?tortor=condimentum&sollicitudin=neque&mi=sapien&sit=placerat&amet=ante&lobortis=nulla&sapien=justo&sapien=aliquam&non=quis&mi=turpis&integer=eget&ac=elit&neque=sodales&duis=scelerisque&bibendum=mauris&morbi=sit&non=amet&quam=eros&nec=suspendisse&dui=accumsan&luctus=tortor&rutrum=quis&nulla=turpis&tellus=sed&in=ante&sagittis=vivamus&dui=tortor&vel=duis&nisl=mattis&duis=egestas&ac=metus&nibh=aenean&fusce=fermentum&lacus=donec&purus=ut&aliquet=mauris&at=eget&feugiat=massa&non=tempor&pretium=convallis&quis=nulla&lectus=neque&suspendisse=libero&potenti=convallis&in=eget&eleifend=eleifend&quam=luctus&a=ultricies&odio=eu&in=nibh&hac=quisque&habitasse=id&platea=justo&dictumst=sit&maecenas=amet&ut=sapien&massa=dignissim&quis=vestibulum&augue=vestibulum&luctus=ante&tincidunt=ipsum&nulla=primis&mollis=in&molestie=faucibus&lorem=orci&quisque=luctus&ut=et&erat=ultrices&curabitur=posuere&gravida=cubilia&nisi=curae&at=nulla&nibh=dapibus&in=dolor&hac=vel&habitasse=est&platea=donec&dictumst=odio&aliquam=justo&augue=sollicitudin&quam=ut&sollicitudin=suscipit&vitae=a",
  "date": new Date(2020, 0, 18),
  "startTime": "20:26",
  "endTime": "15:49",
  "maxCapacity": 45
}, {
  "title": "Switchable multi-tasking software",
  "description": "evolve customized ROI",
  "image": "http://dummyimage.com/246x145.bmp/dddddd/000000",
  "googleLink": "https://thetimes.co.uk/convallis/eget/eleifend/luctus/ultricies.xml?fermentum=gravida&donec=sem&ut=praesent&mauris=id&eget=massa&massa=id&tempor=nisl&convallis=venenatis&nulla=lacinia&neque=aenean&libero=sit&convallis=amet&eget=justo&eleifend=morbi&luctus=ut&ultricies=odio&eu=cras&nibh=mi&quisque=pede&id=malesuada&justo=in&sit=imperdiet&amet=et&sapien=commodo&dignissim=vulputate&vestibulum=justo&vestibulum=in&ante=blandit&ipsum=ultrices&primis=enim&in=lorem&faucibus=ipsum&orci=dolor&luctus=sit&et=amet&ultrices=consectetuer&posuere=adipiscing&cubilia=elit&curae=proin&nulla=interdum&dapibus=mauris&dolor=non&vel=ligula&est=pellentesque&donec=ultrices&odio=phasellus&justo=id&sollicitudin=sapien&ut=in&suscipit=sapien&a=iaculis&feugiat=congue&et=vivamus&eros=metus&vestibulum=arcu&ac=adipiscing&est=molestie&lacinia=hendrerit&nisi=at&venenatis=vulputate&tristique=vitae&fusce=nisl&congue=aenean&diam=lectus&id=pellentesque&ornare=eget&imperdiet=nunc&sapien=donec&urna=quis&pretium=orci&nisl=eget&ut=orci&volutpat=vehicula&sapien=condimentum&arcu=curabitur&sed=in&augue=libero&aliquam=ut",
  "date": new Date(2020, 0, 22),
  "startTime": "12:10",
  "endTime": "12:18",
  "maxCapacity": 88
}, {
  "title": "Advanced methodical implementation",
  "description": "e-enable synergistic niches",
  "image": "http://dummyimage.com/158x106.png/ff4444/ffffff",
  "googleLink": "http://hugedomains.com/maecenas/tincidunt/lacus/at.aspx?purus=nec&aliquet=nisi&at=volutpat&feugiat=eleifend&non=donec&pretium=ut&quis=dolor&lectus=morbi&suspendisse=vel&potenti=lectus&in=in&eleifend=quam&quam=fringilla&a=rhoncus",
  "date": new Date(2020, 01, 13),
  "startTime": "15:32",
  "endTime": "16:34",
  "maxCapacity": 9
}, {
  "title": "Virtual real-time conglomeration",
  "description": "enable next-generation supply-chains",
  "image": "http://dummyimage.com/111x143.png/cc0000/ffffff",
  "googleLink": "http://e-recht24.de/ac/leo/pellentesque/ultrices.html?penatibus=proin&et=at&magnis=turpis&dis=a&parturient=pede&montes=posuere&nascetur=nonummy&ridiculus=integer&mus=non&vivamus=velit&vestibulum=donec&sagittis=diam&sapien=neque&cum=vestibulum&sociis=eget&natoque=vulputate&penatibus=ut&et=ultrices&magnis=vel&dis=augue&parturient=vestibulum&montes=ante&nascetur=ipsum&ridiculus=primis&mus=in&etiam=faucibus&vel=orci&augue=luctus&vestibulum=et&rutrum=ultrices&rutrum=posuere&neque=cubilia&aenean=curae&auctor=donec&gravida=pharetra&sem=magna&praesent=vestibulum&id=aliquet&massa=ultrices&id=erat&nisl=tortor&venenatis=sollicitudin&lacinia=mi&aenean=sit&sit=amet&amet=lobortis&justo=sapien&morbi=sapien&ut=non&odio=mi&cras=integer&mi=ac&pede=neque&malesuada=duis&in=bibendum&imperdiet=morbi&et=non&commodo=quam&vulputate=nec&justo=dui&in=luctus&blandit=rutrum&ultrices=nulla&enim=tellus&lorem=in&ipsum=sagittis&dolor=dui&sit=vel&amet=nisl&consectetuer=duis&adipiscing=ac&elit=nibh&proin=fusce",
  "date": new Date(2020, 0, 23),
  "startTime": "13:12",
  "endTime": "15:54",
  "maxCapacity": 44
}, {
  "title": "Universal fault-tolerant customer loyalty",
  "description": "morph robust convergence",
  "image": "http://dummyimage.com/140x161.jpg/ff4444/ffffff",
  "googleLink": "http://hao123.com/non/velit/nec/nisi/vulputate.aspx?condimentum=lectus&neque=pellentesque&sapien=eget&placerat=nunc&ante=donec&nulla=quis&justo=orci&aliquam=eget&quis=orci&turpis=vehicula&eget=condimentum&elit=curabitur",
  "date": new Date(2020, 04, 28),
  "startTime": "20:39",
  "endTime": "10:25",
  "maxCapacity": 21
}, {
  "title": "Progressive asynchronous ability",
  "description": "deliver open-source infomediaries",
  "image": "http://dummyimage.com/230x135.png/ff4444/ffffff",
  "googleLink": "http://mit.edu/varius/nulla.json?maecenas=pede&ut=posuere&massa=nonummy&quis=integer&augue=non&luctus=velit&tincidunt=donec&nulla=diam&mollis=neque&molestie=vestibulum&lorem=eget&quisque=vulputate&ut=ut&erat=ultrices&curabitur=vel&gravida=augue&nisi=vestibulum&at=ante&nibh=ipsum&in=primis&hac=in&habitasse=faucibus&platea=orci&dictumst=luctus&aliquam=et&augue=ultrices&quam=posuere&sollicitudin=cubilia&vitae=curae&consectetuer=donec&eget=pharetra&rutrum=magna&at=vestibulum&lorem=aliquet&integer=ultrices&tincidunt=erat&ante=tortor&vel=sollicitudin",
  "date": new Date(2020, 07, 10),
  "startTime": "9:41",
  "endTime": "7:30",
  "maxCapacity": 24
}, {
  "title": "Stand-alone multi-state frame",
  "description": "engage end-to-end e-markets",
  "image": "http://dummyimage.com/221x239.jpg/dddddd/000000",
  "googleLink": "http://lulu.com/feugiat/et/eros/vestibulum.js?rutrum=donec&nulla=pharetra&nunc=magna&purus=vestibulum&phasellus=aliquet&in=ultrices&felis=erat&donec=tortor&semper=sollicitudin&sapien=mi&a=sit&libero=amet&nam=lobortis&dui=sapien&proin=sapien&leo=non&odio=mi&porttitor=integer&id=ac&consequat=neque&in=duis&consequat=bibendum&ut=morbi&nulla=non&sed=quam&accumsan=nec&felis=dui&ut=luctus&at=rutrum&dolor=nulla&quis=tellus&odio=in&consequat=sagittis&varius=dui&integer=vel&ac=nisl&leo=duis&pellentesque=ac&ultrices=nibh&mattis=fusce",
  "date": new Date(2019, 11, 12),
  "startTime": "9:50",
  "endTime": "18:08",
  "maxCapacity": 44
}, {
  "title": "Reverse-engineered bandwidth-monitored system engine",
  "description": "harness next-generation paradigms",
  "image": "http://dummyimage.com/245x196.png/5fa2dd/ffffff",
  "googleLink": "http://t.co/augue/vestibulum/rutrum/rutrum/neque/aenean/auctor.js?ut=enim&ultrices=lorem&vel=ipsum&augue=dolor&vestibulum=sit&ante=amet&ipsum=consectetuer&primis=adipiscing&in=elit&faucibus=proin&orci=interdum&luctus=mauris&et=non&ultrices=ligula&posuere=pellentesque&cubilia=ultrices&curae=phasellus&donec=id&pharetra=sapien&magna=in&vestibulum=sapien&aliquet=iaculis&ultrices=congue&erat=vivamus&tortor=metus&sollicitudin=arcu&mi=adipiscing&sit=molestie&amet=hendrerit&lobortis=at&sapien=vulputate&sapien=vitae&non=nisl&mi=aenean&integer=lectus&ac=pellentesque&neque=eget&duis=nunc&bibendum=donec&morbi=quis&non=orci&quam=eget&nec=orci&dui=vehicula&luctus=condimentum&rutrum=curabitur&nulla=in&tellus=libero&in=ut&sagittis=massa&dui=volutpat&vel=convallis&nisl=morbi&duis=odio&ac=odio&nibh=elementum&fusce=eu&lacus=interdum&purus=eu&aliquet=tincidunt&at=in&feugiat=leo&non=maecenas&pretium=pulvinar&quis=lobortis&lectus=est&suspendisse=phasellus&potenti=sit&in=amet&eleifend=erat",
  "date": new Date(2020, 10, 09),
  "startTime": "19:44",
  "endTime": "21:40",
  "maxCapacity": 12
}, {
  "title": "Self-enabling bandwidth-monitored functionalities",
  "description": "transition real-time methodologies",
  "image": "http://dummyimage.com/126x125.png/cc0000/ffffff",
  "googleLink": "https://wunderground.com/cursus/vestibulum/proin/eu.png?dis=luctus&parturient=cum&montes=sociis&nascetur=natoque&ridiculus=penatibus&mus=et&vivamus=magnis&vestibulum=dis&sagittis=parturient&sapien=montes&cum=nascetur&sociis=ridiculus&natoque=mus&penatibus=vivamus&et=vestibulum&magnis=sagittis&dis=sapien&parturient=cum&montes=sociis&nascetur=natoque&ridiculus=penatibus&mus=et&etiam=magnis&vel=dis&augue=parturient&vestibulum=montes&rutrum=nascetur&rutrum=ridiculus&neque=mus&aenean=etiam&auctor=vel&gravida=augue&sem=vestibulum&praesent=rutrum&id=rutrum&massa=neque&id=aenean&nisl=auctor&venenatis=gravida&lacinia=sem&aenean=praesent&sit=id&amet=massa&justo=id&morbi=nisl&ut=venenatis&odio=lacinia",
  "date": new Date(2020, 09, 19),
  "startTime": "15:11",
  "endTime": "17:32",
  "maxCapacity": 36
}, {
  "title": "Reactive 24/7 focus group",
  "description": "deliver turn-key partnerships",
  "image": "http://dummyimage.com/217x188.png/5fa2dd/ffffff",
  "googleLink": "https://soup.io/duis.png?vitae=pretium&nisl=nisl&aenean=ut&lectus=volutpat&pellentesque=sapien&eget=arcu&nunc=sed&donec=augue&quis=aliquam&orci=erat&eget=volutpat&orci=in&vehicula=congue&condimentum=etiam&curabitur=justo&in=etiam&libero=pretium&ut=iaculis&massa=justo&volutpat=in&convallis=hac&morbi=habitasse&odio=platea&odio=dictumst&elementum=etiam&eu=faucibus&interdum=cursus&eu=urna&tincidunt=ut&in=tellus&leo=nulla&maecenas=ut&pulvinar=erat&lobortis=id&est=mauris&phasellus=vulputate&sit=elementum&amet=nullam&erat=varius&nulla=nulla&tempus=facilisi&vivamus=cras&in=non&felis=velit&eu=nec&sapien=nisi",
  "date": new Date(2020, 02, 21),
  "startTime": "7:12",
  "endTime": "9:41",
  "maxCapacity": 20
}, {
  "title": "Universal directional portal",
  "description": "aggregate dynamic networks",
  "image": "http://dummyimage.com/147x159.jpg/dddddd/000000",
  "googleLink": "https://unblog.fr/blandit/non/interdum/in/ante/vestibulum/ante.xml?sollicitudin=magna&vitae=ac&consectetuer=consequat&eget=metus&rutrum=sapien&at=ut&lorem=nunc&integer=vestibulum&tincidunt=ante&ante=ipsum&vel=primis&ipsum=in&praesent=faucibus&blandit=orci&lacinia=luctus&erat=et&vestibulum=ultrices&sed=posuere&magna=cubilia&at=curae&nunc=mauris&commodo=viverra&placerat=diam&praesent=vitae&blandit=quam&nam=suspendisse&nulla=potenti&integer=nullam&pede=porttitor&justo=lacus&lacinia=at&eget=turpis&tincidunt=donec&eget=posuere",
  "date": new Date(2020, 02, 02),
  "startTime": "12:15",
  "endTime": "14:14",
  "maxCapacity": 32
}, {
  "title": "Multi-channelled bandwidth-monitored system engine",
  "description": "implement seamless web services",
  "image": "http://dummyimage.com/233x191.bmp/ff4444/ffffff",
  "googleLink": "http://ycombinator.com/luctus/et/ultrices/posuere/cubilia.json?augue=duis&quam=mattis&sollicitudin=egestas&vitae=metus&consectetuer=aenean&eget=fermentum&rutrum=donec&at=ut&lorem=mauris&integer=eget&tincidunt=massa&ante=tempor&vel=convallis&ipsum=nulla&praesent=neque&blandit=libero&lacinia=convallis&erat=eget&vestibulum=eleifend&sed=luctus&magna=ultricies&at=eu&nunc=nibh&commodo=quisque&placerat=id&praesent=justo&blandit=sit&nam=amet&nulla=sapien&integer=dignissim&pede=vestibulum&justo=vestibulum&lacinia=ante&eget=ipsum&tincidunt=primis&eget=in&tempus=faucibus&vel=orci&pede=luctus&morbi=et&porttitor=ultrices&lorem=posuere&id=cubilia&ligula=curae&suspendisse=nulla&ornare=dapibus&consequat=dolor&lectus=vel&in=est&est=donec&risus=odio&auctor=justo&sed=sollicitudin&tristique=ut&in=suscipit&tempus=a&sit=feugiat&amet=et&sem=eros&fusce=vestibulum&consequat=ac&nulla=est&nisl=lacinia&nunc=nisi&nisl=venenatis&duis=tristique&bibendum=fusce&felis=congue&sed=diam&interdum=id&venenatis=ornare&turpis=imperdiet&enim=sapien&blandit=urna&mi=pretium&in=nisl&porttitor=ut&pede=volutpat&justo=sapien&eu=arcu&massa=sed&donec=augue&dapibus=aliquam&duis=erat&at=volutpat&velit=in&eu=congue&est=etiam&congue=justo&elementum=etiam&in=pretium&hac=iaculis&habitasse=justo&platea=in&dictumst=hac&morbi=habitasse",
  "date": new Date(2020, 10, 05),
  "startTime": "8:35",
  "endTime": "10:15",
  "maxCapacity": 27
}, {
  "title": "Secured needs-based internet solution",
  "description": "synergize next-generation communities",
  "image": "http://dummyimage.com/136x226.bmp/dddddd/000000",
  "googleLink": "https://feedburner.com/curabitur/convallis/duis.jpg?vel=interdum&nisl=mauris&duis=non&ac=ligula&nibh=pellentesque&fusce=ultrices&lacus=phasellus&purus=id&aliquet=sapien&at=in&feugiat=sapien&non=iaculis&pretium=congue&quis=vivamus&lectus=metus&suspendisse=arcu&potenti=adipiscing&in=molestie&eleifend=hendrerit&quam=at&a=vulputate&odio=vitae&in=nisl&hac=aenean&habitasse=lectus&platea=pellentesque&dictumst=eget&maecenas=nunc&ut=donec&massa=quis&quis=orci&augue=eget&luctus=orci&tincidunt=vehicula&nulla=condimentum&mollis=curabitur&molestie=in&lorem=libero&quisque=ut&ut=massa&erat=volutpat&curabitur=convallis&gravida=morbi&nisi=odio&at=odio&nibh=elementum&in=eu&hac=interdum&habitasse=eu&platea=tincidunt&dictumst=in&aliquam=leo&augue=maecenas&quam=pulvinar&sollicitudin=lobortis&vitae=est&consectetuer=phasellus&eget=sit&rutrum=amet&at=erat&lorem=nulla&integer=tempus&tincidunt=vivamus&ante=in&vel=felis&ipsum=eu&praesent=sapien&blandit=cursus&lacinia=vestibulum&erat=proin&vestibulum=eu&sed=mi&magna=nulla&at=ac&nunc=enim&commodo=in&placerat=tempor&praesent=turpis&blandit=nec&nam=euismod&nulla=scelerisque&integer=quam&pede=turpis&justo=adipiscing&lacinia=lorem&eget=vitae&tincidunt=mattis&eget=nibh&tempus=ligula&vel=nec&pede=sem&morbi=duis&porttitor=aliquam&lorem=convallis",
  "date": new Date(2020, 05, 15),
  "startTime": "12:47",
  "endTime": "13:25",
  "maxCapacity": 81
}, {
  "title": "Advanced bandwidth-monitored customer loyalty",
  "description": "incubate 24/365 channels",
  "image": "http://dummyimage.com/126x189.bmp/dddddd/000000",
  "googleLink": "https://simplemachines.org/ultrices.js?integer=aliquam&pede=sit&justo=amet&lacinia=diam&eget=in&tincidunt=magna&eget=bibendum&tempus=imperdiet&vel=nullam&pede=orci&morbi=pede&porttitor=venenatis&lorem=non&id=sodales&ligula=sed&suspendisse=tincidunt&ornare=eu&consequat=felis&lectus=fusce&in=posuere&est=felis&risus=sed&auctor=lacus&sed=morbi&tristique=sem&in=mauris&tempus=laoreet&sit=ut&amet=rhoncus&sem=aliquet&fusce=pulvinar&consequat=sed&nulla=nisl&nisl=nunc&nunc=rhoncus&nisl=dui&duis=vel&bibendum=sem&felis=sed&sed=sagittis&interdum=nam&venenatis=congue&turpis=risus&enim=semper&blandit=porta&mi=volutpat&in=quam&porttitor=pede&pede=lobortis&justo=ligula&eu=sit&massa=amet&donec=eleifend&dapibus=pede&duis=libero&at=quis&velit=orci&eu=nullam&est=molestie&congue=nibh&elementum=in&in=lectus&hac=pellentesque&habitasse=at&platea=nulla&dictumst=suspendisse&morbi=potenti&vestibulum=cras&velit=in&id=purus&pretium=eu&iaculis=magna&diam=vulputate&erat=luctus&fermentum=cum&justo=sociis&nec=natoque&condimentum=penatibus&neque=et&sapien=magnis&placerat=dis&ante=parturient&nulla=montes&justo=nascetur&aliquam=ridiculus",
  "date": new Date(2020, 03, 26),
  "startTime": "19:00",
  "endTime": "22:00",
  "maxCapacity": 38
}, {
  "title": "Ameliorated neutral methodology",
  "description": "leverage customized vortals",
  "image": "http://dummyimage.com/234x181.png/cc0000/ffffff",
  "googleLink": "https://cocolog-nifty.com/id/massa/id/nisl/venenatis.jsp?augue=sed&vel=nisl&accumsan=nunc&tellus=rhoncus&nisi=dui&eu=vel&orci=sem&mauris=sed&lacinia=sagittis&sapien=nam&quis=congue&libero=risus&nullam=semper&sit=porta&amet=volutpat&turpis=quam&elementum=pede&ligula=lobortis&vehicula=ligula&consequat=sit&morbi=amet&a=eleifend&ipsum=pede&integer=libero&a=quis&nibh=orci",
  "date": new Date(2020, 02, 23),
  "startTime": "18:36",
  "endTime": "20:33",
  "maxCapacity": 70
}, {
  "title": "Synchronised multi-tasking neural-net",
  "description": "implement enterprise functionalities",
  "image": "http://dummyimage.com/192x215.png/5fa2dd/ffffff",
  "googleLink": "https://tamu.edu/dolor/quis.js?sapien=aliquet&ut=pulvinar&nunc=sed&vestibulum=nisl&ante=nunc&ipsum=rhoncus&primis=dui&in=vel&faucibus=sem&orci=sed&luctus=sagittis&et=nam&ultrices=congue&posuere=risus&cubilia=semper&curae=porta&mauris=volutpat&viverra=quam&diam=pede&vitae=lobortis&quam=ligula&suspendisse=sit&potenti=amet&nullam=eleifend&porttitor=pede&lacus=libero&at=quis&turpis=orci&donec=nullam&posuere=molestie&metus=nibh&vitae=in&ipsum=lectus&aliquam=pellentesque&non=at&mauris=nulla&morbi=suspendisse&non=potenti&lectus=cras&aliquam=in&sit=purus&amet=eu&diam=magna&in=vulputate&magna=luctus&bibendum=cum&imperdiet=sociis&nullam=natoque&orci=penatibus&pede=et&venenatis=magnis&non=dis&sodales=parturient&sed=montes&tincidunt=nascetur&eu=ridiculus&felis=mus&fusce=vivamus&posuere=vestibulum&felis=sagittis&sed=sapien&lacus=cum&morbi=sociis&sem=natoque",
  "date": new Date(2019, 11, 21),
  "startTime": "11:30",
  "endTime": "13:44",
  "maxCapacity": 88
}]
    

 

Event.insertMany(events).then(data => {


  console.log("successfully inserted");
  mongoose.connection.close();
}).catch(err => {
  console.log(err);
})

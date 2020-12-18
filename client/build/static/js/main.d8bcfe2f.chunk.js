(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t,a){},133:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),i=a.n(n),c=a(28),r=a.n(c),l=(a(132),a(20)),o=a(7),d=a(8),j=a(10),h=a(9),b=(a(133),a(12)),u=a(23),p=a(13),m=a(11),O=a.n(m),x=function(e,t,a){return O.a.post("/api/auth/signup",{username:e,password:t,profileImage:a}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},g=function(e,t){return O.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return console.log("services",e.data),e.data})).catch((function(e){return console.log("service err",e.response.data),e.response.data}))},v=(a(46),a(64),a(287)),f=a(290),y=a(124),C=function(e){throw e},w=O.a.create({baseURL:"http://localhost:3000"}),N=function(e){return console.log("file to be handled: ",e),w.post("api/upload",e).then((function(e){return e.data})).catch(C)},E=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:"",profileImage:"",message:""},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(u.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,s=a.username,n=a.password;x(s,n).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return console.log(this.props),Object(s.jsx)("div",{class:"centerAuth",children:Object(s.jsx)(v.a,{children:Object(s.jsxs)("div",{className:"boxOn",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Create your account"}),Object(s.jsx)("p",{className:"error",children:this.state.message})]}),Object(s.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{htmlFor:"username",children:"Username "}),Object(s.jsx)(f.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})]}),Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Group,{htmlFor:"password",children:"Password "}),Object(s.jsx)(f.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})]}),Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"profileImageUpload",children:[Object(s.jsx)(f.a.Label,{htmlFor:"profileImage",children:"Uplodad a Profile Picture? "}),Object(s.jsx)("div",{class:"profileImageUploadContainer",children:Object(s.jsx)(f.a.Control,{type:"file",name:"profileImage",id:"profileImage",value:this.state.profileImage,onChange:this.handleFileUpload})})]})]}),Object(s.jsx)(y.a,{type:"submit",children:"Sign up"})]}),Object(s.jsxs)("div",{className:"signupLoginSwitch",children:["Already have an account ",Object(s.jsx)(p.b,{to:"/login",children:"Login "})]})]})})})}}]),a}(n.Component),k=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(u.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,s=a.username,n=a.password;g(s,n).then((function(t){console.log("login data",t),t.message?e.setState({message:t.message,username:"",password:""}):(console.log("before the setUser"),console.log(e.props),e.props.setUser(t),console.log("after the setUser"),e.props.history.push("/"))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{class:"centerAuth",children:Object(s.jsx)(v.a,{children:Object(s.jsxs)("div",{class:"boxOn",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Please log in"}),Object(s.jsx)("p",{className:"error",children:this.state.message})]}),Object(s.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{htmlFor:"username",children:"Username: "}),Object(s.jsx)(f.a.Control,{size:"lg",type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})]}),Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{htmlFor:"password",children:"Password "}),Object(s.jsx)(f.a.Control,{size:"lg",type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})]}),Object(s.jsx)(y.a,{variant:"primary",type:"submit",children:"Login"})]}),Object(s.jsxs)("div",{className:"signupLoginSwitch",children:["Need to create an account?  ",Object(s.jsx)(p.b,{to:"/signup",children:"Sign up"})]})]})})})}}]),a}(n.Component),L=(a(158),function(e){console.log(e),O.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))});function T(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsx)(p.b,{className:"navbar-link",to:"/",children:Object(s.jsx)("img",{src:"https://res.cloudinary.com/irieljm/image/upload/c_scale,w_56/v1607633242/Emeet/Emeet_logo_desx4h.png",alt:"e-meet_logo"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(p.b,{className:"navbar-link",to:"/events",children:"All Events"}),e.user?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p.b,{className:"navbar-link",to:"/",onClick:function(){return L(e)},children:"Logout"}),Object(s.jsx)(p.b,{className:"navbar-link",to:"/profile",children:"User Profile"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(p.b,{className:"navbar-link",to:"/login",children:"Login"}),Object(s.jsx)(p.b,{className:"navbar-link",to:"/signup",children:"Sign Up"})]})]})]})})}a(67);var S=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.event;return Object(s.jsxs)("div",{className:"card col-sm-4 col-sm-3 card-box",style:{paddingTop:"2rem"},children:[e.image&&Object(s.jsx)("img",{src:e.image,className:"card-img-top",style:{maxHeight:"150px"},alt:e.title}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:e.title}),Object(s.jsx)("p",{className:"card-text",children:e.description}),Object(s.jsx)(p.b,{to:"/events/".concat(e._id),className:"btn btn-primary",children:"More Information"})]})]})}}]),a}(n.Component),F=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:this.props.eventList.map((function(e){return Object(s.jsx)(S,{event:e},e._id)}))})})}}]),a}(n.Component),U=(a(38),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"searchbar",children:Object(s.jsx)("label",{htmlFor:"search",children:Object(s.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Find your next emeet..",value:this.props.search,onChange:this.props.filter,class:"searchBar"})})})}}]),a}(n.Component)),D=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={upcomingEvents:e.props.events,filteredEvents:[],search:""},e.filterEvents=function(t){e.setState({search:t.target.value},(function(){var t=e.props.events.filter((function(t){return t.description.toLowerCase().includes(e.state.search.toLowerCase())||t.title.toLowerCase().includes(e.state.search.toLowerCase())}));e.setState({filteredEvents:t})}))},e}return Object(d.a)(a,[{key:"render",value:function(){return""===this.state.search?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"searchBar",children:Object(s.jsx)(U,{filter:this.filterEvents,search:this.state.search})}),Object(s.jsx)("div",{class:"searchResults",children:Object(s.jsx)("p",{children:Object(s.jsx)(F,{eventList:this.props.events})})})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"searchBar",children:Object(s.jsx)(U,{filter:this.filterEvents,search:this.state.search})}),Object(s.jsx)("div",{children:Object(s.jsx)(F,{eventList:this.state.filteredEvents})})]})}}]),a}(n.Component),A=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={events:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/api/events").then((function(t){console.log("api call",t),e.setState({events:t.data})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"filteredResults",children:[Object(s.jsxs)("div",{className:"eventHeader",children:[Object(s.jsx)("h2",{children:"Find your next Emeet "}),Object(s.jsx)("div",{className:"allEvents",children:Object(s.jsx)("div",{children:Object(s.jsx)(p.b,{className:"allEventsButton",to:"/Addevent",children:"Or create your own!"})})})]}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(D,{events:this.state.events})})]})}}]),a}(n.Component),I=(a(159),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={fullUserProfile:null,errorMessage:null},e}return Object(d.a)(a,[{key:"getFullUserProfile",value:function(){var e=this;O.a.get("/api/user/".concat(this.props.user._id)).then((function(t){e.setState({fullUserProfile:t.data})})).catch((function(t){e.setState({errorMessage:t.message})}))}},{key:"componentDidMount",value:function(){this.getFullUserProfile()}},{key:"render",value:function(){var e=this.state.fullUserProfile;if(!e)return Object(s.jsx)(s.Fragment,{children:" Loading... "});if(this.state.errorMessage)return Object(s.jsxs)(s.Fragment,{children:[" Oh ho!... we had a problem (",this.state.errorMessage,") "]});var t=new Date,a=e.eventsAttended.filter((function(e){return new Date(e.date)<t})),n=e.eventsAttended.filter((function(e){return new Date(e.date)>=t})),i=e.eventsCreated;return console.log({user:e,pastEvents:a,upcomingEvents:n,eventsCreated:i}),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"profile-container-top",children:[Object(s.jsx)("h1",{className:"profile-name",children:e.username}),Object(s.jsx)("p",{className:"aboutMe",children:e.aboutMe}),Object(s.jsx)("img",{className:"ProfilePhoto",alt:"",style:{maxWidth:" 120px",borderRadius:"50%"},src:e.profileImage})]}),Object(s.jsx)(p.b,{className:"allEventsButton allEvents",to:"/Addevent",children:"Add your own event!"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"container profile-myEventList",children:[Object(s.jsx)("h2",{className:"row",children:"Past Events"}),Object(s.jsx)(F,{eventList:a}),Object(s.jsx)("hr",{}),Object(s.jsx)("h2",{className:"row",children:"Upcoming Events"}),Object(s.jsx)(F,{eventList:n}),Object(s.jsx)("hr",{}),Object(s.jsx)("h2",{className:"row",children:"Events Created"}),Object(s.jsx)(F,{eventList:i})]})]})}}]),a}(n.Component)),G=a(30),_=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={user:e.props.user,events:[],title:"",description:"",date:"",startTime:"",endTime:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/api/events").then((function(t){var a=t.data;e.setState({events:a,title:t.data.title,description:t.data.description,image:t.data.image})}))}},{key:"render",value:function(){var e=this.state.user;return Object(s.jsxs)("div",{className:"homepage",children:[Object(s.jsxs)("div",{className:"welcomeFlex",children:[Object(s.jsx)("div",{className:"welcome",children:Object(s.jsxs)("h2",{className:"welcome",children:["Welcome  ",Object(s.jsx)("b",{children:e&&this.state.user.username})," to Emeet"]})}),Object(s.jsx)("div",{className:"carousel",children:Object(s.jsxs)(G.a,{children:[Object(s.jsxs)(G.a.Item,{interval:1e3,children:[Object(s.jsx)("img",{className:"d-block w-100 inner-img",src:"https://res.cloudinary.com/irieljm/image/upload/c_scale,h_475/v1608129941/Emeet/computer5.jpg",alt:"comp5"}),Object(s.jsxs)(G.a.Caption,{children:[Object(s.jsx)("h3",{children:"Feeling sad and lonely at home?"}),Object(s.jsx)("p",{children:"join Emeet & create an event to bring people together"})]})]}),Object(s.jsxs)(G.a.Item,{interval:1e3,children:[Object(s.jsx)("img",{className:"d-block w-100 inner-img",src:"https://res.cloudinary.com/irieljm/image/upload/c_scale,h_629/v1608129945/Emeet/computer3.jpg",alt:"comp3"}),Object(s.jsxs)(G.a.Caption,{children:[Object(s.jsx)("h3",{children:"Can't hang out with your friends?"}),Object(s.jsx)("p",{children:"join Emeet to finds people to hang out with online"})]})]}),Object(s.jsxs)(G.a.Item,{children:[Object(s.jsx)("img",{className:"d-block w-100 inner-img",src:"https://res.cloudinary.com/irieljm/image/upload/c_scale,h_506/v1608130423/Emeet/computer8.jpg",alt:"comp8"}),Object(s.jsxs)(G.a.Caption,{children:[Object(s.jsx)("h3",{children:"at home or at the park"}),Object(s.jsx)("p",{children:"With Emeet you can have fun with new & old friends online"})]})]})]})})]}),Object(s.jsx)("br",{}),Object(s.jsx)("container",{children:Object(s.jsx)(D,{events:this.state.events})})]})}}]),a}(i.a.Component),P=a(288),M=a(123),B=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={title:"",date:"",startTime:"",endTime:"",maxCapacity:"",description:"",image:"",imagePublicID:"",googleLink:"",message:"",submitted:!1,imageSelected:!1},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;console.log(n),e.setState(Object(u.a)({},s,n))},e.handleFileUpload=function(t){console.log("The file to be uploaded is: ",t.target.files[0]),e.setState({imageSelected:!0});var a=new FormData;a.append("image",t.target.files[0]),console.log("THIS IS THE UPLOAD DATA",a),N(a).then((function(t){console.log(t);var a=t.secure_url,s=t.public_id;console.log("res from handleupload: ",t.secure_url),e.setState({image:a,imagePublicID:s}),console.log("new state: ",e.state.image),!0===e.state.submitted&&e.handleSubmit()})).catch((function(t){e.setState({imageSelected:!1}),console.log("Error while uploading the file: ",t)}))},e.handleSubmit=function(t){t.preventDefault(),console.log("submit");var a=e.state,s=a.title,n=a.date,i=a.startTime,c=a.endTime,r=a.description,l=a.image,o=a.publicID,d=a.googleLink;console.log(e.state),e.state.image||!e.state.imageSelected?(console.log(l),O.a.post("/api/events",{title:s,date:n,startTime:i,endTime:c,owner:e.props.user._id,description:r,image:l,imagePublicID:o,googleLink:d}).then((function(t){console.log(t.data,"fetch event"),e.props.refreshData(),e.setState({message:"Event created!"})})).catch((function(e){console.log(e)}))):e.setState({submitted:!0}),e.props.history.push("/events")},e}return Object(d.a)(a,[{key:"render",value:function(){return console.log(this.props),console.log("message",this.state.message),Object(s.jsx)("div",{class:"centerAuth",children:Object(s.jsx)(v.a,{children:Object(s.jsxs)("div",{class:"boxOn",children:[Object(s.jsx)("h1",{children:"Create an Event"}),Object(s.jsxs)("p",{className:"error",children:["Message: ",this.state.message]}),Object(s.jsx)("div",{children:Object(s.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"title",children:" Event title: "}),Object(s.jsx)(f.a.Control,{type:"text",name:"title",id:"title",value:this.state.title,onChange:this.handleChange})]}),Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"date",children:"Event date:"}),Object(s.jsx)(f.a.Control,{type:"date",name:"date",id:"date",value:this.state.date,onChange:this.handleChange})]}),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"startTime ",children:" Start time: "}),Object(s.jsx)(f.a.Control,{type:"time",name:"startTime",id:"startTime",value:this.state.startTime,onChange:this.handleChange})]})}),Object(s.jsx)(M.a,{}),Object(s.jsx)(M.a,{})]}),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"endTime",children:" End time: "}),Object(s.jsx)(f.a.Control,{type:"time",name:"endTime",id:"endTime",value:this.state.endTime,onChange:this.handleChange})]})}),Object(s.jsx)(M.a,{}),Object(s.jsx)(M.a,{})]}),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"maxCapacity",children:" Maximum capacity: "}),Object(s.jsx)(f.a.Control,{type:"number",name:"maxCapacity",id:"maxCapacity",value:this.state.maxCapacity,onChange:this.handleChange})]})}),Object(s.jsx)(M.a,{}),Object(s.jsx)(M.a,{})]}),Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"description",children:"Description: "}),Object(s.jsx)(f.a.Control,{as:"textarea",rows:3,type:"text",height:"20px",name:"description",id:"description",value:this.state.description,onChange:this.handleChange})]}),Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"googleLink",children:"Add Google link: "}),Object(s.jsx)(f.a.Control,{type:"link",name:"googleLink",id:"googleLink",value:this.state.googleLink,onChange:this.handleChange})]}),Object(s.jsx)("div",{className:"profileImageUpload",children:Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{hmtlFor:"image",children:"Upload an image: "}),Object(s.jsx)("div",{class:"profileImageUploadContainer",children:Object(s.jsx)(f.a.Control,{type:"file",name:"image",id:"image",onChange:this.handleFileUpload})})]})}),Object(s.jsx)("br",{}),Object(s.jsx)(y.a,{type:"submit",children:"Add your event!"})]})})]})})})}}]),a}(n.Component),H=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{class:"centerAuth",children:Object(s.jsx)(v.a,{children:Object(s.jsxs)("div",{class:"boxOn",children:[Object(s.jsx)("h2",{children:" Edit your event "}),Object(s.jsxs)(f.a,{onSubmit:this.props.handleSubmit,children:[Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"title",children:" Event title: "}),Object(s.jsx)(f.a.Control,{type:"text",name:"title",id:"title",value:this.props.title,onChange:this.props.handleChange})]}),Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"date",children:"Event date:"}),Object(s.jsx)(f.a.Control,{type:"date",name:"date",id:"date",value:this.props.date,onChange:this.props.handleChange})]}),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"startTime ",children:" Start time: "}),Object(s.jsx)(f.a.Control,{type:"time",name:"startTime",id:"startTime",value:this.props.startTime,onChange:this.props.handleChange})]})}),Object(s.jsx)(M.a,{}),Object(s.jsx)(M.a,{})]}),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"endTime",children:" End time: "}),Object(s.jsx)(f.a.Control,{type:"time",name:"endTime",id:"endTime",value:this.props.endTime,onChange:this.props.handleChange})]})}),Object(s.jsx)(M.a,{}),Object(s.jsx)(M.a,{})]}),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"maxCapacity",children:" Maximum capacity: "}),Object(s.jsx)(f.a.Control,{type:"number",name:"maxCapacity",id:"maxCapacity",value:this.props.maxCapacity,onChange:this.props.handleChange})]})}),Object(s.jsx)(M.a,{}),Object(s.jsx)(M.a,{})]}),Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"description",children:"Description: "}),Object(s.jsx)(f.a.Control,{as:"textarea",rows:3,type:"text",height:"20px",name:"description",id:"description",value:this.props.description,onChange:this.props.handleChange})]}),Object(s.jsxs)(f.a.Group,{as:P.a,children:[Object(s.jsx)(f.a.Label,{htmlFor:"googleLink",children:"Add Google link: "}),Object(s.jsx)(f.a.Control,{type:"link",name:"googleLink",id:"googleLink",value:this.props.googleLink,onChange:this.props.handleChange})]}),Object(s.jsx)("div",{className:"profileImageUpload",children:Object(s.jsxs)(f.a.Group,{children:[Object(s.jsx)(f.a.Label,{hmtlFor:"image",children:"Upload an image: "}),Object(s.jsx)("div",{class:"profileImageUploadContainer",children:Object(s.jsx)(f.a.Control,{type:"file",name:"image",id:"image",onChange:this.handleFileUpload})})]})}),Object(s.jsx)("br",{}),Object(s.jsx)(y.a,{type:"submit",children:"Edit your event"})]})]})})})}}]),a}(n.Component),R=a(291),W=a(289),J=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={error:null,event:null,title:"",description:"",image:"",googleLink:"",date:"",startTime:"",endTime:"",maxCapacity:"",attending:!1},e.getEventDetails=function(){var t=e.props.match.params.id;O.a.get("/api/events/".concat(t)).then((function(t){var a=t.data;e.setState({event:a,title:t.data.title,description:t.data.description,image:t.data.image,googleLink:t.data.googleLink,date:t.data.date,startTime:t.data.startTime,endTime:t.data.endTime,maxCapacity:t.data.maxCapacity}),t.data.attendees.includes(e.props.user._id)?(console.log("success"),e.setState({attending:!0})):console.log("fail",e.props.user._id)})).catch((function(e){console.log(e.response)}))},e.deleteEvent=function(){var t=e.props.match.params.id;O.a.delete("/api/events/".concat(t)).then((function(){e.props.history.push("/profile")}))},e.toggleEditForm=function(){e.setState((function(e){return{editForm:!e.editForm}}))},e.handleChange=function(t){var a=t.target,s=a.name,n=a.value;e.setState(Object(u.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.match.params.id;O.a.put("/api/events/".concat(a),{title:e.state.title,description:e.state.description,image:e.state.image,googleLink:e.state.googleLink,date:e.state.date,startTime:e.state.startTime,endTime:e.state.endTime,maxCapacity:e.state.maxCapacity}).then((function(t){e.setState({event:t.data,title:t.data.title,description:t.data.description,image:t.data.image,googleLink:t.data.googleLink,date:t.data.date,maxCapacity:t.data.maxCapacity,startTime:t.data.startTime,endTime:t.data.endTime,editForm:!1}),e.props.history.push("/profile")})).catch((function(e){console.log(e)}))},e.joinEvent=function(){var t=e.props.match.params.id;O.a.put("/api/events/join/".concat(t)).then((function(t){console.log(t,"response"),e.setState({attending:!e.state.attending})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getEventDetails()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.getEventDetails()}},{key:"render",value:function(){var e=this;return console.log("renderid",this.props.user._id),this.state.error?Object(s.jsx)("h1",{children:this.state.error}):this.state.event?Object(s.jsxs)("div",{className:"detailsBody",children:[Object(s.jsx)("div",{className:"imageFlex",children:Object(s.jsxs)("div",{className:"detailsHeader",children:[Object(s.jsx)("div",{className:"detailsTitle",children:Object(s.jsx)("h1",{children:this.state.event.title})}),Object(s.jsxs)("div",{className:"detailsDateTime",children:[this.state.event.startTime?Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Start Time: "}),this.state.event.startTime,Object(s.jsx)("br",{}),Object(s.jsx)("b",{children:"End Time : "})," ",this.state.event.endTime," "]})}):Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("b",{children:"Start & End Time:"})," TBD "]}),this.state.date?Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Date:"})," ",this.state.event.date.slice(0,10)]}):Object(s.jsxs)("p",{children:["  ",Object(s.jsx)("b",{children:"Date :"})," TBD  "]})]})]})}),Object(s.jsxs)("div",{className:"detailsJoin",children:[Object(s.jsx)("h3",{children:"Want to join this event?"}),this.state.attending?Object(s.jsxs)("p",{children:["You are attending this event!",Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:this.state.event.googleLink,children:"Click here to go to your event"})})]}):Object(s.jsx)(y.a,{onClick:this.joinEvent,children:" Join event"})]}),Object(s.jsxs)("div",{className:"detailsDescription",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"What you'll do during this event:"})," "]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("br",{}),this.state.event.description]}),Object(s.jsx)("img",{src:this.state.event.image,alt:""})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"detailsAttendeesHeader",children:Object(s.jsx)("h3",{children:"Meet your fellow Event attendees:"})}),Object(s.jsx)("div",{className:"detailsAttendees",children:this.state.event.attendees.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"detailsBox",children:[Object(s.jsx)("p",{children:e.username}),Object(s.jsx)("img",{className:"ProfilePhoto",alt:e.username,style:{borderRadius:"50%"},src:e.profileImage})]})})}))}),Object(s.jsx)("div",{className:"detailsEventOwner",children:this.props.user._id===this.state.event.owner&&this.props.user._id?Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"detailsEventOwnerColLeft",children:[Object(s.jsx)("h3",{children:"You are the host of this event!"}),Object(s.jsx)("br",{}),Object(s.jsx)("h4",{children:"Need to change something?"}),Object(s.jsx)("p",{children:"Click here to display the edit form:"}),Object(s.jsx)(y.a,{onClick:this.toggleEditForm,children:"Show Edit Form"}),Object(s.jsx)("div",{className:"detailsEventOwnerDelete",children:Object(s.jsxs)(R.a,{variant:"danger",children:[Object(s.jsx)("h4",{children:"Can't host the event any more? "}),Object(s.jsxs)(W.a,{children:[Object(s.jsx)(W.a.Toggle,{variant:"danger",id:"dropdown-basic",children:"Yes I'm sure I want to delete this event"}),Object(s.jsx)(W.a.Menu,{children:Object(s.jsxs)(W.a.Item,{onClick:function(){e.deleteEvent()},children:[Object(s.jsx)("h1",{children:"Delete"}),Object(s.jsx)("p",{children:"Please note that this action CANNOT be undone! Please only click delete if you're 100% certain!"})]})})]})]})})]}),Object(s.jsx)("div",{className:"detailsEventOwnerEditAll",children:Object(s.jsx)("div",{className:"detailsEventOwnerEditForm, detailsEventOwnerColRight",children:this.state.editForm&&Object(s.jsx)(H,Object(l.a)(Object(l.a)({},this.state),{},{handleChange:this.handleChange,handleSubmit:this.handleSubmit}))})})]}):Object(s.jsx)("p",{})})]}):Object(s.jsx)("h1",{class:"detailsHeader",children:"Loading..."})}}]),a}(n.Component),Y=(a(161),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)(T,{user:this.state.user,setUser:this.setUser}),Object(s.jsxs)(b.d,{children:[Object(s.jsx)(b.b,{exact:!0,path:"/",render:function(t){return e.state.user?Object(s.jsx)(_,Object(l.a)({user:e.state.user},t)):Object(s.jsx)(_,{})}}),Object(s.jsx)(b.b,{exact:!0,path:"/signup",render:function(t){return Object(s.jsx)(E,Object(l.a)({setUser:e.setUser},t))}}),Object(s.jsx)(b.b,{exact:!0,path:"/login",render:function(t){return Object(s.jsx)(k,Object(l.a)({setUser:e.setUser},t))}}),Object(s.jsx)(b.b,{exact:!0,path:"/events",render:function(t){return Object(s.jsx)(A,Object(l.a)({setUser:e.setUser},t))}}),Object(s.jsx)(b.b,{exact:!0,path:"/profile",render:function(t){return e.state.user?Object(s.jsx)(I,Object(l.a)({user:e.state.user},t)):Object(s.jsx)(b.a,{to:"/"})}}),Object(s.jsx)(b.b,{exact:!0,path:"/events/:id",render:function(t){return Object(s.jsx)(J,Object(l.a)({user:e.state.user},t))}}),Object(s.jsx)(b.b,{exact:!0,path:"/editevent",component:H}),Object(s.jsx)(b.b,{exact:!0,path:"/addevent",render:function(t){return e.state.user?Object(s.jsx)(B,Object(l.a)({user:e.state.user},t)):Object(s.jsx)(b.a,{to:"/login"})}})]})]})}}]),a}(n.Component));O.a.get("/api/auth/loggedin").then((function(e){var t=e.data;console.log("index.js",t),r.a.render(Object(s.jsx)(p.a,{children:Object(s.jsx)(Y,{user:t})}),document.getElementById("root"))}))},38:function(e,t,a){},46:function(e,t,a){},67:function(e,t,a){}},[[282,1,2]]]);
//# sourceMappingURL=main.d8bcfe2f.chunk.js.map
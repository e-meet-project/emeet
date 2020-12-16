(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),r=n(32),c=n.n(r),o=(n(39),n(14)),l=n(2),h=n(3),d=n(5),j=n(4),u=(n(40),n(7)),p=n(15),b=n(6),m=n(8),O=n.n(m),g=function(e,t,n){return O.a.post("/api/auth/signup",{username:e,password:t,profileImage:n}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},v=function(e,t){return O.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return console.log("services",e.data),e.data})).catch((function(e){return console.log("service err",e.response.data),e.response.data}))},x=(n(31),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",profileImage:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(p.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password,i=n.profileImage;g(a,s,i).then((function(t){t.message?e.setState({message:t.message,username:"",password:"",profileImage:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log(this.props),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Create your account"}),Object(a.jsx)("p",{className:"error",children:this.state.message}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username "}),Object(a.jsx)("input",{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password "}),Object(a.jsx)("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{htmlFor:"profileImage",children:"Profile Picture "}),Object(a.jsx)("input",{type:"file",name:"profileImage",id:"profileImage",value:this.state.profileImage,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",children:"Sign up"})]}),"Already have an account ",Object(a.jsx)(b.b,{to:"/login",children:"Login "})]})}}]),n}(s.Component)),f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(p.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;v(a,s).then((function(t){console.log("login data",t),t.message?e.setState({message:t.message,username:"",password:""}):(console.log("before the setUser"),console.log(e.props),e.props.setUser(t),console.log("after the setUser"),e.props.history.push("/"))}))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Please log in"}),Object(a.jsx)("p",{className:"error",children:this.state.message}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username "}),Object(a.jsx)("input",{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password "}),Object(a.jsx)("input",{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",children:"Login"})]}),Object(a.jsxs)("p",{children:["Need to create an account ?  ",Object(a.jsx)(b.b,{to:"/signup",children:"Sign up"})]})]})}}]),n}(s.Component),y=(n(66),function(e){console.log(e),O.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))});function C(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)(b.b,{className:"navbar-link",to:"/",children:Object(a.jsx)("img",{src:"https://res.cloudinary.com/irieljm/image/upload/c_scale,w_56/v1607633242/Emeet/Emeet_logo_desx4h.png",alt:"e-meet_logo"})}),Object(a.jsx)(b.b,{className:"navbar-link",to:"/",children:"Go to homepage"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(b.b,{className:"navbar-link",to:"/events",children:"All Events"}),e.user?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.b,{className:"navbar-link",to:"/",onClick:function(){return y(e)},children:"Logout"}),Object(a.jsx)(b.b,{className:"navbar-link",to:"/profile",children:"User Profile"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.b,{className:"navbar-link",to:"/login",children:"Login"}),Object(a.jsx)(b.b,{className:"navbar-link",to:"/signup",children:"Sign Up"})]})]})]})})}n(67);var k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.event;return console.log("this is the event",e),Object(a.jsxs)("div",{className:"card col-md-4 col-sm-3",children:[e.image&&Object(a.jsx)("img",{src:e.image,className:"card-img-top",alt:e.title}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:e.title}),Object(a.jsx)("p",{className:"card-text",children:e.description}),Object(a.jsx)(b.b,{to:"/events/".concat(e._id),className:"btn btn-primary",children:"More Information"})]})]})}}]),n}(s.Component),w=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:this.props.eventList.map((function(e){return Object(a.jsx)(k,{event:e},e._id)}))})})}}]),n}(s.Component),S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={events:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/api/events").then((function(t){console.log("api call",t),e.setState({events:t.data})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(w,{eventList:this.state.events}),Object(a.jsx)(b.b,{className:"btn btn-primary",to:"/Addevent",children:"Create your own event!  YESS"}),Object(a.jsx)(b.b,{className:"btn btn-default",to:"/signup",children:"sign up"})]})}}]),n}(s.Component),T=(n(68),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={fullUserProfile:null,errorMessage:null},e}return Object(h.a)(n,[{key:"getFullUserProfile",value:function(){var e=this;O.a.get("/api/user/".concat(this.props.user._id)).then((function(t){e.setState({fullUserProfile:t.data})})).catch((function(t){e.setState({errorMessage:t.message})}))}},{key:"componentDidMount",value:function(){this.getFullUserProfile()}},{key:"render",value:function(){var e=this.state.fullUserProfile;if(!e)return Object(a.jsx)(a.Fragment,{children:" Loading... "});if(this.state.errorMessage)return Object(a.jsxs)(a.Fragment,{children:[" Oh ho!... we had a problem (",this.state.errorMessage,") "]});var t=new Date,n=e.eventsAttended.filter((function(e){return new Date(e.date)<t})),s=e.eventsAttended.filter((function(e){return new Date(e.date)>=t})),i=e.eventsCreated;return console.log({user:e,pastEvents:n,upcomingEvents:s,eventsCreated:i}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"profile-container-top",children:[Object(a.jsx)("h1",{className:"profile-name",children:e.username}),Object(a.jsx)("p",{className:"aboutMe",children:e.aboutMe}),Object(a.jsx)("img",{className:"ProfilePhoto",alt:"",style:{maxWidth:" 120px",borderRadius:"50%"},src:e.profileImage})]}),Object(a.jsx)("button",{className:"btn-add-your-event",children:Object(a.jsx)("a",{href:"/Addevent",children:"Add your own event"})}),Object(a.jsxs)("div",{className:"container profile-myEventList",children:[Object(a.jsx)("h2",{className:"row",children:"Past Events"}),Object(a.jsx)(w,{eventList:n}),Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{className:"row",children:"Upcoming Events"}),Object(a.jsx)(w,{eventList:s}),Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{className:"row",children:"Events Created"}),Object(a.jsx)(w,{eventList:i})]})]})}}]),n}(s.Component)),F=(n(20),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{class:"searchbar",children:Object(a.jsx)("label",{htmlFor:"search",children:Object(a.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Search for an event..",value:this.props.search,onChange:this.props.filter,class:"searchBar"})})})}}]),n}(s.Component)),E=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={upcomingEvents:e.props.events,filteredEvents:[],search:""},e.filterEvents=function(t){e.setState({search:t.target.value},(function(){var t=e.props.events.filter((function(t){return t.description.toLowerCase().includes(e.state.search.toLowerCase())||t.title.toLowerCase().includes(e.state.search.toLowerCase())}));e.setState({filteredEvents:t})}))},e}return Object(h.a)(n,[{key:"render",value:function(){return""===this.state.search?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{class:"searchBar",children:Object(a.jsx)(F,{filter:this.filterEvents,search:this.state.search})}),Object(a.jsx)("div",{class:"searchResults",children:Object(a.jsx)("p",{children:Object(a.jsx)(w,{eventList:this.props.events})})})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{class:"searchBar",children:Object(a.jsx)(F,{filter:this.filterEvents,search:this.state.search})}),Object(a.jsx)("p",{children:Object(a.jsx)(w,{eventList:this.state.filteredEvents})})]})}}]),n}(s.Component),L=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,events:[],title:"",description:"",date:"",startTime:"",endTime:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/api/events").then((function(t){var n=t.data;console.log("api call",t),e.setState({events:n,title:t.data.title,description:t.data.description,image:t.data.image})}))}},{key:"render",value:function(){var e=this.state.user;return console.log("this is the render declared user = ".concat(e," ")),e?Object(a.jsxs)("div",{class:"homepage",children:["index, now called homepage!",Object(a.jsxs)("p",{children:["Welcome ",this.state.user.username," !"]}),Object(a.jsxs)("div",{class:"searchFullContainer",children:[Object(a.jsx)("h1",{children:"search implementation"}),Object(a.jsx)("div",{class:"searchResults",children:Object(a.jsx)(E,{events:this.state.events})})]})]}):Object(a.jsxs)("div",{class:"homepage",children:["index, now called homepage!",Object(a.jsx)("p",{children:"Welcome!"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:"/events",children:"See all events"})}),Object(a.jsx)("p",{children:Object(a.jsxs)("div",{class:"searchFullContainer",children:[Object(a.jsx)("h1",{children:"search implementation"}),Object(a.jsx)("p",{children:Object(a.jsx)(E,{events:this.state.events})})]})})]})}}]),n}(i.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={title:"",date:"",startTime:"",endTime:"",maxCapacity:"",description:"",image:"",googleLink:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;console.log(s),e.setState(Object(p.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.title,s=n.date,i=n.startTime,r=n.endTime,c=n.description,o=n.image,l=n.googleLink;e.props.history.push("/events"),console.log(e.state),a.length<5&&e.setState({message:"Please enter a longer title"}),O.a.post("/api/events",{title:a,date:s,startTime:i,endTime:r,owner:e.props.user._id,description:c,image:o,googleLink:l}).then((function(t){console.log(t.data,"fetch event"),e.setState({message:"Event created!"})})).catch((function(e){console.log(e)}))},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log(this.props),console.log("message",this.state.message),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"error",children:["Message: ",this.state.message]}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"title",children:" Event title: "}),Object(a.jsx)("input",{type:"text",name:"title",id:"title",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"date",children:"Event date:"}),Object(a.jsx)("input",{type:"date",name:"date",id:"date",value:this.state.date,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"startTime ",children:" Start time: "}),Object(a.jsx)("input",{type:"time",name:"startTime",id:"startTime",value:this.state.startTime,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"endTime",children:" End time: "}),Object(a.jsx)("input",{type:"time",name:"endTime",id:"endTime",value:this.state.endTime,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"maxCapacity",children:" Maximum capacity: "}),Object(a.jsx)("input",{type:"number",name:"maxCapacity",id:"maxCapacity",value:this.state.maxCapacity,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(a.jsx)("input",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"googleLink",children:"Add Google link: "}),Object(a.jsx)("input",{type:"link",name:"googleLink",id:"googleLink",value:this.state.googleLink,onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{hmtlFor:"image",children:"Upload an image: "}),Object(a.jsx)("input",{type:"file",name:"image",id:"image",accept:"image/*"}),Object(a.jsx)("button",{type:"submit",children:" Add your event! "})]})})]})}}]),n}(s.Component),U=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:" Edit your event "}),Object(a.jsxs)("form",{onSubmit:this.props.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"title",children:" Event title: "}),Object(a.jsx)("input",{type:"text",name:"title",id:"title",value:this.props.title,onChange:this.props.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"date",children:"Event date:"}),Object(a.jsx)("input",{type:"date",name:"date",id:"date",value:this.props.date,onChange:this.props.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"startTime ",children:" Start time: "}),Object(a.jsx)("input",{type:"time",name:"startTime",id:"startTime",value:this.props.startTime,onChange:this.props.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"endTime",children:" End time: "}),Object(a.jsx)("input",{type:"time",name:"endTime",id:"endTime",value:this.props.endTime,onChange:this.props.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"maxCapacity",children:" Maximum capacity: "}),Object(a.jsx)("input",{type:"number",name:"maxCapacity",id:"maxCapacity",value:this.props.maxCapacity,onChange:this.props.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(a.jsx)("input",{type:"text",name:"description",id:"description",value:this.props.description,onChange:this.props.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"googleLink",children:"Add Google link: "}),Object(a.jsx)("input",{type:"link",name:"googleLink",id:"googleLink",value:this.props.googleLink,onChange:this.props.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{hmtlFor:"image",children:"Upload an image: "}),Object(a.jsx)("input",{type:"file",name:"image",id:"image",accept:"image/*"}),Object(a.jsx)("button",{type:"submit",children:" Edit your event "})]})]})})}}]),n}(s.Component),A=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={error:null,event:null,title:"",description:"",image:"",googleLink:"",date:"",startTime:"",endTime:"",maxCapacity:"",attending:!1},e.getEventDetails=function(){var t=e.props.match.params.id;O.a.get("/api/events/".concat(t)).then((function(t){var n=t.data;e.setState({event:n,title:t.data.title,description:t.data.description,image:t.data.image,googleLink:t.data.googleLink,date:t.data.date,startTime:t.data.startTime,endTime:t.data.endTime,maxCapacity:t.data.maxCapacity,attending:t.data.attendees.includes(e.props.user._id)})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Sorry - Project Not found \ud83e\udd37\u200d\u2640\ufe0f \ud83e\udd37\u200d\u2642\ufe0f"})}))},e.deleteEvent=function(){var t=e.props.match.params.id;O.a.delete("/api/events/".concat(t)).then((function(){e.props.history.push("/events")}))},e.toggleEditForm=function(){e.setState((function(e){return{editForm:!e.editForm}}))},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(p.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.props.match.params.id;O.a.put("/api/events/".concat(n),{title:e.state.title,description:e.state.description,image:e.state.image,googleLink:e.state.googleLink,date:e.state.date,startTime:e.state.startTime,endTime:e.state.endTime,maxCapacity:e.state.maxCapacity}).then((function(t){e.setState({event:t.data,title:t.data.title,description:t.data.description,image:t.data.image,googleLink:t.data.googleLink,date:t.data.date,maxCapacity:t.data.maxCapacity,startTime:t.data.startTime,endTime:t.data.endTime,editForm:!1}),e.props.history.push("/events")})).catch((function(e){console.log(e)}))},e.joinEvent=function(){var t=e.props.match.params.id;O.a.put("/api/events/join/".concat(t)).then((function(t){console.log(t,"response"),e.setState({attending:!0})})).catch((function(e){return console.log(e)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getEventDetails()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.getEventDetails()}},{key:"render",value:function(){var e=this;return console.log("render",this.state.attending),console.log("attending",this.state.attending),this.state.error?Object(a.jsx)("h1",{children:this.state.error}):this.state.event?Object(a.jsxs)("div",{children:["test! test!",Object(a.jsx)("h1",{children:this.state.event.title}),Object(a.jsx)("p",{children:this.state.event.description}),Object(a.jsxs)("p",{children:["Start ",this.state.event.startTime+"0","  End ",this.state.event.endTime+"0"]}),Object(a.jsxs)("p",{children:["Date: ",this.state.event.date]}),this.props.user._id===this.state.event.owner&&Object(a.jsx)("button",{variant:"danger",onClick:function(){e.deleteEvent()},children:"Delete event"}),this.props.user._id===this.state.event.owner&&Object(a.jsx)("button",{onClick:this.toggleEditForm,children:"Show Edit Form"}),this.props.user&&(this.state.attending?Object(a.jsx)("p",{children:"You are attending this event! "}):Object(a.jsx)("button",{onClick:this.joinEvent,children:" Join event"})),this.state.editForm&&Object(a.jsx)(U,Object(o.a)(Object(o.a)({},this.state),{},{handleChange:this.handleChange,handleSubmit:this.handleSubmit}))]}):Object(a.jsx)("h1",{children:"Loading..."})}}]),n}(s.Component),D=(n(69),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(C,{user:this.state.user,setUser:this.setUser}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",render:function(t){return e.state.user?Object(a.jsx)(L,Object(o.a)({user:e.state.user},t)):Object(a.jsx)(L,{})}}),Object(a.jsx)(u.b,{exact:!0,path:"/signup",render:function(t){return Object(a.jsx)(x,Object(o.a)({setUser:e.setUser},t))}}),Object(a.jsx)(u.b,{exact:!0,path:"/login",render:function(t){return Object(a.jsx)(f,Object(o.a)({setUser:e.setUser},t))}}),Object(a.jsx)(u.b,{exact:!0,path:"/events",render:function(t){return Object(a.jsx)(S,Object(o.a)({setUser:e.setUser},t))}}),Object(a.jsx)(u.b,{exact:!0,path:"/profile",render:function(t){return e.state.user?Object(a.jsx)(T,Object(o.a)({user:e.state.user},t)):Object(a.jsx)(u.a,{to:"/"})}}),Object(a.jsx)(u.b,{exact:!0,path:"/events/:id",render:function(t){return Object(a.jsx)(A,Object(o.a)({user:e.state.user},t))}}),Object(a.jsx)(u.b,{exact:!0,path:"/editevent",component:U}),Object(a.jsx)(u.b,{exact:!0,path:"/addevent",render:function(t){return e.state.user?Object(a.jsx)(N,Object(o.a)({user:e.state.user},t)):Object(a.jsx)(u.a,{to:"/login"})}})]})]})}}]),n}(s.Component));O.a.get("/api/auth/loggedin").then((function(e){var t=e.data;console.log("index.js",t),c.a.render(Object(a.jsx)(b.a,{children:Object(a.jsx)(D,{user:t})}),document.getElementById("root"))}))}},[[70,1,2]]]);
//# sourceMappingURL=main.58472094.chunk.js.map
(this["webpackJsonpdev-portfolio"]=this["webpackJsonpdev-portfolio"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/github.d5c378c5.png"},function(e,t,n){e.exports=n.p+"static/media/email.2c1a7560.png"},function(e,t,n){e.exports=n.p+"static/media/linkedin.9aeaef88.png"},,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/resume.c8e83b86.pdf"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),i=n(6),r=n.n(i),c=(n(17),n(18),n(7)),o=n(28),s=(n(19),n(11)),m=n(4);function d(){return l.a.createElement("span",{style:{color:"#01a500"}},"\u276f\xa0")}function u(){var e=Object(a.useState)([{text:"Type `help` to get list of available commands.",isCommand:!1}]),t=Object(m.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),c=Object(m.a)(r,2),o=c[0],u=c[1];function h(e){var t;switch(e.split(" ")[0]){case"ls":return"lander about experience projects";case"clear":return"";case"help":return"List of available commands:\n==========================\n\nls\nhelp\nintro\ncopyright\nclear\ncd\n";case"intro":return"This is Nikh!l\nThe stupid portfolio is right before you!";case"copyright":return"Copyright \xa9 ".concat((new Date).getFullYear()," | Nikhil Nayak");case"cd":if("cd"===e)return"Error: Must pass a folder name.";var n=e.split(" ")[1];return null===(t=document.getElementById(n))||void 0===t||t.scrollIntoView({behavior:"smooth"}),"";case"":return"";default:return"Not Found: ".concat(e)}}return l.a.createElement("div",{className:"terminal"},l.a.createElement("div",{className:"title-bar"},l.a.createElement("div",{style:{backgroundColor:"#d75a5a",height:16,width:16,borderRadius:10,marginRight:10,cursor:"not-allowed"}}),l.a.createElement("div",{style:{backgroundColor:"#d7c65a",height:16,width:16,borderRadius:10,marginRight:10,cursor:"pointer"},onClick:function(){var e=document.getElementsByClassName("terminal")[0];e.style.transform="translateX(0%)";var t=e.getElementsByClassName("sub-body")[0];t.style.opacity="1",t.style.visibility="visible"}}),l.a.createElement("div",{style:{backgroundColor:"#00a71c",height:16,width:16,borderRadius:10,marginRight:20,cursor:"pointer"},onClick:function(){var e=document.getElementsByClassName("terminal")[0];e.style.transform="translateX(87%)";var t=e.getElementsByClassName("sub-body")[0];t.style.opacity="0",t.style.visibility="hidden"}}),l.a.createElement("div",{style:{width:"1pt",height:"100%",backgroundColor:"grey",marginRight:20}}),l.a.createElement("div",{style:{fontSize:16,fontWeight:600}},"portfolio@nikhil")),l.a.createElement("div",{className:"body",onClick:function(){var e;null===(e=document.getElementById("sh-prompt"))||void 0===e||e.focus()}},l.a.createElement("div",{className:"sub-body"},n.map((function(e,t){return e.text&&l.a.createElement("div",{key:t},e.isCommand&&l.a.createElement(d,null),e.isCommand?e.text:e.text.split("\n").map((function(e,t){return l.a.createElement("p",{key:t,style:{padding:0,margin:1}},e)})))})),l.a.createElement(d,null),l.a.createElement("input",{type:"text",id:"sh-prompt",spellCheck:"false",value:o,onChange:function(e){return u(e.target.value)},onKeyDown:function(e){var t;"Enter"===e.key&&(i("clear"===(t=o)?[]:[].concat(Object(s.a)(n),[{text:t,isCommand:!0},{text:h(t),isCommand:!1}])),u(""))}}))))}n(20);function h(e){var t=e.children,n=e.onClick,a=e.theme;return l.a.createElement("button",{className:0===a?"theme0":"",onClick:n},t)}function p(){return Object(a.useEffect)((function(){Array.from(document.getElementsByClassName("horizontal-line")).forEach((function(e){e.style.width="40px"})),Array.from(document.getElementsByClassName("skill-cell")).forEach((function(e,t){setTimeout((function(){e.style.visibility="visible",e.style.opacity="1"}),200*(t+1))}))})),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",flex:1,width:"100%",height:"100vh",justifyContent:"stretch"}},l.a.createElement("div",{className:"style-box-1"}),l.a.createElement("div",{className:"style-box-2"}),l.a.createElement("div",{className:"landing-container",id:"lander"},l.a.createElement("div",{style:{alignSelf:"flex-start"}},l.a.createElement("h1",null,"NIKHIL ",l.a.createElement("span",{style:{fontWeight:200}},"NAYAK")),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",width:"max-content",alignItems:"center",fontSize:"1.8rem"}},l.a.createElement("hr",{className:"horizontal-line"}),"Full Stack Developer",l.a.createElement("hr",{className:"horizontal-line"}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",width:"420pt",justifyContent:"center"}},l.a.createElement("div",{className:"skill-cell"},"ReactJS"),l.a.createElement("div",{className:"skill-cell"},"Flutter"),l.a.createElement("div",{className:"skill-cell"},"Angular"),l.a.createElement("div",{className:"skill-cell"},"Express"),l.a.createElement("div",{className:"skill-cell"},"Python"),l.a.createElement("div",{className:"skill-cell"},"Mongo"),l.a.createElement("div",{className:"skill-cell"},"Postgresql"),l.a.createElement("div",{className:"skill-cell"},"SpringBoot"),l.a.createElement("div",{className:"skill-cell"},"Firebase"),l.a.createElement("div",{className:"skill-cell"},"TensorFlow")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(h,{theme:0,onClick:function(){window.open(n(21))}},l.a.createElement(c.a,null),"\xa0 Resume"),l.a.createElement("div",{style:{width:40}}),l.a.createElement(h,{theme:0,onClick:function(){window.open("https://github.com/NikhilCodes")}},l.a.createElement(o.a,null),"\xa0 GitHub"))),l.a.createElement(u,null)))}n(22);function f(e){return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(t){var n=document.getElementById(e.id),a=n?n.getBoundingClientRect():{top:0,left:0,bottom:0,right:0};a.top>=0&&a.bottom-20<=(window.innerHeight||document.documentElement.clientHeight)&&Array.from(document.getElementsByClassName("hr-extensible-"+e.id)).forEach((function(e){e.style.width="30px"}))}))})),l.a.createElement("div",{id:e.id,style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center"}},l.a.createElement("div",{className:"ringed-circle",style:{borderColor:e.color}}),l.a.createElement("div",{className:"hr-extensible-"+e.id,style:{height:"3pt",width:0,backgroundColor:e.color,transitionDelay:"100ms",transitionDuration:"400ms",transitionProperty:"width"}}),l.a.createElement("div",{className:"dot",style:{backgroundColor:e.color}}),l.a.createElement("h2",{style:{color:e.color}},e.children),l.a.createElement("div",{className:"dot",style:{backgroundColor:e.color}}),l.a.createElement("div",{className:"hr-extensible-"+e.id,style:{height:"3pt",width:0,backgroundColor:e.color,transitionDelay:"100ms",transitionDuration:"400ms",transitionProperty:"width"}}),l.a.createElement("div",{className:"ringed-circle",style:{borderColor:e.color}}))}n(23);function y(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},l.a.createElement(f,{id:"about",color:"#282c34"},"About"),l.a.createElement("p",{className:"content-body",style:{textAlign:"left",padding:"0 14%"}},"I am an undergraduate student in the Department of computer Science at KIIT University, Bhubaneswar graduating in May 2023.",l.a.createElement("br",null),l.a.createElement("br",null),"Being an Open-Source enthusiast, I have built a lot of full blown projects which need knowledge in Software Development for both PCs and Mobile Devices (Flutter), and have also done many projects related to Web Development and Machine Learning which are listed in GitHub."))}n(24);var g=n(8),E=n.n(g),v=n(9),b=n.n(v),x=n(10),w=n.n(x);function C(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{className:"footer-decorator-top"}),l.a.createElement("div",{className:"footer"},l.a.createElement("div",null,"\xa9 ",(new Date).getFullYear()," Nikhil Nayak. All Rights Reserved"),l.a.createElement("div",null,l.a.createElement("img",{src:E.a,height:"30px"}),l.a.createElement("img",{src:b.a,height:"30px"}),l.a.createElement("img",{src:w.a,height:"30px"}))))}n(25);function N(e){var t=e.url,n=e.theme,a=e.animate;return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:140}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid ".concat(n),borderRadius:"50%",padding:5},className:a&&"rippling-border"},l.a.createElement("img",{alt:"work-exp",src:t,height:"".concat(100+(a?10:0),"px"),width:"".concat(100+(a?10:0),"px"),style:{borderRadius:"50%",border:a?"none":"1pt solid lightgrey",padding:0,margin:0,opacity:"1",objectFit:"contain"}})))}function k(){return l.a.createElement("div",{id:"experience",className:"experience-container",style:{marginTop:60}},l.a.createElement("div",{className:"sub-container"},l.a.createElement(f,{id:"experience",color:"#1c2530"},"Work Experience"),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-end",padding:"60px 0",width:"33.3%",fontWeight:800,color:"grey"}},l.a.createElement("div",null,"Oct 2020 - Present"),l.a.createElement("div",null,"Jan 2020 - Aug 2020"),l.a.createElement("div",null,"Aug 2019 - July 2020")),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"33.3%"}},l.a.createElement("div",{style:{minWidth:"50vw"}}),l.a.createElement(N,{url:"https://i.imgur.com/RaT5wAx.png",theme:"tomato",animate:!0}),l.a.createElement("div",{style:{minWidth:"1px",height:"50px",backgroundColor:"lightgrey"}}),l.a.createElement(N,{url:"https://avatars0.githubusercontent.com/u/63716484",theme:"blue"}),l.a.createElement("div",{style:{minWidth:"1px",height:"50px",backgroundColor:"lightgrey"}}),l.a.createElement(N,{url:"https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2086/859e9317-d715-4a2b-b88e-61cdfd379039.png",theme:"green"}),l.a.createElement("div",{style:{minWidth:"50vw"}})),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start",padding:"55px 0",width:"33.3%",fontWeight:600,color:"#565656",textAlign:"left"}},l.a.createElement("div",null,l.a.createElement("div",{style:{color:"#2d2d2d",fontWeight:700}},"Gigsy LLP"),"SDE Intern"),l.a.createElement("div",null,l.a.createElement("div",{style:{color:"#2d2d2d",fontWeight:700}},"Kide"),"Web & Android Developer"),l.a.createElement("div",null,l.a.createElement("div",{style:{color:"#2d2d2d",fontWeight:700}},"DSC-KIIT"),"Android Developer")))))}var D=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(C,null))},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),i(e),r(e)}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),j()}],[[12,1,2]]]);
//# sourceMappingURL=main.c455f232.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8890)}])},4276:function(e,n,r){"use strict";var a=r(5893),i=r(1664),t=r.n(i),c=r(5934),s=r(1585),l=r.n(s);n.Z=function(e){return(0,a.jsx)("div",{className:l().container,children:(0,a.jsx)("ul",{children:e.items.map((function(n){var r=n.name,i=n.url;return(0,a.jsx)("li",{children:(0,a.jsx)(t(),{href:i,children:(0,a.jsx)("a",{className:e.activeSection===r?l()["navlink--active"]:l().navlink,children:r})})},(0,c.Z)())}))})})}},8890:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return U},default:function(){return P}});var a=r(1799),i=r(603),t=r(5893),c=r(7294),s=r(5675),l=r.n(s),o=r(7650),d=r(9895),_=r.n(d),h=function(e){return(0,t.jsxs)("div",{className:_().container,children:[(0,t.jsx)("div",{className:e.altBG?_().container__background__alt:_().container__background}),(0,t.jsx)("div",{className:_().container__content,children:e.children})]})},u={src:".//_next/static/media/profilepic.b51298b3.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AKqQe7GPeLybhaOIdr+fjM6smXpjVURGRACxj3u/oY2zlIend2qAYlXNrJmJbV5SVlgAzK6czrOhyKif16CQbUM3qI5+lHpsb3N5ANm7qeDEstu0qLSBc35RQ7KQf5J5a4CEigDhw7HjxbTUrKC5lYx8UUPAo5OJc2h3en8A6Me29dK82baptY2IYDw1w6OUkHRlaGxuAO3LvMu7xaymq6mKdl1ZUV5XZ3JlallbXgCfq9VWhc57q7e069t9prIWOnRIb6VMZpS09Gyk1yKppgAAAABJRU5ErkJggg=="},x=r(1664),j=r.n(x),m=r(2190),p=r.n(m),f=r(7509),v=r.n(f),g=function(e){var n=(0,c.createRef)(),r=(0,c.useState)(v().hidden),a=r[0],i=r[1],s=(0,c.useState)(v().active),o=s[0],d=s[1],_=(0,c.useState)(null),h=_[0],u=_[1],x=function(){n.current&&(n.current.currentTime=0,n.current.pause())},j=function(e){e?(i(v().active),d(v().hidden),n.current&&(null!==h&&clearTimeout(h),u(null),n.current.currentTime=0,n.current.play())):(i(v().hidden),d(v().active),n.current&&(h&&clearTimeout(h),u(setTimeout(x,1e3))))};return(0,t.jsxs)("div",{className:v().container,onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:[(0,t.jsx)("video",{ref:n,className:a,width:"200",height:"300",loop:!0,muted:!0,children:(0,t.jsx)("source",{src:e.previewURL,type:"video/mp4"})}),(0,t.jsx)("div",{className:o,children:(0,t.jsx)(l(),{src:e.imageURL,width:"200",height:"300",layout:"fixed",alt:""})})]})},N=r(4989),b=r.n(N),w=function(e){return(0,t.jsxs)("div",{className:b().container,children:[(0,t.jsx)(t.Fragment,{children:e.children}),(0,t.jsx)("span",{className:b().text,children:e.text})]})},k=function(e){return(0,t.jsxs)("div",{className:p().container,children:[(0,t.jsx)(g,{imageURL:e.imageURL,previewURL:e.previewURL}),(0,t.jsxs)("div",{className:p().infocontainer,children:[(0,t.jsx)("h1",{className:p().name,children:e.name}),(0,t.jsx)("p",{className:p().brief,children:e.brief}),(0,t.jsxs)("div",{className:p().btncontainer,children:[e.demoURL?(0,t.jsx)("span",{className:p().demolink__wrapper,children:(0,t.jsx)(w,{text:"Play live demo",children:(0,t.jsx)(j(),{href:e.demoURL,children:(0,t.jsx)("a",{className:p().projectlink,children:(0,t.jsx)(l(),{src:"/images/gamepad.svg",layout:"fill",alt:""})})})})}):null,e.srcURL?(0,t.jsx)(w,{text:"See source code",children:(0,t.jsx)("a",{className:p().projectlink,href:e.srcURL,target:"_blank",rel:"noreferrer",children:(0,t.jsx)(l(),{src:"/images/github.svg",layout:"fill",alt:""})})}):null]})]})]})},A=r(4276),y=r(54),C=r.n(y),R=function(e){return(0,t.jsx)("div",{className:e.whiteBG?C().container__white:C().container,children:(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:(0,t.jsx)("div",{className:C().imagewrapper,children:(0,t.jsx)(l(),{src:e.imageURL,layout:"fill",alt:e.name?e.name:""})})})})},U=!0,P=function(e){var n=(0,c.useState)("home"),r=n[0],s=n[1],d=(0,i.Z)((0,o.YD)({initialInView:!0,threshold:.8}),2),_=d[0],x=d[1],j=(0,i.Z)((0,o.YD)({threshold:.8}),2),m=j[0],p=j[1],f=(0,i.Z)((0,o.YD)({threshold:.8}),2),v=f[0],g=f[1],N=(0,i.Z)((0,o.YD)({threshold:.8}),2),b=N[0],w=N[1];return(0,c.useEffect)((function(){var n={home:x,skills:p,projects:g,contact:w},a=null,i=!0,t=!1,c=void 0;try{for(var l,o=e.navItems[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){var d=l.value;n[d.name]&&(a=d)}}catch(_){t=!0,c=_}finally{try{i||null==o.return||o.return()}finally{if(t)throw c}}a&&a.name!=r&&s(a.name)}),[x,p,g,w]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("header",{children:(0,t.jsx)("nav",{children:(0,t.jsx)(A.Z,{items:e.navItems,activeSection:r})})}),(0,t.jsx)("section",{id:"home",ref:_,children:(0,t.jsx)(h,{children:(0,t.jsxs)("div",{className:"hccontainer",children:[(0,t.jsxs)("div",{className:"hcctext",children:[(0,t.jsx)("h1",{className:"heading1",children:"Brandon Phillips"}),(0,t.jsx)("h2",{children:"Software developer by day, hobby artist by night."}),(0,t.jsx)("p",{children:"Welcome to my website. Keep scrolling to see a list of my skills, some personal projects, and how to contact me."})]}),(0,t.jsx)("div",{className:"profilepic__wrapper",children:(0,t.jsx)(l(),{className:"profilepic",src:u,placeholder:"blur",alt:"portrait photo of Brandon Phillips"})})]})})}),(0,t.jsx)("section",{id:"skills",ref:m,children:(0,t.jsx)(h,{altBG:!0,children:(0,t.jsxs)("div",{className:"sccontainer",children:[(0,t.jsxs)("div",{className:"sctext",children:[(0,t.jsx)("h1",{className:"heading1__alt",children:"Skills"}),(0,t.jsx)("p",{children:"Below is a list of programming languages, frameworks, and environments I have experience with."})]}),(0,t.jsx)("ul",{className:"skillslist",children:e.skills.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(R,(0,a.Z)({},e))},e.key)}))})]})})}),(0,t.jsx)("section",{id:"projects",ref:v,children:(0,t.jsx)(h,{children:(0,t.jsxs)("div",{className:"pccontainer",children:[(0,t.jsxs)("div",{className:"pctext",children:[(0,t.jsx)("h1",{className:"heading1",children:"Projects"}),(0,t.jsx)("p",{children:"Here are some personal projects of mine."})]}),(0,t.jsx)("ul",{className:"projectslist",children:e.projects.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(k,(0,a.Z)({},e))},e.key)}))})]})})}),(0,t.jsx)("section",{id:"contact",ref:b,children:(0,t.jsx)(h,{altBG:!0,children:(0,t.jsxs)("div",{className:"cccontainer",children:[(0,t.jsxs)("div",{className:"cctext",children:[(0,t.jsx)("h1",{className:"heading1__alt",children:"Contact"}),(0,t.jsx)("p",{children:"Here are my socials if you want to get in touch!"})]}),(0,t.jsx)("ul",{className:"contactlist",children:e.contacts.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(R,(0,a.Z)({},e))},e.key)}))})]})})}),(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsx)("p",{children:"\xa9 2022 Brandon Phillips"}),(0,t.jsx)("p",{children:"Website wallpaper by John Towner on Unsplash "})]})]})}},9895:function(e){e.exports={container:"ContentCard_container__0QClV",container__content:"ContentCard_container__content___AWwY",container__background:"ContentCard_container__background__G0L8_",container__background__alt:"ContentCard_container__background__alt__mEqxC",container__dropshadow:"ContentCard_container__dropshadow___EA3a",container__dropshadow__alt:"ContentCard_container__dropshadow__alt__2EQyG"}},1585:function(e){e.exports={container:"Navbar_container__rxFeS",navlink:"Navbar_navlink__w4k_R","navlink--active":"Navbar_navlink--active__VtV_1"}},2190:function(e){e.exports={container:"ProjectCard_container__Obd_P",btncontainer:"ProjectCard_btncontainer__7q0Xu",infocontainer:"ProjectCard_infocontainer__IAxTH",name:"ProjectCard_name__kRpSX",brief:"ProjectCard_brief__a4SiB",projectlink:"ProjectCard_projectlink__C2UY7",demolink__wrapper:"ProjectCard_demolink__wrapper__1gLIj"}},7509:function(e){e.exports={container:"ProjectCardDisplay_container__lM612",active:"ProjectCardDisplay_active__R3ZNb",hidden:"ProjectCardDisplay_hidden__2zDhH",fadein:"ProjectCardDisplay_fadein__KaoxR",fadeout:"ProjectCardDisplay_fadeout__rkzxh"}},54:function(e){e.exports={container:"SkillIcon_container__DAzbI",container__white:"SkillIcon_container__white__45Xyg",imagewrapper:"SkillIcon_imagewrapper__PiQw1"}},4989:function(e){e.exports={container:"ToolTip_container__KvW16",text:"ToolTip_text__iA9Jo"}}},function(e){e.O(0,[412,178,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
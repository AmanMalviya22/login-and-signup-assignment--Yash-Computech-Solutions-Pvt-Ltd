(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},160:function(e,t,n){},164:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(27),s=n.n(c),o=(n(131),n(132),n(7)),i=(n(133),n(25)),l=n(10),u=n(278),j=n(279),d=n(118),p=function(){return Object(a.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(d.a,{className:"text-center py-3",children:"Copyright \xa9 Aman Malviya"})})})})},b=n(284),h=n(286),O=n(282),f=n(8),x=n(11),g=n.n(x),m=n(22),v="USER_LOGIN_REQUEST",y="USER_LOGIN_SUCCESS",S="USER_LOGIN_FAIL",E="USER_LOGOUT",C="USER_REGISTER_REQUEST",I="USER_REGISTER_SUCCESS",w="USER_REGISTER_FAIL",L="USER_UPDATE_REQUEST",N="USER_UPDATE_SUCCESS",T="USER_UPDATE_FAIL",_=n(26),U=n.n(_);var P=function(e){e.setSearch;var t=Object(f.b)(),n=Object(f.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){}),[n]),Object(a.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsx)(h.a,{className:"mr-auto"}),Object(a.jsx)(h.a,{className:"ml-auto",children:n?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(O.a,{title:"".concat(n.name),id:"collasible-nav-dropdown ",children:[Object(a.jsxs)(O.a.Item,{href:"/profile",children:[Object(a.jsx)("img",{alt:"",src:"".concat(n.pic),width:"25",height:"25",style:{marginRight:10}}),"My Profile"]}),Object(a.jsx)(O.a.Divider,{}),Object(a.jsx)(O.a.Item,{onClick:function(){t(function(){var e=Object(m.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:E});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})}):Object(a.jsx)(h.a.Link,{href:"/login",children:"Login"})})]})]})})},k=n(123);n(160);var R=function(e){var t=e.history,n=Object(f.c)((function(e){return e.userLogin})).userInfo;return Object(r.useEffect)((function(){n&&t.push("/mynotes")}),[t,n]),Object(a.jsx)("div",{className:"main",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)("div",{className:"intro-text",children:Object(a.jsxs)("div",{className:"buttonContainer",children:[Object(a.jsx)(i.b,{to:"/login",children:Object(a.jsx)(k.a,{size:"lg",className:"landingbutton",children:"Login"})}),Object(a.jsx)(i.b,{to:"/register",children:Object(a.jsx)(k.a,{variant:"outline-primary",size:"lg",className:"landingbutton",children:"Signup"})})]})})})})})},A=n(285),G=n(288),D=n(281);n(164);var F=function(e){var t=e.children,n=e.title;return Object(a.jsx)("div",{className:"mainback",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"page",children:[n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"heading",children:n}),Object(a.jsx)("hr",{})]}),t]})})})})},B=n(43),z=n.n(B),H="NOTES_LIST_REQUEST",Q="NOTES_LIST_SUCCESS",J="NOTES_LIST_FAIL",M="NOTES_CREATE_REQUEST",q="NOTES_CREATE_SUCCESS",K="NOTES_CREATE_FAIL",W="NOTES_UPDATE_REQUEST",V="NOTES_UPDATE_SUCCESS",X="NOTES_UPDATE_FAIL",Y="NOTES_DELETE_REQUEST",Z="NOTES_DELETE_SUCCESS",$="NOTES_DELETE_FAIL",ee=function(e){return function(){var t=Object(m.a)(g.a.mark((function t(n,a){var r,c,s,o,i,l;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:Y}),r=a(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,U.a.delete("/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,n({type:Z,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,n({type:$,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},te=n(280);var ne=function(e){var t=e.size,n=void 0===t?100:t;return Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(a.jsx)(te.a,{style:{width:n,height:n},animation:"border"})})},ae=n(287),re=function(e){var t=e.variant,n=void 0===t?"info":t,r=e.children;return Object(a.jsx)(ae.a,{variant:n,style:{fontSize:20},children:Object(a.jsx)("strong",{children:r})})};var ce=function(e){var t=e.history,n=e.search,c=Object(f.b)(),s=Object(f.c)((function(e){return e.noteList})),o=s.loading,i=s.error,l=s.notes,u=Object(f.c)((function(e){return e.userLogin})).userInfo,j=Object(f.c)((function(e){return e.noteDelete})),d=j.loading,p=j.error,b=j.success,h=Object(f.c)((function(e){return e.noteCreate})).success,O=Object(f.c)((function(e){return e.noteUpdate})).success;return Object(r.useEffect)((function(){c(function(){var e=Object(m.a)(g.a.mark((function e(t,n){var a,r,c,s,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:H}),a=n(),r=a.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,U.a.get("/api/notes",c);case 6:s=e.sent,o=s.data,t({type:Q,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:J,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),u||t.push("/")}),[c,t,u,b,h,O]),Object(a.jsxs)(F,{title:"Welcome Back ".concat(u&&u.name,".."),children:[console.log(l),i&&Object(a.jsx)(re,{variant:"danger",children:i}),p&&Object(a.jsx)(re,{variant:"danger",children:p}),o&&Object(a.jsx)(ne,{}),d&&Object(a.jsx)(ne,{}),l&&l.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).reverse().map((function(e){return Object(a.jsx)(A.a,{children:Object(a.jsxs)(G.a,{style:{margin:10},children:[Object(a.jsxs)(G.a.Header,{style:{display:"flex"},children:[Object(a.jsx)("span",{style:{color:"black",textDecoration:"none",flex:1,cursor:"pointer",alignSelf:"center",fontSize:18},children:Object(a.jsx)(A.a.Toggle,{as:G.a.Text,variant:"link",eventKey:"0",children:e.title})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(k.a,{href:"/note/".concat(e._id),children:"Edit"}),Object(a.jsx)(k.a,{variant:"danger",className:"mx-2",onClick:function(){return t=e._id,void(window.confirm("Are you sure?")&&c(ee(t)));var t},children:"Delete"})]})]}),Object(a.jsx)(A.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(G.a.Body,{children:[Object(a.jsx)("h4",{children:Object(a.jsxs)(D.a,{variant:"success",children:["Category - ",e.category]})}),Object(a.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(a.jsx)(z.a,{children:e.content}),Object(a.jsxs)("footer",{className:"blockquote-footer",children:["Created on"," ",Object(a.jsx)("cite",{title:"Source Title",children:e.createdAt.substring(0,10)})]})]})]})})]},e._id)})}))]})},se=n(283);var oe=function(e){var t=e.match,n=e.history,c=Object(r.useState)(),s=Object(o.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(),j=Object(o.a)(u,2),d=j[0],p=j[1],b=Object(r.useState)(),h=Object(o.a)(b,2),O=h[0],x=h[1],v=Object(r.useState)(""),y=Object(o.a)(v,2),S=y[0],E=y[1],C=Object(f.b)(),I=Object(f.c)((function(e){return e.noteUpdate})),w=I.loading,L=I.error,N=Object(f.c)((function(e){return e.noteDelete})),T=N.loading,_=N.error;return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(g.a.mark((function e(){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("/api/notes/".concat(t.params.id));case 2:n=e.sent,a=n.data,l(a.title),p(a.content),x(a.category),E(a.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id,S]),Object(a.jsx)(F,{title:"Edit Note",children:Object(a.jsxs)(G.a,{children:[Object(a.jsx)(G.a.Header,{children:"Edit your Note"}),Object(a.jsx)(G.a.Body,{children:Object(a.jsxs)(se.a,{onSubmit:function(e){e.preventDefault(),C(function(e,t,n,a){return function(){var r=Object(m.a)(g.a.mark((function r(c,s){var o,i,l,u,j,d;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:W}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,U.a.put("/api/notes/".concat(e),{title:t,content:n,category:a},l);case 6:u=r.sent,j=u.data,c({type:V,payload:j}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),d=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:X,payload:d});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.params.id,i,d,O)),i&&d&&O&&(l(""),x(""),p(""),n.push("/mynotes"))},children:[T&&Object(a.jsx)(ne,{}),L&&Object(a.jsx)(re,{variant:"danger",children:L}),_&&Object(a.jsx)(re,{variant:"danger",children:_}),Object(a.jsxs)(se.a.Group,{controlId:"title",children:[Object(a.jsx)(se.a.Label,{children:"Title"}),Object(a.jsx)(se.a.Control,{type:"title",placeholder:"Enter the title",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"content",children:[Object(a.jsx)(se.a.Label,{children:"Content"}),Object(a.jsx)(se.a.Control,{as:"textarea",placeholder:"Enter the content",rows:4,value:d,onChange:function(e){return p(e.target.value)}})]}),d&&Object(a.jsxs)(G.a,{children:[Object(a.jsx)(G.a.Header,{children:"Note Preview"}),Object(a.jsx)(G.a.Body,{children:Object(a.jsx)(z.a,{children:d})})]}),Object(a.jsxs)(se.a.Group,{controlId:"content",children:[Object(a.jsx)(se.a.Label,{children:"Category"}),Object(a.jsx)(se.a.Control,{type:"content",placeholder:"Enter the Category",value:O,onChange:function(e){return x(e.target.value)}})]}),w&&Object(a.jsx)(ne,{size:50}),Object(a.jsx)(k.a,{variant:"primary",type:"submit",children:"Update Note"}),Object(a.jsx)(k.a,{className:"mx-2",variant:"danger",onClick:function(){return e=t.params.id,window.confirm("Are you sure?")&&C(ee(e)),void n.push("/mynotes");var e},children:"Delete Note"})]})}),Object(a.jsxs)(G.a.Footer,{className:"text-muted",children:["Updated on - ",S.substring(0,10)]})]})})};n(270);var ie=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],l=c[1],u=Object(r.useState)(""),p=Object(o.a)(u,2),b=p[0],h=p[1],O=Object(f.b)(),x=Object(f.c)((function(e){return e.userLogin})),E=x.loading,C=x.error,I=x.userInfo;return Object(r.useEffect)((function(){I&&t.push("/mynotes")}),[t,I]),Object(a.jsx)(F,{title:"LOGIN",children:Object(a.jsxs)("div",{className:"loginContainer",children:[C&&Object(a.jsx)(re,{variant:"danger",children:C}),E&&Object(a.jsx)(ne,{}),Object(a.jsxs)(se.a,{onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var n=Object(m.a)(g.a.mark((function n(a){var r,c,s;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:v}),r={headers:{"Content-type":"application/json"}},n.next=5,U.a.post("/api/users/login",{email:e,password:t},r);case 5:c=n.sent,s=c.data,a({type:y,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:S,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(s,b))},children:[Object(a.jsxs)(se.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(se.a.Label,{children:"Email address"}),Object(a.jsx)(se.a.Control,{type:"email",value:s,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(se.a.Label,{children:"Password"}),Object(a.jsx)(se.a.Control,{type:"password",value:b,placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(a.jsx)(k.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(a.jsx)(j.a,{className:"py-3",children:Object(a.jsxs)(d.a,{children:["New Customer ? ",Object(a.jsx)(i.b,{to:"/register",children:"Register Here"})]})})]})})};n(271);var le=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],l=c[1],u=Object(r.useState)(""),p=Object(o.a)(u,2),b=p[0],h=p[1],O=Object(r.useState)(""),x=Object(o.a)(O,2),v=x[0],S=x[1],E=Object(r.useState)(""),L=Object(o.a)(E,2),N=L[0],T=L[1],_=Object(r.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),P=Object(o.a)(_,2),R=P[0],A=P[1],G=Object(r.useState)(""),D=Object(o.a)(G,2),B=D[0],z=D[1],H=Object(r.useState)(""),Q=Object(o.a)(H,2),J=Q[0],M=Q[1],q=Object(r.useState)(null),K=Object(o.a)(q,2),W=K[0],V=K[1],X=Object(r.useState)(null),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1],ee=Object(f.b)(),te=Object(f.c)((function(e){return e.userRegister})),ae=te.loading,ce=te.error,oe=te.userInfo;return Object(r.useEffect)((function(){oe&&t.push("/")}),[t,oe]),Object(a.jsx)(F,{title:"REGISTER",children:Object(a.jsxs)("div",{className:"loginContainer",children:[ce&&Object(a.jsx)(re,{variant:"danger",children:ce}),W&&Object(a.jsx)(re,{variant:"danger",children:W}),ae&&Object(a.jsx)(ne,{}),Object(a.jsxs)(se.a,{onSubmit:function(e){e.preventDefault(),B!==J?V("Passwords do not match"):ee(function(e,t,n,a,r,c){return function(){var s=Object(m.a)(g.a.mark((function s(o){var i,l,u;return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,o({type:C}),i={headers:{"Content-type":"application/json"}},s.next=5,U.a.post("/api/users",{name:e,pic:c,email:t,mobile:n,address:a,password:r},i);case 5:l=s.sent,u=l.data,o({type:I,payload:u}),o({type:y,payload:u}),localStorage.setItem("userInfo",JSON.stringify(u)),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),o({type:w,payload:s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message});case 15:case"end":return s.stop()}}),s,null,[[0,12]])})));return function(e){return s.apply(this,arguments)}}()}(b,s,v,N,B,R))},children:[Object(a.jsxs)(se.a.Group,{controlId:"name",children:[Object(a.jsx)(se.a.Label,{children:"Name"}),Object(a.jsx)(se.a.Control,{type:"name",value:b,placeholder:"Enter name",onChange:function(e){return h(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(se.a.Label,{children:"Email address"}),Object(a.jsx)(se.a.Control,{type:"email",value:s,placeholder:"Enter email",onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"formBasicNumber",children:[Object(a.jsx)(se.a.Label,{children:"Mobile Number"}),Object(a.jsx)(se.a.Control,{type:"number",value:v,placeholder:"Enter number",onChange:function(e){return S(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"formBasicAddress",children:[Object(a.jsx)(se.a.Label,{children:"Address"}),Object(a.jsx)(se.a.Control,{type:"address",value:N,placeholder:"Enter address",onChange:function(e){return T(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(se.a.Label,{children:"Password"}),Object(a.jsx)(se.a.Control,{type:"password",value:B,placeholder:"Password",onChange:function(e){return z(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(se.a.Label,{children:"Confirm Password"}),Object(a.jsx)(se.a.Control,{type:"password",value:J,placeholder:"Confirm Password",onChange:function(e){return M(e.target.value)}})]}),Z&&Object(a.jsx)(re,{variant:"danger",children:Z}),Object(a.jsxs)(se.a.Group,{controlId:"pic",children:[Object(a.jsx)(se.a.Label,{children:"Profile Picture"}),Object(a.jsx)(se.a.File,{onChange:function(e){return function(e){if("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"===e)return $("Please Select an Image");if($(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return $("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){A(e.url.toString())})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(a.jsx)(k.a,{variant:"primary",type:"submit",children:"Register"})]}),Object(a.jsx)(j.a,{className:"py-3",children:Object(a.jsxs)(d.a,{children:["Have an Account ? ",Object(a.jsx)(i.b,{to:"/login",children:"Login"})]})})]})})};var ue=function(e){var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),u=Object(o.a)(l,2),j=u[0],d=u[1],p=Object(r.useState)(""),b=Object(o.a)(p,2),h=b[0],O=b[1],x=Object(f.b)(),v=Object(f.c)((function(e){return e.noteCreate})),y=v.loading,S=v.error,E=v.note;console.log(E);var C=function(){i(""),O(""),d("")};return Object(r.useEffect)((function(){}),[]),Object(a.jsx)(F,{title:"Create a Note",children:Object(a.jsxs)(G.a,{children:[Object(a.jsx)(G.a.Header,{children:"Create a new Note"}),Object(a.jsx)(G.a.Body,{children:Object(a.jsxs)(se.a,{onSubmit:function(e){e.preventDefault(),x(function(e,t,n){return function(){var a=Object(m.a)(g.a.mark((function a(r,c){var s,o,i,l,u,j;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:M}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},a.next=6,U.a.post("/api/notes/create",{title:e,content:t,category:n},i);case 6:l=a.sent,u=l.data,r({type:q,payload:u}),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),j=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,r({type:K,payload:j});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(s,j,h)),s&&j&&h&&(C(),t.push("/mynotes"))},children:[S&&Object(a.jsx)(re,{variant:"danger",children:S}),Object(a.jsxs)(se.a.Group,{controlId:"title",children:[Object(a.jsx)(se.a.Label,{children:"Title"}),Object(a.jsx)(se.a.Control,{type:"title",value:s,placeholder:"Enter the title",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"content",children:[Object(a.jsx)(se.a.Label,{children:"Content"}),Object(a.jsx)(se.a.Control,{as:"textarea",value:j,placeholder:"Enter the content",rows:4,onChange:function(e){return d(e.target.value)}})]}),j&&Object(a.jsxs)(G.a,{children:[Object(a.jsx)(G.a.Header,{children:"Note Preview"}),Object(a.jsx)(G.a.Body,{children:Object(a.jsx)(z.a,{children:j})})]}),Object(a.jsxs)(se.a.Group,{controlId:"content",children:[Object(a.jsx)(se.a.Label,{children:"Category"}),Object(a.jsx)(se.a.Control,{type:"content",value:h,placeholder:"Enter the Category",onChange:function(e){return O(e.target.value)}})]}),y&&Object(a.jsx)(ne,{size:50}),Object(a.jsx)(k.a,{type:"submit",variant:"primary",children:"Create Note"}),Object(a.jsx)(k.a,{className:"mx-2",onClick:C,variant:"danger",children:"Reset Feilds"})]})}),Object(a.jsxs)(G.a.Footer,{className:"text-muted",children:["Creating on - ",(new Date).toLocaleDateString()]})]})})},je=(n(272),function(e){e.location;var t=e.history,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)(""),u=Object(o.a)(l,2),p=u[0],b=u[1],h=Object(r.useState)(""),O=Object(o.a)(h,2),x=O[0],v=O[1],S=Object(r.useState)(""),E=Object(o.a)(S,2),C=E[0],I=E[1],w=Object(r.useState)(),_=Object(o.a)(w,2),P=_[0],R=_[1],A=Object(r.useState)(""),G=Object(o.a)(A,2),D=G[0],B=G[1],z=Object(r.useState)(""),H=Object(o.a)(z,2),Q=H[0],J=H[1],M=Object(r.useState)(),q=Object(o.a)(M,2),K=q[0],W=q[1],V=Object(f.b)(),X=Object(f.c)((function(e){return e.userLogin})).userInfo,Y=Object(f.c)((function(e){return e.userUpdate})),Z=Y.loading,$=Y.error,ee=Y.success;Object(r.useEffect)((function(){X?(i(X.name),b(X.email),v(X.mobile),I(X.address),R(X.pic)):t.push("/")}),[t,X]);return Object(a.jsx)(F,{title:"EDIT PROFILE",children:Object(a.jsx)("div",{children:Object(a.jsxs)(j.a,{className:"profileContainer",children:[Object(a.jsx)(d.a,{md:6,children:Object(a.jsxs)(se.a,{onSubmit:function(e){var t;e.preventDefault(),V((t={name:s,email:p,password:D,pic:P},function(){var e=Object(m.a)(g.a.mark((function e(n,a){var r,c,s,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:L}),r=a(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,U.a.post("/api/users/profile",t,s);case 6:o=e.sent,i=o.data,n({type:N,payload:i}),n({type:y,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:T,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:[Z&&Object(a.jsx)(ne,{}),ee&&Object(a.jsx)(re,{variant:"success",children:"Updated Successfully"}),$&&Object(a.jsx)(re,{variant:"danger",children:$}),Object(a.jsxs)(se.a.Group,{controlId:"name",children:[Object(a.jsx)(se.a.Label,{children:"Name"}),Object(a.jsx)(se.a.Control,{type:"text",placeholder:"Enter Name",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"email",children:[Object(a.jsx)(se.a.Label,{children:"Email Address"}),Object(a.jsx)(se.a.Control,{type:"email",placeholder:"Enter Email",value:p,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"mobile",children:[Object(a.jsx)(se.a.Label,{children:"mobile Number"}),Object(a.jsx)(se.a.Control,{type:"number",placeholder:"Enter number",value:x,onChange:function(e){return v(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"address",children:[Object(a.jsx)(se.a.Label,{children:"Address"}),Object(a.jsx)(se.a.Control,{type:"address",placeholder:"Enter address",value:C,onChange:function(e){return I(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"password",children:[Object(a.jsx)(se.a.Label,{children:"Password"}),Object(a.jsx)(se.a.Control,{type:"password",placeholder:"Enter Password",value:D,onChange:function(e){return B(e.target.value)}})]}),Object(a.jsxs)(se.a.Group,{controlId:"confirmPassword",children:[Object(a.jsx)(se.a.Label,{children:"Confirm Password"}),Object(a.jsx)(se.a.Control,{type:"password",placeholder:"Confirm Password",value:Q,onChange:function(e){return J(e.target.value)}})]})," ",K&&Object(a.jsx)(re,{variant:"danger",children:K}),Object(a.jsxs)(se.a.Group,{controlId:"pic",children:[Object(a.jsx)(se.a.Label,{children:"Change Profile Picture"}),Object(a.jsx)(se.a.File,{onChange:function(e){return function(e){if(W(null),"image/jpeg"!==e.type&&"image/png"!==e.type)return W("Please Select an Image");var t=new FormData;t.append("file",e),t.append("upload_preset","notezipper"),t.append("cloud_name","piyushproj"),fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload",{method:"post",body:t}).then((function(e){return e.json()})).then((function(e){R(e.url.toString()),console.log(P)})).catch((function(e){console.log(e)}))}(e.target.files[0])},id:"custom-file",type:"image/png",label:"Upload Profile Picture",custom:!0})]}),Object(a.jsx)(k.a,{type:"submit",varient:"primary",children:"Update"})]})}),Object(a.jsx)(d.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(a.jsx)("img",{src:P,alt:s,className:"profilePic"})})]})})})});var de=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(P,{setSearch:function(e){return c(e)}}),Object(a.jsxs)("main",{className:"App",children:[Object(a.jsx)(l.a,{path:"/",component:R,exact:!0}),Object(a.jsx)(l.a,{path:"/login",component:ie}),Object(a.jsx)(l.a,{path:"/register",component:le}),Object(a.jsx)(l.a,{path:"/mynotes",component:function(e){var t=e.history;return Object(a.jsx)(ce,{search:n,history:t})}}),Object(a.jsx)(l.a,{path:"/note/:id",component:oe}),Object(a.jsx)(l.a,{path:"/createnote",component:ue}),";",Object(a.jsx)(l.a,{path:"/profile",component:je})]}),Object(a.jsx)(p,{})]})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},be=n(38),he=n(124),Oe=n(125),fe=Object(be.combineReducers)({noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{loading:!0};case Q:return{loading:!1,notes:t.payload};case J:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case y:return{loading:!1,userInfo:t.payload};case S:return{loading:!1,error:t.payload};case E:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case I:return{loading:!1,userInfo:t.payload};case w:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case q:return{loading:!1,success:!0};case K:return{loading:!1,error:t.payload};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case Z:return{loading:!1,success:!0};case $:return{loading:!1,error:t.payload,success:!1};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{loading:!0};case V:return{loading:!1,success:!0};case X:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loading:!0};case N:return{loading:!1,userInfo:t.payload,success:!0};case T:return{loading:!1,error:t.payload,success:!1};default:return e}}}),xe={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ge=[he.a],me=Object(be.createStore)(fe,xe,Object(Oe.composeWithDevTools)(be.applyMiddleware.apply(void 0,ge)));s.a.render(Object(a.jsx)(f.a,{store:me,children:Object(a.jsx)(de,{})}),document.getElementById("root")),pe()}},[[273,1,2]]]);
//# sourceMappingURL=main.472d9404.chunk.js.map
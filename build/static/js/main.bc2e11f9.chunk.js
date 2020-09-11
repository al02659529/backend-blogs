(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=a(12),s=a(7),i=a.n(s),u=a(14),m=a(11),p=a(17),g=a.n(p),d="http://localhost:3003/api/blogs",f=null,v={getAll:function(){return g.a.get(d).then((function(e){return e.data}))},setToken:function(e){f="bearer ".concat(e)},create:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:f}},e.next=3,g.a.post(d,t,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUserBlogs:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:f}},e.next=3,g.a.get(d,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:f}},e.next=3,g.a.delete("".concat(d+"/"+t),a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateBlog:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:f}},e.next=3,g.a.patch(d+"/"+t.id,t,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h={login:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("http://localhost:3003/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=(a(92),a(137)),E=a(35),w=a(146),y=a(136),k=a(147),x=(a(93),{registerUser:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("http://localhost:3003/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});function j(e){return r.a.createElement(k.a,Object.assign({elevation:6,variant:"filled"},e))}var O=function(e){var t=e.setPage,a=e.setUser,n=e.setBlogs,l=e.setError,o=e.error,c=function(){var e=Object(u.a)(i.a.mark((function e(t){var r,o,c,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.name.value,o=t.target.username.value,c=t.target.password.value,s={name:r,username:o,password:c},console.log(s),e.prev=6,e.next=9,x.registerUser(s);case 9:return e.sent,e.next=12,h.login({username:o,password:c});case 12:u=e.sent,a(u),v.setToken(u.token),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(u)),v.getUserBlogs().then((function(e){return n(e)})).catch((function(e){console.log("error fetching blogs: ",e)})),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(6),l(e.t0.response.data.error),setTimeout((function(){l(null)}),6e3);case 23:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"nav"},r.a.createElement(y.a,{size:"small",onClick:function(){t("login")},variant:"contained",color:"secondary"},"Go back to Login page")),r.a.createElement("form",{onSubmit:c},r.a.createElement("div",{className:"input_group"},r.a.createElement("label",{htmlFor:"Password"},"Name"),r.a.createElement("input",{placeholder:"John Doe",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"input_group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{placeholder:"3-15 characters",type:"text",id:"username"})),r.a.createElement("div",{className:"input_group"},r.a.createElement("label",{htmlFor:"Password"},"Password"),r.a.createElement("input",{placeholder:"Must be a secure password",type:"password",id:"password"})),r.a.createElement(y.a,{size:"small",type:"submit",variant:"contained",color:"primary"},"Register")),null!==o?r.a.createElement("div",{className:"alertWrapper"},r.a.createElement(j,{severity:"error"},o)):r.a.createElement("span",null))};function N(e){return r.a.createElement(k.a,Object.assign({elevation:6,variant:"filled"},e))}var B=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Not a user? ",r.a.createElement("button",{onClick:function(){e.setPage("register")},style:{display:"inline-block"}},"Register here")))},C=function(e){var t=e.setError,a=e.setBlogs,n=e.setUser,l=e.username,o=e.password,c=e.setUsername,s=e.setPassword,i=e.handleLogin,u=e.error,p=r.a.useState("login"),g=Object(m.a)(p,2),d=g[0],f=g[1];return r.a.createElement(r.a.Fragment,null,"login"===d?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(E.a,{paragraph:!0,align:"center",variant:"h3",color:"primary"},"Bloggie"),r.a.createElement(b.a,null,r.a.createElement("form",{id:"loginForm",onSubmit:i},r.a.createElement(w.a,{value:l,onChange:function(e){var t=e.target;return c(t.value)},size:"small",label:"username",variant:"outlined",required:!0}),r.a.createElement(w.a,{value:o,onChange:function(e){var t=e.target;return s(t.value)},size:"small",type:"password",label:"password",variant:"outlined",required:!0}),r.a.createElement(y.a,{size:"small",type:"submit",variant:"contained",color:"primary"},"Login"),r.a.createElement(B,{setPage:f}),null!==u?r.a.createElement(N,{severity:"error"},u):r.a.createElement("span",null))))):r.a.createElement(O,{setPage:f,setUser:n,setBlogs:a,error:u,setError:t}))},S=a(16),U=a(138),z=a(139),A=a(141),F=a(140),L=a(60),P=a.n(L),_=a(57),T=a.n(_),I=a(59),R=a.n(I),G=a(58),J=a.n(G),D=Object(U.a)({root:{minWidth:275,maxWidth:100,position:"relative"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},header:{backgroundColor:"#1693BB",color:"white",fontSize:"1rem !important",minHeight:"5rem",textAlign:"center"},content:{position:"relative"},pos:{marginBottom:12},action:{backgroundColor:"#B03972",position:"relative",justifyContent:"center","&:hover":{cursor:"pointer",backgroundColor:"hsla(331, 51%, 46%, 0.84)"},"&:active":{backgroundColor:"hsla(331, 51%, 43%, 0.91)"}},button:{color:"white",marginRight:"6px"},spanLink:{position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:500},expandIconContainer:{position:"absolute",top:0,left:5,"&:hover":{cursor:"pointer",color:"white"}},deleteIconContainer:{position:"absolute",top:0,right:0,"&:hover":{cursor:"pointer",color:"#ce054d"},"&:active":{color:"red"},"&:focus":{color:"white"}}}),W=function(e){var t=e.blog,a=e.blogs,n=e.updateBlogs,l=e.index,o=D(),c=r.a.useState(!1),s=Object(m.a)(c,2),p=s[0],g=s[1],d=function(){var e=Object(u.a)(i.a.mark((function e(){var r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.filter((function(e){return e.id!==t.id})),e.next=3,v.deleteBlog(t.id);case 3:return l=e.sent,n(r),e.abrupt("return",l);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){g(!p)},h=function(){var e=Object(u.a)(i.a.mark((function e(){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.updateBlog(t);case 2:return a=e.sent,e.next=5,v.getUserBlogs();case 5:return r=e.sent,n(r),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"card"},r.a.createElement(z.a,{className:o.root,variant:"outlined"},r.a.createElement(F.a,{className:o.header,titleTypographyProps:{variant:"subtitle1"},title:t.title,subheader:"by "+t.author}),!1===p?r.a.createElement("div",{onClick:f,className:o.expandIconContainer},r.a.createElement(T.a,{style:{color:"inherit"}})):r.a.createElement("div",{onClick:f,className:o.expandIconContainer},r.a.createElement(J.a,{style:{color:"inherit"}})),r.a.createElement("div",{onClick:d,className:o.deleteIconContainer},r.a.createElement(R.a,{style:{color:"inherit"}})),!1===p?r.a.createElement("span",null):r.a.createElement("div",{className:"toggableContent"},r.a.createElement("p",{style:{textAlign:"center",fontSize:"1rem"}},"Likes: ",r.a.createElement("input",{value:t.likes,onChange:function(e){var r=t;r.likes=e.target.value;var o=[].concat(a);o[l]=r,n(o)},type:"text"}),r.a.createElement("button",{onClick:h},"change"))),r.a.createElement(A.a,{className:o.action},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url},r.a.createElement("span",{className:o.spanLink})),r.a.createElement(E.a,{className:o.button},"Go to blog"),r.a.createElement(P.a,{disabled:!0,style:{color:"white"}}))))},q=a(144),H=a(143),M=a(145),K=a(148),Q=a(142);a(98);function V(e){return r.a.createElement(k.a,Object.assign({elevation:6,variant:"filled"},e))}var X=function(e){var t=e.updateBlogs,a=r.a.useState("false"),n=Object(m.a)(a,2),l=n[0],o=n[1],c=r.a.useState(null),s=Object(m.a)(c,2),p=s[0],g=s[1],d=r.a.useState(""),f=Object(m.a)(d,2),h=f[0],b=f[1],E=function(){var e=Object(u.a)(i.a.mark((function e(a){var n,r,l,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n=a.target.title.value,r=a.target.author.value,l=a.target.likes.value,c=a.target.url.value,o(!0),s={title:n,author:r,likes:l,url:c},v.create(s).then((function(){v.getUserBlogs().then((function(e){return t(e)})).catch((function(e){console.log("error fetching blogs: ",e)})),setTimeout((function(){o(!1),g(!0)}),2e3),setTimeout((function(){g("")}),5e3)})).catch((function(e){o(!1),g("error"),b(e.response.data.error),setTimeout((function(){g(null),b("")}),5e3)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:E},r.a.createElement("div",{className:"input"},r.a.createElement("label",{className:"input_title",htmlFor:"title"},r.a.createElement("span",null,r.a.createElement("p",null,"Title"))),r.a.createElement("input",{className:"input_value",type:"text",id:"title"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",{className:"input_title",htmlFor:"author"},r.a.createElement("span",null,r.a.createElement("p",null,"Author"))),r.a.createElement("input",{className:"input_value",type:"text",id:"author"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",{className:"input_title",htmlFor:"likes"},r.a.createElement("span",null,r.a.createElement("p",null,"Likes"))),r.a.createElement("input",{className:"input_value",type:"text",id:"likes"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",{className:"input_title",htmlFor:"url"},r.a.createElement("span",null,r.a.createElement("p",null,"URL"))),r.a.createElement("input",{className:"input_value",type:"text",id:"url"})),r.a.createElement("button",{className:"btn",type:"submit"},"Submit"),!0===l?r.a.createElement(Q.a,null):r.a.createElement("span",null),!0===p?r.a.createElement(V,{severity:"success"},"Blog added!"):"error"===p?r.a.createElement(V,{severity:"error"},h):r.a.createElement("span",null))},Y=(a(99),Object(U.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},username:{flexGrow:4},maincolor:{backgroundColor:"#B03972"},newLink:{flexGrow:2},allBlogs:{flexGrow:2},title:{fontSize:"2.3rem"},toggleButton:{border:"none",color:"white"},container:{margin:"2rem 1rem"}}}))),Z=function(e){var t=e.setPage;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("h2",{style:{color:"#3f51b5"}},"No blogs yet, try ",r.a.createElement("button",{className:"newPage",onClick:function(){t("new")},style:{padding:".5rem 2rem",borderRadius:"5px",border:"1px solid grey",cursor:"pointer"}},"Adding a new blog")))},$=function(e){var t=e.user,a=e.blogs,n=e.updateBlogs,l=Y(),o=r.a.useState("all"),c=Object(m.a)(o,2),s=c[0],p=c[1],g=r.a.useState("date"),d=Object(m.a)(g,2),f=d[0],h=d[1],b=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getUserBlogs();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(H.a,{position:"static"},r.a.createElement(q.a,{className:l.maincolor},r.a.createElement(E.a,{variant:"h6",edge:"start",className:l.username},t.name),r.a.createElement(K.a,{value:s,exclusive:!0,onChange:function(e,t){p(t)},size:"medium"},r.a.createElement(M.a,{className:l.toggleButton,value:"all"},r.a.createElement("div",{className:l.allBlogs,color:"inherit"},"All your blogs")),r.a.createElement(M.a,{className:l.toggleButton,value:"new"},r.a.createElement("div",{className:l.newLink,color:"inherit"},"Add new link"))),r.a.createElement(y.a,{onClick:function(){localStorage.clear(),window.location.reload(!0)},color:"inherit"},"Logout"))),"all"===s?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"1rem"}},r.a.createElement("div",null,r.a.createElement("p",{style:{display:"inline-block",fontSize:"1rem",marginRight:"1rem",color:"grey"}},"Sort by"),r.a.createElement(K.a,{value:f,exclusive:!0,onChange:function(e,t){h(t)}},r.a.createElement(M.a,{value:"date",onClick:b},"Date"),r.a.createElement(M.a,{value:"likes",onClick:function(){var e=Object(S.a)(a).sort((function(e,t){return parseFloat(t.likes)-parseFloat(e.likes)}));n(e)}},"Likes")))),a.length<1?r.a.createElement(Z,{setPage:p}):r.a.createElement("div",{className:"grid-container"},a.map((function(e,t){return r.a.createElement(W,{key:e.id,index:t,blog:e,blogs:a,updateBlogs:n})})))):r.a.createElement(X,{updateBlogs:n}))},ee=function(){var e,t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(""),p=Object(m.a)(s,2),g=p[0],d=p[1],f=Object(n.useState)(""),b=Object(m.a)(f,2),E=b[0],w=b[1],y=Object(n.useState)(null),k=Object(m.a)(y,2),x=k[0],j=k[1],O=Object(n.useState)(null),N=Object(m.a)(O,2),B=N[0],S=N[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);j(t),v.setToken(t.token),v.getUserBlogs().then((function(e){return o(e)})).catch((function(e){console.log("error fetching blogs: ",e)}))}}),[]);var U=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.login({username:g,password:E});case 4:a=e.sent,j(a),v.setToken(a.token),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),d(""),w(""),v.getUserBlogs().then((function(e){return o(e)})).catch((function(e){console.log("error fetching blogs: ",e)})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),S(e.t0.response.data),setTimeout((function(){S(null)}),4e3);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,null===x?r.a.createElement(C,(e={error:B,setError:S,setUser:j,setBlogs:o},Object(c.a)(e,"error",B),Object(c.a)(e,"username",g),Object(c.a)(e,"password",E),Object(c.a)(e,"setUsername",d),Object(c.a)(e,"setPassword",w),Object(c.a)(e,"handleLogin",U),e)):r.a.createElement($,{user:x,blogs:l,updateBlogs:o}))};o.a.render(r.a.createElement(ee,null),document.getElementById("root"))},69:function(e,t,a){e.exports=a(100)},92:function(e,t,a){},93:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.bc2e11f9.chunk.js.map
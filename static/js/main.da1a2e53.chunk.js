(this["webpackJsonpreact-bbs"]=this["webpackJsonpreact-bbs"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABzUlEQVRYR+2XQU7CUBCGZ4otKw3uTLQENtquxBPIDcQTqDfQE4gnUG6AJxBPIJ5AdkU3GoqJO4Gd7wljWorQvrapQh8xsds2M9/88978U4QlP7jk/PD3AaytlTIqeOMoSSM6NLufzZ+oOrcCVl6rIsD5OCn1sgNeLPaglxRifgBdbSLi/jQhnRkdfiUNoK2rLUDc/U5IcGvYrCIF4GlTLY0y+DCbjIjuTZuXpQBYulpHxKOlAIRV7x5DGQo85yD3saY50hcEqUdUM7r8NNUWWMLJn6ZDGh7u2MNGKgBO5WxVvSTE46gExFjRfIOXXwE4U01RlJk7PQ6jDVjNGS5tXWsAwkFccASoxr2fxJp84xtE0dKOh0uc9EkrhsAZ8QP4xurMbAO4MDusuhCAwKCSDkBeMeEtkKBA8JbIVyBwS3wAj3qmQphxvd03Xhd2BqhvdHhuNrZfAXe5UO5SAwhxSrkAIO4KUgGUIe1tv/JWZAs8k3lPpwVi/508wkrWzmuUBgARXZs2FzxEJsCJafN6sDhpANkBWw/blkWA4JLpbDneHEjihqGmFLOohgCEWa7nhhtQANXdAwXLjnZD6hPjpagdYe7/gsQ2HPHhP8AXr5kcMA++kXUAAAAASUVORK5CYII="},,,,,,,,,,function(e,t,n){e.exports=n(44)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(22),o=n.n(s),l=(n(30),n(11)),c=n(12),i=(n(31),n(3)),u=n(4),h=n(6),m=n(5),d=n(1),p=n(7),v=(n(32),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.onLogout,a=e.location;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"nav"},r.a.createElement("span",{className:"left-link"},r.a.createElement(l.b,{to:"/"},"\u9996\u9875")),t&&t.length>0?r.a.createElement("span",{className:"user"},"\u5f53\u524d\u7528\u6237\uff1a",t,"\xa0",r.a.createElement("button",{onClick:n},"\u6ce8\u9500")):r.a.createElement("span",{className:"right-link"},r.a.createElement(l.b,{to:{pathname:"/login",state:{from:a}}},"\u767b\u5f55"))))}}]),t}(a.Component)),f=new Headers({Accept:"application/json","Content-Type":"application/json"});function b(e){return fetch(e,{method:"GET",headers:f}).then((function(t){return C(e,t)})).catch((function(t){return console.error("Request failed. Url = ".concat(e,". Message = ").concat(t)),{error:{message:"Request failed."}}}))}function E(e,t){return fetch(e,{method:"POST",headers:f,body:JSON.stringify(t)}).then((function(t){return C(e,t)})).catch((function(t){return console.error("Request failed. Url = ".concat(e,". Message = ").concat(t)),{error:{message:"Request failed."}}}))}function g(e,t){return fetch(e,{method:"PUT",headers:f,body:JSON.stringify(t)}).then((function(t){return C(e,t)})).catch((function(t){return console.error("Request failed. Url = ".concat(e,". Message = ").concat(t)),{error:{message:"Request failed."}}}))}function C(e,t){return t.status<500?t.json():(console.error("Request failed. Url = ".concat(e,". Message = ").concat(t.statusText)),{error:{message:"Request failed due to server error."}})}var O;O="http://localhost:5000";var j=function(){return O+"/login"},k=function(){return O+"/posts"},S=function(){return O+"/posts"},A=function(){return O+"/comments"},y=function(e){return O+"/posts?id="+e},w=function(e){return O+"/posts?id="+e},N=function(e){return O+"/comments?_expand=post&postId="+e},P=function(e){return O+"/posts/"+e},I=(n(38),function(e){function t(e){var n;Object(i.a)(this,t);var a=(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).props.post;return n.state={title:a&&a.title||"",content:a&&a.content||""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleCancelClick=n.handleCancelClick.bind(Object(d.a)(n)),n.handleSaveClick=n.handleSaveClick.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;"title"===t?this.setState({title:e.target.value}):"content"===t&&this.setState({content:e.target.value})}},{key:"handleCancelClick",value:function(){this.props.onCancel()}},{key:"handleSaveClick",value:function(){var e={title:this.state.title,content:this.state.content};this.props.onSave(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"postEditor"},r.a.createElement("input",{type:"text",name:"title",placeholder:"\u6807\u9898",value:this.state.title,onChange:this.handleChange}),r.a.createElement("textarea",{name:"content",placeholder:"\u5185\u5bb9",value:this.state.content,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleCancelClick},"\u53d6\u6d88"),r.a.createElement("button",{onClick:this.handleSaveClick},"\u4fdd\u5b58"))}}]),t}(a.Component));function x(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1+"";a=1===a.length?"0"+a:a;var r=t.getDate()+"";r=1===r.length?"0"+r:r;var s=t.getHours()+"";s=1===s.length?"0"+s:s;var o=t.getMinutes()+"";return o=1===o.length?"0"+o:o,"".concat(n,"-").concat(a,"-").concat(r," ").concat(s,":").concat(o)}var U=n(15),D=n.n(U);n(39);var L=function(e){var t=e.post;return r.a.createElement("li",{className:"postItem"},r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",null,"\u521b\u5efa\u4eba\uff1a",r.a.createElement("span",null,t.author.username)),r.a.createElement("div",null,"\u66f4\u65b0\u65f6\u95f4\uff1a",r.a.createElement("span",null,x(t.updatedAt))),r.a.createElement("div",{className:"like"},r.a.createElement("span",null,r.a.createElement("img",{src:D.a,alt:"vote"})),r.a.createElement("span",null,t.vote)))},R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(l.b,{key:e.id,to:"/posts/".concat(e.id)},r.a.createElement(L,{post:e}))})))}}]),t}(a.Component),B=(n(40),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],newPost:!1},n.refreshPostList=n.refreshPostList.bind(Object(d.a)(n)),n.handleNewPost=n.handleNewPost.bind(Object(d.a)(n)),n.handleSave=n.handleSave.bind(Object(d.a)(n)),n.handleCancel=n.handleCancel.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.refreshPostList()}},{key:"refreshPostList",value:function(){var e=this;b(k()).then((function(t){t.error||e.setState({posts:t,newPost:!1})}))}},{key:"handleNewPost",value:function(){this.setState({newPost:!0})}},{key:"handleSave",value:function(e){var t=this,n={title:e.title,content:e.content,author:{username:this.props.username},vote:0,updatedAt:x((new Date).toString())};E(S(),n).then((function(e){e.error||t.refreshPostList()}))}},{key:"handleCancel",value:function(){this.setState({newPost:!1})}},{key:"render",value:function(){var e=this.props.userId;return r.a.createElement("div",{className:"postList"},r.a.createElement("div",null,r.a.createElement("h2",null,"\u5e16\u5b50\u5217\u8868"),e?r.a.createElement("button",{onClick:this.handleNewPost},"\u53d1\u5e16"):null),this.state.newPost?r.a.createElement(I,{onSave:this.handleSave,onCancel:this.handleCancel}):null,r.a.createElement(R,{posts:this.state.posts}))}}]),t}(a.Component)),M=n(19),q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.comments;return r.a.createElement("ul",{className:"commentsView"},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",null,e.content),r.a.createElement("div",{className:"sub"},r.a.createElement("span",null,e.author),r.a.createElement("span",null,"."),r.a.createElement("span",null,x(e.createdAt))))})))}}]),t}(a.Component),Q=(n(41),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleClick",value:function(){var e=this.state.value;0===e.length?alert("\u8bc4\u8bba\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a\uff01"):(this.props.onSubmit(e),this.setState({value:""}))}},{key:"render",value:function(){var e=this.props,t=e.comments,n=e.editable;return r.a.createElement("div",{className:"commentList"},r.a.createElement("div",{className:"title"},"\u8bc4\u8bba"),n?r.a.createElement("div",{className:"editor"},r.a.createElement("textarea",{placeholder:"\u8bf4\u8bf4\u4f60\u7684\u770b\u6cd5",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleClick},"\u63d0\u4ea4")):null,r.a.createElement(q,{comments:t}))}}]),t}(a.Component));n(42);var V=function(e){var t=e.post,n=e.editable,a=e.onEditClick,s=e.onVote;return r.a.createElement("div",{className:"postDetails"},r.a.createElement("div",null,r.a.createElement("h2",null,t.title),r.a.createElement("div",{className:"mark"},r.a.createElement("span",{className:"author"},t.author.username),r.a.createElement("span",null,"."),r.a.createElement("span",null,x(t.updatedAt)),n?r.a.createElement("span",null,".",r.a.createElement("button",{onClick:a},"\u7f16\u8f91")):null),r.a.createElement("div",{className:"content"},t.content)),r.a.createElement("div",{className:"vote"},r.a.createElement("span",{onClick:s},r.a.createElement("img",{alt:"vote",src:D.a})),r.a.createElement("span",null,t.vote)))},J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={post:{},comments:[],editing:!1},n.refreshComments=n.refreshComments.bind(Object(d.a)(n)),n.refreshPost=n.refreshPost.bind(Object(d.a)(n)),n.handlePostSave=n.handlePostSave.bind(Object(d.a)(n)),n.handlePostCancel=n.handlePostCancel.bind(Object(d.a)(n)),n.handleEditClick=n.handleEditClick.bind(Object(d.a)(n)),n.handleCommentSubmit=n.handleCommentSubmit.bind(Object(d.a)(n)),n.handleVote=n.handleVote.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.refreshComments(),this.refreshPost()}},{key:"refreshPost",value:function(){var e=this,t=this.props.match.params.id;b(y(t)).then((function(t){t.error||1!==t.length||e.setState({post:t[0]})}))}},{key:"refreshComments",value:function(){var e=this,t=this.props.match.params.id;b(N(t)).then((function(t){t.error||e.setState({comments:t})}))}},{key:"handlePostSave",value:function(e){var t=this,n=this.props.match.params.id;g(w(n),e).then((function(n){if(!n.error){var a=Object(M.a)({},e,{author:t.state.post.author,updatedAt:x((new Date).toString())});t.setState({post:a,editing:!1})}}))}},{key:"handlePostCancel",value:function(){this.setState({editing:!1})}},{key:"handleEditClick",value:function(){this.setState({editing:!0})}},{key:"handleCommentSubmit",value:function(e){var t=this,n={postId:this.props.match.params.id,content:e,author:this.props.username,createdAt:x((new Date).toString())};E(A(),n).then((function(e){e.error||t.refreshComments()}))}},{key:"handleVote",value:function(){var e=this.state.post,t=Object(M.a)({},e,{vote:e.vote+1});this.setState({post:t}),g(P(e.id),t).then((function(e){e.error&&alert("vote error")}))}},{key:"render",value:function(){var e=this.state,t=e.post,n=e.comments,a=e.editing,s=this.props.username;if(0===Object.keys(t).length)return null;var o=s===t.author.username;return r.a.createElement("div",{className:"post"},a?r.a.createElement(I,{post:t,onSave:this.handlePostSave,onCancel:this.handlePostCancel}):r.a.createElement(V,{post:t,editable:o,onEditClick:this.handleEditClick,onVote:this.handleVote}),r.a.createElement(Q,{comments:n,editable:Boolean(s),onSubmit:this.handleCommentSubmit}))}}]),t}(a.Component),G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={userId:sessionStorage.getItem("userId"),username:sessionStorage.getItem("username")},n.handleLogout=n.handleLogout.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleLogout",value:function(){sessionStorage.removeItem("userId"),sessionStorage.removeItem("username"),this.setState({userId:null,username:null})}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.location,a=this.state,s=a.userId,o=a.username;return r.a.createElement("div",null,r.a.createElement(v,{username:o,onLogout:this.handleLogout,location:n}),r.a.createElement(c.b,{exact:!0,path:t.url,render:function(e){return r.a.createElement(B,Object.assign({username:o,userId:s},e))}}),r.a.createElement(c.b,{exact:!0,path:"".concat(t.url,"/:id"),render:function(e){return r.a.createElement(J,Object.assign({username:o,userId:s},e))}}))}}]),t}(a.Component),T=(n(43),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",redirectToReferrer:!1},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){"username"===e.target.name?this.setState({username:e.target.value}):"password"===e.target.name&&this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.username,a=this.state.password;0!==n.length&&0!==a.length?b(j()).then((function(e){if(e.error)alert(e.error.message||"login failed");else{var r=!1;e instanceof Array&&e.forEach((function(e){e.username!==n||e.password!==a||(r=!0)})),r?(sessionStorage.setItem("userId",e.id),sessionStorage.setItem("username",n),t.setState({redirectToReferrer:!0})):alert("login failed")}})):alert("\u7528\u6237\u540d\u6216\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a!")}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?r.a.createElement(c.a,{to:e}):r.a.createElement("form",{className:"login",onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"\u7528\u6237\u540d\uff1a",r.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleChange}))),r.a.createElement("div",null,r.a.createElement("label",null,"\u5bc6\u7801\uff1a",r.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange}))),r.a.createElement("input",{type:"submit",value:"\u767b\u5f55"}))}}]),t}(a.Component));var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:G}),r.a.createElement(c.b,{path:"/login",component:T}),r.a.createElement(c.b,{path:"/posts",component:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.da1a2e53.chunk.js.map
(this.webpackJsonpbeersandbrewskies=this.webpackJsonpbeersandbrewskies||[]).push([[10],{324:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(26),s=a(28),o=a(27),c=a(29),l=a(0),i=a.n(l),m=a(31),u=a(323),b=a(322),d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).renderInput=function(e){var t=e.input,n=e.label,r=e.meta,s="form-control ".concat(r.error&&r.touched?"is-invalid":""),o="Email"===n?"email":"text";return"Message"===n?i.a.createElement("div",null,i.a.createElement("textarea",Object.assign({},t,{className:s,placeholder:n,autoComplete:"off",type:o})),a.renderError(r)):i.a.createElement("div",null,i.a.createElement("input",Object.assign({},t,{className:s,placeholder:n,autoComplete:"off",type:o})),a.renderError(r))},a.onSubmit=function(e){a.props.onSubmit(e)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return i.a.createElement("div",{className:"invalid-feedback",style:{marginBottom:".25rem"}},t)}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit)},i.a.createElement("div",{className:"form-row mb-3"},i.a.createElement("div",{className:"col"},i.a.createElement(u.a,{name:"firstName",component:this.renderInput,label:"First Name"})),i.a.createElement("div",{className:"col"},i.a.createElement(u.a,{name:"lastName",component:this.renderInput,label:"Last Name"}))),i.a.createElement("div",{className:"form-group mb-3"},i.a.createElement(u.a,{name:"email",component:this.renderInput,label:"Email"})),i.a.createElement("div",{className:"form-group mb-3"},i.a.createElement(u.a,{name:"message",component:this.renderInput,label:"Message"})),i.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},this.props.loading&&i.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Submit"))}}]),t}(i.a.Component),p=Object(b.a)({form:"contactForm",validate:function(e){var t={};return e.firstName||(t.firstName="Invalid First Name"),e.lastName||(t.lastName="Invalid Last Name"),e.email||(t.email="Invalid Email"),t}})(d),f=a(32),h=a.n(f),v=a(7),E=a(58),N=a.n(E),g=a(93),y=a(39),O=a(42),j=a(22),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).onSubmit=function(e){a.setState({loading:!0,firstName:e.firstName,lastName:e.lastName}),a.props.contact(e).then((function(e){return a.setState({success:!0})})).catch((function(e){return a.setState({error:!0})}))},a.state={error:!1,loading:!1,success:!1,duplicate:!1,firstName:"",lastName:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.success,n=e.loading,r=e.firstName,s=e.lastName;if(t){return i.a.createElement(y.a,{showValue:!0,closeDirect:"/",buttonName:"Close",title:"Oops!",description:"Looks like we are having problems on our side. I apologize\n      for the inconvience. Please feel free to email us at beersandbrewskies@gmail.com.",svgType:"error"})}if(a){return i.a.createElement(y.a,{showValue:!0,closeDirect:"/",buttonName:"OK",title:"Thank You ".concat(r," ").concat(s,"!"),description:"We will get back to you as soon as possible!",svgType:"success"})}return i.a.createElement(O.a,{show:!0,onHide:function(){return j.a.push("/")},"aria-labelledby":"contained-modal-title-vcenter",centered:!0},i.a.createElement(O.a.Header,{closeButton:!0},i.a.createElement(O.a.Title,null,"Say Or Ask Us Anything")),i.a.createElement(O.a.Body,null,i.a.createElement(p,{onSubmit:this.onSubmit,loading:n})))}}]),t}(i.a.Component);t.default=Object(m.b)(null,{contact:function(e){return function(t,a){var n;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(N.a.post("/contact",Object(v.a)({},e)));case 2:n=a.sent,t({type:g.a,payload:n.data});case 4:case"end":return a.stop()}}))}}})(k)}}]);
//# sourceMappingURL=10.95142459.chunk.js.map
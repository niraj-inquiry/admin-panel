"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7176],{84218:function(e,a,n){n.r(a);var s=n(74165),r=n(15861),t=n(29439),l=n(72791),i=n(78983),c=n(24846),o=n(99161),d=n(84787),u=n(93647),m=n(57312),h=n(57689),x=n(6981),p=n(99946),j=n(80184);a.default=function(){var e=["Male","Female"],a=[{_di:"1",rolename:"admin"},{_di:"2",rolename:"superadmin"}],n=(0,h.s0)(),f=((0,h.TH)(),(0,l.useState)()),g=(0,t.Z)(f,2),b=g[0],v=g[1],C=(0,l.useState)(),N=(0,t.Z)(C,2),Z=N[0],_=N[1],w=(0,l.useState)(),y=(0,t.Z)(w,2),k=y[0],S=y[1],R=(0,l.useState)(),Y=(0,t.Z)(R,2),V=Y[0],L=Y[1],M=(0,l.useState)(),O=(0,t.Z)(M,2),E=O[0],H=O[1],P=(0,l.useState)(),D=(0,t.Z)(P,2),F=D[0],W=D[1],B=(0,l.useState)(),G=(0,t.Z)(B,2),I=G[0],K=G[1],T=(0,l.useState)(),U=(0,t.Z)(T,2),X=U[0],A=U[1],q=(0,l.useState)(),z=(0,t.Z)(q,2),J=z[0],Q=z[1],$=(0,l.useState)(),ee=(0,t.Z)($,2),ae=ee[0],ne=ee[1],se=(0,l.useState)(!1),re=(0,t.Z)(se,2),te=re[0],le=re[1],ie=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,x.xb)(b)||(0,x.xb)(k)||(0,x.xb)(V)||(0,x.xb)(E)||(0,x.xb)(F)||(0,x.xb)(I)||(0,x.xb)(X)){e.next=15;break}return(a=new FormData).append("first_name",b),a.append("last_name",Z),a.append("email",k),a.append("password",V),a.append("post_code",E),a.append("description",F),a.append("user_type",I),a.append("gender",X),a.append("image",J),e.next=13,x.bl.post("v1.0/user/register",a).then((function(e){var a,s;(console.log("user",e.data.data),!0===(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.status))&&(le(!1),alert(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.message),"admin"===e.data.data.user_type.toLowerCase()||"superadmin"===e.data.data.user_type.toLowerCase()?n("dashboard"):alert("Invalid user"));le(!0)}));case 13:e.next=17;break;case 15:alert("Missing field"),le(!0);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){x.bl.get("v1.0/role/get-role").then((function(e){e.data.status?ne(e.data.data):ne(a)}))}),[]),(0,j.jsx)("div",{className:"min-vh-100 d-flex flex-row align-items-center register",style:{backgroundImage:"url(".concat(p.l9,")")},children:(0,j.jsx)(i.KB,{className:"ms-0",children:(0,j.jsx)(i.rb,{className:"justify-content-start",children:(0,j.jsx)(i.b7,{md:9,lg:7,xl:6,children:(0,j.jsx)(i.xH,{className:"mx-4",children:(0,j.jsxs)(i.sl,{className:"p-4 register-box",children:[(0,j.jsx)(i.KB,{className:"login-img my-2",children:(0,j.jsx)(i.DW,{rounded:!0,src:p.jY,width:300,height:300,className:"login-logo"})}),(0,j.jsxs)(i.lx,{className:"text-center",children:[(0,j.jsx)("h3",{className:"m-4",children:"Register"}),(0,j.jsxs)(i.rb,{children:[(0,j.jsx)(i.b7,{children:(0,j.jsxs)(i.YR,{className:"mb-3",children:[(0,j.jsx)(i.wV,{children:(0,j.jsx)(c.Z,{icon:o.E})}),(0,j.jsx)(i.jO,{onChange:function(e){return v(e.target.value)},placeholder:"First Name",autoComplete:"firstname"})]})}),(0,j.jsx)(i.b7,{children:(0,j.jsxs)(i.YR,{className:"mb-3",children:[(0,j.jsx)(i.wV,{children:(0,j.jsx)(c.Z,{icon:o.E})}),(0,j.jsx)(i.jO,{onChange:function(e){return _(e.target.value)},placeholder:"Last Name",autoComplete:"lastname"})]})})]}),(0,j.jsxs)(i.rb,{children:[(0,j.jsx)(i.b7,{children:(0,j.jsxs)(i.YR,{className:"mb-3",children:[(0,j.jsxs)(i.wV,{children:[" ",(0,j.jsx)(c.Z,{icon:d.W})]}),(0,j.jsx)(i.jO,{type:"email",onChange:function(e){return S(e.target.value)},placeholder:"Email",autoComplete:"email"})]})}),(0,j.jsx)(i.b7,{children:(0,j.jsxs)(i.YR,{className:"mb-3",children:[(0,j.jsx)(i.wV,{children:(0,j.jsx)(c.Z,{icon:u.U})}),(0,j.jsx)(i.jO,{onChange:function(e){return L(e.target.value)},type:"password",placeholder:"Password",autoComplete:"new-password"})]})})]}),(0,j.jsxs)(i.rb,{children:[(0,j.jsx)(i.b7,{children:(0,j.jsx)(i.YR,{className:"mb-3",children:(0,j.jsx)(i.jO,{type:"number",onChange:function(e){return H(e.target.value)},placeholder:"Post code",autoComplete:"post_code"})})}),(0,j.jsx)(i.b7,{children:(0,j.jsx)(i.YR,{className:"mb-3",children:(0,j.jsxs)(i.LX,{id:"user_type",onChange:function(e){return K(e.target.value)},children:[(0,j.jsx)("option",{children:"Choose UserType..."}),null===ae||void 0===ae?void 0:ae.map((function(e){return(0,j.jsx)("option",{children:null===e||void 0===e?void 0:e.rolename},null===e||void 0===e?void 0:e.rolename)}))]})})}),(0,j.jsx)(i.b7,{children:(0,j.jsx)(i.YR,{className:"mb-3",children:(0,j.jsxs)(i.LX,{id:"gender",onChange:function(e){return A(e.target.value)},children:[(0,j.jsx)("option",{children:"Choose Gender..."}),null===e||void 0===e?void 0:e.map((function(e){return(0,j.jsx)("option",{children:e},e)}))]})})})]}),(0,j.jsxs)(i.YR,{className:"mb-3",children:[(0,j.jsx)(i.wV,{children:"@"}),(0,j.jsx)(i.jO,{onChange:function(e){return W(e.target.value)},placeholder:"Description",autoComplete:"description"})]}),(0,j.jsx)(i.YR,{className:"mb-3",children:(0,j.jsx)(i.jO,{onChange:function(e){Q(e.target.files[0])},type:"file",accept:"image/*",placeholder:"Please Enter your image"})}),te&&(0,j.jsxs)(i.Gc,{color:"danger",className:"d-flex align-items-center px-1 py-2",children:[(0,j.jsx)(c.Z,{icon:m.b,className:"flex-shrink-0 me-2",width:24,height:24}),(0,j.jsx)("div",{children:"Please enter all the fields"})]}),(0,j.jsx)("div",{className:"d-grid",onClick:function(){return ie()},children:(0,j.jsx)(i.u5,{className:"login-btn border border-0 fw-bold",style:{backgroundColor:"#ff5721"},children:"Create Account"})})]})]})})})})})})}},84787:function(e,a,n){n.d(a,{W:function(){return s}});var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M16,112V496H496V112ZM236.8,341.6a32.167,32.167,0,0,0,38.4,0L298.667,324,464,448v16H48V448L213.333,324ZM256,316,48,160V144H464v16ZM48,200,186.667,304,48,408ZM464,408,325.333,304,464,200Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=7176.caad2551.chunk.js.map
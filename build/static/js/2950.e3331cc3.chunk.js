"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2950],{22109:function(e,s,o){var n=o(29439),l=o(72791),i=o(78983),a=(o(24846),o(98051)),d=(o(99946),o(76277),o(65529),o(63103),o(80184));s.Z=function(e){var s=e.isshowform,o=e.onClose,c=e.data,r=(0,l.useState)(null===c||void 0===c?void 0:c.voucharname),t=(0,n.Z)(r,2),u=t[0],v=t[1],h=(0,l.useState)(null===c||void 0===c?void 0:c.duration),x=(0,n.Z)(h,2),j=x[0],m=x[1],f=(0,l.useState)(null===c||void 0===c?void 0:c.durationunit),p=(0,n.Z)(f,2),N=p[0],b=p[1],w=(0,l.useState)(null===c||void 0===c?void 0:c.discount),g=(0,n.Z)(w,2),_=g[0],C=g[1],V=(0,l.useState)(null===c||void 0===c?void 0:c.description),Z=(0,n.Z)(V,2),S=Z[0],k=Z[1];return(0,d.jsxs)(i.Tk,{fullscreen:"md",visible:s,onClose:o,children:[(0,d.jsx)(i.p0,{children:(0,d.jsx)(i.fl,{children:(0,a.xb)(null===c||void 0===c?void 0:c._id)?"Add Voucher":"Update Voucher"})}),(0,d.jsx)(i.sD,{children:(0,d.jsx)(i.rb,{className:"border mx-4 my-3 modal-shadow rounded",children:(0,d.jsx)(i.b7,{className:"px-4 py-3",children:(0,d.jsxs)(i.lx,{className:"text-start",children:[(0,d.jsx)(i.b7,{children:(0,d.jsxs)(i.YR,{className:"mb-3",children:[(0,d.jsx)(i.wV,{children:(0,d.jsx)("i",{className:"fa fa-user"})}),(0,d.jsx)(i.jO,{defaultValue:null===c||void 0===c?void 0:c.voucharname,value:u,onChange:function(e){return v(e.target.value)},placeholder:"Voucher Name",autoComplete:"firstname"})]})}),(0,d.jsx)(i.b7,{children:(0,d.jsxs)(i.YR,{className:"mb-3",children:[(0,d.jsx)(i.wV,{children:(0,d.jsx)("i",{className:"fa fa-user"})}),(0,d.jsx)(i.jO,{defaultValue:null===c||void 0===c?void 0:c.description,value:S,onChange:function(e){return k(e.target.value)},placeholder:"Voucher Description",autoComplete:"firstname"})]})}),(0,d.jsxs)(i.YR,{className:"mb-3",children:[(0,d.jsx)(i.wV,{children:(0,d.jsx)("i",{className:"fa fa-location-arrow"})}),(0,d.jsxs)(i.LX,{id:"user_type",defaultValue:null===c||void 0===c?void 0:c.duration,value:j,onChange:function(e){return m(e.target.value)},children:[(0,d.jsx)("option",{children:"Choose occuption..."}),["Day","Month","Year"].map((function(e){return(0,d.jsx)("option",{children:e},e)}))]})]}),(0,d.jsxs)(i.YR,{className:"mb-3",children:[(0,d.jsx)(i.wV,{children:(0,d.jsx)("i",{className:"fa fa-user"})}),(0,d.jsx)(i.jO,{type:"number",defaultValue:null===c||void 0===c?void 0:c.durationunit,value:N,onChange:function(e){return b(e.target.value)},placeholder:"Enter voucher duration per unit"})]}),(0,d.jsxs)(i.YR,{className:"mb-3",children:[(0,d.jsx)(i.wV,{children:(0,d.jsx)("i",{className:"fa fa-user"})}),(0,d.jsx)(i.jO,{type:"number",defaultValue:null===c||void 0===c?void 0:c.discount,value:_,onChange:function(e){return C(e.target.value)},placeholder:"Enter voucher discount"})]}),(0,d.jsx)("div",{className:"d-grid",children:(0,d.jsx)(i.u5,{onClick:function(){return function(){var e={voucharname:u,duration:j,durationunit:N,discount:_,description:S};a.bl.post("v.1.0/voucher/add-new-voucher",e).then((function(e){var s,n,l;console.log("update data",null===e||void 0===e?void 0:e.data,c),!0===(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.status)?(alert(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message),o()):alert(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.message)}))}()},className:"update_btn",children:"Add Account"})})]})})})})]})}},2950:function(e,s,o){o.r(s);var n=o(29439),l=o(78983),i=o(72791),a=o(57689),d=(o(76277),o(98051)),c=o(99946),r=(o(77911),o(72039),o(22109)),t=o(80184);s.default=function(){var e=(0,i.useState)(),s=(0,n.Z)(e,2),o=s[0],u=s[1],v=(0,i.useState)(),h=(0,n.Z)(v,2),x=h[0],j=h[1],m=(0,i.useState)(),f=(0,n.Z)(m,2),p=f[0],N=f[1],b=(0,i.useState)([]),w=(0,n.Z)(b,2),g=(w[0],w[1],(0,a.s0)()),_=function(){d.bl.get("v.1.0/voucher/get-all-voucher").then((function(e){var s,o,n;(console.log("userlist",e.data.data),null!==e&&void 0!==e&&null!==(s=e.data)&&void 0!==s&&s.status)&&(console.log("userlist",null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.data),u(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data))})).catch((function(e){console.log("Error",e),g("404")}))};return(0,i.useEffect)((function(){_()}),[x,p]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{isshowform:x,onClose:function(){return j(!1)},data:p}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"table-responsive",children:[(0,t.jsx)("div",{onClick:function(){N(),j(!0)},className:"button-1 ",children:"+ Add New Voucher"}),(0,t.jsxs)(l.Sx,{children:[(0,t.jsx)(l.V,{children:(0,t.jsxs)(l.T6,{children:[(0,t.jsx)(l.is,{scope:"col",className:"fw-bold",children:"#"}),(0,t.jsx)(l.is,{scope:"col",className:"fw-bold",children:"Name"}),(0,t.jsx)(l.is,{scope:"col",className:"fw-bold",children:"Description"}),(0,t.jsx)(l.is,{scope:"col",className:"fw-bold",children:"Discount"}),(0,t.jsx)(l.is,{scope:"col",className:"fw-bold",children:"Duration"}),(0,t.jsx)(l.is,{scope:"col",className:" fw-bold",children:"Voucher code"}),(0,t.jsx)(l.is,{scope:"col",className:" fw-bold",children:"Action"})]})}),(0,t.jsx)(l.NR,{className:"body-divider",children:(null===o||void 0===o?void 0:o.length)>0&&(null===o||void 0===o?void 0:o.map((function(e,s){return(0,t.jsxs)(l.T6,{children:[(0,t.jsx)(l.is,{scope:"row",children:s+1}),(0,t.jsx)(l.is,{scope:"row",children:null===e||void 0===e?void 0:e.voucharname}),(0,t.jsx)(l.is,{scope:"row",children:null===e||void 0===e?void 0:e.description}),(0,t.jsx)(l.is,{scope:"row",children:null===e||void 0===e?void 0:e.discount}),(0,t.jsx)(l.is,{scope:"row",children:null===e||void 0===e?void 0:e.duration}),(0,t.jsx)(l.is,{scope:"row",children:null===e||void 0===e?void 0:e.voucharcode}),(0,t.jsx)(l.NN,{children:(0,t.jsxs)(l.rb,{className:"gym_action mx-auto",children:[(0,t.jsx)(l.b7,{children:(0,t.jsx)(l.DW,{rounded:!0,src:c.dT,className:"icons"})}),(0,t.jsx)(l.b7,{onClick:function(){return function(e){N(e),console.log("updatae item",e),j(!0)}(e)},children:(0,t.jsx)(l.DW,{rounded:!0,src:c._t,className:"icons"})}),(0,t.jsx)(l.b7,{onClick:function(){return s=null===e||void 0===e?void 0:e._id,void d.bl.delete("v.1.0/team/delete-team-info/".concat(s)).then((function(e){e.data.status&&(_(),alert(e.data.message))}));var s},children:(0,t.jsx)(l.DW,{rounded:!0,src:c.X_,className:"icons"})})]})})]},s)})))})]})]})})]})}}}]);
//# sourceMappingURL=2950.e3331cc3.chunk.js.map
"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2026],{42026:function(e,s,n){n.r(s),n.d(s,{default:function(){return u}});var a=n(29439),t=n(78983),i=n(72791),l=(n(76277),n(6981)),o=n(57689),d=(n(24846),n(65529),n(80184)),c=function(e){var s=e.isshowform,n=e.onClose,c=e.data;console.log("addnew 00000000000000000000",c);(0,o.s0)();var r=(0,i.useState)(),u=(0,a.Z)(r,2),f=u[0],h=(u[1],(0,i.useState)()),v=(0,a.Z)(h,2),x=(v[0],v[1]),m=(0,i.useState)(null===c||void 0===c?void 0:c.question),j=(0,a.Z)(m,2),p=j[0],b=j[1],w=(0,i.useState)(null===c||void 0===c?void 0:c.answer),N=(0,a.Z)(w,2),g=N[0],_=N[1];(0,i.useEffect)((function(){q()}),[]);var q=function(){l.be.get("v1.0/gymcenter/gym-all-data").then((function(e){e.data.status&&x(e.data.data)}))};return(0,d.jsxs)(t.Tk,{fullscreen:"md",visible:s,onClose:function(){return n()},children:[(0,d.jsx)(t.p0,{children:(0,d.jsx)(t.fl,{children:(0,l.xb)(null===c||void 0===c?void 0:c._id)?"Add Details ":"Update  Details"})}),(0,d.jsxs)(t.sD,{className:"px-4 py-3 border mx-4 my-3 modal-shadow rounded",children:[(0,d.jsx)("p",{className:"text-medium-emphasis",children:"".concat((0,l.xb)(null===c||void 0===c?void 0:c._id)?"Create":"Update"," your  account")}),(0,d.jsx)(t.KB,{children:(0,d.jsx)(t.rb,{className:"justify-content-center",children:(0,d.jsxs)(t.b7,{className:"px-0",children:[(0,d.jsxs)(t.YR,{className:"mb-3",children:[(0,d.jsx)(t.wV,{children:(0,d.jsx)("i",{className:"fa fa-question"})}),(0,d.jsx)(t.jO,{defaultValue:null===c||void 0===c?void 0:c.question,value:p,onChange:function(e){return b(e.target.value)},placeholder:"Question",autoComplete:"question"})]}),(0,d.jsxs)(t.YR,{className:"mb-3",children:[(0,d.jsx)(t.wV,{children:(0,d.jsx)("i",{className:"fa fa-list-alt"})}),(0,d.jsx)(t.PB,{defaultValue:null===c||void 0===c?void 0:c.answer,value:g,onChange:function(e){return _(e.target.value)},placeholder:"Answer",autoComplete:"answer"})]}),(0,d.jsx)("div",{className:"d-grid",onClick:function(){return null!==c&&void 0!==c&&c._id?function(){var e={_id:null===c||void 0===c?void 0:c._id,question:p,answer:g};l.be.put("v1.0/faqs/update-faqs",e).then((function(e){var s,n;console.log("ddd",e.data),null!==(s=e.data)&&void 0!==s&&s.status&&alert(null===(n=e.data)||void 0===n?void 0:n.message)})).catch((function(e){alert("Something went wrong"),console.log("error",e)}))}():function(){var e={gymcenterid:f,question:p,answer:g};l.be.post("v1.0/faqs/add-faqs",e).then((function(e){e.data.status?(alert("Successfully Added"),n()):alert(e.data.data.message)}))}()},children:(0,d.jsx)(t.u5,{className:"update_btn",children:null!==c&&void 0!==c&&c._id?"Update":"Add Faq"})})]})})})]})]})},r=n(99946),u=function(){var e=(0,i.useState)(),s=(0,a.Z)(e,2),n=s[0],u=s[1],f=(0,i.useState)(),h=(0,a.Z)(f,2),v=h[0],x=h[1],m=(0,o.s0)(),j=(0,i.useState)(),p=(0,a.Z)(j,2),b=p[0],w=p[1],N=function(){l.bl.get("v1.0/faqs/get-faqs_withoutcenterid").then((function(e){e.data.status&&u(e.data.data)})).catch((function(e){m("404"),console.log("Error",e),alert("Something went wrong")}))};(0,i.useEffect)((function(){N()}),[]);return(0,d.jsxs)("div",{className:"table-responsive",children:[(0,d.jsx)(c,{isshowform:b,onClose:function(){return w(!1)},data:v}),(0,d.jsx)("div",{onClick:function(){return w(!0)},className:"button-1",children:"+ Add New"}),(0,d.jsxs)(t.Sx,{children:[(0,d.jsx)(t.V,{children:(0,d.jsxs)(t.T6,{children:[(0,d.jsx)(t.is,{scope:"col",className:"fw-bold",children:"#"}),(0,d.jsx)(t.is,{scope:"col",className:"fw-bold",children:"Question"}),(0,d.jsx)(t.is,{scope:"col",className:"fw-bold",children:"Answer"}),(0,d.jsx)(t.is,{scope:"col",className:"fw-bold",children:"Action"})]})}),(0,d.jsx)(t.NR,{className:"body-divider",children:(null===n||void 0===n?void 0:n.length)>0&&(null===n||void 0===n?void 0:n.map((function(e,s){return(0,d.jsxs)(t.T6,{children:[(0,d.jsx)(t.is,{scope:"row",children:s+1}),(0,d.jsx)(t.NN,{children:null===e||void 0===e?void 0:e.question}),(0,d.jsx)(t.NN,{children:null===e||void 0===e?void 0:e.answer.substring(0,100)}),(0,d.jsx)(t.NN,{children:(0,d.jsxs)(t.rb,{children:[(0,d.jsx)(t.b7,{onClick:function(){return function(e){x(e),w(!0)}(e)},children:(0,d.jsx)(t.DW,{rounded:!0,src:r._t,className:"icons"})}),(0,d.jsx)(t.b7,{onClick:function(){return s=null===e||void 0===e?void 0:e._id,void l.be.delete("v1.0/faqs/delete-faq/".concat(s)).then((function(e){e.data.status&&(alert(e.data.message),N())}));var s},children:(0,d.jsx)(t.DW,{rounded:!0,src:r.X_,className:"icons"})})]})})]},s)})))})]})]})}}}]);
//# sourceMappingURL=2026.5946dbbc.chunk.js.map
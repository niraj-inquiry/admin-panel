"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9993],{49993:function(l,e,o){o.r(e);var i=o(29439),n=o(78983),s=o(72791),c=(o(76277),o(6981)),d=o(99946),a=o(80184);e.default=function(){var l=(0,s.useState)(),e=(0,i.Z)(l,2),o=e[0],r=e[1],t=function(){c.be.get("v1.0/career/get-all-career").then((function(l){var e,o,i;null!==l&&void 0!==l&&null!==(e=l.data)&&void 0!==e&&e.status&&(r(null===l||void 0===l||null===(o=l.data)||void 0===o?void 0:o.data),console.log("role",null===l||void 0===l||null===(i=l.data)||void 0===i?void 0:i.data))})).catch((function(l){console.log("Error",l)}))};return(0,s.useEffect)((function(){t()}),[]),(0,a.jsx)("div",{className:"table-responsive",children:(0,a.jsxs)(n.Sx,{children:[(0,a.jsx)(n.V,{children:(0,a.jsxs)(n.T6,{children:[(0,a.jsx)(n.is,{scope:"col",className:"fw-bold",children:"#"}),(0,a.jsx)(n.is,{scope:"col",className:"fw-bold",children:"First Name"}),(0,a.jsx)(n.is,{scope:"col",className:"fw-bold",children:"Last Name"}),(0,a.jsx)(n.is,{scope:"col",className:"fw-bold",children:"Email"}),(0,a.jsx)(n.is,{scope:"col",className:"fw-bold",children:"Contact Number"}),(0,a.jsx)(n.is,{scope:"col",className:"fw-bold",children:"Position"}),(0,a.jsx)(n.is,{scope:"col",className:"fw-bold",children:"Upload File"}),(0,a.jsx)(n.is,{scope:"col",className:"fw-bold",children:"Action"})]})}),(0,a.jsx)(n.NR,{className:"body-divider",children:(null===o||void 0===o?void 0:o.length)>0&&(null===o||void 0===o?void 0:o.map((function(l,e){return(0,a.jsxs)(n.T6,{children:[(0,a.jsx)(n.is,{scope:"row",children:e+1}),(0,a.jsx)(n.NN,{children:(0,c.gw)(null===l||void 0===l?void 0:l.firstname)}),(0,a.jsx)(n.NN,{children:(0,c.gw)(null===l||void 0===l?void 0:l.lastname)}),(0,a.jsx)(n.NN,{children:null===l||void 0===l?void 0:l.email}),(0,a.jsx)(n.NN,{children:null===l||void 0===l?void 0:l.phonenumber}),(0,a.jsx)(n.NN,{children:null===l||void 0===l?void 0:l.profession}),(0,a.jsx)(n.NN,{children:(0,c.xb)(null===l||void 0===l?void 0:l.uploadcv)?"":(0,a.jsx)("button",{onClick:function(){return(0,c.G8)(l.uploadcv)},className:"downloadbtn",children:"Download PDF"})}),(0,a.jsx)(n.NN,{children:(0,a.jsx)(n.rb,{children:(0,a.jsx)(n.b7,{onClick:function(){return e=null===l||void 0===l?void 0:l._id,void c.be.delete("v1.0/career/delete_career/".concat(e)).then((function(l){var e,o,i;null!==l&&void 0!==l&&null!==(e=l.data)&&void 0!==e&&e.status?(alert(null===l||void 0===l||null===(o=l.data)||void 0===o?void 0:o.message),t()):alert(null===l||void 0===l||null===(i=l.data)||void 0===i?void 0:i.message)})).catch((function(l){alert("Something went wrong")}));var e},className:"",children:(0,a.jsx)(n.DW,{rounded:!0,src:d.X_,className:"icons"})})})})]},e)})))})]})})}}}]);
//# sourceMappingURL=9993.a28f5841.chunk.js.map
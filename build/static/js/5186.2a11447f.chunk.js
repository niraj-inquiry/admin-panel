"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5186],{45186:function(e,n,a){a.r(n),a.d(n,{default:function(){return j}});var t=a(74165),i=a(15861),d=a(93433),s=a(29439),l=a(99161),o=a(24846),r=a(78983),u=a(72791),c=a(57689),m=a(99946),v=a(80184),x=function(e){e.key;var n=e.onDelete,a=e.onSave,t=e.item,i=e.gymid;console.log("EquipmentsForm--------------",t);var d=(0,u.useState)(null===t||void 0===t?void 0:t.description),l=(0,s.Z)(d,2),o=l[0],c=l[1],x=(0,u.useState)(null===t||void 0===t?void 0:t.equipment_brand),p=(0,s.Z)(x,2),h=p[0],f=p[1],j=(0,u.useState)(null===t||void 0===t?void 0:t.equipment_name),g=(0,s.Z)(j,2),b=g[0],y=g[1],_=(0,u.useState)(null===t||void 0===t?void 0:t.equipment_image),N=(0,s.Z)(_,2),C=N[0],Z=N[1],w=(0,u.useState)(null===t||void 0===t?void 0:t.equipment_model_number),q=(0,s.Z)(w,2),S=q[0],k=q[1],D=(0,u.useState)(!1),H=(0,s.Z)(D,2),Y=H[0],E=H[1];return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(r.b7,{xs:!0,lg:6,children:(0,v.jsxs)("div",{className:" border px-3 py-3 mb-3 rounded shadow",style:{backgroundColor:"#80808021"},children:[(0,v.jsxs)(r.rb,{children:[(0,v.jsx)(r.b7,{children:(0,v.jsxs)(r.YR,{className:"mb-3",children:[(0,v.jsx)(r.wV,{children:(0,v.jsx)("i",{className:"fa fa-skating"})}),(0,v.jsx)(r.jO,{value:b,onChange:function(e){return y(e.target.value)},placeholder:"Equipment Name",autoComplete:"aboutus"})]})}),(0,v.jsx)(r.b7,{children:(0,v.jsxs)(r.YR,{className:"mb-3",children:[(0,v.jsx)(r.wV,{children:(0,v.jsx)("i",{className:"fa fa-map-pin"})}),(0,v.jsx)(r.jO,{value:h,onChange:function(e){return f(e.target.value)},placeholder:"equipment_brand",autoComplete:"aboutus"})]})}),(0,v.jsx)(r.b7,{children:(0,v.jsxs)(r.YR,{className:"mb-3",children:[(0,v.jsx)(r.wV,{children:(0,v.jsx)("i",{className:"fa fa-truck"})}),(0,v.jsx)(r.jO,{value:S,onChange:function(e){return k(e.target.value)},placeholder:"equipment_model_number",autoComplete:"aboutus"})]})})]}),(0,v.jsxs)(r.YR,{className:"mb-3",children:[(0,v.jsx)(r.wV,{children:(0,v.jsx)("i",{className:"fa fa-comment"})}),(0,v.jsx)(r.jO,{value:o,onChange:function(e){return c(e.target.value)},placeholder:"About Us",autoComplete:"aboutus"})]}),(0,v.jsxs)(r.YR,{className:"mb-3",children:[(0,v.jsx)(r.wV,{children:(0,v.jsx)("i",{className:"fa fa-image"})}),(0,v.jsx)(r.jO,{onChange:function(e){Z(e.target.files[0])},type:"file",accept:"image/*",placeholder:"Please Enter your image"})]}),(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,v.jsx)("div",{onClick:n,children:(0,v.jsx)(r.DW,{className:"deletebtn_icon",rounded:!0,src:m.X_})}),(0,v.jsx)("div",{onClick:function(){return E(!Y)&function(){var e={gymid:i,user_id:localStorage.getItem("userid"),description:o,equipment_brand:h,equipment_name:b,equipments:C,equipment_model_number:S};a(e)}()},children:(0,v.jsx)(r.DW,{className:"save_icon",rounded:!0,src:Y?m.h3:m.UB})})]})]})})})},p=a(6981),h=function(e){var n=e.key,a=e.onDelete,t=e.onSave,i=e.item,d=(0,u.useState)(i),l=(0,s.Z)(d,2),o=l[0],c=l[1],x=(0,u.useState)(!1),p=(0,s.Z)(x,2),h=p[0],f=p[1];return(0,v.jsx)(r.b7,{xs:!0,lg:6,className:"mt-3",children:(0,v.jsxs)("div",{className:" border px-3 py-3 mb-3 rounded shadow",style:{backgroundColor:"#80808021"},children:[(0,v.jsxs)(r.YR,{className:"mb-3",children:[(0,v.jsx)(r.wV,{children:(0,v.jsx)("i",{className:"fa fa-wifi"})}),(0,v.jsx)(r.jO,{value:o,onChange:function(e){return c(e.target.value)},placeholder:"Amenities",autoComplete:"amenities"})]}),(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,v.jsx)("div",{onClick:a,className:"",children:(0,v.jsx)(r.DW,{className:"deletebtn_icon",rounded:!0,src:m.X_})}),(0,v.jsx)("div",{onClick:function(){return f(!h),void t(o)},children:(0,v.jsx)(r.DW,{className:"save_icon",rounded:!0,src:h?m.h3:m.UB})})]})]},n)})},f=function(e){e.key;var n=e.onDelete,a=e.onSave,t=e.data;console.log("ddddddddddddddddddd",t);var i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=new Date,l=d.getHours(),o=d.getMinutes(),c=(0,u.useState)((0,p.xb)(null===t||void 0===t?void 0:t.starttime)?"".concat(l,":").concat(o):null===t||void 0===t?void 0:t.starttime),x=(0,s.Z)(c,2),h=x[0],f=x[1],j=(0,u.useState)((0,p.xb)(null===t||void 0===t?void 0:t.endtime)?"".concat(l,":").concat(o):null===t||void 0===t?void 0:t.endtime),g=(0,s.Z)(j,2),b=g[0],y=g[1],_=(0,u.useState)(null===t||void 0===t?void 0:t.days),N=(0,s.Z)(_,2),C=N[0],Z=N[1],w=function(){var e=document.getElementById("starttime");f(e.value);var n=document.getElementById("endtime");y(n.value)};return(0,v.jsx)(r.b7,{xs:!0,lg:6,className:"mt-3",children:(0,v.jsxs)("div",{className:" border px-3 py-3 mb-3 rounded shadow",style:{backgroundColor:"#80808021"},children:[(0,v.jsxs)(r.YR,{className:"mb-3",children:[(0,v.jsx)(r.wV,{children:(0,v.jsx)("i",{className:"fa fa-calendar"})}),(0,v.jsxs)(r.LX,{id:"days",value:C,onChange:function(e){return Z(e.target.value)},children:[(0,v.jsx)("option",{children:"Choose days..."}),null===i||void 0===i?void 0:i.map((function(e){return(0,v.jsx)("option",{children:e},e)}))]})]}),(0,v.jsx)(r.YR,{className:"mb-3",children:(0,v.jsxs)(r.rb,{className:"",children:[(0,v.jsxs)(r.b7,{children:[(0,v.jsx)("div",{children:"Start Time"}),(0,v.jsx)("input",{className:"rounded border px-2",type:"time",id:"starttime",onChange:function(){return w()},"data-format":"HH:mm","data-template":"HH : mm",value:h})]}),(0,v.jsxs)(r.b7,{children:[(0,v.jsx)("div",{children:"End Time"}),(0,v.jsx)("input",{className:"rounded border px-2",type:"time",id:"endtime",onChange:function(){return w()},"data-format":"HH:mm","data-template":"HH : mm",value:b})]})]})}),(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,v.jsx)("div",{onClick:n,className:"",children:(0,v.jsx)(r.DW,{className:"deletebtn_icon",rounded:!0,src:m.X_})}),(0,v.jsx)("div",{onClick:function(){return function(){var e={days:C,starttime:h,endtime:b,hours:"".concat(h,"-").concat(b)};a(e)}()},children:(0,v.jsx)(r.DW,{className:"save_icon",rounded:!0,src:m.UB})})]})]})})},j=function(){var e,n=(0,c.TH)();console.log("locaion",null===n||void 0===n?void 0:n.state),console.log("gym center all details api",null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e._id);var a=(0,u.useState)(),m=(0,s.Z)(a,2),j=m[0],g=m[1],b=(0,u.useState)(),y=(0,s.Z)(b,2),_=y[0],N=y[1],C=(0,u.useState)([]),Z=(0,s.Z)(C,2),w=Z[0],q=Z[1],S=(0,u.useState)([]),k=(0,s.Z)(S,2),D=k[0],H=k[1],Y=(0,u.useState)(!1),E=(0,s.Z)(Y,2),R=(E[0],E[1],function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var a,i,s,l,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:[],i=(0,d.Z)(_),s=(0,t.Z)().mark((function e(n){var a,d,s,l,o,r,u,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(c=new FormData).append("gymid",null===(a=i[n])||void 0===a?void 0:a.gymid),c.append("user_id",null===(d=i[n])||void 0===d?void 0:d.user_id),c.append("description",null===(s=i[n])||void 0===s?void 0:s.description),c.append("equipment_brand",null===(l=i[n])||void 0===l?void 0:l.equipment_brand),c.append("equipment_name",null===(o=i[n])||void 0===o?void 0:o.equipment_name),c.append("equipments",null===(r=i[n])||void 0===r?void 0:r.equipments),c.append("equipment_model_number",null===(u=i[n])||void 0===u?void 0:u.equipment_model_number),p.bl.post("v1.0/gymequipment/add-gym-equipments",c).then((function(e){if(e.data.status){var a,t,i,d,s={equipmentsid:null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t._id,name:null===e||void 0===e||null===(i=e.data)||void 0===i||null===(d=i.data)||void 0===d?void 0:d.equipment_name};console.log("tempdata",s),_[n]=s,N(_)}}));case 9:case"end":return e.stop()}}),e)})),l=0;case 4:if(!(l<i.length)){e.next=9;break}return e.delegateYield(s(l),"t0",6);case 6:l++,e.next=4;break;case 9:o={gymcenterid:null===n||void 0===n||null===(a=n.state)||void 0===a?void 0:a._id,aboutus:j,gymeequipments:_,gymamenities:w,gymopenhours:D},p.bl.post("v1.0/gymcenterdetails/add-gym-center-details",o).then((function(e){console.log("res",null===e||void 0===e?void 0:e.data),e.data.status&&alert(e.data.message)}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return(0,u.useEffect)((function(){p.bl.post("v1.0/gymcenterdetails/get-gym-center-all-details",{gymcenterid:n.state._id}).then((function(e){var n,a;console.log("1xxxxxxxxxxxxxxx",e.data),e.data.status&&(N(e.data.data.gymeequipments),q(null===(n=e.data)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.gymamenities),g(e.data.data.aboutus),H(e.data.data.gymopenhours))}))}),[]),console.log("addnewequip",_),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{className:"text-medium-emphasis fs-4 mt-2",children:"Add More details"}),(0,v.jsxs)(r.YR,{className:"mb-3 w-50 pe-3",children:[(0,v.jsx)(r.wV,{children:(0,v.jsx)(o.Z,{icon:l.E})}),(0,v.jsx)(r.jO,{value:j,onChange:function(e){return g(e.target.value)},placeholder:"About Us",autoComplete:"aboutus"})]}),(0,v.jsx)(r.rb,{children:(null===_||void 0===_?void 0:_.length)>0?_.map((function(e,a){var t;return(0,v.jsx)(x,{onDelete:function(){return function(e){var n=(0,d.Z)(_),a=n.filter((function(n,a){return a!==e}));n.splice(e,1),N(a)}(a)},onSave:function(e){return function(e,n){var a=(0,d.Z)(_);a[n]=e,console.log("Dddddd",e),N(a)}(e,a)},item:e,gymid:null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t._id},a)})):""}),(0,v.jsx)("div",{className:"w-100 my-3 me-5",children:(0,v.jsx)("div",{onClick:function(){return function(){if(console.log("addddddddd",_),(0,p.xb)(_)){var e=[];e.push(""),N(e)}else{var n=(0,d.Z)(_);n.push(""),N(n)}}()},className:"addNew ms-auto",children:"+ Add Equipments"})}),(0,v.jsx)(r.rb,{children:(null===w||void 0===w?void 0:w.length)>0&&(null===w||void 0===w?void 0:w.map((function(e,n){return(0,v.jsx)(h,{onDelete:function(){return function(e){var n=(0,d.Z)(w).filter((function(n,a){return a!==e}));q(n)}(n)},onSave:function(e){return function(e,n){var a=(0,d.Z)(w);a[n]=e,q(a)}(e,n)},item:e},n)})))}),(0,v.jsx)("div",{className:"w-100 my-3 me-5",children:(0,v.jsx)("div",{onClick:function(){return function(){if((0,p.xb)(w)){var e=[];e.push(""),q(e)}else{var n=(0,d.Z)(w);n.push(""),q(n)}}()},className:"addNew ms-auto",children:"+ Add Amenities"})}),(0,v.jsx)(r.rb,{children:(null===D||void 0===D?void 0:D.length)>0?D.map((function(e,n){return(0,v.jsx)(f,{onDelete:function(){return function(e){var n=(0,d.Z)(D).filter((function(n,a){return a!==e}));H(n)}(n)},onSave:function(e){return function(e,n){var a=(0,d.Z)(D);a[n]=e,H(a)}(e,n)},data:e},n)})):""}),(0,v.jsx)("div",{className:"w-100 my-3 me-5",children:(0,v.jsx)("div",{onClick:function(){return function(){if((0,p.xb)(D)){var e=[];e.push(""),H(e)}else{var n=(0,d.Z)(D);n.push(""),H(n)}}()},className:"addNew ms-auto",children:"+ Add Trainer Schedule"})}),(0,v.jsx)(r.rb,{className:"w-100 my-5 mx-3",children:(0,v.jsx)(r.b7,{className:"me-0",children:(0,v.jsx)("div",{onClick:function(){return R()},className:"mainsavebtn px-3 py-2 float-end",children:"Save Changes"})})})]})}}}]);
//# sourceMappingURL=5186.2a11447f.chunk.js.map
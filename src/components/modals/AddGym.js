import React, { useEffect, useState } from "react"
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CFormTextarea,
    CRow,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Countries from '../../json/Countries.json'
import PropTypes from 'prop-types'
import { API, axiosInstance, isEmpty } from "src/globalfunction"
import { useNavigate } from "react-router-dom"
import ImageShow from "../ImageShow"
const AddGym= ({ isshowform, onClose,data }) => {
  // const location = useLocation();
  // console.log("addnew 00000000000000000000",data)
  const navigate=useNavigate()

  const [center_name, setCenter_name] = useState(data?.center_name)
  const [address, setAddress] = useState(data?.address)
  const [state, setState] = useState(data?.state)
  const [country, setCountry] = useState(data?.country)
  const [pincode, setPincode] = useState(data?.pincode)
  const [contact_number, setContact_number] = useState(data?.contact_number)
  const [description, setDescription] = useState(data?.description)
  const [image, setImage] = useState()
   const [districts,setDistricts]=useState(data?.district)
   const [statelist,setStatelist]=useState()
   const [districtslist,setDistrictlist]=useState()
   const [countryindex,setCountryindex]=useState()
   const [updateimage,setUpdateimage]=useState(data?.photos)
   const [gstnumber,setGstnumber]=useState()
   const [email,setEmail]=useState()
   const [password,setPassword]=useState()
   const [centertype,setCentertype]=useState()
   const [usertypelist,setUserTypelist]=useState([])
   console.log('data',center_name,address,state)

   const onLoad=()=>{
    API.get('v1.0/role/get-role').then(res=>{
     console.log("Res",res)
     if(res.data.status){
       setUserTypelist(res.data.data)
     }
     else{
       setUserTypelist(usertypelist)
     }
     }).catch(err=>{
      console.log('error',err)
      alert('network error',err);
      navigate('/404')
     })
}

useEffect(()=>{

 onLoad()
},[])

const  onSelectstate=(e)=>{
    setState(e.target.value)
    let stateindexvalue= Countries[countryindex]?.states.findIndex(x=>x.state==e.target.value)
    setDistrictlist(Countries[countryindex]?.states[stateindexvalue]?.districts)
 
}

const onSelectCountry=(e)=>{
   let countryindexvalue= Countries?.findIndex(x=>x.country_name==e.target.value)
   setCountry(e.target.value)
   setCountryindex(countryindexvalue)
   setStatelist(Countries[countryindexvalue]?.states)

}
  const onCreateAccount = async () => {
    if (!isEmpty(center_name) && !isEmpty(address) &&
      !isEmpty(country) && !isEmpty(state) && !isEmpty(pincode)
      &&!isEmpty(districts) &&
      !isEmpty(description) && !isEmpty(contact_number) && !isEmpty(description)
    ) {
      const formdata = new FormData()

      formdata.append("center_name", center_name);
      formdata.append("address", address);
      formdata.append("state", state);
      formdata.append("country", country);
      formdata.append("pincode", pincode);
      formdata.append("contact_number", contact_number);
      formdata.append("description", description);
      formdata.append("district", districts);
      formdata.append("gstnumber",gstnumber);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("created_by_userid", localStorage.getItem("userid"));
      formdata.append("centertype",centertype);


      if(image?.length > 0){
          for(var k=0, len = image?.length; k < len; k++){               
            
              var file = image[k];
              formdata.append("image", file);
         
          }
      }
      
      await API.post('v1.0/gymcenter/gymcenter-register', formdata).then(res => {
      console.log("dddddddddd-",res?.data?.status)
        if (res?.data?.status === true) {
       alert(res?.data?.message)
          navigate('/lists/allvendorlist')
          
        }
        else{
          alert(res?.data?.message)
        }
    
      })


    }
    else {
      alert("Missing field")
    }
  }
 
  const onUpdateAccount=async()=>{

    const formdata = new FormData()

    formdata.append("center_name", isEmpty(center_name)?data?.center_name:center_name);
    formdata.append("address",isEmpty(address)?data?.address:address);
    formdata.append("state", isEmpty(state)?data?.state:state);
    formdata.append("country",isEmpty(country)?data?.country: country);
    formdata.append("pincode", isEmpty(pincode)?data?.pincode: pincode);
    formdata.append("contact_number",isEmpty(contact_number)?data?.contact_number:contact_number);
    formdata.append("description", isEmpty(description)?data?.description:description);
    formdata.append("district", isEmpty(districts)?data?.district:districts);
    formdata.append("_id", data?._id);
    formdata.append("photos", data?.photos);
    formdata.append("gstnumber",gstnumber);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("created_by_userid", localStorage.getItem("userid"));
    formdata.append("centertype",centertype);
   


    if(image?.length > 0){
        for(var k=0, len = image.length; k < len; k++){               
          
            var file = image[k];
            formdata.append("image", file);
       
        }
    }
 await API.put('v1.0/gymcenter/update-gym-center-data', formdata).then(res => {
    
     if (res?.data?.status === true) {
        alert(res?.data?.message)
        // navigate('/lists/allgymlist')
        navigate('/lists/allvendorlist')
        onClose()
        console.log('updated gym data',res?.data,data)
      }
  
    })

  }
const onDeletePhoto=(index)=>{
  console.log("index",index)
  const filtere=data?.photos?.filter((val,index)=>index!==index)
data?.photos?.splice(index,1); 
 
 setUpdateimage(...data?.photos)
}


 return (
        <CModal fullscreen="md" visible={isshowform}
            onClose={()=>onClose()}>
            <CModalHeader>
                   <CModalTitle>{!isEmpty(data?._id)?'Update  Details':'Add Details '}</CModalTitle>
            </CModalHeader>
            <CModalBody className="px-4 py-3 border mx-4 my-3 modal-shadow rounded">
             
                 <p className="text-medium-emphasis">{`${isEmpty(data?._id)?"Create":"Update"} your  account`}</p>
                  <CRow>
                    <CCol>
                      {/* gym center name */}
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          {/* <CIcon icon={cilUser} /> */}
                          <i className="fa fa-user"></i>
                        </CInputGroupText>
                        <CFormInput
                        defaultValue={data?.center_name}
                        value={center_name}
                          onChange={(e) => setCenter_name(e.target.value)}
                          placeholder="Center name" autoComplete="centername" />
                      </CInputGroup> 
                    </CCol>
                    <CCol>

                    {/*contact_number  */}
                    <CInputGroup className="mb-3">
                      {/* <CInputGroupText>@</CInputGroupText> */}
                      <CInputGroupText>
                      <i className="fa fa-phone"></i>
                     </CInputGroupText>
                      <CFormInput
                      value={contact_number}
                      defaultValue={data?.contact_number}
                        onChange={(e) => setContact_number(e.target.value)}
                        placeholder="Contact Number" autoComplete="contactnumber" />
                    </CInputGroup> 
  
                    </CCol>
                  </CRow>
                 

                    {/* address */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        {/* <CIcon icon={cilUser} /> */}
                        <i className="fa fa-home"></i>
                      </CInputGroupText>
                      <CFormInput
                        defaultValue={data?.address}
                      value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address" autoComplete="address" />
                    </CInputGroup> 
                

                    
                    <CRow>
                      <CCol>
                        {/*email */}
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            {/* <CIcon icon={cilUser} /> */}
                            <i className="fa fa-envelope"></i>
                          </CInputGroupText>
                          <CFormInput
                            defaultValue={data?.email}
                          value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email" autoComplete="address" />
                        </CInputGroup> 
                      </CCol>
                      <CCol>
                        {/* password */}
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            {/* <CIcon icon={cilUser} /> */}
                            <i className="fa fa-lock"></i>
                          </CInputGroupText>
                          <CFormInput
                            defaultValue={data?.password}
                          value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password" autoComplete="address" />
                        </CInputGroup> 
                      </CCol>
                    </CRow>

                 <CRow>
                  <CCol>
                  {/* {'country'} */}
                  <CInputGroup className="mb-3">
                        <CInputGroupText>
                        <i className="fa fa-flag"></i>
                        </CInputGroupText>

                        <CFormSelect id="country"
                            defaultValue={data?.country}
                        value={country}
                        onChange={(e)=>onSelectCountry(e)} >
                          <option>Choose Your Country...</option>
                          {Countries?.map((item) => (
                            <option key={item.code}>{item.country_name}</option>
                          ))}
                        </CFormSelect>
                      </CInputGroup>
                  </CCol>
                    <CCol>
                      {/* {'state'} */}
                      <CInputGroup className="mb-3">
                    <CInputGroupText>
                    <i className="fa fa-map-pin"></i>
                    </CInputGroupText>

                    <CFormSelect id="state" 
                        defaultValue={data?.state}
                    value={state}
                    onChange={(e) => onSelectstate(e)} >
                      <option>Choose Your State...</option>
                      {statelist?.map((item,index) => (
                        <option key={item.value}>{item.state}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                    </CCol>
                    <CCol>
                          {/* {'district'} */}
                          <CInputGroup className="mb-3">
                    <CInputGroupText>
                    <i className="fa fa-map-pin"></i>
                    </CInputGroupText>
                  <CFormSelect id="distict" 
                   defaultValue={data?.district}
                  value={districts}
                 onChange={(e) => setDistricts(e.target.value)}  >
                      <option>Choose Your Disricts...</option>
                      {districtslist?.map((item,index) => (
                        <option key={item}>{item}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                    </CCol>
                 </CRow>

                 
                 <CRow>
                  <CCol>
                    {/* {'center type'} */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <i className="fa fa-location-arrow"></i>
                      </CInputGroupText>

                      <CFormSelect id="country"
                          defaultValue={data?.centertype}
                      value={centertype}
                      onChange={(e)=>setCentertype(e.target.value)} >
                        <option>Choose Your centertype...</option>
                        {usertypelist?.map((item) => (
                          <option key={item.rolename}>{item.rolename}</option>
                        ))}
                      </CFormSelect>
                    </CInputGroup>
                  </CCol>
                  <CCol>
                    {/*pincode  */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                      <i className="fa fa-map-pin"></i>
                      </CInputGroupText>
                      <CFormInput
                        defaultValue={data?.pincode}
                      value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="Pincode" autoComplete="pincode" />
                    </CInputGroup> 
                  </CCol>
                  <CCol>
                     {/* gst number */}
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                          {/* <CIcon icon={cilUser} /> */}
                          <i className="fa fa-user"></i>
                        </CInputGroupText>
                        <CFormInput
                          defaultValue={data?.gstnumber}
                        value={gstnumber}
                          onChange={(e) => setGstnumber(e.target.value)}
                          placeholder="Gst number" autoComplete="address" />
                      </CInputGroup> 
                  </CCol>
                 </CRow>

                      {/*description*/}
                      <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <i className="fa fa-comment"></i>
                    </CInputGroupText>
                    <CFormInput
                      defaultValue={data?.description}
                    value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description" autoComplete="description" />
                  </CInputGroup> 
           
                 <CInputGroup className="mb-3">
                    <CInputGroupText>
                     <i className="fa fa-image"></i>
                    </CInputGroupText>
                    <CFormInput
                      onChange={(event) => {setImage(event.target.files);
                      }}
                      type="file"
                      accept="image/*"
                      placeholder="Please Enter your image"
                      multiple
                    />
                  </CInputGroup> 

                   <div>
                        {data?.photos?.map((item,index)=>
                        <div key={index}>
                          <div onClick={()=>onDeletePhoto(index)} style={{color:'red' }}>X</div>
                        <ImageShow imageurl={item}/>
                        </div>
                        )}
                      </div>
                      {isEmpty(data?._id)?(
                  <div className="d-grid " 
                 onClick={() => onCreateAccount()}>
                    <CButton className="update_btn">Create Account</CButton>
                  </div>):( <div className="d-grid" 
                 onClick={() => onUpdateAccount()}>
                    <CButton className="update_btn">Update Account</CButton>
                  </div>)}
              
    
            </CModalBody>
        </CModal>
    )
}
export default AddGym
AddGym.propTypes = {
    isshowform: PropTypes.bool,
    onClose: PropTypes.func,
    data:PropTypes.object
};


// import React, { useEffect, useState } from "react"
// import {
//     CButton,
//     CCard,
//     CCardBody,
//     CCol,
//     CContainer,
//     CForm,
//     CFormInput,
//     CFormLabel,
//     CFormSelect,
//     CInputGroup,
//     CInputGroupText,
//     CFormTextarea,
//     CRow,
//     CModal,
//     CModalHeader,
//     CModalTitle,
//     CModalBody
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import Countries from '../../json/Countries.json'
// import PropTypes from 'prop-types'
// import { API, axiosInstance, isEmpty } from "src/globalfunction"
// import { useNavigate } from "react-router-dom"
// import ImageShow from "../ImageShow"
// const AddGym= ({ isshowform, onClose,data }) => {
//   // const location = useLocation();
//   console.log("addnew 00000000000000000000",data)
//   const navigate=useNavigate()

//   const [center_name, setCenter_name] = useState(data?.center_name)
//   const [address, setAddress] = useState(data?.address)
//   const [state, setState] = useState(data?.state)
//   const [country, setCountry] = useState(data?.country)
//   const [pincode, setPincode] = useState(data?.pincode)
//   const [contact_number, setContact_number] = useState(data?.contact_number)
//   const [description, setDescription] = useState(data?.description)
//   const [image, setImage] = useState()
//    const [districts,setDistricts]=useState(data?.district)
//    const [statelist,setStatelist]=useState()
//    const [districtslist,setDistrictlist]=useState()
//    const [countryindex,setCountryindex]=useState()
//    const [updateimage,setUpdateimage]=useState(data?.photos)
//    const [gstnumber,setGstnumber]=useState()
//    const [email,setEmail]=useState()
//    const [password,setPassword]=useState()
//    const [centertype,setCentertype]=useState()
//    const [usertypelist,setUserTypelist]=useState([])
//    const onLoad=()=>{
//     API.get('v1.0/role/get-role').then(res=>{
//      console.log("Res",res)
//      if(res.data.status){
//        setUserTypelist(res.data.data)
//      }
//      else{
//        setUserTypelist(usertypelist)
//      }
//      })
// }

// useEffect(()=>{

//  onLoad()
// },[])

// const  onSelectstate=(e)=>{
//     setState(e.target.value)
//     let stateindexvalue= Countries[countryindex]?.states.findIndex(x=>x.state==e.target.value)
//     setDistrictlist(Countries[countryindex]?.states[stateindexvalue]?.districts)
 
// }

// const onSelectCountry=(e)=>{
//    let countryindexvalue= Countries?.findIndex(x=>x.country_name==e.target.value)
//    setCountry(e.target.value)
//    setCountryindex(countryindexvalue)
//    setStatelist(Countries[countryindexvalue]?.states)

// }
//   const onCreateAccount = async () => {
//     if (!isEmpty(center_name) && !isEmpty(address) &&
//       !isEmpty(country) && !isEmpty(state) && !isEmpty(pincode)
//       &&!isEmpty(districts) &&
//       !isEmpty(description) && !isEmpty(contact_number) && !isEmpty(description)
//     ) {
//       const formdata = new FormData()

//       formdata.append("center_name", center_name);
//       formdata.append("address", address);
//       formdata.append("state", state);
//       formdata.append("country", country);
//       formdata.append("pincode", pincode);
//       formdata.append("contact_number", contact_number);
//       formdata.append("description", description);
//       formdata.append("district", districts);
//       formdata.append("gstnumber",gstnumber);
//       formdata.append("email", email);
//       formdata.append("password", password);
//       formdata.append("created_by_userid", localStorage.getItem("userid"));
//       formdata.append("centertype",centertype);


//       if(image?.length > 0){
//           for(var k=0, len = image?.length; k < len; k++){               
            
//               var file = image[k];
//               formdata.append("image", file);
         
//           }
//       }
      
//       await API.post('v1.0/gymcenter/gymcenter-register', formdata).then(res => {
      
//         if (res?.data?.status === true) {
//        alert(res?.data?.message)
//           navigate('/lists/allgymlist')
          
//         }
//         else{
//           alert(res?.data?.message)
//         }
    
//       })


//     }
//     else {
//       alert("Missing field")
//     }
//   }
 
//   const onUpdateAccount=async()=>{

//     const formdata = new FormData()

//     formdata.append("center_name", isEmpty(center_name)?data?.center_name:center_name);
//     formdata.append("address",isEmpty(address)?data?.address:address);
//     formdata.append("state", isEmpty(state)?data?.state:state);
//     formdata.append("country",isEmpty(country)?data?.country: country);
//     formdata.append("pincode", isEmpty(pincode)?data?.pincode: pincode);
//     formdata.append("contact_number",isEmpty(contact_number)?data?.contact_number:contact_number);
//     formdata.append("description", isEmpty(description)?data?.description:description);
//     formdata.append("district", isEmpty(districts)?data?.district:districts);
//     formdata.append("_id", data?._id);
//     formdata.append("photos", data?.photos);
//     formdata.append("gstnumber",gstnumber);
//     formdata.append("email", email);
//     formdata.append("password", password);
//     formdata.append("created_by_userid", localStorage.getItem("userid"));
//     formdata.append("centertype",centertype);
   


//     if(image?.length > 0){
//         for(var k=0, len = image.length; k < len; k++){               
          
//             var file = image[k];
//             formdata.append("image", file);
       
//         }
//     }
//  await API.put('v1.0/gymcenter/update-gym-center-data', formdata).then(res => {
  
//      if (res?.data?.status === true) {
//         alert(res?.data?.message)
//         navigate('/lists/allgymlist')
//         onClose()
//       }
  
//     })

//   }
// const onDeletePhoto=(index)=>{
//   console.log("index",index)
//   const filtere=data?.photos?.filter((val,index)=>index!==index)
// data?.photos?.splice(index,1); 
 
//  setUpdateimage(...data?.photos)
// }



//  return (
//         <CModal fullscreen="md" visible={isshowform}
//             onClose={()=>onClose()}>
//             <CModalHeader>
//                    <CModalTitle>{!isEmpty(data?._id)?'Update  Details':'Add Details '}</CModalTitle>
//             </CModalHeader>
//             <CModalBody>
             
//                  <p className="text-medium-emphasis">{`${isEmpty(data?._id)?"Create":"Update"} your  account`}</p>

//                   {/* gym center name */}
//                  <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                      defaultValue={data?.center_name}
//                     value={center_name}
//                       onChange={(e) => setCenter_name(e.target.value)}
//                       placeholder="Center name" autoComplete="centername" />
//                   </CInputGroup> 


//                   {/* address */}
//                  <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                        defaultValue={data?.address}
//                      value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       placeholder="Address" autoComplete="address" />
//                   </CInputGroup> 
//   {/* emailid */}
//   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                      defaultValue={data?.email}
//                     value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Email" autoComplete="email" />
//                   </CInputGroup> 

//                      {/* gst number */}
//                  <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                        defaultValue={data?.gstnumber}
//                      value={gstnumber}
//                       onChange={(e) => setGstnumber(e.target.value)}
//                       placeholder="Gst number" autoComplete="address" />
//                   </CInputGroup> 

//                      {/*email */}
//                  <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                        defaultValue={data?.email}
//                      value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter email" autoComplete="address" />
//                   </CInputGroup> 
//                   {/* password */}
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                        defaultValue={data?.password}
//                      value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter password" autoComplete="address" />
//                   </CInputGroup> 

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>

//                     <CFormSelect id="country"
//                         defaultValue={data?.centertype}
//                      value={centertype}
//                     onChange={(e)=>setCentertype(e.target.value)} >
//                       <option>Choose Your centertype...</option>
//                       {usertypelist?.map((item) => (
//                         <option key={item.rolename}>{item.rolename}</option>
//                       ))}
//                     </CFormSelect>
//                   </CInputGroup>
//             <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>

//                     <CFormSelect id="country"
//                         defaultValue={data?.country}
//                      value={country}
//                     onChange={(e)=>onSelectCountry(e)} >
//                       <option>Choose Your Country...</option>
//                       {Countries?.map((item) => (
//                         <option key={item.code}>{item.country_name}</option>
//                       ))}
//                     </CFormSelect>
//                   </CInputGroup>

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>

//                     <CFormSelect id="state" 
//                         defaultValue={data?.state}
//                     value={state}
//                     onChange={(e) => onSelectstate(e)} >
//                       <option>Choose Your State...</option>
//                       {statelist?.map((item,index) => (
//                         <option key={item.value}>{item.state}</option>
//                       ))}
//                     </CFormSelect>
//                   </CInputGroup>

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>
//                   <CFormSelect id="distict" 
//                    defaultValue={data?.district}
//                   value={districts}
//                  onChange={(e) => setDistricts(e.target.value)}  >
//                       <option>Choose Your Disricts...</option>
//                       {districtslist?.map((item,index) => (
//                         <option key={item}>{item}</option>
//                       ))}
//                     </CFormSelect>
//                   </CInputGroup>
//  {/*user_type*/}
//  <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>

//                     <CFormSelect id="user_type" onChange={(e) => setUser_type(e.target.value)}>
//                       <option>Choose UserType...</option>
//                       {userTypelist?.map((item) => (
//                         <option key={item?._id}>{item?.rolename}</option>
//                       ))}
//                     </CFormSelect>
//                   </CInputGroup>
//                           {/*pincode  */}
//                           <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>
//                     <CFormInput
//                        defaultValue={data?.pincode}
//                     value={pincode}
//                       onChange={(e) => setPincode(e.target.value)}
//                       placeholder="Pincode" autoComplete="pincode" />
//                   </CInputGroup> 


//                        {/*contact_number  */}
//                        <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>
//                     <CFormInput
//                     value={contact_number}
//                     defaultValue={data?.contact_number}
//                       onChange={(e) => setContact_number(e.target.value)}
//                       placeholder="Contact Number" autoComplete="contactnumber" />
//                   </CInputGroup> 

//                       {/*description*/}
//                       <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>
//                     <CFormInput
//                       defaultValue={data?.description}
//                     value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       placeholder="Description" autoComplete="description" />
//                   </CInputGroup> 
           
//                  <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       *
//                     </CInputGroupText>
//                     <CFormInput
//                       onChange={(event) => {setImage(event.target.files);
//                       }}
//                       type="file"
//                       accept="image/*"
//                       placeholder="Please Enter your image"
//                       multiple
//                     />
//                   </CInputGroup> 

//                    <div>
//                         {data?.photos?.map((item,index)=>
//                         <div key={index}>
//                           <div onClick={()=>onDeletePhoto(index)} style={{color:'red' }}>X</div>
//                         <ImageShow imageurl={item}/>
//                         </div>
//                         )}
//                       </div>
//                       {isEmpty(data?._id)?(
//                   <div className="d-grid" 
//                  onClick={() => onCreateAccount()}>
//                     <CButton color="success">Create Account</CButton>
//                   </div>):( <div className="d-grid" 
//                  onClick={() => onUpdateAccount()}>
//                     <CButton color="success">Update Account</CButton>
//                   </div>)}
              
    
//             </CModalBody>
//         </CModal>
//     )
// }
// export default AddGym
// AddGym.propTypes = {
//     isshowform: PropTypes.bool,
//     onClose: PropTypes.func,
//     data:PropTypes.object
// };
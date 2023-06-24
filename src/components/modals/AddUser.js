import React, { useState, useEffect } from 'react'
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
  CRow,
  CImage,
  CAlert,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilEnvelopeClosed, cilBurn } from '@coreui/icons'
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { API, axiosInstance, isEmpty, baseurl } from 'src/globalfunction'
import axios from 'axios';
import * as Images from "../../assets";
import PropTypes from 'prop-types';
import ImageShow from "../ImageShow";

const AddUser = ({ isshowform, onClose, data }) => {
  const genderlist = ["Male", "Female"]
  const usertypelist = [{ _di: "1", rolename: "admin" }, { _di: "2", rolename: "superadmin" }]
  const navigate = useNavigate()
  const location = useLocation();

  const [first_name, setFirst_name] = useState(data?.first_name)

  const [last_name, setLast_name] = useState(data?.last_name)
  const [email, setEmail] = useState(data?.email)

  const [password, setPassword] = useState(data?.password)

  const [post_code, setPost_code] = useState(data?.post_code)
  const [description, setDescription] = useState(data?.description)
  const [user_type, setUser_type] = useState(data?.user_type)
  const [gender, setGender] = useState(data?.gender)
  const [image, setImage] = useState()
  const [userTypelist, setUserTypelist] = useState(data?.user_type);
  const [allemptyfield, setAllemptyfield] = useState(false);
  const [updateimage, setUpdateimage] = useState();

  const onCreateAccount = async () => {

    if (!isEmpty(first_name) &&
      !isEmpty(email) && !isEmpty(password) && !isEmpty(post_code)
      &&
      !isEmpty(description) && !isEmpty(user_type) && !isEmpty(gender)
    ) {
      const formdata = new FormData()

      // formdata.append("first_name", isEmpty(first_name)?data?.first_name:first_name);
      // formdata.append("last_name", isEmpty(last_name)?data?.last_name:last_name);
      // formdata.append("email",isEmpty(email)?data?.email:email);
      // formdata.append("password", isEmpty(password)?data?.password:password);
      // formdata.append("post_code", isEmpty(post_code)?data?.post_code:post_code);
      // formdata.append("description", isEmpty(description)?data?.description:description);
      // formdata.append("user_type",isEmpty(user_type)?data?.user_type:user_type );
      // formdata.append("gender", isEmpty(gender)?data?.gender:gender);
      // formdata.append("image", image);
      formdata.append("first_name", isEmpty(first_name));
      formdata.append("last_name", last_name);
      formdata.append("email", isEmpty(email));
      formdata.append("password", isEmpty(password));
      formdata.append("post_code", isEmpty(post_code));
      formdata.append("description", isEmpty(description));
      formdata.append("user_type", isEmpty(user_type));
      formdata.append("gender", isEmpty(gender));
      // formdata.append("image", image);
      if (image?.length > 0) {
        for (var k = 0, len = image?.length; k < len; k++) {

          var file = image[k];
          formdata.append("image", isEmpty(file));

        }
      }
      await API.post('v1.0/user/register', formdata).then(res => {
        console.log('user res',res)
        alert(res?.data?.message)
        // console.log("user", res.data)
        if (res?.data?.status === true) {
          setAllemptyfield(false)
          alert(res?.data?.message)
          navigate('/lists/userslist')
          // navigate('dashboard')
        }
        setAllemptyfield(true)
      })


      }
      else {
        alert("Missing field");
        setAllemptyfield(true)

      // }
    }
  }
  // console.log('data',first_name,last_name,email,password,post_code,description,user_type,gender,image)
  const onUpdateAccount = async () => {

    const formdata = new FormData()
    formdata.append("user_id", data?._id);
    formdata.append("first_name", isEmpty(first_name) ? data?.first_name : first_name);
    formdata.append("last_name", isEmpty(last_name) ? data?.last_name : last_name);
    formdata.append("email", isEmpty(email) ? data?.email : email);
    formdata.append("password", isEmpty(password) ? data?.password : password);
    formdata.append("post_code", isEmpty(post_code) ? data?.post_code : post_code);
    formdata.append("description", isEmpty(description) ? data?.description : description);
    formdata.append("user_type", isEmpty(user_type) ? data?.user_type : user_type);
    formdata.append("gender", isEmpty(gender) ? data?.gender : gender);
    // formdata.append("image", data?.photo);


    if (image?.length > 0) {
      for (var k = 0, len = image.length; k < len; k++) {

        var file = image[k];
        formdata.append("image", file);

      }
    }

    await API.put('v1.0/user/update-user', formdata).then(res => {
      console.log('update data', res?.data, data)
      // console.log('update data',data)
      if (res?.data?.status === true) {
        alert(res?.data?.message)
        // navigate('/lists/userslist')
        // navigate('/lists/allvendorlist')
        onClose()
      }

    })

  }
  const onLoad = () => {
    API.get('v1.0/role/get-role').then(res => {
      // console.log('res dara ', res?.data)
      if (res.data.status) {
        setUserTypelist(res.data.data)
        // console.log('data', res.data.data)
      }
      else {
        setUserTypelist(usertypelist)
      }
    })
  }
  useEffect(() => {

    onLoad()

  }, []);

  const onDeletePhoto = (data) => {
    const updatedObject = { ...data };
    delete updatedObject.photo;
    // setUpdateimage(updatedObject?.photo)

    console.log('updatedObject', updatedObject);
    onClose()
    // console.log("index", data?.photo);
    // console.log("index",data.photo); 
    //   const filtere=data?.photos?.filter((val,index)=>index!==index)
    // data?.photos?.splice(index,1); 
    // delete data?.photo
    // delete Object.values(data?.photo)

    // console.log('dara',data);
    // onClose()
    // navigate('/lists/userslist')

    // setUserTypelist(data)
  }
  console.log('update iamge', updateimage)
  // console.log('userTypelist',userTypelist)

  // console.log('data', first_name, last_name, email, password, post_code, description, user_type, gender, image)

  // console.log('update data', updateimage)
  return (
    // <div className="min-vh-100 d-flex flex-row align-items-center register"
    //   style={{
    //     backgroundImage: `url(${Images.registration})`,
    //   }}
    // >
    <CModal fullscreen="md" visible={isshowform}
      onClose={onClose}>
      <CModalHeader>
        <CModalTitle>{isEmpty(data?._id) ?'Add User':"Update User"}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {/* <CContainer className='ms-0'> */}
        <CRow className="border mx-4 my-3 modal-shadow rounded">
          <CCol className='px-4 py-3'>
            {/* <CCard className="mx-4"> */}
            {/* <CCardBody className="p-4 register-box"> */}
            {/* <CContainer className='login-img my-2'>
                  <CImage rounded src={Images.logo} width={300} height={300} className='login-logo' />
                </CContainer> */}
            <CForm className='text-start'>
              {/* <h3 className='m-4'>Register</h3> */}
              <p className="text-medium-emphasis">{"Update your  account"}</p>
              {/* <p className="text-medium-emphasis">Create your account</p> */}


              <CRow>
                <CCol>
                  {/* First name */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      {/* <CIcon icon={cilUser} /> */}
                      <i className="fa fa-user"></i>
                    </CInputGroupText>
                    <CFormInput
                      defaultValue={data?.first_name}
                      value={first_name}
                      onChange={(e) => setFirst_name(e.target.value)}
                      placeholder="First Name" autoComplete="firstname" />
                  </CInputGroup>
                </CCol>

                <CCol>
                  {/* Last name */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      {/* <CIcon icon={cilUser} /> */}
                      <i className="fa fa-user"></i>
                    </CInputGroupText>
                    <CFormInput
                      defaultValue={data?.last_name}
                      value={last_name}
                      onChange={(e) => setLast_name(e.target.value)}
                      placeholder="Last Name" autoComplete="lastname" />
                  </CInputGroup>
                </CCol>
              </CRow>

              <CRow>
                <CCol>
                  {/*email  */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      {/* <CIcon icon={cilEnvelopeClosed} /> */}
                      <i className="fa fa-envelope"></i>
                    </CInputGroupText>
                    <CFormInput
                      defaultValue={data?.email}
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                </CCol>

                <CCol>
                  {/*email  password*/}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      {/* <CIcon icon={cilLockLocked} /> */}
                      <i className="fa fa-lock"></i>
                    </CInputGroupText>
                    <CFormInput
                      defaultValue={data?.password}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                </CCol>
              </CRow>

              <CRow>
                <CCol>
                  {/*post_code  */}
                  <CInputGroup className="mb-3">
                    {/* <CInputGroupText>@</CInputGroupText> */}
                    <CInputGroupText>
                      <i className="fa fa-map-pin"></i>
                    </CInputGroupText>
                    <CFormInput
                      defaultValue={data?.post_code}
                      value={post_code}
                      type="number"
                      onChange={(e) => setPost_code(e.target.value)}
                      placeholder="Post code" autoComplete="post_code" />
                  </CInputGroup>
                </CCol>
                <CCol>
                  {/*user_type*/}
                  <CInputGroup className="mb-3">
                    {/* <CInputGroupText>@</CInputGroupText> */}
                    <CInputGroupText>
                      <i className="fa fa-location-arrow"></i>
                    </CInputGroupText>
                    <CFormSelect id="user_type"
                      defaultValue={data?.user_type}
                      value={user_type}
                      onChange={(e) => setUser_type(e.target.value)}>
                      <option>Choose UserType...</option>
                      {userTypelist?.map((item) => (
                        <option key={item?.rolename}>{item?.rolename}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                </CCol>
                <CCol>
                  {/*gender  */}
                  <CInputGroup className="mb-3">
                    {/* <CInputGroupText>@</CInputGroupText> */}
                    <CInputGroupText>
                      <i className='fa fa-mercury'></i>
                    </CInputGroupText>

                    <CFormSelect id="gender"
                      defaultValue={data?.gender}
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}>
                      <option>Choose Gender...</option>
                      {genderlist?.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                </CCol>
              </CRow>

              {/*description  */}
              <CInputGroup className="mb-3">
                {/* <CInputGroupText>@</CInputGroupText> */}
                <CInputGroupText>
                  <i className="fa fa-comment"></i>
                </CInputGroupText>
                <CFormInput
                  defaultValue={data?.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description" autoComplete="description" />
              </CInputGroup>



              {/*image*/}
              <CInputGroup className="mb-3">
                {/* <CInputGroupText>
                      *
                    </CInputGroupText> */}
                <CInputGroupText>
                  <i className="fa fa-image"></i>
                </CInputGroupText>
                <CFormInput
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                  type="file"
                  accept="image/*"
                  placeholder="Please Enter your image"
                />
              </CInputGroup>

              {allemptyfield && (
                <CAlert color="danger" className="d-flex align-items-center px-1 py-2">
                  <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
                  <div>Please enter all the fields</div>
                </CAlert>
              )
              }


              {!isEmpty(data?.photo) &&
                <div>
                  <div onClick={() => onDeletePhoto(data)} style={{ color: 'red' }}>X</div>
                  <ImageShow imageurl={data?.photo} />
                </div>}



              {/* <div className="d-grid" onClick={() => onCreateAccount()}>
                    <CButton className="login-btn border border-0 fw-bold" style={{ backgroundColor: '#ff5721' }} >
                      Create Account
                    </CButton>
                  </div> */}
              {isEmpty(data?._id) ? (
                <div className="d-grid "
                  onClick={() => onCreateAccount()}>
                  <CButton className="update_btn">Create Account</CButton>
                </div>) : (<div className="d-grid"
                  onClick={() => onUpdateAccount()}>
                  <CButton className="update_btn">Update Account</CButton>
                </div>)}
            </CForm>
            {/* </CCardBody> */}
            {/* </CCard> */}
          </CCol>
        </CRow>
        {/* </CContainer> */}
        {/* </div> */}
      </CModalBody>
    </CModal>
  )
}

export default AddUser
AddUser.propTypes = {
  isshowform: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,

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
// const AddUser = ({ isshowform, onClose, data }) => {
//     const [rolename, setRolename] = useState(data?.rolename)
//     const onAddNew = () => {
//         if (!isEmpty(rolename)) {
//             axiosInstance.post('v1.0/role/add-role', { rolename: rolename }).then(res => {
//                 console.log("role", res.data)
//                 if (res.data.status) {
//                     alert(res.data.message)
//                     onClose()
//                 }
//                 else {
//                     alert(res.data.message)
//                 }
//             })
//         }
//         else {
//             alert("Please Enter your missing field")
//         }
//     }

//     const onUpdate = () => {
//         let body = {
//             _id: data?._id,
//             rolename: rolename
//         }
//         try {
//             axiosInstance.put('v1.0/role/update-role', body).then(res => {
//                 if (res.data.status) {
//                     alert(res.data.message)
//                     onClose()
//                 }
//                 else {
//                     alert(res.data.message)
//                 }
//             })
//         }
//         catch (err) {
//             alert("Something went wrong")
//         }
//     }

//     return (
//         <CModal fullscreen="md" visible={isshowform}
//             onClose={onClose}>
//             <CModalHeader>
//                 <CModalTitle>Add New Role</CModalTitle>
//             </CModalHeader>
//             <CModalBody>

//                 <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>
//                     <CFormInput
//                         defaultValue={!isEmpty(data?._id) ? data?.rolename : rolename}
//                         value={rolename}
//                         onChange={(e) => setRolename(e.target.value)}
//                         placeholder="Enter your role name" autoComplete="rolename" />
//                 </CInputGroup>

//                 <div className="d-grid" onClick={() => !isEmpty(data?._id) ? onUpdate() : onAddNew()}>
//                     <CButton className="update_btn">{!isEmpty(data?._id) ? "Update Role" : "Add New Role"}</CButton>
//                 </div>

//             </CModalBody>
//         </CModal>
//     )
// }
// export default AddUser
// AddUser.propTypes = {
//     isshowform: PropTypes.bool,
//     onClose: PropTypes.func,
//     data: PropTypes.object
// };
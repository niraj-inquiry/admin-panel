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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilEnvelopeClosed, cilBurn } from '@coreui/icons'
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { API, axiosInstance, isEmpty } from 'src/globalfunction'
import axios from 'axios';
import * as Images from "../../../assets";

const Register = () => {
  const genderlist = ["Male", "Female"]
  const usertypelist = [{ _di: "1", rolename: "admin" }, { _di: "2", rolename: "superadmin" }]
  const navigate = useNavigate();
  const location = useLocation();

  const [first_name, setFirst_name] = useState()

  const [last_name, setLast_name] = useState()
  const [email, setEmail] = useState()

  const [password, setPassword] = useState()

  const [post_code, setPost_code] = useState()
  const [description, setDescription] = useState()
  const [user_type, setUser_type] = useState()
  const [gender, setGender] = useState()
  const [image, setImage] = useState()
  const [userTypelist, setUserTypelist] = useState();
  const [allemptyfield, setAllemptyfield] = useState(false)

  const onCreateAccount = async () => {
    if (!isEmpty(first_name) && 
      !isEmpty(email) && !isEmpty(password) && !isEmpty(post_code)
      &&
      !isEmpty(description) && !isEmpty(user_type) && !isEmpty(gender)
    ) {
      const formdata = new FormData()

      formdata.append("first_name", first_name);
      formdata.append("last_name", last_name);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("post_code", post_code);
      formdata.append("description", description);
      formdata.append("user_type", user_type);
      formdata.append("gender", gender);
      formdata.append("image", image);
      await API.post('v1.0/user/register', formdata).then(res => {
        console.log("user", res.data.data)
        if (res?.data?.status === true) {
          setAllemptyfield(false)
          alert(res?.data?.message)
          // navigate('/lists/userslist')
          if((res.data.data.user_type).toLowerCase()==='admin'||(res.data.data.user_type).toLowerCase()==='superadmin')
          {
           navigate('dashboard')
         }
         else{
           alert("Invalid user")
         }
        }
        setAllemptyfield(true)
      })


    }
    else {
      alert("Missing field");
      setAllemptyfield(true)

    }
  }

  const onLoad = () => {
    API.get('v1.0/role/get-role').then(res => {

      if (res.data.status) {
        setUserTypelist(res.data.data)
      }
      else {
        setUserTypelist(usertypelist)
      }
    })
  }

  useEffect(() => {

    onLoad()
  }, [])
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center register"
      style={{
        backgroundImage: `url(${Images.registration})`,
      }}
    >
      <CContainer className='ms-0'>
        <CRow className="justify-content-start">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4 register-box">
                <CContainer className='login-img my-2'>
                  <CImage rounded src={Images.logo} width={300} height={300} className='login-logo' />
                </CContainer>
                <CForm className='text-center'>
                  <h3 className='m-4'>Register</h3>
                  {/* <p className="text-medium-emphasis">Create your account</p> */}


                  <CRow>
                    <CCol>
                      {/* First name */}
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          onChange={(e) => setFirst_name(e.target.value)}
                          placeholder="First Name" autoComplete="firstname" />
                      </CInputGroup>
                    </CCol>
                    
                    <CCol>
                      {/* Last name */}
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          onChange={(e) => setLast_name(e.target.value)}
                          placeholder="Last Name" autoComplete="lastname" />
                      </CInputGroup>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol>
                      {/*email  */}
                      <CInputGroup className="mb-3">
                        <CInputGroupText> <CIcon icon={cilEnvelopeClosed} /></CInputGroupText>
                        <CFormInput
                        type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email" autoComplete="email" />
                      </CInputGroup>
                    </CCol>
                    
                    <CCol>
                      {/*email  password*/}
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
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
                        <CFormInput
                        type="number"
                          onChange={(e) => setPost_code(e.target.value)}
                          placeholder="Post code" autoComplete="post_code" />
                      </CInputGroup>
                    </CCol>
                    <CCol>
                      {/*user_type*/}
                      <CInputGroup className="mb-3">
                        {/* <CInputGroupText>@</CInputGroupText> */}

                        <CFormSelect id="user_type" onChange={(e) => setUser_type(e.target.value)}>
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

                        <CFormSelect id="gender" onChange={(e) => setGender(e.target.value)}>
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
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description" autoComplete="description" />
                  </CInputGroup>



                  {/*image*/}
                  <CInputGroup className="mb-3">
                    {/* <CInputGroupText>
                      *
                    </CInputGroupText> */}
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

                  <div className="d-grid" onClick={() => onCreateAccount()}>
                    <CButton className="login-btn border border-0 fw-bold" style={{ backgroundColor: '#ff5721' }} >
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register

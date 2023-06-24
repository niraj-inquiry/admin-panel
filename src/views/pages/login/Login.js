import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilBurn } from '@coreui/icons'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { API, isEmpty, baseurl } from 'src/globalfunction'
import axios from 'axios'
import * as Images from '../../../assets'
const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [empty, setEmpty] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const onLogin = () => {
    if (!isEmpty(email) && !isEmpty(password)) {
      API.post('v1.0/user/login', {
        email: email,
        password: password,
      })
        .then((res) => {
          console.log('const ddddddddddd', res.data)
          if (res.data.status === true) {
            // alert(res.data.message)
            setError(false)
            setEmpty(false)
            localStorage.setItem('userid', res.data.data._id)
            localStorage.setItem("userdata",JSON.stringify(res.data.data))
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('usertype', res.data.usertype)
           if((res.data.usertype).toLowerCase()==='admin'||(res.data.usertype).toLowerCase()==='superadmin')
           {
            navigate('dashboard')
          }
          else{
            alert("Invalid user")
          }
          } else {
            alert(res.data.message)
            setError(true)
            setEmpty(false)
          }
        })
        .catch((e) => {
          console.log('error', e)
          navigate('/')
          alert('Something went wrong')
          setError(true)
          setEmpty(false)
        })
    } else {
      setEmpty(true)
      setError(false)
      // alert("Please Enter Email and Password");
    }
  }
  return (
    <div
      // className="bg-light min-vh-100 d-flex flex-row align-items-center"
      className="min-vh-100 d-flex flex-row align-items-center login"
      style={{
        backgroundImage: `url(${Images.login})`,
      }}
    >
      <CContainer className="">
        <CRow className="justify-content-end text-center">
          <CCol md={8} className=" shadow-lg p-3 rounded">
            <CCardGroup className="loginstructure">
              <CCard className="p-4">
                <CCardBody>
                  <CContainer className="login-img">
                    <CImage
                      rounded
                      src={Images.logo}
                      width={300}
                      height={300}
                      className="login-logo"
                    />
                  </CContainer>

                  <CForm className="p-4">
                    <h3 className="fw-bolder mt-2 mb-4">Login</h3>
                    {/* <p className="text-medium-emphasis">Sign In to your account</p> */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} width={20} height={20} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} width={20} height={20} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      {/* <CCol xs={6}>
                        <CButton onClick={() => onLogin()} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol> */}
                      {/* <CCol className="text-end">
                        <CButton color="black" className="px-0 fw-bold">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                    <CRow>
                      <CCol>
                        {!error && empty && (
                          <CAlert color="danger" className="d-flex align-items-center px-1 py-2">
                            <CIcon
                              icon={cilBurn}
                              className="flex-shrink-0 me-2"
                              width={24}
                              height={24}
                            />
                            <div>Please enter the Username/Password</div>
                          </CAlert>
                        )}
                        {error && !empty && (
                          <CAlert color="danger" className="d-flex align-items-center px-1 py-2">
                            <CIcon
                              icon={cilBurn}
                              className="flex-shrink-0 me-2"
                              width={24}
                              height={24}
                            />
                            <div>Please enter the correct Username/Password</div>
                          </CAlert>
                        )}
                        <CButton
                          onClick={() => onLogin()}
                          className="px-4 login-btn border border-0 fw-bold"
                          style={{ backgroundColor: '#ff5721' }}
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol className="mt-3">
                        {/* <span>Don't have an account? Register</span> */}

                        {/* <div className="">
                          Don&apos;t have an account?&nbsp;&nbsp;
                          <Link
                            to="/register"
                            className="text-decoration-none"
                            style={{ color: '#ff5721' }}
                          >
                            Register
                          </Link>
                        </div> */}
                        {/* <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton> */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

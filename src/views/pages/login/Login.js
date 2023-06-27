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
  const onLogin = async () => {
    try {
      const response = await axios.post(
        "https://gym-api-3r8c.onrender.com/v1.0/user/login",
        {
          email: email,
          password: password,
        }
      )
  
      const { data } = response;
      const aData={
        Uuser:data.data.email, 
        upass:data.data.password,
        Uusertype:data.data.user_type
      }
      
      if (data.data.email && data.data.password ) {
        if (data.data.user_type==="admin") {
          navigate('/dashboard')
          localStorage.setItem('userAuth', JSON.stringify(aData) )
        } else {
         
          navigate('/')
        }
      }
      
    } catch (err) {
      alert(`Incorrect Authentications`);
      
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

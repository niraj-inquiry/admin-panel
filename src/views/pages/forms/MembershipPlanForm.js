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
  CFormTextarea,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate, useParams, useLocation } from "react-router-dom"
import axios from 'axios'
import { axiosInstance } from 'src/globalfunction'
import AddNewPlan from 'src/components/modals/AddNewPlan'

const MembershipPlanForm=()=>{

const typeofPlan=["Day Pass","Membership","Monthly+"]

const [isshowform,setIsshowform]=useState(false)

      return(
          <div className="bg-light d-flex flex-row align-items-center">
   
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={12} lg={12} xl={6}>
              <CCard className="mx-1">
                <CCardBody className="p-4">
                  <CForm>
                    <div className='d-flex flex-row align-items-center justify-content-between'>
                    <h1>Our Type of pass</h1>
                        <div onClick={()=>setIsshowform(true) } className='button-1'>
                          {"+ Add New Plan"}
                        </div>
                    </div>
                   <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                       placeholder="Please " autoComplete="question" />
                    </CInputGroup> 
  
  
                    {/* answer */}
                   <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormTextarea
                   
                      placeholder="Answer" autoComplete="answer"
                      />
                 
                    </CInputGroup> 
  
                    <div className="d-grid" >
                  
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
  
  export default MembershipPlanForm
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


const Faqsform=()=>{
  const location=useLocation()
const [gymvalue,setGymValue]=useState()
const [gymlist,setGymlist]=useState()
const [question,setQuestion]=useState(location.state?.question)
const [answer,setAnswer]=useState(location.state?.answer)


console.log('location',location.state?._id)
useEffect(()=>{
  onLoad()
},[])
const onLoad=()=>{
  axiosInstance.get('v1.0/gymcenter/gym-all-data').then(res=>{
    if(res.data.status){
        setGymlist(res.data.data)
    }
    })
  
  }
const onAddFAQ=()=>{
  let body={
    gymcenterid:gymvalue,
    question:question,
    answer:answer
  }

axiosInstance.post('v1.0/faqs/add-faqs',body).then(res=>{
  
  if(res.data.status){
    alert("Successfully Added")
  }
 else{
  alert(res.data.data.message)
 }
})
}
const onUpdate=()=>{
  let body={
    _id:location.state?._id,
    question:question,
    answer:answer
  }
axiosInstance.put('v1.0/faqs/update-faqs',body).then(res=>{
  console.log('ddd',res.data)
  if(res.data?.status){
    alert(res.data?.message)
  }

}).catch(err=>{
  alert("Something went wrong")
  console.log("error",err)
})
}
    return(
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>FAQ Form</h1>
          
                 <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Question" autoComplete="question"
                       />
                  </CInputGroup> 


                  {/* answer */}
                 <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormTextarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Answer" autoComplete="answer"
                    />
                    {/* <CFormInput
                     value={answer}
                   onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Answer" autoComplete="answer" /> */}
                  </CInputGroup> 

                  <div className="d-grid" 
                 onClick={() =>location.state?._id? onUpdate():onAddFAQ()}>
                    <CButton color="success">{location.state?._id?"Update":"Add Faq"}</CButton>
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

export default Faqsform
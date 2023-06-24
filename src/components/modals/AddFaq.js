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
const AddFaq = ({ isshowform, onClose, data }) => {
  // const location = useLocation();
  console.log("addnew 00000000000000000000", data)
  const navigate = useNavigate()
  const [gymvalue, setGymValue] = useState()
  const [gymlist, setGymlist] = useState()
  const [question, setQuestion] = useState(data?.question)
  const [answer, setAnswer] = useState(data?.answer)


  useEffect(() => {
    onLoad()
  }, [])
  const onLoad = () => {
    axiosInstance.get('v1.0/gymcenter/gym-all-data').then(res => {
      if (res.data.status) {
        setGymlist(res.data.data)
      }
    })

  }
  const onAddFAQ = () => {
    let body = {
      gymcenterid: gymvalue,
      question: question,
      answer: answer
    }

    axiosInstance.post('v1.0/faqs/add-faqs', body).then(res => {

      if (res.data.status) {
        alert("Successfully Added")
        onClose()
      }
      else {
        alert(res.data.data.message)
      }
    })
  }
  const onUpdate = () => {
    let body = {
      _id: data?._id,
      question: question,
      answer: answer
    }
    axiosInstance.put('v1.0/faqs/update-faqs', body).then(res => {
      console.log('ddd', res.data)
      if (res.data?.status) {
        alert(res.data?.message)
      }

    }).catch(err => {
      alert("Something went wrong")
      console.log("error", err)
    })
  }





  return (
    <CModal fullscreen="md" visible={isshowform}
      onClose={() => onClose()}>
      <CModalHeader>
        <CModalTitle>{!isEmpty(data?._id) ? 'Update  Details' : 'Add Details '}</CModalTitle>
      </CModalHeader>
      <CModalBody className="px-4 py-3 border mx-4 my-3 modal-shadow rounded">

        <p className="text-medium-emphasis">{`${isEmpty(data?._id) ? "Create" : "Update"} your  account`}</p>

        <CContainer>
          <CRow className="justify-content-center">
            {/* <CCol md={9} lg={7} xl={6}> */}
            <CCol className="px-0">
              {/* <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm> */}
                    {/* <h1>FAQ Form</h1> */}

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        {/* <CIcon icon={cilUser} /> */}
                        <i className="fa fa-question"></i>
                      </CInputGroupText>
                      <CFormInput
                        defaultValue={data?.question}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Question" autoComplete="question"
                      />
                    </CInputGroup>


                    {/* answer */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        {/* <CIcon icon={cilUser} /> */}
                        <i className="fa fa-list-alt"></i>
                      </CInputGroupText>
                      <CFormTextarea
                        defaultValue={data?.answer}
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
                      onClick={() => data?._id ? onUpdate() : onAddFAQ()}>
                      <CButton className="update_btn">{data?._id ? "Update" : "Add Faq"}</CButton>
                    </div>

                  {/* </CForm>
                </CCardBody>
              </CCard> */}
            </CCol>
          </CRow>
        </CContainer>

      </CModalBody>
    </CModal>
  )
}
export default AddFaq
AddFaq.propTypes = {
  isshowform: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object
};


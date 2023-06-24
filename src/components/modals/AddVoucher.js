import React, { useState, useEffect, useMemo } from 'react'
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
import Countries from '../../json/Countries.json'
import Occuption from '../../json/Occuption.json'

const AddVoucher = ({ isshowform, onClose, data }) => {
 
  const [voucharname, setVouchername] = useState(data?.voucharname)
    const [duration, setDuration] = useState(data?.duration)
  const [durationunit, setDurationunit] = useState(data?.durationunit)
  const [discount, setDiscount] = useState(data?.discount)
  const [description, setDescription] = useState(data?.description)
const durationlist=["Day","Month","Year"]


const onCreate=()=>{
   let body={
    voucharname:voucharname,
    duration:duration,
    durationunit:durationunit,
    discount:discount,
    description:description
   }

     API.post('v.1.0/voucher/add-new-voucher', body).then(res => {
      console.log('update data', res?.data, data)
     if (res?.data?.status === true) {
        alert(res?.data?.message)
    
        onClose()
      }
      else{
        alert(res?.data?.message)
      }

    })

}


  return (

    <CModal fullscreen="md" visible={isshowform}
      onClose={onClose}>
      <CModalHeader>
        <CModalTitle>{isEmpty(data?._id) ?'Add Voucher':"Update Voucher"}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {/* <CContainer className='ms-0'> */}
        <CRow className="border mx-4 my-3 modal-shadow rounded">
          <CCol className='px-4 py-3'>
     
            <CForm className='text-start'>
             <CCol>
            
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      {/* <CIcon icon={cilUser} /> */}
                      <i className="fa fa-user"></i>
                    </CInputGroupText>
                    <CFormInput
                    defaultValue={data?.voucharname}
                      value={voucharname}
                      onChange={(e) => setVouchername(e.target.value)}
                      placeholder="Voucher Name" autoComplete="firstname" />
                  </CInputGroup>
                </CCol>

                <CCol>
            
            <CInputGroup className="mb-3">
              <CInputGroupText>
                {/* <CIcon icon={cilUser} /> */}
                <i className="fa fa-user"></i>
              </CInputGroupText>
              <CFormInput
              defaultValue={data?.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Voucher Description" autoComplete="firstname" />
            </CInputGroup>
          </CCol>



                <CInputGroup className="mb-3">
                    {/* <CInputGroupText>@</CInputGroupText> */}
                    <CInputGroupText>
                      <i className="fa fa-location-arrow"></i>
                    </CInputGroupText>
                    <CFormSelect id="user_type"
               defaultValue={data?.duration}
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}>
                      <option>Choose occuption...</option>
                      {durationlist.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
          

          
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      {/* <CIcon icon={cilUser} /> */}
                      <i className="fa fa-user"></i>
                    </CInputGroupText>
                    <CFormInput
                    type='number'
                    defaultValue={data?.durationunit}
                      value={durationunit}
                      onChange={(e) => setDurationunit(e.target.value)}
                      placeholder="Enter voucher duration per unit"  />
                  </CInputGroup>

              
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      {/* <CIcon icon={cilUser} /> */}
                      <i className="fa fa-user"></i>
                    </CInputGroupText>
                    <CFormInput
                    type='number'
                    defaultValue={data?.discount}
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      placeholder="Enter voucher discount"  />
                  </CInputGroup>

                   <div className="d-grid">
                  <CButton onClick={()=>onCreate()} className="update_btn">Add Account</CButton>
                </div>
            </CForm>
   
          </CCol>
        </CRow>
  
      </CModalBody>
    </CModal>
  )
}

export default AddVoucher
AddVoucher.propTypes = {
  isshowform: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,

};

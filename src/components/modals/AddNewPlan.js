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
const AddNewPlan = ({ isshowform, onClose,data ,onPlan }) => {
console.log("userdata--",data?._id)
  const duration = ["days", "month", "weeks", "years"]
  const passtype = ["Normal", "Popular", "Exclusive"]
  const [planname, setPlanname] = useState(data?.planname )
  const [aboutus, setAboutus] = useState(data?.aboutus)
  const [rate, setRate] = useState(data?.rate)
  const [discount, setDiscount] = useState(data?.discount)
  const [dur, setDur] = useState(data?.duration)
  const [passtypestate, setPasstypestate] = useState(data?.passtype)
  const [country, setCountry] = useState(data?.country)
  const [image, setImage] = useState()
  const [userdata,setUserdata]=useState(JSON.parse(localStorage.getItem("userdata")))

  const onPlanData = (action) => {

    const formdata = new FormData()
 

      formdata.append("plan_id",data?._id);
      formdata.append("createdbyuserid", userdata?._id);
      formdata.append("planname", !isEmpty(planname) ? planname : data?.planname);
      formdata.append("aboutus", !isEmpty(aboutus) ? aboutus : data?.aboutus);
      formdata.append("rate", !isEmpty(rate) ? rate : data?.rate);
      formdata.append("discount", !isEmpty(discount) ? discount : data?.discount);
      formdata.append("duration", !isEmpty(dur) ? dur : data?.duration);
      formdata.append("country", !isEmpty(country) ? country : data?.country);
      formdata.append("passtype", !isEmpty(passtypestate) ? passtypestate : data.passtype);
    formdata.append("image", image);
    formdata.append('usertype',userdata?.user_type)
        onPlan(formdata,action)
 
   
  }

  return (
    <CModal fullscreen="md" visible={isshowform}
      onClose={onClose}>
      <CModalHeader>
        <CModalTitle>{!isEmpty(data?._id) ?"Update Plan": "Add New Plan"}</CModalTitle>
      </CModalHeader>
      <CModalBody className="px-4 py-3 border mx-4 my-3 modal-shadow rounded">

        <p className="text-medium-emphasis">{`${isEmpty(data?._id) ? "Create" : "Update"} your  account`}</p>


        <CInputGroup className="mb-3">
          {/* <CInputGroupText>@</CInputGroupText> */}
          <CInputGroupText>
            <i className="fa fa-id-card"></i>
          </CInputGroupText>
          <CFormInput
            defaultValue={data?.planname}
            value={planname}
            onChange={(e) => setPlanname(e.target.value)}
            placeholder="Enter your plan name" autoComplete="planname" />
        </CInputGroup>


        <CInputGroup className="mb-3">
          {/* <CInputGroupText>@</CInputGroupText> */}
          <CInputGroupText>
            <i className="fa fa-comment"></i>
          </CInputGroupText>
          <CFormInput
            defaultValue={data?.aboutus}
            value={aboutus}
            onChange={(e) => setAboutus(e.target.value)}
            placeholder="About us" autoComplete="question" />
        </CInputGroup>
        <CRow>
          <CCol>
            <CInputGroup className="mb-3">
              {/* <CInputGroupText>@</CInputGroupText> */}
              <CInputGroupText>
              <i className="fa fa-rupee"></i>
              </CInputGroupText>
              <CFormInput
                defaultValue={data?.rate}
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Enter your rate per unit" autoComplete="question"
                type={"number"}
              />
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup className="mb-3">
              {/* <CInputGroupText>@</CInputGroupText> */}
              <CInputGroupText>
              <i className="fa fa-dollar"></i>
              </CInputGroupText>
              <CFormInput
                defaultValue={data?.discount}
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="discount" autoComplete="question"
                type={"number"}
              />
            </CInputGroup>

          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <i className="fa fa-flag"></i>
              </CInputGroupText>

              <CFormSelect 
              id="country"
               defaultValue={data?.country} 
               value={country} 
               onChange={(e) => setCountry(e.target.value)}>
                <option>Choose Your Country...</option>
                {Countries?.map((item) => (
                  <option key={item.country_name}>{item.country_name}</option>
                ))}
              </CFormSelect>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup className="mb-3">
              {/* <CInputGroupText>@</CInputGroupText> */}
              <CInputGroupText>
               <i className="fa fa-calendar"></i>
              </CInputGroupText>
              <CFormSelect id="duration"
                defaultValue={data?.duration}
                value={dur}
                onChange={(e) => setDur(e.target.value)} >
                <option>Choose Your Duration...</option>
                {duration?.map((item, index) => (
                  <option key={item}>{item}</option>
                ))}
              </CFormSelect>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup className="mb-3">
              {/* <CInputGroupText>@</CInputGroupText> */}
              <CInputGroupText>
              <i className="fa fa-credit-card"></i>
              </CInputGroupText>
              <CFormSelect id="passtype"
                defaultValue={data?.passtype}

                value={passtypestate}
                onChange={(e) => setPasstypestate(e.target.value)}>
                <option>Choose Your Passtype...</option>
                {passtype?.map((item, index) => (
                  <option key={item}>{item}</option>
                ))}
              </CFormSelect>
            </CInputGroup>
          </CCol>
        </CRow>

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
      <div className="d-grid" onClick={() =>!isEmpty(data?._id)?onPlanData("update") :onPlanData("add")}>
          <CButton className="update_btn">{!isEmpty(data?._id) ? "Update Plan" : "Add New Plan"}</CButton>
        </div> 

      </CModalBody>
    </CModal>
  )
}
export default AddNewPlan
AddNewPlan.propTypes = {
  isshowform: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
  onPlan: PropTypes.func
};
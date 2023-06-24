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
import Countries from '../../json/Countries.json'
import Occuption from '../../json/Occuption.json'

const AddTeams = ({ isshowform, onClose, data }) => {
  console.log("addteam-------------",data)
  const genderlist = ["Male", "Female"]
  const usertypelist = [{ _di: "1", rolename: "admin" }, { _di: "2", rolename: "superadmin" }]
  const navigate = useNavigate()
  const location = useLocation();

  const [first_name, setFirst_name] = useState(data?.first_name)

  const [last_name, setLast_name] = useState(data?.last_name)
  const [email, setEmail] = useState(data?.email)
  const [pincode, setPincode] = useState(data?.post_code)
  const [address, setAddress] = useState(data?.address)
  const [description, setDescription] = useState(data?.description)
  const [occupation, setOccuption] = useState(data?.occuption)
  const [gender, setGender] = useState(data?.gender)
  const [image, setImage] = useState()
  const [userTypelist, setUserTypelist] = useState(data?.user_type);
  const [allemptyfield, setAllemptyfield] = useState(false);
  const [updateimage, setUpdateimage] = useState();
  const [state, setState] = useState(data?.state)
  const [country, setCountry] = useState(data?.country)
  const [districts,setDistricts]=useState(data?.district)
  const [statelist,setStatelist]=useState()
  const [districtslist,setDistrictlist]=useState()
  const [countryindex,setCountryindex]=useState()
  
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

const onCreate=()=>{
    const formdata = new FormData()

    formdata.append("first_name",isEmpty(first_name)?data.first_name:first_name);
    formdata.append("last_name",isEmpty(last_name)?data.last_name: last_name);
    formdata.append("email",  isEmpty(email)?data.email: email);
    formdata.append("address", isEmpty(address)?data.address: address);
    formdata.append("pincode", isEmpty(pincode)?data.pincode:pincode);
    formdata.append("occupation",isEmpty(occupation)?data.occupation:occupation);
    formdata.append("gender", isEmpty(gender)?data.gender: gender);
    formdata.append("description", isEmpty(description)?data.description: description);
    formdata.append("country",isEmpty(country)?data.country:  country);
    formdata.append("state",  isEmpty(state)?data.state: state);
    formdata.append("district",isEmpty(districts)?data.districts: districts  );
    formdata.append("image", image);

     API.post('v.1.0/team/add-new-team-member', formdata).then(res => {
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
        <CModalTitle>{isEmpty(data?._id) ?'Add Team Member':"Update Team Member"}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {/* <CContainer className='ms-0'> */}
        <CRow className="border mx-4 my-3 modal-shadow rounded">
          <CCol className='px-4 py-3'>
     
            <CForm className='text-start'>
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
                    //   type="email"
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
                      defaultValue={data?.address}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    
                      placeholder="Address"
                      autoComplete="address"
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
                defaultValue={data?.pincode}
                      value={pincode}
                    //   type="number"
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Pin Code" autoComplete="post_code" />
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
                    //   defaultValue={data?.user_type}
                      value={occupation}
                      onChange={(e) => setOccuption(e.target.value)}>
                      <option>Choose occuption...</option>
                      {Occuption?.occupations?.map((item) => (
                        <option key={item}>{item}</option>
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
                      <option>Choose Your Districts...</option>
                      {districtslist?.map((item,index) => (
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

export default AddTeams
AddTeams.propTypes = {
  isshowform: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,

};

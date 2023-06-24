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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { API, isEmpty } from 'src/globalfunction'
import axios from 'axios'
import Countries from '../../../json/Countries.json'
import ImageShow from 'src/components/ImageShow';



const GymRegister = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [center_name, setCenter_name] = useState(location.state?.center_name)
  const [address, setAddress] = useState(location.state?.address)
  const [state, setState] = useState(location.state?.state)
  const [country, setCountry] = useState(location.state?.country)
  const [pincode, setPincode] = useState(location.state?.pincode)
  const [contact_number, setContact_number] = useState(location.state?.contact_number)
  const [description, setDescription] = useState(location.state?.description)
  const [image, setImage] = useState()
  const [districts, setDistricts] = useState(location.state?.district)
  const [statelist, setStatelist] = useState()
  const [districtslist, setDistrictlist] = useState()
  const [countryindex, setCountryindex] = useState()
  const [updateimage, setUpdateimage] = useState(location?.state?.photos)
  const [userTypelist, setUserTypelist] = useState()
  const [gstnumber, setGstnumber] = useState(location?.state?.gstnumber)
  const [user_type, setUser_type] = useState()
  const onLoad = () => {
    API.get('v1.0/role/get-role').then(res => {

      if (res.data.status) {
        setUserTypelist(res.data.data)
      }

    })
  }

  useEffect(() => {

    onLoad()
  }, [])
  useEffect(() => {

  }, [center_name])

  const onSelectstate = (e) => {
    setState(e.target.value)
    let stateindexvalue = Countries[countryindex]?.states.findIndex(x => x.state == e.target.value)
    setDistrictlist(Countries[countryindex]?.states[stateindexvalue]?.districts)

  }

  const onSelectCountry = (e) => {
    let countryindexvalue = Countries?.findIndex(x => x.country_name == e.target.value)
    setCountry(e.target.value)
    setCountryindex(countryindexvalue)
    setStatelist(Countries[countryindexvalue]?.states)

  }
  const onCreateAccount = async () => {
    if (!isEmpty(center_name) && !isEmpty(address) &&
      !isEmpty(country) && !isEmpty(state) && !isEmpty(pincode)
      && !isEmpty(districts) &&
      !isEmpty(description) && !isEmpty(contact_number) && !isEmpty(description)
    ) {
      const formdata = new FormData()

      formdata.append("center_name", center_name);
      formdata.append("address", address);
      formdata.append("state", state);
      formdata.append("country", country);
      formdata.append("pincode", pincode);
      formdata.append("contact_number", contact_number);
      formdata.append("description", description);
      formdata.append("district", districts);
      formdata.append("gstnumber",gstnumber);
      // formdata.append("created_by_userid",localStorage.getItem('userid'));

      if (image?.length > 0) {
        for (var k = 0, len = image?.length; k < len; k++) {

          var file = image[k];
          formdata.append("image", file);

        }
      }
      console.log("registe", formdata)
      await API.post('v1.0/gymcenter/gymcenter-register', formdata).then(res => {
        if (res?.data?.status === true) {
          // alert(res?.data?.message)
          navigate('/lists/')
        }

      })


    }
    else {
      alert("Missing field")
    }
  }

  const onUpdateAccount = async () => {
    if (!isEmpty(center_name) && !isEmpty(address) &&
      !isEmpty(country) && !isEmpty(state) && !isEmpty(pincode)
      && !isEmpty(districts) &&
      !isEmpty(description) && !isEmpty(contact_number)
    ) {
      const formdata = new FormData()

      formdata.append("center_name", center_name);
      formdata.append("address", address);
      formdata.append("state", state);
      formdata.append("country", country);
      formdata.append("pincode", pincode);
      formdata.append("contact_number", contact_number);
      formdata.append("description", description);
      formdata.append("district", districts);
      formdata.append("_id", location.state?._id);
      formdata.append("photos", location?.state?.photos);
      formdata.append("gstnumber", gstnumber);
      formdata.append("centertype", user_type)


      if (image?.length > 0) {
        for (var k = 0, len = image.length; k < len; k++) {

          var file = image[k];
          formdata.append("image", file);

        }
      }


      await API.put('v1.0/gymcenter/update-gym-center-data', formdata).then(res => {

        if (res?.data?.status === true) {
          alert(res?.data?.message)
          navigate('/lists/allgymlist')
        }

      })


    }
    else {
      alert("Missing field")
    }
  }



  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center"
    
    >

      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">{`${isEmpty(location.state?._id) ? "Create" : "Update"} your gym account`}</p>

                  {/* gym center name */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      value={center_name}
                      onChange={(e) => setCenter_name(e.target.value)}
                      placeholder="Center name" autoComplete="centername" />
                  </CInputGroup>


                  {/* address */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address" autoComplete="address" />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>

                    <CFormSelect id="country"
                      value={country}
                      onChange={(e) => onSelectCountry(e)} >
                      <option>Choose Your Country...</option>
                      {Countries?.map((item) => (
                        <option key={item.code}>{item.country_name}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>

                    <CFormSelect id="state"
                      value={state}
                      onChange={(e) => onSelectstate(e)} >
                      <option>Choose Your State...</option>
                      {statelist?.map((item, index) => (
                        <option key={item.value}>{item.state}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormSelect id="distict"
                      value={districts}
                      defaultValue={districts}
                      onChange={(e) => setDistricts(e.target.value)}  >
                      <option>Choose Your Disricts...</option>
                      {districtslist?.map((item, index) => (
                        <option key={item}>{item}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>

                  {/*pincode  */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Pincode" autoComplete="pincode" />
                  </CInputGroup>


                  {/*contact_number  */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      value={contact_number}

                      onChange={(e) => setContact_number(e.target.value)}
                      placeholder="Contact Number" autoComplete="contactnumber" />
                  </CInputGroup>

                  {/*description*/}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description" autoComplete="description" />
                  </CInputGroup>

                  {/*user_type*/}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>

                    <CFormSelect id="user_type" onChange={(e) => setUser_type(e.target.value)}>
                      <option>Choose UserType...</option>
                      {userTypelist?.map((item) => (
                        <option key={item?._id}>{item?.rolename}</option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                  {/*gst number*/}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      value={gstnumber}
                      onChange={(e) => setGstnumber(e.target.value)}
                      placeholder="Gst number" autoComplete="gst number" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      *
                    </CInputGroupText>
                    <CFormInput
                      onChange={(event) => {
                        setImage(event.target.files);
                      }}
                      type="file"
                      accept="image/*"
                      placeholder="Please Enter your image"
                      multiple
                    />
                  </CInputGroup>

                  <div>
                    {location?.state?.photos?.map((item, index) => {
                      return (
                        <div key={index}>
                          <div onClick={() => { location?.state?.photos?.splice(index, 1); setUpdateimage(...location?.state?.photos) }} style={{ color: 'red' }}>X</div>
                          <ImageShow imageurl={item} />
                        </div>
                      )
                    }
                    )
                    }

                  </div>
                  {isEmpty(location.state?._id) ? (
                    <div className="d-grid"
                      onClick={() => onCreateAccount()}>
                      <CButton color="success">Create Account</CButton>
                    </div>) : (<div className="d-grid"
                      onClick={() => onUpdateAccount()}>
                      <CButton color="success">Update Account</CButton>
                    </div>)}

                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>

    </div>
  )
}

export default GymRegister

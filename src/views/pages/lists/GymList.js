/* eslint-disable react/jsx-no-undef */

import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CFormInput,
  CImage,
  CRow,
  CCol

} from '@coreui/react'
import axios from 'axios';
import React, { useState, useEffect } from "react";
import ImageShow from 'src/components/ImageShow';
import { API, fetchImage, isEmpty,convertfirstletter } from 'src/globalfunction';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import AddGym from 'src/components/modals/AddGym';
// import AddGymCenterDetails from 'src/components/modals/AddGymCenterDetails';
import AddDetailsButton from 'src/components/SubComponents/AddDetailsButton';
import * as Images from '../../../assets';

const GymList = () => {
  const [gymlist, setGymlist] = useState()
  const [isshowform, setIsshowform] = useState()
  const [selectgymdata, setSelectgymdata] = useState()
  const [isdetailformshow, setIsdetailformshow] = useState(false)
  const [selectadditem, setSelectadditem] = useState()
  const [addnewequip, setAddnewequip] = useState()
  const [amenities, setAmenities] = useState()
  const navigate = useNavigate()
  const onLoad = () => {
    API.get('v1.0/gymcenter/gym-all-data').then(res => {
      if (res?.data?.status) {
        console.log("all gym list", res.data.data)
        setGymlist(res?.data?.data)
      }
    }).catch(err => {
    
      navigate('404')

    console.log("Error", err)

  })

  }


  const onLoadDetail = (gymid) => {
    API.post('v1.0/gymcenterdetails/get-gym-center-all-details', { gymcenterid: gymid }).then(res => {
      console.log("useeffect---------", res.data)
    })
  }
  const onDelete = (value) => {

    API.delete(`v1.0/gymcenter/gym-delete-by-id/${value}`).then(res => {
      // console.log("res",res.data)
      if (res?.data?.status) {
        alert(res?.data?.message)
        onLoad()
      }
    }).catch(err => {
      alert("Something went wrong")
    })

  }
  useEffect(() => {
    onLoad()
  }, [selectgymdata, isshowform, selectadditem])

  const onUpdate = (items) => {
    setSelectgymdata(items)
    setIsshowform(true)
    // navigate('/gym/register',{state:items})
  }

  const onAddDetails = (items) => {
    setIsdetailformshow(true)
    setSelectadditem(items)
  }

  const onUpdatedetails = (data) => {
    setIsdetailformshow(true)
    setSelectadditem(data)
  }
  const onVerfiystatus = (item) => {

    let res = window.confirm(`You want to ${item?.verify_status ? "unapprove" : "approve"} `)
    console.log("res------------", item?.verify_status)
    if (res === true) {
      if (item?.verify_status === false) {
        API.put(`v.1.0/verfiy/verify-by-admin/${item?._id}`).then(res => {
          console.log("res", res)
          if (res.data.status) {
            alert(res.data.message)
            onLoad()
          }

        })

      }
      else {
        API.put(`v.1.0/verfiy/unverify-by-admin/${item?._id}`).then(res => {
          if (res.data.status) {
            alert(res.data.message)
            onLoad()
          }
        })
      }

    }
  }
  // useEffect(() => {

  // }, [selectadditem])
  return (
    <div className="table-responsive">
      <AddGym isshowform={isshowform} onClose={() => setIsshowform(false)} data={selectgymdata} />

      <div onClick={() => setIsshowform(true)} className='button-1'>
        {"+ Add New"}
      </div>

      <CTable>
        <CTableHead className=''>
          <CTableRow>
            <CTableHeaderCell scope="col" className='table-header'>
              <p className=' border-0 mb-0 fw-bold'>
                #
              </p>
            </CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"_id"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='table-header'>
              <p className=' border-0 mb-0 fw-bold'>
                {"Center Name"}
              </p>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className='table-header'>
              <p className=' border-0 mb-0 fw-bold'>
                {"Address"}
              </p>
            </CTableHeaderCell>
            {/* <CTableHeaderCell scope="col"><p className='table-header border-0 mb-0 fw-bold'>{"State"}</p></CTableHeaderCell> */}
            {/* <CTableHeaderCell scope="col"><p className='table-header border-0 mb-0 fw-bold'>{"Country"}</p></CTableHeaderCell> */}
            {/* <CTableHeaderCell scope="col"><p className='table-header border-0 mb-0 fw-bold'>{"District"}</p></CTableHeaderCell> */}
            {/* <CTableHeaderCell scope="col"><p className='table-header border-0 mb-0 fw-bold'>{"Pincode"}</p></CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='table-header'>
              <p className='table-header border-0 mb-0 fw-bold pb-0'>
                {"Contact Number"}
              </p>
            </CTableHeaderCell>
            {/* <CTableHeaderCell scope="col"><p className='table-header border-0 mb-0 fw-bold'>{"Description"}</p></CTableHeaderCell> */}
            <CTableHeaderCell scope="col"  className='table-header'>
              <p className='table-header border-0 mb-0 fw-bold pb-0'>
                {"Center Type"}
              </p>
            </CTableHeaderCell>
            {/* <CTableHeaderCell scope="col"><p className='table-header border-0 mb-0 fw-bold'>{"Photo"}</p></CTableHeaderCell> */}

            <CTableHeaderCell scope="col" className='table-header'>
              <p className='border-0 mb-0 fw-bold pb-0'>
                {"Verify Status"}
              </p>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col" className='table-header'>
              <p className='border-0 mb-0 fw-bold pb-0'>
                {"Action"}
              </p>
            </CTableHeaderCell>

          </CTableRow>
        </CTableHead>
        <CTableBody className='body-divider'>
          {gymlist?.length > 0 && (gymlist?.map((items, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              {/* <CTableDataCell>{items?._id}</CTableDataCell> */}

              <>
                <CTableDataCell><p className='table-items'>{convertfirstletter(items?.center_name)}</p></CTableDataCell>
                <CTableDataCell><p className='table-items'>{items?.address.substring(0, 25)}</p></CTableDataCell>
                {/* <CTableDataCell><p className='table-items'>{items?.state}</p></CTableDataCell> */}
                {/* <CTableDataCell><p className='table-items'>{items?.country}</p></CTableDataCell> */}
                {/* <CTableDataCell><p className='table-items'>{items?.district}</p></CTableDataCell> */}
                {/* <CTableDataCell><p className='table-items'>{items?.pincode}</p></CTableDataCell> */}
                <CTableDataCell><p className='table-items'>{items?.contact_number}</p></CTableDataCell>
                {/* <CTableDataCell><p className='table-items'>{items?.description?.substring(0, 10)}</p></CTableDataCell> */}
                <CTableDataCell><p className='table-items'>{items?.centertype}</p></CTableDataCell>
                {/* {items?.photos?.length > 0 && items?.photos?.map((item, index) =>
                  <CTableDataCell key={index} >
                 
                    <ImageShow imageurl={item}/>
                  
                    
                    
                  </CTableDataCell>)} */}



              </>
              {/* <div>{items?.verify_status?"verify":"not verified"}</div> */}
              <CTableDataCell>
                <CButton color="link" onClick={() => onVerfiystatus(items)}>{items?.verify_status ? "Approved" : "No Approved"}</CButton>
              </CTableDataCell>
              <CTableDataCell>
                {/* <CButton color="link" onClick={()=>onUpdate(items)}><i className="cursor-pointer fas fa-eye text-secondary" aria-hidden="true"></i></CButton> */}
                <CRow className='gym_action mx-auto'>
                  <CCol className=''>
                    <CImage

                      rounded
                      src={Images.eye_icon}
                      // width={300}
                      // height={300}
                      className="icons"
                    />
                  </CCol>
                  <CCol onClick={() => onUpdate(items)} className=''>
                    <CImage

                      rounded
                      src={Images.user_icon}
                      // width={300}
                      // height={300}
                      className="icons"
                    />
                  </CCol>
                  <CCol onClick={() => onDelete(items?._id)} className=''>
                    <CImage

                      rounded
                      src={Images.delete_icon}

                      className="icons"
                    />
                  </CCol>
                  <CCol>
                  <AddDetailsButton onClick={(data) => isEmpty(data) ? onAddDetails(items) : onUpdatedetails(data)}
                  data={items} />
                  </CCol>
                  {/* <CCol onClick={(data) => isEmpty(data) ? onAddDetails(items) : onUpdatedetails(data)}
                    data={items}>
                    <CImage
                      onClick={() => navigate('gymdetails')}
                      rounded
                      src={Images.add_icon}

                      className="icons"
                    />
                  </CCol> */}
                </CRow>
              {/* </CTableDataCell> */}


              {/* <CTableDataCell>
                <div onClick={() => onDelete(items?._id)}>
                  <CImage

                    rounded
                    src={Images.delete_icon}
                
                    className="icons"
                  />
                </div>
               
               
              </CTableDataCell> */}
              {/* <CButton color="link" onClick={()=>onDelete(items?._id)}>Delete</CButton> */}
              {/* <CTableDataCell> */}

              
                {/* <div onClick={(data) =>console.log('add-------------',data) }>
                  <CImage

                    rounded
                    src={Images.add_icon}
                    // width={300}
                    // height={300}
                    className="icons"
                  />
                </div> */}
                {/* <AddDetailsButton onClick={(data)=>isEmpty(data)?onAddDetails(items):onUpdatedetails(data)} data={items}/> */}
              </CTableDataCell>
            </CTableRow>

          )))}
        </CTableBody>
      </CTable>
    </div>
  )
}
export default GymList

import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CFormInput,
  CContainer,
  CImage,
  CRow,
  CCol
} from '@coreui/react'
import axios from 'axios';
import React, { useState, useEffect } from "react";
import ImageShow from 'src/components/ImageShow';
import { axiosInstance, fetchImage,convertfirstletter, API } from 'src/globalfunction';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import AddNewPlan from 'src/components/modals/AddNewPlan';
import * as Images from '../../../assets';

const PlanList = () => {
  const [planlist, setPlanlist] = useState()
  const [isshowform, setIsshowform] = useState(false)
  const [updatedata, setUpdatedata] = useState()
  const navigate = useNavigate()
  const onLoad = () => {
    API.get('v1.0/plan/get-all-plan').then(res => {
      if (res?.data?.status) {
        setPlanlist(res?.data?.data)
      }
    }).catch(err => {
      // navigate('404')
    console.log("Error", err)

  })
  }

  const onDelete = (value) => {
    axiosInstance.delete(`v1.0/plan/delete-plan-by-id/${value}`).then(res => {
      console.log("res", res.data)
      if (res?.data?.status) {
        alert(res?.data?.message)
        onLoad()
      }
      else {
        alert(res?.data?.message)
      }
    }).catch(err => {
      alert("Something went wrong")
    })

  }
  useEffect(() => {
    onLoad()
   
  }, [])

  const onUpdate = (items) => {
    setUpdatedata(items)
    setIsshowform(true)
  }

  const onPlan = (formdata,action) => {
   if(action==="add")
    {
    API.post('v1.0/plan/add-New-plan', formdata).then(res => {
      if (res.data.status) {
        alert(res.data.message)
        setIsshowform(false)
        onLoad()
      }
      else {
        alert(res.data.message)
      }
    })
  }
  else{
    API.put('v1.0/plan/update_plan-by-admin', formdata).then(res => {
      if (res.data.status) {
        alert(res.data.message)
        setIsshowform(false)
        onLoad()
      }
      else {
        alert(res.data.message)
      }
    })
  }

  }
  const onAdd=()=>{
    setUpdatedata()
    setIsshowform(true)
  }
  return (
    <>
    <div>
      <div>

        <div onClick={() => onAdd() } className='button-1'>
          {"+ Add New Plan"}
        </div>
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className='fw-bold'>#</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"_id"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Plan Name"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"About Us"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Rate"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Discount"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Duration"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Country"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Status"}</CTableHeaderCell>

            <CTableHeaderCell scope="col" className='fw-bold'>{"Photo"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold text-center'>{"Action"}</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody className='body-divider'>
          {planlist?.length > 0 && (planlist?.map((items, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              {/* <CTableDataCell>{items?._id}</CTableDataCell> */}
              <>
                <CTableDataCell>{convertfirstletter(items?.planname)}</CTableDataCell>
                <CTableDataCell>{items?.aboutus}</CTableDataCell>
                <CTableDataCell>{items?.rate}</CTableDataCell>
                <CTableDataCell>{items?.discount}</CTableDataCell>
                <CTableDataCell>{items?.duration}</CTableDataCell>
                <CTableDataCell>{items?.country}</CTableDataCell>
                <CTableDataCell>{items?.activestatus ? "Active" : "Inactive"}</CTableDataCell>
                <CTableDataCell>
                  <ImageShow imageurl={items?.photo} />
                </CTableDataCell>
              </>
              <CTableDataCell style={{verticalAlign:'middle'}}>
                {/* <CButton color="link" onClick={() => onUpdate(items)}>Update</CButton> */}
                <CRow className='gym_action mx-auto'>
                  <CCol>
                    <CImage

                      rounded
                      src={Images.eye_icon}
                      // width={300}
                      // height={300}
                      className="icons"
                    />
                  </CCol>
                  <CCol onClick={() => onUpdate(items)}>
                    <CImage
                      rounded
                      src={Images.user_icon}
                      // width={300}
                      // height={300}
                      className="icons"
                    />
                  </CCol>
                  <CCol onClick={() => onDelete(items?._id)}>
                    <CImage

                      rounded
                      src={Images.delete_icon}
                      // width={300}
                      // height={300}
                      className="icons"
                    />
                  </CCol>
                </CRow>
              </CTableDataCell>
              {/* <CTableDataCell> */}
              {/* <CButton color="link" onClick={() => onDelete(items?._id)}>Delete</CButton> */}
              {/* <div onClick={() => onDelete(items?._id)}>
                  <CImage

                    rounded
                    src={Images.delete_icon}
                    // width={300}
                    // height={300}
                    className="icons"
                  />
                </div> */}
              {/* </CTableDataCell> */}
            </CTableRow>

          )))}
        </CTableBody>
      </CTable>
    
    </div>
    <AddNewPlan
        isshowform={isshowform}
        onClose={() => setIsshowform(false)}
        data={updatedata}
      onPlan={(data,action) => onPlan(data,action)}
      />
    </>
  )
}
export default PlanList

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
  CRow,
  CCol,
  CImage
} from '@coreui/react'
import axios from 'axios';
import React, { useState, useEffect } from "react";
import ImageShow from 'src/components/ImageShow';
import { API, axiosInstance, fetchImage,convertfirstletter } from 'src/globalfunction';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import AddNewPlan from 'src/components/modals/AddNewPlan';
import AddRefundPlan from 'src/components/modals/AddRefundPlan';
import * as Images from '../../../assets'

const RefundPolices = () => {
  const [planlist, setPlanlist] = useState()
  const [isshowform, setIsshowform] = useState(false)
  const [updatedata, setUpdatedata] = useState()
  const navigate = useNavigate()
  const onLoad = () => {
    axiosInstance.get('v.1.0/refundPlan/get-all-policies').then(res => {
      console.log("ddd", res.data)
      if (res?.data?.status) {
        setPlanlist(res?.data?.data)
      }
    }).catch(err => {    
      navigate('404')

    console.log("Error", err)

  })
  }

  const onDelete = (value) => {
    console.log("value", value)
    API.delete(`v.1.0/refundPlan/delete-refund-policies/${value}`).then(res => {

      if (res?.data?.status) {
        alert(res?.data?.message)
        onLoad()
      }
      else {
        alert(res?.data?.message)
      }
    }).catch(err => {
      console.log("error", err)
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
  const onAdd = () => {
    setUpdatedata()
    setIsshowform(true)

  }
  return (
    <div>
      <div>

        <div onClick={() => onAdd()} className='button-1'>
          {"+ Add New Refund Polices"}
        </div>
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className='fw-bold'>#</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"_id"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Plan Name"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Refund Percentage"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Refund Within Day"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Status"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Action"}</CTableHeaderCell>

          </CTableRow>
        </CTableHead>
        <CTableBody className='body-divider'>
          {planlist?.length > 0 && (planlist?.map((items, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              {/* <CTableDataCell>{items?._id}</CTableDataCell> */}
              <>
                <CTableDataCell>{convertfirstletter(items?.planinfo[0]?.planname)}</CTableDataCell>
                <CTableDataCell>{items?.refundpercentage}</CTableDataCell>
                <CTableDataCell>{items?.refundwithinday}</CTableDataCell>

                <CTableDataCell>{items?.status ? "Active" : "Inactive"}</CTableDataCell>

              </>
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
                 
                </CRow>
              {/* <CTableDataCell>
                <CButton color="link" onClick={() => onUpdate(items)}>Update</CButton>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="link" onClick={() => onDelete(items?._id)}>Delete</CButton>
              </CTableDataCell> */}
            </CTableRow>

          )))}
        </CTableBody>
      </CTable>
      <AddRefundPlan
        isshowform={isshowform}
        onClose={() => setIsshowform(false)}
        data={updatedata}
        onSave={() => onLoad()}
      />
    </div>
  )
}
export default RefundPolices
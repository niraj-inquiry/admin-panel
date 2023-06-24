
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
  CImage
} from '@coreui/react'
import axios from 'axios';
import React, { useState, useEffect } from "react";
import ImageShow from 'src/components/ImageShow';
import { API, axiosInstance, fetchImage, convertfirstletter } from 'src/globalfunction';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import * as Images from '../../../assets';

const ContactusList = () => {
  const [list, setList] = useState()

  const navigate = useNavigate()
  const onLoad = () => {
    axiosInstance.get('v1.0/contact/get-all-contact').then(res => {
      if (res?.data?.status) {
        setList(res?.data?.data)
        console.log("role", res?.data?.data)
      }
    }).catch(err => {
      console.log("Error", err)

    })
  }

  const onDelete = (value) => {
    axiosInstance.delete(`v1.0/contact/delete_contactus/${value}`).then(res => {
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
  }
    , [])

  return (
    <div>

      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className='fw-bold'>#</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"_id"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"First Name"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Last Name"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Email"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Contact Number"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Message"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Action"}</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody className='body-divider'>
          {list?.length > 0 && (list?.map((items, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              {/* <CTableDataCell>{items?._id}</CTableDataCell> */}
              <CTableDataCell>{convertfirstletter(items?.firstname)}</CTableDataCell>
              <CTableDataCell>{convertfirstletter(items?.lastname)}</CTableDataCell>
              <CTableDataCell>{items?.email}</CTableDataCell>
              <CTableDataCell>{items?.phonenumber}</CTableDataCell>
              <CTableDataCell>{items?.message}</CTableDataCell>

              <CTableDataCell>
                {/* <CButton color="link" onClick={()=>onDelete(items?._id)}>Delete</CButton> */}
                <CImage

                  rounded
                  src={Images.delete_icon}

                  className="icons"
                />
              </CTableDataCell>
            </CTableRow>

          )))}
        </CTableBody>
      </CTable>

    </div>
  )
}
export default ContactusList
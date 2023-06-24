
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
import { API, axiosInstance, fetchImage } from 'src/globalfunction';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import AddFaq from 'src/components/modals/AddFaq';
import * as Images from '../../../assets';

const FaqsList = () => {
  const [faqlist, setFaqlist] = useState()
  const [selectdata, setSelectdata] = useState()
  const navigate = useNavigate()
  const [isshowform, setIsshowform] = useState()
  const onLoad = () => {
    API.get('v1.0/faqs/get-faqs_withoutcenterid').then(res => {
      if (res.data.status) {
        setFaqlist(res.data.data)
      }
    }).catch(err => {    
        navigate('404')
  
      console.log("Error", err)
  
      alert("Something went wrong")
    })
  }


  useEffect(() => {
    onLoad()
  }, [])

  const onUpdate = (items) => {
    //  navigate('/faq',{state:items})
    setSelectdata(items)
    setIsshowform(true)
  }
  const onDelete = (faqid) => {

    axiosInstance.delete(`v1.0/faqs/delete-faq/${faqid}`).then(res => {
      if (res.data.status) {
        alert(res.data.message)
        onLoad()
      }
    })
  }


  return (
    <div className="table-responsive">
      <AddFaq
        isshowform={isshowform} onClose={() => setIsshowform(false)} data={selectdata} />

      <div onClick={() => setIsshowform(true)} className='button-1'>
        {"+ Add New"}
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className='fw-bold'>#</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"_id"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Question"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Answer"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Action"}</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody className='body-divider'>
          {faqlist?.length > 0 && (faqlist?.map((items, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              {/* <CTableDataCell>{items?._id}</CTableDataCell> */}

              <CTableDataCell>{items?.question}</CTableDataCell>
              <CTableDataCell>{items?.answer.substring(0, 100)}</CTableDataCell>
              <CTableDataCell>
                <CRow>
                  <CCol onClick={() => onUpdate(items)}>
                    <CImage

                      rounded
                      src={Images.user_icon}

                      className="icons"
                    />
                  </CCol>
                  <CCol onClick={() => onDelete(items?._id)}>
                    <CImage

                      rounded
                      src={Images.delete_icon}

                      className="icons"
                    />
                  </CCol>
                </CRow>

              </CTableDataCell>

            </CTableRow>

          )))}
        </CTableBody>
      </CTable>
    </div>
  )
}
export default FaqsList
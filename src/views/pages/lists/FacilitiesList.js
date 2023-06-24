
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CFormInput,
  CCol,
  CRow,
  CImage
} from '@coreui/react'
import axios from 'axios';
import React, { useState, useEffect } from "react";
import ImageShow from 'src/components/ImageShow';
import { API, axiosInstance, fetchImage,convertfirstletter } from 'src/globalfunction';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import FacilitiesModel from 'src/components/modals/FacilitiesModel';
import * as Images from '../../../assets';

const FacilitiesList = () => {
  const [list, setList] = useState()
  const [isshow, setIsShow] = useState(false)
  const [selectdata,setSelectdata]=useState()
  const navigate = useNavigate()

  const onLoad = () => {
    API.get('v1.0/facilities/get-all-facilities').then(res => {
      if (res.data.status) {
        setList(res.data.data)
      }
    }).catch(err => {
        navigate('404')
     
      console.log("Error", err)

      alert("Something went wrong")
    })
  }




  const onUpdate = (items) => {
    setSelectdata("")
    setIsShow(true)
    setSelectdata(items)
    
  }
  const onDelete = (facilities_id) => {

    API.delete(`v1.0/facilities/delete-facilties/${facilities_id}`).then(res => {
      if (res.data.status) {
        alert(res.data.message)
        onLoad()
      }
    })
  }

const onClickAddNew=()=>{
  setIsShow(true)
setSelectdata("")
}
useEffect(() => {
  onLoad()
}, [isshow,selectdata,list])
  return (
    <div>
      <FacilitiesModel isshowform={isshow} data={selectdata} onClose={()=>{setIsShow(false)&&setSelectdata("")}}/>
      <div onClick={() => onClickAddNew()} className='button-1'>
        {"+ Add New"}
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className='fw-bold'>#</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"_id"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Facilities"}</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"Answer"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Action"}</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody className='body-divider'>
          {list?.length > 0 && (list?.map((items, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              {/* <CTableDataCell>{items?._id}</CTableDataCell> */}

              <CTableDataCell>{convertfirstletter(items?.facilities_name)}</CTableDataCell>
              <CTableDataCell>
                {/* <CButton color="link" onClick={()=>onUpdate(items)}><i className="cursor-pointer fas fa-eye text-secondary" aria-hidden="true"></i></CButton> */}
                <CRow className='gym_action mx-auto'>
                  <CCol className=''>
                    <CImage

                      rounded
                      src={Images.eye_icon}
              
                      className="icons"
                    />
                  </CCol>
                  <CCol onClick={() => onUpdate(items)} className=''>
                    <CImage
                      rounded
                      src={Images.user_icon}
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
             
              </CTableDataCell>
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
    </div>

  )
}
export default FacilitiesList
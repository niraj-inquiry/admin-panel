
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
import { axiosInstance, fetchImage, convertfirstletter } from 'src/globalfunction';
import { useNavigate, useParams, useLocation } from "react-router-dom"
import AddNewPlan from 'src/components/modals/AddNewPlan';
import AddNewRole from 'src/components/modals/AddNewRole';
import * as Images from '../../../assets';

const RoleList = () => {
  const [rolelist, setRolelist] = useState()
  const [isshowform, setIsshowform] = useState(false)
  const [updatedata, setUpdatedata] = useState()
  const navigate = useNavigate()
  const onLoad = () => {
    axiosInstance.get('v1.0/role/get-all-role').then(res => {
      if (res?.data?.status) {
        setRolelist(res?.data?.data)
        console.log("role", res?.data?.data)
      }
    }).catch(err => {
    
        navigate('404')
  
   
      console.log("Error", err)

    })
  }

  const onDelete = (value) => {
    axiosInstance.delete(`v1.0/role/delete-role/${value}`).then(res => {
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
    if (!isshowform) {
      onLoad()
      setUpdatedata("")
    }

  }, [isshowform])

  const onUpdate = (items) => {
    setUpdatedata(items)

    setIsshowform(true)

  }
  return (
    <div>
      <AddNewRole isshowform={isshowform} onClose={() => setIsshowform(false)}
        data={updatedata} />
      <div>

        <div onClick={() => setIsshowform(true)} className='button-1'>
          {"+ Add New Role"}
        </div>
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className='fw-bold'>#</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"_id"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Role Name"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='action fw-bold mx-auto'>{"Action"}</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody className='body-divider'>
          {rolelist?.length > 0 && (rolelist?.map((items, index) => (
            <>
              <CTableRow key={index} className='table-row'>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                {/* <CTableDataCell>{items?._id}</CTableDataCell> */}
                <CTableDataCell>{convertfirstletter(items?.rolename)}</CTableDataCell>
                <CTableDataCell>
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
                    <CCol onClick={() => onUpdate(items)} className='float-end'>
                      <CImage
                          rounded
                        src={Images.user_icon}
                        // width={300}
                        // height={300}
                        className="icons"
                      />
                    </CCol>
                    <CCol onClick={() => onDelete(items?._id)} className='float-end'>
                      <CImage

                        rounded
                        src={Images.delete_icon}

                        className="icons"
                      />
                    </CCol>

                  </CRow>
                </CTableDataCell>
            
              </CTableRow>

            </>
          )))}
        </CTableBody>
      </CTable>

    </div>
  )
}
export default RoleList
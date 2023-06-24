import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CRow,
  CCol,
  CImage
} from '@coreui/react'
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ImageShow from 'src/components/ImageShow';
import { API, convertfirstletter, fetchImage } from 'src/globalfunction';
import * as Images from '../../../assets';
import AddUser from 'src/components/modals/AddUser';
import { Pagination } from 'src/components/Pagination';

const ShowUserLists = () => {
  const [userlist, setUserlist] = useState();
  const [isshowform, setIsshowform] = useState();
  const [updatedata, setUpdatedata] = useState();
const [showdata,setShowdata]=useState([])
  const navigate = useNavigate();
  const onLoad = () => {
    
    API.get('v1.0/user/get-all-users').then(res => {
      console.log("userlist", res.data.data)
      if (res?.data?.status) {
          console.log('userlist', res?.data?.data)
        setUserlist(res?.data?.data)
        
       
      }
    }).catch(err => {
      console.log("Error", err);
      navigate('404')

    })
  }
  // useEffect(() => {
  //   onLoad()
  // }, [updatedata, isshowform])
  useEffect(() => {
      onLoad()
      
    
  }, [isshowform,updatedata])

  const onUpdate = (items) => {
    
    // navigate('/users/register', { state: item })
    setUpdatedata(items)
    console.log('updatae item', items)
    // setUserlist(items)
    // console.log('updatedata',item)
    setIsshowform(true)
  }

  // console.log('userlist', updatedata)

  const onDelete = (userid) => {
    API.delete(`v1.0/user/delete-user-details/${userid}`).then(res => {
      if (res.data.status) {
        alert(res.data.message)
        onLoad()
      }
    })
  }
  const onShowPagedata=(data)=>{
   setShowdata(data)
  }
  return (
    <>
    <AddUser isshowform={isshowform} onClose={() => setIsshowform(false)}
        data={updatedata} 
          
        />
            <div className='table-responsive'>
      <div onClick={() => setIsshowform(true)} className='button-1'>
        {"+ Add New User"}
      </div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className='fw-bold'>#</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col">{"_id"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Name"}</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col" className='fw-bold'>{"Last Name"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Email"}</CTableHeaderCell>
            {/* <CTableHeaderCell scope="col" className='fw-bold'>{"Post Code"}</CTableHeaderCell> */}
            {/* <CTableHeaderCell scope="col" className='fw-bold'>{"Description"}</CTableHeaderCell> */}
            <CTableHeaderCell scope="col" className='fw-bold'>{"Gender"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"User type"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className='fw-bold'>{"Photo"}</CTableHeaderCell>
            <CTableHeaderCell scope="col" className=' fw-bold'>{"Action"}</CTableHeaderCell>

          </CTableRow>
        </CTableHead>
        <CTableBody className='body-divider'>
          {userlist?.length > 0 && (userlist?.slice(0,5).map((items, index) => (
            <CTableRow key={index}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              {/* <CTableDataCell>{items?._id}</CTableDataCell> */}
              <CTableDataCell>{convertfirstletter(items?.first_name)} {items?.last_name}</CTableDataCell>
              {/* <CTableDataCell>{items?.last_name}</CTableDataCell> */}
              <CTableDataCell>{items?.email}</CTableDataCell>
              {/* <CTableDataCell>{items?.post_code}</CTableDataCell> */}
              {/* <CTableDataCell>{items?.description}</CTableDataCell> */}
              <CTableDataCell>{items?.gender}</CTableDataCell>
              <CTableDataCell>{items?.user_type}</CTableDataCell>
              <CTableDataCell>
                <ImageShow imageurl={items?.photo} />
              </CTableDataCell>
              <CTableDataCell>
                {/* <CButton color="link" onClick={()=>onUpdate(items)}>Update</CButton> */}
                <CRow className='gym_action mx-auto'>
                  <CCol>
                    <CImage

                      rounded
                      src={Images.eye_icon}

                      className="icons"
                    />

                  </CCol>
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
              {/* <CTableDataCell>
        <CButton color="link" onClick={()=>onDelete(items?._id)}>Delete</CButton>
        </CTableDataCell> */}



            </CTableRow>
          )

          ))}


        </CTableBody>
      </CTable>
      {/* <Pagination data={userlist} onShowPage={(start,end,data)=>onShowPagedata(start,end,data)}/> */}
    </div>
    </>

  )
}
export default ShowUserLists
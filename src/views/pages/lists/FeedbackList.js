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
  import AddTeams from 'src/components/modals/AddTeams';
  import { Pagination } from 'src/components/Pagination';
import AddVoucher from 'src/components/modals/AddVoucher';
import AddFeedback from 'src/components/modals/AddFeedback';
  
  const FeedbackList = () => {
    const [list, setList] = useState();
    const [isshowform, setIsshowform] = useState();
    const [updatedata, setUpdatedata] = useState();
  const [showdata,setShowdata]=useState([])
    const navigate = useNavigate();
    const onLoad = () => {
      
      API.get('v.1.0/feedbackwithrating/get-all-feedback').then(res => {
       if (res?.data?.status) {
           setList(res?.data?.data)
        }
      }).catch(err => {
        console.log("Error", err);
        navigate('404')
  
      })
    }

  
    const onUpdate = (items) => {
      
      // navigate('/users/register', { state: item })
      setUpdatedata(items)
      console.log('updatae item', items)
      // setUserlist(items)
      // console.log('updatedata',item)
      setIsshowform(true)
    }
  
    // console.log('userlist', updatedata)
  
    const onDelete = (feedid) => {
      API.delete(`v.1.0/feedbackwithrating/delete_data/${feedid}`).then(res => {
        if (res.data.status) {
         alert(res.data.message)
          onLoad()
        }
      })
    }
    const onShowPagedata=(data)=>{
     setShowdata(data)
    }


    useEffect(() => {
      onLoad()
}, [isshowform,updatedata])
    return (
      <>
      {/* <AddFeedback isshowform={isshowform} onClose={() => setIsshowform(false)}
          data={updatedata} 
            
          /> */}
          <div>
              <div className='table-responsive'>
      
        {/* <div onClick={() => {setUpdatedata() ;setIsshowform(true)}} className='button-1 '>
          {"+Add New Feedback"}
        </div> */}
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col" className='fw-bold'>#</CTableHeaderCell>
              <CTableHeaderCell scope="col" className='fw-bold'>{"Center Name"}</CTableHeaderCell>
              <CTableHeaderCell scope="col" className='fw-bold'>{"Rating"}</CTableHeaderCell>
              <CTableHeaderCell scope="col" className='fw-bold'>{"Comment"}</CTableHeaderCell>
              <CTableHeaderCell scope="col" className='fw-bold'>{"User Name"}</CTableHeaderCell>
           
              <CTableHeaderCell scope="col" className=' fw-bold'>{"Action"}</CTableHeaderCell>
        
            </CTableRow>
          </CTableHead>
          <CTableBody className='body-divider'>
            {list?.length > 0 && (list?.map((items, index) => (
              <CTableRow key={index}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableHeaderCell scope="row">{items?.center_name}</CTableHeaderCell>
                <CTableHeaderCell scope="row">{items?.rating}</CTableHeaderCell>
                <CTableHeaderCell scope="row">{items?.comment}</CTableHeaderCell>
                {/* <CTableHeaderCell scope="row">{items?.comment}</CTableHeaderCell>
                */}
                <CTableHeaderCell scope="row">{items?.first_name +items?.last_name}</CTableHeaderCell>
             
                  {/* <CButton color="link" onClick={()=>onUpdate(items)}>Update</CButton> */}
                  <CTableDataCell>
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
        
              </CTableRow>
            )
  ))}
  
  
          </CTableBody>
        </CTable>
        
        {/* <Pagination data={userlist} onShowPage={(start,end,data)=>onShowPagedata(start,end,data)}/> */}
      </div>
  
     
     
      </div>
  </>
    )
  }
  export default FeedbackList
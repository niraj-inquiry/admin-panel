import { CInputGroup, CInputGroupText, CFormInput, CCol, CImage, CRow } from "@coreui/react";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser, cilBookmark } from '@coreui/icons';
import * as Images from '../../assets';

const EquipmentsForm = ({ key, onDelete, onSave, item, gymid }) => {
  console.log("EquipmentsForm--------------", item)
  const [description, setDescription] = useState(item?.description)
  const [equipment_brand, setEquipment_brand] = useState(item?.equipment_brand)
  const [equipment_name, setEquipment_name] = useState(item?.equipment_name)
  const [equipment_image, setEquipment_image] = useState(item?.equipment_image)
  const [equipment_model_number, setEquipment_model_number] = useState(item?.equipment_model_number)
const [savestatus,setSaveStatus]=useState(false)
  const onSavedata = () => {



    let data = {
      gymid: gymid,
      user_id: localStorage.getItem('userid'),
      description: description,
      equipment_brand: equipment_brand,
      equipment_name: equipment_name,
      equipments: equipment_image,
      equipment_model_number: equipment_model_number
    }
    
    onSave(data)
  

  }
  return (
    <>
      {/* <div key={key} className="border px-3 py-3" style={{ width: '50%' }}> */}
      <CCol xs lg={6} >
        <div className=" border px-3 py-3 mb-3 rounded shadow" style={{ backgroundColor: '#80808021' }}>
          <CRow>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <i className="fa fa-skating"></i>
                </CInputGroupText>
                <CFormInput
                  value={equipment_name}
                  onChange={(e) => setEquipment_name(e.target.value)}
                  placeholder="Equipment Name" autoComplete="aboutus" />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                <i className="fa fa-map-pin"></i>
                </CInputGroupText>
                <CFormInput
                  value={equipment_brand}
                  onChange={(e) => setEquipment_brand(e.target.value)}
                  placeholder="equipment_brand" autoComplete="aboutus" />
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                <i className="fa fa-truck"></i>
                </CInputGroupText>
                <CFormInput
                  value={equipment_model_number}
                  onChange={(e) => setEquipment_model_number(e.target.value)}
                  placeholder="equipment_model_number" autoComplete="aboutus" />
              </CInputGroup>
            </CCol>
          </CRow>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              {/* <CIcon icon={cilUser} /> */}
              <i className="fa fa-comment"></i>
            </CInputGroupText>
            <CFormInput
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="About Us" autoComplete="aboutus" />
          </CInputGroup>

          {/*image*/}
          <CInputGroup className="mb-3">
            <CInputGroupText>
            <i className="fa fa-image"></i>
            </CInputGroupText>
            <CFormInput
              onChange={(event) => {
                setEquipment_image(event.target.files[0]);
              }}
              type="file"
              accept="image/*"
              placeholder="Please Enter your image"
            />
          </CInputGroup>
          <div style={{ display: 'flex', justifyContent: "flex-end" }}>
            {/* <div onClick={onDelete} className="deletebtn">
          Delete
        </div> */}
            {/* <div onClick={() => onSavedata()} className="savebtn">
          save
        </div> */}
            <div onClick={onDelete}>
              <CImage
                className="deletebtn_icon"
                rounded
                src={Images.delete_icon}
              // width={300}
              // height={300}
              // className="icons"
              />
            </div>
            <div  onClick={() =>    setSaveStatus(!savestatus)& onSavedata()}>
              <CImage
                className="save_icon"
                rounded
                src={savestatus?Images.save_icon:Images.unsave_icon}
              />
            </div>
{/* 
            <CIcon icon={cilBookmark} onClick={() => onSavedata()} size={100} /> */}
          </div>
          {/* <CIcon icon={cilBookmark} /> */}
        </div>

      </CCol>
      {/* </div> */}
    </>
  )
}

export default EquipmentsForm

EquipmentsForm.propTypes = {
  key: PropTypes.number,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  item: PropTypes.object,
  gymid: PropTypes.string
};
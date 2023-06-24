import { CInputGroup, CInputGroupText, CFormInput, CImage, CCol } from "@coreui/react";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { isEmpty } from "src/globalfunction";
import * as Images from '../../assets';

const GymamenitiesForm = ({ key, onDelete, onSave, item }) => {

  const [data, setdata] = useState(item)
  const [savestatus,setSaveStatus]=useState(false)
  const onSavedata = () => {
    setSaveStatus(!savestatus)
    onSave(data)
  }
  return (
    <CCol xs lg={6} className="mt-3">
      <div key={key} className=" border px-3 py-3 mb-3 rounded shadow" style={{ backgroundColor: '#80808021' }}>
        <CInputGroup className="mb-3">
          <CInputGroupText>
          <i className="fa fa-wifi"></i>
          </CInputGroupText>

          <CFormInput
            // defaultValue={item}
            value={data}
            onChange={(e) => setdata(e.target.value)}
            placeholder="Amenities" autoComplete="amenities" />
        </CInputGroup>

        <div style={{ display: 'flex', justifyContent: "flex-end" }}>
          <div onClick={onDelete} className="">
            <CImage
              // className="deletebtn_icon"
              className="deletebtn_icon"
              rounded
              src={Images.delete_icon}

            />
          </div>
          <div onClick={() => onSavedata()}>
            <CImage
              className="save_icon"
              rounded
              src={savestatus?Images.save_icon:Images.unsave_icon}
            />
          </div>
        </div>
      </div>
    </CCol>
  )
}

export default GymamenitiesForm

GymamenitiesForm.propTypes = {
  key: PropTypes.number,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  item: PropTypes.object
};
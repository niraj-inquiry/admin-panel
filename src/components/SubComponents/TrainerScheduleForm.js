import React, { useEffect, useState } from "react";
import { CInputGroup, CInputGroupText, CFormInput, CFormSelect, CImage, CRow, CCol } from "@coreui/react";
import PropTypes from 'prop-types'
import { isEmpty } from "src/globalfunction";
import * as Images from '../../assets';

const TrainerScheduleForm = ({ key, onDelete, onSave, data }) => {
  console.log("ddddddddddddddddddd", data)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var currentdate = new Date();
  var currenthours = currentdate.getHours()
  var currentmin = currentdate.getMinutes()
  const [starttime, setStarttime] = useState(isEmpty(data?.starttime) ? `${currenthours}:${currentmin}` : data?.starttime)
  const [endtime, setEndTime] = useState(isEmpty(data?.endtime) ? `${currenthours}:${currentmin}` : data?.endtime)
  const [selectday, setSelectday] = useState(data?.days)
  const onSavedata = () => {
    let body = {
      days: selectday,
      starttime: starttime,
      endtime: endtime,
      hours: `${starttime}-${endtime}`
    }
    onSave(body)
  }

  const onChange = () => {
    const progressbar = document.getElementById("starttime");
    setStarttime(progressbar.value)
    const progressbar1 = document.getElementById("endtime");
    setEndTime(progressbar1.value)
  }
  return (
    <CCol xs lg={6} className="mt-3">
      <div className=" border px-3 py-3 mb-3 rounded shadow" style={{ backgroundColor: '#80808021' }}>
        <CInputGroup className="mb-3">
          <CInputGroupText>
          <i className="fa fa-calendar"></i>
          </CInputGroupText>

          <CFormSelect id="days" value={selectday} onChange={(e) => setSelectday(e.target.value)}>
            <option>Choose days...</option>
            {days?.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </CFormSelect>
        </CInputGroup>
        <CInputGroup className="mb-3">
          <CRow className="">
            <CCol>
              <div>
                Start Time
              </div>
              <input className="rounded border px-2" type="time" id="starttime" onChange={() => onChange()} data-format="HH:mm" data-template="HH : mm"
                value={starttime}
              />
            </CCol>
            <CCol>
              <div>
                End Time
              </div>
              <input className="rounded border px-2" type="time" id="endtime" onChange={() => onChange()} data-format="HH:mm" data-template="HH : mm"
                value={endtime} />
            </CCol>
          </CRow>

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
          <div onClick={() => onSavedata()} >
            <CImage
              className="save_icon"
              rounded
              src={Images.unsave_icon}
            />
          </div>
        </div>
      </div>
    </CCol>
  )
}

export default TrainerScheduleForm

TrainerScheduleForm.propTypes = {
  key: PropTypes.number,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  data: PropTypes.any
};
import React, { useEffect, useState } from "react"
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CFormTextarea,
    CRow,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Countries from '../../json/Countries.json'
import PropTypes from 'prop-types'
import { API, axiosInstance, isEmpty } from "src/globalfunction"
import { useNavigate } from "react-router-dom"
const FacilitiesModel = ({ isshowform, onClose, data }) => {
    console.log("ismode----------", data)
    const [state, setState] = useState(data?.facilities_name)
    const onAddNew = () => {
        if (!isEmpty(state)) {
            API.post('v1.0/facilities/add-facilities', { facilities_name: state }).then(res => {
                console.log("add-facilities", res.data)
                if (res.data.status) {
                    alert(res.data.message)
                    onClose()
                }
                else {
                    alert(res.data.message)
                }
            })
        }
        else {
            alert("Please Enter your missing field")
        }
    }

    const onUpdate = () => {
        let body = {
            _id: data?._id,
            facilities_name: state
        }
        try {
            API.put('v1.0/facilities/update-facilties', body).then(res => {
                if (res.data.status) {
                    alert(res.data.message)
                    onClose()
                }
                else {
                    alert(res.data.message)
                }
            })
        }
        catch (err) {
            alert("Something went wrong")
        }
    }
    useEffect(() => {

    }, [state])
    return (
        <CModal fullscreen="md" visible={isshowform}
            onClose={onClose}>
            <CModalHeader>
                <CModalTitle>Add New Facilities</CModalTitle>
            </CModalHeader>
            <CModalBody className="px-4 py-3 border mx-4 my-3 modal-shadow rounded">
            <p className="text-medium-emphasis">{`${isEmpty(data?._id) ? "Create" : "Update"} your  account`}</p>
                <CInputGroup className="mb-3">
                    {/* <CInputGroupText>@</CInputGroupText> */}
                    <CInputGroupText>
                        <i className="fa fa-bicycle"></i>
                    </CInputGroupText>
                    <CFormInput
                        defaultValue={!isEmpty(data?._id) ? data?.facilities_name : state}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="Enter your facility" autoComplete="facility" />
                </CInputGroup>

                <div className="d-grid" onClick={() => !isEmpty(data?._id) ? onUpdate() : onAddNew()}>
                    <CButton className="update_btn">{!isEmpty(data?._id) ? "Update Facility" : "Add New Facility"}</CButton>
                </div>

            </CModalBody>
        </CModal>
    )
}
export default FacilitiesModel
FacilitiesModel.propTypes = {
    isshowform: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.object
};
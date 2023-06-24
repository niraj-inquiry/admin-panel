
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
const AddNewRole = ({ isshowform, onClose, data }) => {
    const [rolename, setRolename] = useState(data?.rolename)
    const onAddNew = () => {
        if (!isEmpty(rolename)) {
            axiosInstance.post('v1.0/role/add-role', { rolename: rolename }).then(res => {
                console.log("role", res.data)
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
            rolename: rolename
        }
        try {
            axiosInstance.put('v1.0/role/update-role', body).then(res => {
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

    return (
        <CModal fullscreen="md" visible={isshowform}
            onClose={onClose}>
            <CModalHeader>
                <CModalTitle>Add New Role</CModalTitle>
            </CModalHeader>
            <CModalBody className="px-4 py-3 border mx-4 my-3 modal-shadow rounded">
            <p className="text-medium-emphasis">{`${isEmpty(data?._id)?"Create":"Update"} your  account`}</p>
                <CInputGroup className="mb-3">
                    {/* <CInputGroupText>@</CInputGroupText> */}
                    <CInputGroupText>
                        <i className="fa fa-user"></i>
                    </CInputGroupText>
                    <CFormInput
                        defaultValue={!isEmpty(data?._id) ? data?.rolename : rolename}
                        value={rolename}
                        onChange={(e) => setRolename(e.target.value)}
                        placeholder="Enter your role name" autoComplete="rolename" />
                </CInputGroup>

                <div className="d-grid" onClick={() => !isEmpty(data?._id) ? onUpdate() : onAddNew()}>
                    <CButton className="update_btn">{!isEmpty(data?._id) ? "Update Role" : "Add New Role"}</CButton>
                </div>

            </CModalBody>
        </CModal>
    )
}
export default AddNewRole
AddNewRole.propTypes = {
    isshowform: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.object
};
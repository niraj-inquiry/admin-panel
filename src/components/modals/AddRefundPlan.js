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
const AddRefundPlan = ({ isshowform, onClose, data, onSave }) => {

    console.log("refund process", data?._id)
    const [planlist, setPlanList] = useState([])
    const [selectplan, setSelectplan] = useState(data?.planinfo[0]?.planname)

    const [refundwithinday, setRefundwithinday] = useState(data?.refundwithinday)
    const [refundpercentage, setRefundpercentage] = useState(data?.refundpercentage)
    const userid = localStorage.getItem("userid")
    console.log("userid", userid)
    console.log('data?.planinfo[0]?.planname', data?.planinfo[0]?.planname)
    const onLoad = () => {

        axiosInstance.get('v1.0/plan/get-all-plan').then(res => {
            if (res.data.status) {
                setPlanList(res.data.data)
            }
        })
    }
    useEffect(() => {
        onLoad()
    }, [])

    const onRefundAction = () => {

        let body = {
            planid: selectplan,
            createdbyuserid: userid,
            refundwithinday: refundwithinday,
            refundpercentage: refundpercentage,
            status: true
        }

        let upbody = {
            _id: data?._id,
            planid: selectplan,
            createdbyuserid: userid,
            refundwithinday: refundwithinday,
            refundpercentage: refundpercentage,
            status: true
        }


        axiosInstance.post('v.1.0/refundPlan/post-refund-polices', isEmpty(data?._id) ? body : upbody).then(res => {
            console.log("update", res.data.data)
            if (res.data.status) {
                alert(res.data.message)
                onLoad()
                onSave()
                onClose()
            }
            else {
                alert(res.data.message)
            }
        })

    }

    useEffect(() => {
        setSelectplan(data?.planinfo[0]?.planname)
    }, [setSelectplan])

    return (
        <CModal fullscreen="md" visible={isshowform}
            onClose={onClose}>
            <CModalHeader>
                <CModalTitle>Refund Polices</CModalTitle>
            </CModalHeader>
            <CModalBody className="px-4 py-3 border mx-4 my-3 modal-shadow rounded">
                <p className="text-medium-emphasis">{`${isEmpty(data?._id) ? "Create" : "Update"} your  account`}</p>
                <CRow>
                    <CCol>
                        <CInputGroup className="mb-3">
                            <CInputGroupText>
                                <i className="fa fa-id-card"></i>
                            </CInputGroupText>
                            <CFormSelect
                                // defaultValue={data?.planinfo[0]?.planname}
                                value={selectplan}
                                onChange={(e) => setSelectplan(e.target.value)}>
                                <option>{data?.planinfo[0]?.planname}</option>
                                {planlist?.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.planname}</option>
                                ))}
                            </CFormSelect>
                        </CInputGroup>
                    </CCol>

                </CRow>
                <CRow>
                    <CCol>
                        <CInputGroup className="mb-3">
                            {/* <CInputGroupText>@</CInputGroupText> */}
                            <CInputGroupText>
                                <i className="fa fa-map-pin"></i>
                            </CInputGroupText>
                            <CFormInput
                                defaultValue={data?.refundwithinday}
                                value={refundwithinday}
                                onChange={(e) => setRefundwithinday(e.target.value)}
                                placeholder="Enter refund with day" autoComplete="planname"
                                type={"number"}
                            />
                        </CInputGroup>
                    </CCol>
                    <CCol>
                        <CInputGroup className="mb-3">
                            {/* <CInputGroupText>@</CInputGroupText> */}
                            <CInputGroupText>
                                <i className="fa fa-rupee"></i>
                            </CInputGroupText>
                            <CFormInput
                                defaultValue={data?.refundpercentage}
                                value={refundpercentage}
                                onChange={(e) => setRefundpercentage(e.target.value)}
                                placeholder="Enter your percentage for refund amount"
                                type={"number"}
                            />
                        </CInputGroup>
                    </CCol>
                </CRow>

                <div className="d-grid" onClick={() => onRefundAction()}>
                    <CButton className="update_btn">{!isEmpty(data?._id) ? "Update" : "Add"}</CButton>
                </div>

            </CModalBody>
        </CModal>
    )
}
export default AddRefundPlan
AddRefundPlan.propTypes = {
    isshowform: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.object,
    onSave: PropTypes.func
};
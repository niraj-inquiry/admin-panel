import { cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CFormInput, CInputGroup, CInputGroupText, CRow, CCol } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EquipmentsForm from "src/components/SubComponents/EquipmentsForm";
import FacilitiesForm from "src/components/SubComponents/FacilitiesForm";
import GymamenitiesForm from "src/components/SubComponents/GymamenitiesForm";
import TrainerScheduleForm from "src/components/SubComponents/TrainerScheduleForm";
import { API, isEmpty } from "src/globalfunction";

const GymDetails = () => {
  const location = useLocation()
  console.log("locaion", location?.state)
  console.log('gym center all details api',location?.state?._id)
  const [aboutus, setAboutus] = useState()
  const [addnewequip, setAddnewequip] = useState()
  const [amenities, setAmenities] = useState([])
  const [gymschedule, setGymschedule] = useState([])
  const [addstatus, setAddstatus] = useState(false)
  const onLoad = () => {
    API.post('v1.0/gymcenterdetails/get-gym-center-all-details', { "gymcenterid": location.state._id }).then(res => {
      console.log("1xxxxxxxxxxxxxxx", res.data)
      if (res.data.status) {
        setAddnewequip(res.data.data.gymeequipments)
        setAmenities(res.data?.data?.gymamenities)
        setAboutus(res.data.data.aboutus)
        setGymschedule(res.data.data.gymopenhours)
      }

    })
  }





  const onAddEquipments = () => {
    console.log("addddddddd", addnewequip);
    if (isEmpty(addnewequip)) {
      let temp = []
      temp.push("")
      setAddnewequip(temp)
    }
    else {
      let temp = [...addnewequip]
      temp.push("")
      setAddnewequip(temp)
    }

  }
  const onRemoveEquipment = (index) => {

    let temp = [...addnewequip]
    let res = temp.filter((v, i) => i !== index)
    // console.log("res0000000000000000000",res)
     temp.splice(index, 1);
    
    setAddnewequip(res)
  }
  const onSaveEquipment = (data, index) => {
    let temp = [...addnewequip]
    temp[index] = data
    console.log("Dddddd",data)
    setAddnewequip(temp)
  }

  // amenities
  const onAddAmenities = () => {
    if (isEmpty(amenities)) {
      let temp = []
      temp.push("")
      setAmenities(temp)
    }
    else {
      let temp = [...amenities]
      temp.push("")
      setAmenities(temp)
    }

  }

  // const onFacilities = () => {
  //   if (isEmpty(amenities)) {
  //     let temp = []
  //     temp.push("")
  //     setAmenities(temp)
  //   }
  //   else {
  //     let temp = [...amenities]
  //     temp.push("")
  //     setAmenities(temp)
  //   }

  // }
  const onRemoveAmenities = (index) => {
    let temp = [...amenities]
    let res = temp.filter((v, i) => i !== index)

    setAmenities(res)
  }

  const onSaveAmenities = (data, index) => {
    let temp = [...amenities]

    temp[index] = data
    setAmenities(temp)
  }

  //tainer
  const onAddTainerschedule = () => {
    if (isEmpty(gymschedule)) {
      let temp = []
      temp.push("")
      setGymschedule(temp)
    }
    else {
      let temp = [...gymschedule]
      temp.push("")
      setGymschedule(temp)
    }
    // let temp=[...gymschedule]
    // temp.push({status:false})
    //   setGymschedule(temp)
  }
  const onRemoveSchedule = (index) => {
    let temp = [...gymschedule]
    let res = temp.filter((v, i) => i !== index)
    
    setGymschedule(res)
  }

  const onSaveSchedule = (data, index) => {
    let temp = [...gymschedule]
    temp[index] = data

    setGymschedule(temp)
  }


  const onAddData = async () => {

    let equiptem = []
    const tempequ = [...addnewequip]

    for (let i = 0; i < tempequ.length; i++) {

      const formdata = new FormData()
      formdata.append("gymid", tempequ[i]?.gymid);
      formdata.append("user_id", tempequ[i]?.user_id);
      formdata.append("description", tempequ[i]?.description);
      formdata.append("equipment_brand", tempequ[i]?.equipment_brand);
      formdata.append("equipment_name", tempequ[i]?.equipment_name);
      formdata.append("equipments", tempequ[i]?.equipments);
      formdata.append("equipment_model_number", tempequ[i]?.equipment_model_number);
      API.post('v1.0/gymequipment/add-gym-equipments', formdata).then(res => {
        if (res.data.status) {
          let tempdata = { equipmentsid: res?.data?.data?._id, name: res?.data?.data?.equipment_name }
          console.log('tempdata',tempdata)
          addnewequip[i] = tempdata
          setAddnewequip(addnewequip)
        }
      })

    }

    let body = {
      gymcenterid: location?.state?._id,
      aboutus: aboutus,
      gymeequipments: addnewequip,
      gymamenities: amenities,
      gymopenhours: gymschedule
    }


    API.post('v1.0/gymcenterdetails/add-gym-center-details', body).then(res => {
      console.log("res", res?.data)
      if (res.data.status) {
        alert(res.data.message)
      }
    })



  }


  useEffect(() => {
    onLoad()
  }, [])
  console.log("addnewequip", addnewequip)
  return (

    <>
      <p className="text-medium-emphasis fs-4 mt-2" >{`Add More details`}</p>

      {/* gym center name */}
      <CInputGroup className="mb-3 w-50 pe-3">
        <CInputGroupText>
          <CIcon icon={cilUser} />
        </CInputGroupText>
        <CFormInput

          value={aboutus}
          onChange={(e) => setAboutus(e.target.value)}
          placeholder="About Us" autoComplete="aboutus" />
      </CInputGroup>



      {/* <div className="">
                {addnewequip?.length > 0 ? (addnewequip.map((item, index) => <EquipmentsForm key={index}
                    onDelete={() => onRemoveEquipment(index)}
                    onSave={(data) => onSaveEquipment(data, index)}
                    item={item}
                    gymid={location.state._id }
                />)) : ("")}
            </div> */}
      <CRow>
        {/* <CCol> */}
        {addnewequip?.length > 0 ? (addnewequip.map((item, index) => <EquipmentsForm key={index}

          onDelete={() => onRemoveEquipment(index)}
          onSave={(data) => onSaveEquipment(data, index)}
          item={item}
          gymid={location?.state?._id}
        />)) : ("")}
        {/* </CCol> */}

      </CRow>
      <div className="w-100 my-3 me-5">
        <div onClick={() => onAddEquipments()} className="addNew ms-auto">
          {"+ Add Equipments"}
        </div>
      </div>


      <CRow>
        {/* amenities */}

        {amenities?.length > 0 && (amenities?.map((item, index) => <GymamenitiesForm key={index}
          onDelete={() => onRemoveAmenities(index)}
          onSave={(data) => onSaveAmenities(data, index)}
          item={item}
        />))

        }
      </CRow>
      <div className="w-100 my-3 me-5">
        <div onClick={() => onAddAmenities()} className="addNew ms-auto">
          {"+ Add Amenities"}
        </div>
      </div>
      {/* open hours */}
      <CRow>
        {gymschedule?.length > 0 ? (gymschedule.map((item, index) => <TrainerScheduleForm key={index}
          onDelete={() => onRemoveSchedule(index)}
          onSave={(data) => onSaveSchedule(data, index)}
          data={item}
        />)) : ("")}
      </CRow>
      <div className="w-100 my-3 me-5">
        <div onClick={() => onAddTainerschedule()} className="addNew ms-auto">
          {"+ Add Trainer Schedule"}
        </div>
      </div>
      {/* <CRow>
        <FacilitiesForm/>
      </CRow>
      <div className="w-100 my-3 me-5">
        <div className="addNew ms-auto">
          {"+ Add Facilities"}
        </div>
      </div> */}
      {/* <div className="column float-end"> */}
      <CRow className="w-100 my-5 mx-3">
        <CCol className="me-0">
          <div onClick={() => onAddData()} className="mainsavebtn px-3 py-2 float-end">
            {"Save Changes"}
          </div>
        </CCol>
      </CRow>

      {/* </div> */}
    </>
  )
}

export default GymDetails
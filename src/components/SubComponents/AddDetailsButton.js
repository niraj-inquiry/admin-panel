import React, { useEffect, useState } from 'react'
import { API } from 'src/globalfunction'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import * as Images from '../../assets';
import {
  CImage,

} from '@coreui/react'
const AddDetailsButton = ({ onClick, data }) => {
  const navigation = useNavigate()
  const [gymshowdetailstatus, setGymshowdetailstatus] = useState(false)
  const [gymdata, setgymdata] = useState()
  const onLoadDetail = () => {
    API.post('v1.0/gymcenterdetails/get-gym-center-all-details', { gymcenterid: data?._id }).then(
      (res) => {
        console.log('useeffect---------', res.data)
        setGymshowdetailstatus(res.data.status)
        if (res.data.status) {
          setgymdata(res.data.data)
        }
      },
    )
  }

  const onupdate = () => {
    onClick(gymdata)
  }
  useEffect(() => {
    onLoadDetail()
  }, [])
  return (
    <div
      onClick={() =>
        // onupdate()
        navigation('/gymdetails', { state: data })
      }
    // className="button-1 buttonwidth"
    >
      {/* {gymshowdetailstatus ? 'Update Details' : '+ Add Details'} */}
      <CImage
        rounded
        src={Images.add_icon}
        className="icons"
      />
    </div>
  )
}

export default AddDetailsButton
AddDetailsButton.propTypes = {
  //   isshowform: PropTypes.bool,
  onClick: PropTypes.func,
  data: PropTypes.object,
}

import React  from 'react'
import AddCenter from './centers/AddCenter'
import AddCenterFeature from './centers/AddCenterFeature'
import AddCenterFitem from './centers/AddCenterFitem'

const CenterManagement = () => {
  return (
    <>
     <AddCenter/>
      <hr />
      <AddCenterFeature/>
      <hr />
      <AddCenterFitem/>
    </>
  )
}

export default CenterManagement

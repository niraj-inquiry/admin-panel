import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddCenter = () => {
    const [addCenterType, setAddCenterType] = useState('')
    const [getCenterTypeData, setGetCenterTypeData] = useState([])
    const handleAddCenterType = (e) => {
        e.preventDefault()
        axios
          .post('https://gym-api-3r8c.onrender.com/api/create-centertype', {
            name: addCenterType,
          })
          .then((res) => {
            console.log(res)
            getCenterTypeDatas()
          })
          .catch((err) => {
            console.log(err)
            alert('Failed to Create !')
          })
      }
      const getCenterTypeDatas = () => {
        axios
          .get('https://gym-api-3r8c.onrender.com/api/get-centertype')
          .then((res) => {
            setGetCenterTypeData(res.data.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
      useEffect(() => {
        getCenterTypeDatas()
        
      }, [])
    return (
    <>
       <div className="container">
       <div className="row">
          <div className="col-lg-8">
            <form onSubmit={(e) => handleAddCenterType(e)}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Center Type Name"
                  value={addCenterType}
                  onChange={(e) => setAddCenterType(e.target.value)}
                />
                <button className="input-group-text" type="submit">
                  Add Center Type
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-8">
            <table className="table table-striped table-responsive">
              <thead>
                <tr>
                  <th>Sl. No</th>
                  <th>Center Type Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getCenterTypeData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>Edit | Delete</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
       </div>
    </>
  )
}

export default AddCenter
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddCenterFeature = () => {
  const [getCenterId, setGetCenterId] = useState('')
  const [centerFeatureName, setCenterFeatureName] = useState('')
  const [getCFeature, setGetCFeature] = useState([])
  const [getCenterTypeData, setGetCenterTypeData] = useState([])
  const handleCenterFeature = (e) => {
    e.preventDefault()
    axios
      .post('https://gym-api-3r8c.onrender.com/api/create-centertypefeature', {
        centerTypeId:getCenterId,
        name:centerFeatureName,
      })
      .then((res) => {
        console.log(res)
        getCenterFeatureData()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getCenterFeatureData = () => {
    axios
      .get('https://gym-api-3r8c.onrender.com/api/get-centertypefeature')
      .then((res) => {
        setGetCFeature(res.data.data)
      })
      .catch((err) => {
        console.log(err)
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
    getCenterFeatureData()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={(e) => handleCenterFeature(e)}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="getCenterId"
                      value={getCenterId}
                      onChange={(e) => setGetCenterId(e.target.value)}
                    >
                      <option>Open this select menu</option>
                      {getCenterTypeData.map((item, index) => {
                        return (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        )
                      })}
                    </select>
                    <label htmlFor="getCenterId">Works with selects</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="centerFeatureName"
                      value={centerFeatureName}
                      onChange={(e) => setCenterFeatureName(e.target.value)}
                      placeholder="Enter Center Feature Name"
                    />
                    <label htmlFor="centerFeatureName">Center Feature Name</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <button type="submit">Add Center Feature Name</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-responsive">
              <thead>
                <tr>
                  <th>Center Type Feature Name</th>
                  <th>Center Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getCFeature.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.centerTypeId}</td>
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

export default AddCenterFeature

import React, { useState, useEffect } from 'react'
import axios from 'axios'
const AddCenterFitem = () => {
  const [getCenterTypeData, setGetCenterTypeData] = useState([])
  const [getCFeature, setGetCFeature] = useState([])
  const [getCFeatureid, setGetCFeatureId] = useState('')
  const [getCenterId, setGetCenterId] = useState('')
  const [centeritem, setCenterItem] = useState('')
  const [getCTItem, setGetCItem] = useState([])
  const handleAddItem = (e) => {
    e.preventDefault()
    axios
      .post('https://gym-api-3r8c.onrender.com/api/create-centerfeatureitem', {
        centerTypeId: getCenterId,
        centerFeatureId: getCFeatureid,
        name: centeritem,
      })
      .then((res) => {
        console.log(res)
        getCenterItem()
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
  const getCenterItem = () => {
    axios.get('https://gym-api-3r8c.onrender.com/api/get-centerfeatureitem').then((res) => {
      setGetCItem(res.data.data)
    })
  }
  console.log('getCFeature', getCFeature)
  useEffect(() => {
    getCenterTypeDatas()
    getCenterFeatureData()
    getCenterItem()
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={(e) => handleAddItem(e)}>
              <div className="row">
                <div className="col-lg-6 mb-3">
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
                <div className="col-lg-6 mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      value={getCFeatureid}
                      onChange={(e) => setGetCFeatureId(e.target.value)}
                    >
                      <option>Choose Center Feature</option>
                      {getCFeature
                        .filter((filtItem) => filtItem.centerTypeId === getCenterId)
                        .map((item, index) => {
                          return (
                            <option key={index} value={item.name}>
                              {item.name}
                            </option>
                          )
                        })}
                    </select>
                    <label htmlFor="getCFeatureid">Works with selects</label>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Item Name"
                      id="centeritem"
                      value={centeritem}
                      onChange={(e) => setCenterItem(e.target.value)}
                    />
                    <label htmlFor="centeritem">Enter Item Name</label>
                  </div>
                </div>
                <div className="col-lg-6">
                    <button type='submit' >Add Feature Item</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Center Type Item</th>
                  <th>Center Type Feature</th>
                  <th>Center Type</th>
                  <th>Center Type</th>
                </tr>
              </thead>
              <tbody>
                {getCTItem.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.centerFeatureId}</td>
                      <td>{item.centerTypeId}</td>
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

export default AddCenterFitem

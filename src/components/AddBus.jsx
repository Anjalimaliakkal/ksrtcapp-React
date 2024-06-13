import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddBus = () => {
    const [data, setData] = useState(
        {
            "busname": "",
            "route": "",
            "busnumber": "",
            "drivername": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/AddBus", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("add successfully")
                } else {
                    alert("error")
                }
            }
        ).catch()
    }
    return (
        <div><NavBar />
            <h1><center>ADD BUS</center></h1>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Bus Name</label>
                                <input type="text" className="form-control" value={data.busname} name='busname' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Route</label>
                                <input type="text" className="form-control" value={data.route} name='route' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">busnumber</label>
                                <input type="text" className="form-control" value={data.busnumber} name='busnumber' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">drivername</label>
                                <input type="text" className="form-control" value={data.drivername} name='drivername' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBus
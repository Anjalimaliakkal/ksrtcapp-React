import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignIn = () => {

    const [data, setdata] = useState(
        {

            "emailid": "",
            "password": "",

        }

    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/signIn", data).then((Response) => {
            console.log(data)
            if (Response.data.status == "success") {
                sessionStorage.setItem("token",Response.data.token)
                sessionStorage.setItem("userid",Response.data.userid)
                
            } else {
                alert("Error")
            }
        }).catch()
    }
    
    return (
        <div>
            <center><h1>SIGN-IN</h1></center>
            <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col col-2 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="email" name="emailid" onChange={inputHandler} value={data.emailid} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" value={data.password} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readValue}>Sign In</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/SignUp" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Click to SignUp</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn
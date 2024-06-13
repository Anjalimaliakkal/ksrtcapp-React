import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [data, setdata] = useState(
        {

            "name": "",
            "emailid": "",
            "phonenumber": "",
            "gender": "",
            "password": "",
            "confirmpassword": ""

        }

    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/signUp", data).then((Response) => {
            console.log(data)
            if (Response.data.status == "success") {
                alert("Signed Up successfully")
            } else {
                alert("Error")
            }
        }).catch()
    }

    return (
        <div>
            <center><h1>SIGN-UP</h1></center>
            <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col col-2 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" value={data.name} name='name' onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="email" name="emailid" onChange={inputHandler} value={data.emailid} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="number" name="phonenumber" onChange={inputHandler} value={data.phonenumber} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Gender</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            FEMALE
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            MALE
                                        </label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" value={data.password} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" name="confirmpassword" value={data.confirmpassword} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readValue}>Sign Up</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <p><a href="/" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Back to SignIn</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp
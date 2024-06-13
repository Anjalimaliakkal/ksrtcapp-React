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

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images-na.ssl-images-amazon.com/images/I/71pUJx7TpOL.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://th-i.thgim.com/public/incoming/1hbx2k/article65561885.ece/alternates/LANDSCAPE_1200/4863_24_6_2022_19_56_50_2_KSRTCSWIFT_1.JPG" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://trak.in/wp-content/uploads/2016/02/KSRTC-Bus-Free-Wifi.jpg" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            <center><h1>SIGN-IN</h1></center>
            <br /><br />
<center>
            <div className="container">
                <div className="row">
                    <div className="col col-2 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="email" name="emailid" onChange={inputHandler} value={data.emailid} id="" className="form-control" />
                            </div>
                            <br></br>
                            <div className="col col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">

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
            </center>

        </div>
    )
}

export default SignIn
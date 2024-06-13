import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewAll = () => {
    const [todos, changeTodos] = useState(
        [] 
    )
    const fetchData = () => {
        axios.get("http://localhost:8081/ViewAll")
            .then(
                (response) => {
                    console.log(response.data)
                    changeTodos(response.data)
                }
            ).catch(
                (error) => {
                    console.log(error.message)
                    alert(error.message)

                }
            ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (

        <div>
            <NavBar />
            <h1><center>VIEWALL BUSES</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">BUS NAME</th>
                                    <th scope="col">ROUTE</th>
                                    <th scope="col">BUS NUMBER</th>
                                    <th scope="col">DRIVER NAME</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.busname}</th>
                                                <td>{value.route}</td>
                                                <td>{value.busnumber}</td>
                                                <td>{value.drivername}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
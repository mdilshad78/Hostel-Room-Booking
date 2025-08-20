import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Show() {
    const [data, setData] = useState([])

    useEffect(() => {
        getdata();
    })

    const getdata = () => {
        axios.get("http://hostel-room-booking-frontend.vercel.app/show").then((result) => {
            setData(result.data)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((item, index) => {
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.password}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

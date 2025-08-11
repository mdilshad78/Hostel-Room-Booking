import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import img from '../image/Home_image/main.png'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const nav = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    axios.defaults.withCredentials = true;

    const submit = () => {
        axios.post("http://hostel-room-booking-mu.vercel.app/reg", { name, email, phone, password })
            .then((result) => {
                console.log(result)
                alert("Register Successfully")
            }).catch((err) => {
                console.log(err)
                // alert("not")
            })
        setName('');
        setEmail("");
        setPhone("");
        setPassword("");
    }

    function close() {
        navigate("/")
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-sm-4 col-4">
                        <img src={img} className='mt-3' alt="" height={"60px"} />
                    </div>
                    <div className="col-xl-4 col-sm-4 col-4"></div>
                    <div className="col-xl-4 col-sm-4 col-4 mt-2">
                        <button className='btn border-0 fixed float-end text-dark mt-2' onClick={close}><span className='fs-2'><i class="fa-solid fa-xmark ms-2"></i></span></button>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <h1 className='text-center'>JOIN NOW</h1>
                        <form action="">
                            <div className='form-floating mt-5'>
                                <input type="name" className='form-control pad' placeholder='Enter Your name'
                                    name='name' onChange={(e) => setName(e.target.value)} value={name} required />
                                <label htmlFor="">Enter Your Name</label>
                            </div>
                            <div className='form-floating mt-4'>
                                <input type="email" className='form-control pad' placeholder='Enter Your Email'
                                    name='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                                <label htmlFor="">Enter Your Email</label>
                            </div>
                            <div className='form-floating mt-4'>
                                <input type="number" className='form-control pad' placeholder='Enter Your Email'
                                    name='number' onChange={(e) => setPhone(e.target.value)} value={phone} required />
                                <label htmlFor="">Enter Your Phone Number</label>
                            </div>
                            <div className='form-floating mt-4'>
                                <input type="password" className='form-control pad' placeholder='Enter Your Email'
                                    name='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                                <label htmlFor="">Enter Your Password</label>
                            </div>
                            <div className='text-center mt-5'>
                                <Link><button className='btn btn-success fs-4' onClick={submit}>JOIN</button></Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </div>
    )
}

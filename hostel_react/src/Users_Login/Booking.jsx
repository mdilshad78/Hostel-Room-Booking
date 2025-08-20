import React, { useEffect, useState } from 'react'
import AOS from 'aos'

import main from '../image/Home_image/main.png'
import img from '../image/Book_image/book1.jpg'
import img1 from '../image/Book_image/book2.jpg'
import img2 from '../image/Room_image/student.jpg'
import img3 from '../image/Room_image/dinning.jpeg'
import img4 from '../image/Book_image/book5.avif'
import img5 from '../image/Book_image/book6.jpeg'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Book() {
    const [names, setNames] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [checkin, setCheckin] = useState()
    const [checkout, setCheckout] = useState()
    const [adult, setAdult] = useState()
    const [child, setChild] = useState()
    const [room, setRoom] = useState()
    const [request, setReq] = useState()
    const navigate = useNavigate()

    function submit() {
        axios.post("http://hostel-room-booking-frontend.vercel.app/book", { names, email, phone, checkin, checkout, adult, child, room, request })
            .then((result) => {
                console.log(result)
                alert("Booking successfully");
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    function close() {
        navigate("/")
    }
    return (
        <>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 img">
                        <div className="row">
                            <div className="col-xl-4 col-sm-4 col-4">
                                <img src={main} className='mt-3' alt="" height={"60px"} />
                            </div>
                            <div className="col-xl-4 col-sm-4 col-4"></div>
                            <div className="col-xl-4 col-sm-4 col-4 mt-2">
                                <button className='btn border-0 fixed float-end text-light' onClick={close}><span className='fs-2'>back<i class="fa-solid fa-xmark ms-2"></i></span></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4"></div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="row my-5"></div>
                                <div className="row my-5"></div>
                                <div className="row my-5"></div>
                                <div className="row my-5"></div>
                                <div className="row my-5"></div>
                                <h1 className='text-dark text-center fw-bold'>Book Your Room</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-xl-12 col-sm-12 col-md-12 mt-5 text-center" data-aos="fade-up">
                        <h3><i class="fa-solid fa-minus"></i><i class="fa-solid fa-minus"></i><i class="fa-solid fa-minus"></i><span className='ms-3'>ROOM BOOKING</span><i class="fa-solid fa-minus ms-3"></i><i class="fa-solid fa-minus"></i><i class="fa-solid fa-minus"></i></h3>
                        <h1 className='mt-4 font4'>Book A <span className=''>LUXURY ROOM</span></h1>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-xl-6 col-sm-12 ">
                        <div className="row">
                            <div className="col-sm-6" data-aos="zoom-in">
                                <img src={img1} alt="" className='img-fluid mt-3' />
                            </div>
                            <div className="col-sm-6" data-aos="zoom-in">
                                <img src={img} alt="" className='img-fluid mt-3' />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-sm-6" data-aos="zoom-in">
                                <img src={img3} alt="" className='img-fluid mt-2' />
                            </div>
                            <div className="col-sm-6" data-aos="zoom-in">
                                <img src={img2} alt="" className='img-fluid mt-2' />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-6" data-aos="zoom-in">
                                <img src={img4} alt="" className='img-fluid mt-2' />
                            </div>
                            <div className="col-sm-6" data-aos="zoom-in">
                                <img src={img5} alt="" className='img-fluid mt-2' />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 med mt-3" data-aos="fade-up">
                        <div className="row">
                            <div className="col-sm-12">
                                <form action="">
                                    <div className='form-floating '>
                                        <input type="name" name="name" placeholder='Your Name' className='form-control' onChange={(e) => setNames(e.target.value)} value={names} />
                                        <label htmlFor="">Your Name</label>
                                    </div>

                                    <div className='form-floating'>
                                        <input type="email" name="email" placeholder='Your Email' className='form-control mt-4' onChange={(e) => setEmail(e.target.value)} value={email} />
                                        <label htmlFor="">Your Email</label>
                                    </div>
                                    <div className='form-floating'>
                                        <input type="tel" name="phone" placeholder='Your Email' className='form-control mt-4' onChange={(e) => setPhone(e.target.value)} value={phone} />
                                        <label htmlFor="">Your Contact Number</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className='form-floating'>
                                                <input type="datetime-local" name="time" placeholder='Check In' className='mt-4 form-control' onChange={(e) => setCheckin(e.target.value)} value={checkin} />
                                                <label htmlFor="">Check In</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className='form-floating'>
                                                <input type="datetime-local" name="time" placeholder='Check Out' className='mt-4 form-control' onChange={(e) => setCheckout(e.target.value)} value={checkout} />
                                                <label htmlFor="">Check Out</label>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className='form-floating'>
                                                <input type="number" name="adult" placeholder='Select Adult' className='mt-4 form-control' onChange={(e) => setAdult(e.target.value)} value={adult} />
                                                <label htmlFor="">Select Adult</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className='form-floating'>
                                                <input type="number" name="child" placeholder='Select Child' className='mt-4 form-control' onChange={(e) => setChild(e.target.value)} value={child} />
                                                <label htmlFor="">Select child</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='form-floating'>
                                        <input type="number" name="child" placeholder='Select Room' className='mt-4 form-control' onChange={(e) => setRoom(e.target.value)} value={room} />
                                        <label htmlFor="">Select Room</label>
                                    </div>

                                    <div className='form-floating'>
                                        <input type="text" name="child" placeholder='Select Room' className='mt-4 form-control' onChange={(e) => setReq(e.target.value)} value={request} />
                                        <label htmlFor="">Special Request</label>
                                    </div>

                                    <div className=''>
                                        <button className='btn btn-warning mt-5 name' onClick={submit}>Book Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

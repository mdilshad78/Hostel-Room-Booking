import React from 'react'
import { Link } from 'react-router-dom'

import locate from '../image/Home_image/locate.png'
import call from '../image/Home_image/call.png'

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-primary mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 mt-5 mb-4">
                            <h1 className='text-light'>Hosteller</h1>
                            <p className='text-light'>Ut tellus elementum sagittis vitae et leo duis ut. Sit amet consectetur adipiscing elit duis. Ultrices gravida dictum fusce ut placer orci nulla pellentesque</p>
                        </div>

                        <div className="col-sm-1"></div>
                        <div className="col-xl-3 mt-5 ">
                            <h3 className='text-light'>Quick links</h3>
                            <Link to="/" className='text-light fs-4 text-decoration-none'>Home</Link><br />
                            <Link to="/about" className='text-light fs-4 text-decoration-none'>About</Link><br />
                            <Link to="/room" className='text-light fs-4 text-decoration-none'>Rooms</Link><br />
                            <Link to="/news" className='text-light fs-4 text-decoration-none'>News</Link>
                        </div>

                        <div className="col-xl-3 mt-5">
                            <h3 className='text-light'>Contact Us</h3>
                            <div className="row mt-3">
                                <div className="col-sm-2 col-3 mt-1 text-center">
                                    <img src={locate} alt="" className='mt-2' height={"40px"} />
                                </div>
                                <div className="col-sm-8 col-9">
                                    <p className='fs-5 text-light'>54826 Fadel Circles<br />
                                        Darrylstad, AZ 90995</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-2 col-3 mt-2 text-center">
                                    <img src={call} alt="" className='mt-2' height={"35px"} />
                                </div>
                                <div className="col-sm-8 col-9">
                                    <p className='fs-5 text-light'>(329) 580-7077<br />
                                        (650) 382-5020</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 mt-5 mb-5">
                            <h3 className=' text-light'>Follow Us</h3>
                            <div className="row">
                                {/* <div className="col-sm-3"></div> */}
                                <div className="col-sm-9">
                                    <p className='text-light fs-5 justify-content-center'>Venenatis urna<br /> cursus eget nunc<br /> scelerisque</p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                {/* <div className="col-sm-3"></div> */}
                                <div className="col-sm-2 col-1 text-center">
                                    <i class="fa-brands fa-facebook-f fs-3 text-light"></i>
                                </div>
                                <div className="col-sm-2 col-1 text-center">
                                    <i class="fa-brands fa-instagram fs-3 text-light"></i>
                                </div>
                                <div className="col-sm-2 col-1 text-center">
                                    <i class="fa-brands fa-twitter fs-3 text-light"></i>
                                </div>
                                <div className="col-sm-2 col-1 text-center">
                                    <i class="fa-brands fa-whatsapp fs-3 text-light"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

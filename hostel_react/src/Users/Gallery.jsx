import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/gallery.css'

import img1 from '../image/gallery_image/full01.webp'
import img2 from '../image/gallery_image/full02.webp'
import img3 from '../image/gallery_image/full03.webp'
import img4 from '../image/gallery_image/full04.webp'
import img5 from '../image/gallery_image/full05.webp'
import img6 from '../image/gallery_image/full06.webp'
import img7 from '../image/gallery_image/full07.webp'
import img8 from '../image/gallery_image/full08.webp'
import img9 from '../image/gallery_image/full09.webp'
import img10 from '../image/gallery_image/full10.webp'
import img11 from '../image/gallery_image/full11.webp'
import img12 from '../image/gallery_image/full12.webp'
import Footer from './Footer'

export default function Gallery() {
    return (
        <>
            <div className="container-fluid back">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <h4 className="mx-5 mt-5"><Link to="/" className="text-primary text-decoration-none">Home</Link> / Photo Gallery of Our Hostel</h4>
                            <h1 className="display-4 mt-2 fw-bold  mx-5 mb-5">Gallery</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div class="row">
                    <div class="col-xl-4 col-md-12 mb-4 mb-lg-0 mt-5">
                        <div className='boxes1 curd'>
                            <div className="boxes-img1 curd"></div>
                        </div>

                        <div className='boxes2 curd mt-4'>
                            <div className="boxes-img2 curd"></div>
                        </div>

                        <div className='boxes3 curd mt-4'>
                            <div className="boxes-img3 curd"></div>
                        </div>

                        <div className='boxes4 curd mt-4'>
                            <div className="boxes-img4 curd"></div>
                        </div>

                    </div>

                    <div class="col-xl-4 mb-4 mb-lg-0 mt-5">
                        <div className='boxes5 curd'>
                            <div className="boxes-img5 curd"></div>
                        </div>

                        <div className='boxes6 curd mt-4'>
                            <div className="boxes-img6 curd"></div>
                        </div>

                        <div className='boxes7 curd mt-4'>
                            <div className="boxes-img7 curd"></div>
                        </div>

                        <div className='boxes8 curd mt-4'>
                            <div className="boxes-img8 curd"></div>
                        </div>
                    </div>

                    <div class="col-xl-4 mb-4 mb-lg-0 mt-5">
                        <div className='boxes9 curd'>
                            <div className="boxes-img9 curd"></div>
                        </div>

                        <div className='boxes10 curd mt-4'>
                            <div className="boxes-img10 curd"></div>
                        </div>

                        <div className='boxes11 curd mt-4'>
                            <div className="boxes-img11 curd"></div>
                        </div>

                        <div className='boxes12 curd mt-4'>
                            <div className="boxes-img12 curd"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
            {/* Footer */}

            {/* name */}
            {/* <div className="container mt-3">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <p className=''>Develop by Parvej Khan</p>
                    </div>
                </div>
            </div> */}
            {/* name */}
        </>
    )
}

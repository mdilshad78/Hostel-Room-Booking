import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

import phone from '../image/Home_image/phone.png'
import mail from '../image/Home_image/mail.png'

import img1 from '../image/Home_image/book.png'
import img2 from '../image/Home_image/trip.png'
import img3 from '../image/Home_image/google.webp'
import img4 from '../image/Home_image/hostel.png'

export default function Contact() {
  return (
    <>
      <div className="container-fluid back mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h4 className="mx-5 mt-5">
                <Link to="/" className="text-primary text-decoration-none">Home</Link> / Contacts
              </h4>
              <h1 className="display-4 fw-bold  mx-5 mb-5">Contacts information</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-5 mt-5 white p-5">
            <h1 className="display-4 fw-bold  mb-3">Contacts </h1>
            <p className="">
              Egestas pretium aenean pharetra magna ac. Et<br /> tortor consequat id porta nibh venenatis cras sed
            </p>

            <p className="fs-5 fw-bold">
              <img src={phone} alt="" height={"33px"} className='me-3' />(329) 580-7077
            </p>
            <p className="fs-5 fw-bold">
              <img src={mail} alt="" height={"33px"} className='me-3' />contact@example.com
            </p>

            <p className="mt-5 fw-bold fs-4">
              Vel turpis nunc eget lorem dolor sed ?
            </p>
            <div className="row">
              {/* <div className="col-sm-1 "></div> */}
              <div className="col-sm-8 left2">
                <p className="m-2">
                  Vel turpis nunc eget lorem dolor sed. Et tortor consequat id porta
                  nibh venenatis cras sed
                </p>
                <p className="m-2">
                  Vel turpis nunc eget lorem dolor sed. Et tortor consequat id porta
                  nibh venenatis cras sed
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-1"></div>

          <div className="col-xl-6 mt-5 ">
            <iframe className='map' width="640" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=ratanada%20Jodhpur+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe> <a href='https://www.easybooking.eu/'></a>
            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=57252002effbb8c8967048e9676fa9a0693ee925'></script>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-6 mt-5">
            <h1 className="fs-1 fw-bold mt-5">Our ratings do not contradict</h1>
            <div className="row mt-5">
              <div className="col-sm-6">
                <p className="fs-2 fw-bold">8.3 /10</p>
                <p className="">1398 comments</p>
                <img src={img1} height={"25px"} alt="" />
                <p className="fs-2 fw-bold mt-4">4.6 /5</p>
                <p className="">460 notes</p>
                <img src={img4} height={"45px"} alt="" />
              </div>
              <div className="col-sm-6">
                <p className="fs-2 fw-bold">4.9 /5</p>
                <p className="">2389 notes</p>
                <img src={img3} height={"28px"} alt="" />
                <p className="fs-2 fw-bold mt-4">98%</p>
                <p className="">2389 recommendations</p>
                <img src={img2} height={"30px"} alt="" />
              </div>
            </div>
          </div>

          {/* <div className="col-sm-1"></div> */}
          <div className="col-xl-6 mt-5 white p-5">
            <h1 className="fs-1 fw-bold">Get in Touch</h1>
            <p className="fs-5">
              Egestas pretium aenean pharetra magna ac. Et tortor consequat id
              porta nibh venenatis cras sed
            </p>
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Name"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Email"
                />
              </div>
            </div>
            <textarea
              className="form-control mt-3"
              cols={"20"}
              rows={"6"}
              placeholder="Message"
            ></textarea>
            <button className="btn btn-primary mt-3 btn-lg">Submit</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      < Footer />
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

import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/room.css'
import Footer from './Footer'
import AOS from 'aos'
import { useEffect } from 'react'

import first from '../image/Room_image/01.jpg'
import second from '../image/Room_image/02.jpg'
import third from '../image/Room_image/03.jpg'
import four from '../image/Room_image/04.jpg'
import five from '../image/Room_image/05.jpg'

export default function Room() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  return (
    <>
      <div className="container-fluid">
        <div className="row back">
          <div className="col-sm-2"></div>
          <div className="col-sm-10 mb-4 mt-5">
            <Link to="/" className='text-decoration-none text-primary fs-4'>Home</Link><span className='fs-4'> / Room</span>
            <h1 className='size mt-2'>Room</h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 mt-5" data-aos="fade-up">
            <div class="card mb-3 mt-5">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={first} class="img-fluid rounded-start" />
                </div>
                <div class="col-md-5">
                  <div class="card-body p-4">
                    <h2 class="card-title">Standard Twin Room Private Shared Bathroom</h2>
                    <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique.</p>
                    <p class="card-text fs-5 mt-4"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>1 bunk bed</span></span></p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h1 className='mt-4 vsize float-end'>$29</h1>
                    </div>
                    <div className="col-sm-6 col-6 mt-3">
                      <p className='mt-4 fs-5 float-start'> / 1 night</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h4 className='mt-4 float-end'>$100</h4>
                    </div>
                    <div className="col-sm-6 col-6 mt-4">
                      <p className='mt-1 float-start'> / 7 night</p>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-sm-12 text-center mt-4">
                      <Link to="/book" className='text-decoration-none btn btn-primary'>Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mt-4" data-aos="fade-up">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={second} class="img-fluid rounded-start" />
                </div>
                <div class="col-md-5">
                  <div class="card-body p-4">
                    <h2 class="card-title">Standard 6 Bed Female Dorm Shared Bathroom</h2>
                    <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique.</p>
                    <p class="card-text fs-5 mt-4"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>1 bunk bed</span></span></p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h1 className='mt-4 vsize float-end'>$19</h1>
                    </div>
                    <div className="col-sm-6 col-6 mt-3">
                      <p className='mt-4 fs-3 float-start'> / 1 night</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h4 className='mt-4 float-end'>$80</h4>
                    </div>
                    <div className="col-sm-6 col-6 mt-1">
                      <p className='mt-4 float-start'> / 7 night</p>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-sm-12 text-center mt-4">
                      <Link to="/book" className='text-decoration-none btn btn-primary'>Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mt-4" data-aos="fade-up">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={third} class="img-fluid rounded-start" />
                </div>
                <div class="col-md-5">
                  <div class="card-body p-4">
                    <h2 class="card-title">Comfort Superior Double Bed Private Ensuite</h2>
                    <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique.</p>
                    <p class="card-text fs-5 mt-4"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>1 bunk bed</span></span></p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h1 className='mt-4 vsize float-end'>$99</h1>
                    </div>
                    <div className="col-sm-6 col-6 mt-3">
                      <p className='mt-4 fs-3 float-start'> / 1 night</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h4 className='mt-4 float-end'>$220</h4>
                    </div>
                    <div className="col-sm-6 col-6 mt-1">
                      <p className='mt-4 float-start'> / 7 night</p>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-sm-12 text-center mt-4">
                      <Link to="/book" className='text-decoration-none btn btn-primary'>Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mt-4" data-aos="fade-up">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={four} class="img-fluid rounded-start" />
                </div>
                <div class="col-md-5">
                  <div class="card-body p-4">
                    <h2 class="card-title">Standard Triple Room with Shared Bathroom</h2>
                    <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique.</p>
                    <p class="card-text fs-5 mt-4"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>1 bunk bed</span></span></p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h1 className='mt-4 vsize float-end'>$29</h1>
                    </div>
                    <div className="col-sm-6 col-6 mt-3">
                      <p className='mt-4 fs-3 float-start'> / 1 night</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h4 className='mt-4 float-end'>$115</h4>
                    </div>
                    <div className="col-sm-6 col-6 mt-1">
                      <p className='mt-4 float-start'> / 7 night</p>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-sm-12 text-center mt-4">
                      <Link to="/book" className='text-decoration-none btn btn-primary'>Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mt-4" data-aos="fade-up">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={five} class="img-fluid rounded-start" />
                </div>
                <div class="col-md-5">
                  <div class="card-body p-4">
                    <h2 class="card-title">Standard Double Bed Private Shared Bathroom</h2>
                    <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique.</p>
                    <p class="card-text fs-5 mt-4"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>1 bunk bed</span></span></p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h1 className='mt-4 vsize float-end'>$29</h1>
                    </div>
                    <div className="col-sm-6 col-6 mt-3">
                      <p className='mt-4 fs-3 float-start'> / 1 night</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <h4 className='mt-4 float-end'>$115</h4>
                    </div>
                    <div className="col-sm-6 col-6 mt-1">
                      <p className='mt-4 float-start'> / 7 night</p>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-sm-12 text-center mt-4">
                      <Link to="/book" className='text-decoration-none btn btn-primary'>Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
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


import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/news.css'

import Footer from './Footer'

export default function News() {
  return (
    <>
      {/* News main */}
      <div className="container-fluid">
        <div className="row back">
          <div className="col-xl-2 col-sm-2"></div>
          <div className="col-xl-10 col-sm-10 mb-4 mt-5">
            <Link className='text-decoration-none text-primary fs-4'>Home</Link><span className='fs-4'> / News</span>
            <h1 className='size mt-2'>News</h1>
          </div>
        </div>
      </div>
      {/* News main */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-9 col-sm-12 mt-5">
            <div className="row">
              <div className="col-xl-12">
                <div class="mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <div className='back1'>
                        <div className="box-img">
                          <p className='float-end mt-4 bg fs-5 p-2'>Travel</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8 p-4 bg-light">
                      <div class="card-body">
                        <h4 class="card-title">How to Travel the World & Make a Difference</h4>
                        <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique. Mus mauris vitae ultricies<br /> leo integer malesuada nunc posuere</p>
                        <div className="row mt-4">
                          <div className="col-sm-4">
                            <i class="fa-solid fa-calendar-days"></i><span className='ms-3'>June 16, 2021</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-eye"></i><span className='ms-3'>120 views</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-comment"></i><span className='ms-3'>1 Comment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div class="mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <div className='back1'>
                        <div className="box-img1">
                          <p className='float-end mt-4 bg fs-5 p-2'>Tourist Guide</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8 p-4 bg-light">
                      <div class="card-body">
                        <h4 class="card-title">The Seven People You Always Meet Hosteling</h4>
                        <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique. Mus mauris vitae ultricies<br /> leo integer malesuada nunc posuere</p>
                        <div className="row mt-4">
                          <div className="col-sm-4">
                            <i class="fa-solid fa-calendar-days"></i><span className='ms-3'>June 16, 2021</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-eye"></i><span className='ms-3'>120 views</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-comment"></i><span className='ms-3'>1 Comment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div class="mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <div className='back1'>
                        <div className="box-img2">
                          <p className='float-end mt-4 bg fs-5 p-2'>City Sights</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8 p-4 bg-light">
                      <div class="card-body">
                        <h4 class="card-title">10 of the Most Underrated Cities in Europe</h4>
                        <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique. Mus mauris vitae ultricies<br /> leo integer malesuada nunc posuere</p>
                        <div className="row mt-4">
                          <div className="col-sm-4">
                            <i class="fa-solid fa-calendar-days"></i><span className='ms-3'>June 16, 2021</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-eye"></i><span className='ms-3'>120 views</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-comment"></i><span className='ms-3'>1 Comment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div class="mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <div className='back1'>
                        <div className="box-img3">
                          <p className='float-end mt-4 bg fs-5 p-2'>Tourist Guide</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8 p-4 bg-light">
                      <div class="card-body">
                        <h4 class="card-title">Things Hostels Do Better than Posh Hotels</h4>
                        <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique. Mus mauris vitae ultricies<br /> leo integer malesuada nunc posuere</p>
                        <div className="row mt-4">
                          <div className="col-sm-4">
                            <i class="fa-solid fa-calendar-days"></i><span className='ms-3'>June 16, 2021</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-eye"></i><span className='ms-3'>120 views</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-comment"></i><span className='ms-3'>1 Comment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div class="mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <div className='back1'>
                        <div className="box-img4">
                          <p className='float-end mt-4 bg fs-5 p-2'>Tourist Guide</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8 p-4 bg-light">
                      <div class="card-body">
                        <h4 class="card-title">How to Get a Good Night’s Sleep in a Hostel</h4>
                        <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique. Mus mauris vitae ultricies<br /> leo integer malesuada nunc posuere</p>
                        <div className="row mt-4">
                          <div className="col-sm-4">
                            <i class="fa-solid fa-calendar-days"></i><span className='ms-3'>June 16, 2021</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-eye"></i><span className='ms-3'>120 views</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-comment"></i><span className='ms-3'>1 Comment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div class="mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <div className='back1'>
                        <div className="box-img5">
                          <p className='float-end mt-4 bg fs-5 p-2'>Communication</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8 p-4 bg-light">
                      <div class="card-body">
                        <h4 class="card-title">Important Tips for Traveling with Friends</h4>
                        <p class="card-text fs-5 mt-3">Diam phasellus vestibulum lorem sed risus<br /> ultricies tristique. Mus mauris vitae ultricies<br /> leo integer malesuada nunc posuere</p>
                        <div className="row mt-4">
                          <div className="col-sm-4">
                            <i class="fa-solid fa-calendar-days"></i><span className='ms-3'>June 16, 2021</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-eye"></i><span className='ms-3'>120 views</span>
                          </div>
                          <div className="col-sm-4">
                            <i class="fa-regular fa-comment"></i><span className='ms-3'>1 Comment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-xl-3 bg-light mt-5">
            <div className="row mt-4">
              <div className="col-sm-1"></div>
              <div className="col-sm-11">
                <div class="input-group mb-3">
                  <input type="text" class="form-control hei" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <Link className='text-decoration-none'><span class="input-group-text hei bg-primary text-light" id="basic-addon2"><i class="fa-solid fa-magnifying-glass fs-3 ms-1 p-3 "></i></span></Link>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-1"></div>
              <div className="col-sm-11">
                <h3 className=''>Categories</h3>
                <ul className='ul p-1'>
                  <Link className='text-decoration-none text-dark'>
                    <li className='fs-5 mt-4 color p-2 ps-4 curd'>Travel</li>
                  </Link>
                  <Link className='text-decoration-none text-dark'>
                    <li className='fs-5 mt-4 color p-2 ps-4 curd'>Tourist Guide</li>
                  </Link>
                  <Link className='text-decoration-none text-dark'>
                    <li className='fs-5 mt-4 color p-2 ps-4 curd'>City Sights</li>
                  </Link>
                  <Link className='text-decoration-none text-dark'>
                    <li className='fs-5 mt-4 color p-2 ps-4 curd'>Communication</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-1"></div>
              <div className="col-sm-11">
                <h4 className=''>Recommended articles</h4>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <div className='box curd'>
                  <div className="box-image"></div>
                </div>
              </div>
              <div className="col-sm-6">
                <h6 className='mt-2'>Travel and Working Holidays</h6>
                <p>June 16, 2021</p>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <div className='box curd'>
                  <div className="box-image1"></div>
                </div>
              </div>
              <div className="col-sm-6">
                <h6 className='mt-2'>A Hostel Decided to Social Support</h6>
                <p>June 16, 2021</p>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-sm-1"></div>
              <div className="col-sm-4">
                <div className='box curd'>
                  <div className="box-image2"></div>
                </div>
              </div>
              <div className="col-sm-6">
                <h6 className='mt-2'>Travel and Working Holidays</h6>
                <p>June 16, 2021</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-1"></div>
              <div className="col-sm-11">
                <h4>Tag</h4>
                <ul className='nav mt-4'>
                  <Link className='text-decoration-none text-dark'>
                    <li className=' fs-5'>Travel</li>
                  </Link>
                  <Link className='text-decoration-none text-dark'>
                    <li className='ms-2 fs-5'>Room</li>
                  </Link>
                  <Link className='text-decoration-none text-dark'>
                    <li className='ms-2 fs-5'>People</li>
                  </Link>
                  <Link className='text-decoration-none text-dark'>
                    <li className='ms-2 fs-5'>Guide</li>
                  </Link>
                </ul>
                <ul className='nav mt-4'>
                  <Link className='text-decoration-none text-dark'>
                    <li className=' fs-5'>Season</li>
                  </Link>
                  <Link className='text-decoration-none text-dark'>
                    <li className='ms-2 fs-5'>City</li>
                  </Link>
                  <Link className='text-decoration-none text-dark'>
                    <li className='ms-2 fs-5'>Sights</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-1"></div>
              <div className="col-sm-11">
                <h4 className='p-1'>Subscribe to our mailing list</h4>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-1"></div>
              <div className="col-sm-11">
                <div class="input-group mb-3">
                  <input type="text" class="form-control hei" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <Link className='text-decoration-none'><span class="input-group-text hei bg-primary text-light" id="basic-addon2"><i class="fa-solid fa-arrow-right fs-4 p-3"></i></span></Link>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-4">
                <div className="box1 curd">
                  <div className="box-images"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box1 curd">
                  <div className="box-images1"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box1 curd">
                  <div className="box-images2"></div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-sm-4">
                <div className="box1 curd">
                  <div className="box-images3"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box1 curd">
                  <div className="box-images4"></div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box1 curd">
                  <div className="box-images5"></div>
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

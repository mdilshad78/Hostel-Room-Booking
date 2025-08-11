import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/about.css'
import { useEffect } from 'react'
import AOS from 'aos'
import Footer from './Footer'

import img from '../image/Home_image/cart1.webp'
import img1 from '../image/Home_image/cart2.webp'
import img2 from '../image/About_image/cart.webp'

import icon from '../image/About_image/icon1.png'
import icon1 from '../image/About_image/rep.png'
import icon2 from '../image/About_image/icon.png'

import poat from '../image/About_image/poat.webp'

import men from '../image/Room_image/men.webp'

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  })

  function close() {

  }
  return (
    <>
      {/* About main */}
      <div className="container-fluid">
        <div className="row back">
          <div className="col-sm-2"></div>
          <div className="col-sm-10 mb-4 mt-5">
            <Link to="/" className='text-decoration-none text-primary fs-4'>Home</Link><span className='fs-4'> / About</span>
            <h1 className='size mt-2'>About</h1>
          </div>
        </div>
      </div>
      {/* About main */}

      <div className="container mt-5">
        <div className="row" data-aos="fade-up">
          <div className="col-xl-6 col-sm-12 mt-5">
            <h1 className='size1'>The main benefits to choose Hosteller</h1>
          </div>
          <div className="col-xl-1"></div>
          <div className="col-xl-5 mt-5">
            <div className="row" >
              <div className="col-sm-11 mt-3">
                <p className='fs-5'>Aliquam eleifend mi in nulla. Viverra nibh cras pulvinar</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <p className=''>mattis nunc</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* rating */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4 bg-light p-3">
            <div className='left'>
              <h1 className='font text-primary ms-5 mt-4'>240+</h1>
              <p className='fs-5 ms-5 mb-4'>Consequat interdum varius sit<br /> amet mattis vulputate enim nulla</p>
            </div>
          </div>
          <div className="col-sm-4 bg-light p-3">
            <div className='left'>
              <h1 className='font text-primary ms-5 mt-4'>60+</h1>
              <p className='fs-5 ms-5 mb-4'>Consequat interdum varius sit<br /> amet mattis vulputate enim nulla</p>
            </div>
          </div>
          <div className="col-sm-4 bg-light p-3">
            <div className=''>
              <h1 className='font text-primary ms-5 mt-4'>98%</h1>
              <p className='fs-5 ms-5 mb-4'>Consequat interdum varius sit<br /> amet mattis vulputate enim nulla</p>
            </div>
          </div>
        </div>
      </div>
      {/* rating */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 video" data-aos="fade-up">
          </div>
        </div>
      </div>

      {/* hotel room */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10 col-sm-8 col-8 mt-5" >
            <h1>Hostel rooms</h1>
          </div>
          <div className="col-lg-2 col-sm-4 col-4 mt-5">
            <Link to='/room' className='btn btn-primary float-end mt-2 view'>View all rooms</Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-4 col-sm-12 mt-2" data-aos="fade-up">
            <div class="card">
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body p-4">
                <h5 class="card-title fs-3">Bed in 6-Bed Room with Shared Bathroom</h5>
                <p class="card-text fs-5"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>1 bunk bed</span></span></p>
                <Link to="/room" class="text-decoration-none text-primary fs-5">See availability<span><i class="fa-solid fa-arrow-right text-primary ms-3 "></i></span></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12 mt-2" data-aos="fade-up">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <div class="card-body p-4">
                <h5 class="card-title fs-3">Double Room with Private Bathroom</h5>
                <p class="card-text fs-5"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>2 twin beds</span></span></p>
                <Link to="/room" class="text-decoration-none text-primary fs-5">See availability<span><i class="fa-solid fa-arrow-right text-primary ms-3 "></i></span></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12 mt-2" data-aos="fade-up">
            <div class="card">
              <img src={img2} class="card-img-top" alt="..." />
              <div class="card-body p-4">
                <h5 class="card-title fs-3">Apartment with Private Bathroom</h5>
                <p class="card-text fs-5"><i class="fa-regular fa-user"></i> <span>1 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>2 twin beds</span></span></p>
                <Link to="/room" class="text-decoration-none text-primary fs-5">See availability<span><i class="fa-solid fa-arrow-right text-primary ms-3 "></i></span></Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* hotel room */}

      {/* budget */}
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row">
            <div className="col-xl-6 col-sm-12 mt-5 p-4" >
              <h1 className='mt-5'>Stages of booking a room</h1>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-2 text-center">
                  <img src={icon} alt="" className='img-fluid mt-3 color p-2 text-light' />
                </div>
                <div className="col-sm-10">
                  <h3 className='mt-2'>Room reservation</h3>
                  <p className='fs-5'>Integer eget aliquet nibh praesent tristique magna<br /> sit amet purus</p>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-2 text-center">
                  <img src={icon1} alt="" className='img-fluid mt-3 color text-light' />
                </div>
                <div className="col-sm-10">
                  <h3 className='mt-2'>Filling in documents and payment</h3>
                  <p className='fs-5'>Leo duis ut diam quam. Sed velit dignissim sodales<br /> ut eu</p>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-2 text-center mt-3">
                  <img src={icon2} alt="" className='img-fluid mt-3 color text-light p-2' />
                </div>
                <div className="col-sm-10">
                  <h3 className='mt-2'>Сheck in hostel</h3>
                  <p className='fs-5'>Vulputate enim nulla aliquet porttitor. Sagittis nisl<br /> rhoncus mattis rhoncus</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mt-5">
                  <Link to="/room" className='btn btn-primary pt-3 pb-3 ps-3 pe-3'>Choose Room</Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-sm-12 p-5" data-aos="fade-up">
              <img src={poat} alt="" className='img-fluid curd' />
            </div>
          </div>
        </div>
      </div>
      {/* budget */}

      {/* message */}
      <div className="container-fluid back">
        <div className="container mt-5">
          <div className="row">
            <div className="col-xl-6 mt-5 mb-5">
              <h1 className='font'>Rule settlement, eviction and stay</h1>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-1 col-1">
                  <i class="fa-solid fa-check fs-4 mt-2 float-end text-primary"></i>
                </div>
                <div className="col-sm-10 col-11">
                  <p className='fs-5'>Time of arrival is after 14-00. Time of departure is to 12-00</p>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-1 col-1">
                  <i class="fa-solid fa-check fs-4 mt-2 float-end text-primary"></i>
                </div>
                <div className="col-sm-10 col-11">
                  <p className='fs-5'>Does a settlement take place only at complete payment</p>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-1 col-1">
                  <i class="fa-solid fa-check fs-4 mt-2 float-end text-primary"></i>
                </div>
                <div className="col-sm-10 col-11">
                  <p className='fs-5'>Is there a settlement in hostel only after the presence of passport</p>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-sm-1 col-1">
                  <i class="fa-solid fa-check fs-4 mt-2 float-end text-primary"></i>
                </div>
                <div className="col-sm-10 col-11">
                  <p className='fs-5 '>Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Quam elementum pulvinar etiam non quam lacus suspendisse. Eget gravida cum sociis natoque</p>
                </div>
              </div>
            </div>

            <div className="col-xl-6 mt-5 mb-5 bg-light p-5 curd white" data-aos="fade-up">
              <h1>We are ready answer your question</h1>

              <div className="row">
                <div className="col-sm-6 col-12">
                  <input type="text" placeholder='Name' className='input mt-4' />
                </div>
                <div className="col-sm-6">
                  <input type="text" placeholder='Email' className='input mt-4' />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <input type="text" placeholder='Message' className='input1 mt-4' />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mt-4">
                  <Link className='btn btn-primary'>Send Message</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* message */}

      {/* hostel question */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-9 col-sm-6 mt-5">
            <h1>Frequently asked<br /> questions about hostel</h1>
          </div>
          {/* <div className="col-xl-5"></div> */}
          <div className="col-xl-3 col-sm-6 mt-5">
            <p className='mt-3 fs-5'>Diam phasellus vestibulum lorem<br /> sed risus ultricies tristique</p>
            <p></p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-sm-12 border-none">
            <div class="bg-light p-5 white">
              <div class="card-body">
                <Link className='text-decoration-none' onClick={close}>
                  <div className="row">
                    <div className="col-sm-10 col-10">
                      <h4 class="card-title">How do you choose the right hostel?</h4>
                    </div>
                    <div className="col-sm-2 col-2 text-center">
                      <i class="fa-solid fa-chevron-up fs-4 mt-3"></i>
                    </div>
                  </div>
                </Link>
                <div className="row">
                  <div className="col-sm-12">
                    <p class="card-text fs-5 mt-3 justify-content-center">Consequat interdum varius sit amet<br /> mattis vulputate enim nulla. Posuere<br /> morbi leo urna molestie at element eu facilisis sed excepteur sint occaecat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-12 border-none">
            <div class="bg-light p-5 white">
              <div class="card-body">
                <Link className='text-decoration-none'>
                  <div className="row">
                    <div className="col-sm-10 col-10">
                      <h4 class="card-title">How many people are in a hostel room?</h4>
                    </div>
                    <div className="col-sm-2 col-2 text-center">
                      <i class="fa-solid fa-chevron-up fs-4 mt-3"></i>
                    </div>
                  </div>
                </Link>
                <div className="row">
                  <div className="col-sm-12">
                    <p class="card-text fs-5 mt-3 justify-content-center">Consequat interdum varius sit amet<br /> mattis vulputate enim nulla. Posuere<br /> morbi leo urna molestie at element eu facilisis sed excepteur sint occaecat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-12">
            <div class="bg-primary p-5">
              <div class="card-body">
                <Link className='text-decoration-none text-light'>
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 class="card-title">Do you have any questions?</h4>
                    </div>
                  </div>
                </Link>
                <div className="row">
                  <div className="col-sm-12">
                    <p class="card-text fs-5 mt-4 text-light justify-content-center">Diam phasellus vestibulum lorem sed risus ultricies tristique</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 mt-5">
                    <Link className='color btn p-2'>Ask a question</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-sm-12 mt-4">
            <div class="bg-light p-5 white">
              <div class="card-body">
                <Link className='text-decoration-none'>
                  <div className="row">
                    <div className="col-sm-10 col-10">
                      <h4 class="card-title">Are there private rooms in Hostels?</h4>
                    </div>
                    <div className="col-sm-2 col-2 text-center">
                      <i class="fa-solid fa-chevron-up fs-4 mt-3"></i>
                    </div>
                  </div>
                </Link>
                <div className="row">
                  <div className="col-sm-12">
                    <p class="card-text fs-5 mt-3 justify-content-center">Consequat interdum varius sit amet<br /> mattis vulputate enim nulla. Posuere<br /> morbi leo urna molestie at element eu facilisis sed excepteur sint occaecat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-12 mt-4">
            <div class="bg-light p-5 white">
              <div class="card-body">
                <Link className='text-decoration-none'>
                  <div className="row">
                    <div className="col-sm-10 col-10">
                      <h4 class="card-title">How do I keep my things safe in a hostel?</h4>
                    </div>
                    <div className="col-sm-2 col-2 text-center">
                      <i class="fa-solid fa-chevron-up fs-4 mt-3"></i>
                    </div>
                  </div>
                </Link>
                <div className="row">
                  <div className="col-sm-12">
                    <p class="card-text fs-5 mt-3 justify-content-center">Consequat interdum varius sit amet<br /> mattis vulputate enim nulla. Posuere<br /> morbi leo urna molestie at element eu facilisis sed excepteur sint occaecat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-sm-12 mt-4">
            <div class="bg-light p-5 white">
              <div class="card-body">
                <Link className='text-decoration-none'>
                  <div className="row">
                    <div className="col-sm-10 col-10">
                      <h4 class="card-title">How do you stay safe in a hostel?</h4>
                    </div>
                    <div className="col-sm-2 col-2 text-center">
                      <i class="fa-solid fa-chevron-up fs-4 mt-3"></i>
                    </div>
                  </div>
                </Link>
                <div className="row">
                  <div className="col-sm-12">
                    <p class="card-text fs-5 mt-3 justify-content-center">Consequat interdum varius sit amet<br /> mattis vulputate enim nulla. Posuere<br /> morbi leo urna molestie at element eu facilisis sed excepteur sint occaecat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hostel question */}

      {/* Email */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-2">
            <img src={men} alt="" className='img-fluid image' />
          </div>
          <div className="col-xl-8 ">
            <h3 className='mt-4'>Mauris a diam maecenas sed enim ut sem. Scelerisque in dictum non consectetur a erat nam. Commodo viverra maecenas accumsan lacus</h3>
            <div className="row mt-3">
              <div className="col-sm-3">
                <p>Johnathan Jennings</p>
              </div>
              <div className="col-sm-4">
                <p>Founder of the hostel “Hosteller”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* <div className="col-xl-1 left1"></div> */}
          <div className="col-xl-5 mt-5 left1">
            <h4 className='ms-3'>Are you looking for an apartment?</h4>
            <p className='fs-5 mt-3 ms-3'>Tellus mauris a diam maecenas sed enim. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum</p>
            <div className="row">
              <div className="col-sm-12">
                <Link className='btn btn-primary pt-2 pb-2 ps-3 pe-3 ms-3 mt-3'>View Room</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-1"></div>
          <div className="col-xl-6 col-sm-12 mt-5">
            <h1>Newsletter</h1>
            <p className='fs-5'>Urna id volutpat lacus laoreet. Viverra vitae<br /> congue eu consequat ac</p>
            <div className="row">
              <div className="col-xl-6 col-sm-12 mt-1">
                <div class="input-group mb-3">
                  <input type="text" class="form-control hei" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <Link className='text-decoration-none'><span class="input-group-text hei" id="basic-addon2"><i class="fa-solid fa-arrow-right fs-3 ms-3"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Email */}

      {/* Footer */}
      <Footer/>
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

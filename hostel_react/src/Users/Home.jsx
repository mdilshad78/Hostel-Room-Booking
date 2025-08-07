import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Css/home.css'
import AOS from 'aos'
import Footer from './Footer'

import img from '../image/Home_image/cart1.webp'
import img1 from '../image/Home_image/cart2.webp'

import img2 from '../image/Home_image/book.png'
import img3 from '../image/Home_image/trip.png'
import img4 from '../image/Home_image/google.webp'
import img5 from '../image/Home_image/hostel.png'

import silder1 from '../image/Home_image/firstslider.webp'
import silder2 from '../image/Home_image/secondslider.webp'
import silder3 from '../image/Home_image/thirdslider.webp'
import silder4 from '../image/Home_image/fourslider.webp'
import silder5 from '../image/Home_image/fiveslider.webp'

import phone from '../image/Home_image/phone.png'
import mail from '../image/Home_image/mail.png'
import location from '../image/Home_image/location.png'
import clock from '../image/Home_image/clock.png'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  return (
    <>
      {/* top  */}
      <div className="container-fluid">
        <div className="row mt-5 mt-5">
          <div className="col-xl-1"></div>
          <div className="col-xl-5">
            <div className="row my-5"></div>
            <div className="row my-5"></div>
            <div className="row back" data-aos="fade-up">
              <div className="col-sm-2"></div>
              <div className="col-sm-10 p-5">
                <h1 className='font ' data-aos="fade-up">DreamHosteller — amazing<br /> hostel for the free<br /> spirited traveler</h1>
                <div className="row">
                  <div className="col-sm-1" data-aos="fade-up">
                    <p className='bor ms-3'></p>
                  </div>
                  <div className="col-sm-11" data-aos="fade-up">
                    <span>Egestas pretium aenean pharetra magna ac. Et tortor<br /> consequat id porta nibh venenatis cras sed. Vel turpis<br /> nunc eget lorem dolor sed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 img" data-aos="zoom-in"></div>
        </div>
      </div>
      {/* top  */}

      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-sm-8 mt-5">
            <h1 data-aos="">Hostel rooms</h1>
          </div>
          <div className="col-xl-2 col-sm-4 mt-5">
            <Link to='/room' className='btn btn-primary float-end mt-3' data-aos="">View all rooms</Link>
          </div>
        </div>

        <div className="row mt-5" data-aos="fade-up">
          <div className="col-xl-4 col-sm-6 mt-2">
            <div class="card">
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body p-4">
                <h5 class="card-title fs-3">Bed in 6-Bed Room with Shared Bathroom</h5>
                <p class="card-text fs-5"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>1 bunk bed</span></span></p>
                <Link to="/room" class="text-decoration-none text-primary fs-5">See availability<span><i class="fa-solid fa-arrow-right text-primary ms-3 "></i></span></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 mt-2">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <div class="card-body p-4">
                <h5 class="card-title fs-3">Double Room with Private Bathroom</h5>
                <p class="card-text fs-5"><i class="fa-regular fa-user"></i> <span>2 Sleeps</span> <span className='ms-3'><i class="fa-solid fa-bed"></i><span className='ms-2'>2 twin beds</span></span></p>
                <Link to="/room" class="text-decoration-none text-primary fs-5">See availability<span><i class="fa-solid fa-arrow-right text-primary ms-3 "></i></span></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 mt-2">
            <div class="card bg-primary">
              <div class="card-body pad">
                <h5 class="card-title fs-1">Stay Longer,<br /> Save More</h5>
                <h6 class="card-subtitle mb-2 text-muted fs-5 mt-3">It's simple: the longer you stay,<br /> the more you save!</h6>
                <div className="row">
                  <div className="col-sm-1 col-md-1">
                    <div className='bor1'></div>
                  </div>
                  <div className="col-sm-11 col-md-10">
                    <p class="card-text fs-5 myfont">Save up to 30% on daily rate for stays longer than 14 nights</p>
                    <p class="card-text fs-5 myfont">Save up to 20% off the nightly rate on stays between 7-14 nights</p>
                  </div>
                </div>
                <Link to="/room" class="btn btn-light text-primary mt-5 animate__pulse" >Choose Room</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* everything */}
      <div className="container-fluid mt-5">
        <div className="row" >
          <div className="col-sm-2"></div>
          <div className="col-xl-4 col-sm-12 mt-5 p-5">
            <h1 data-aos="fade-up">We have everything you need</h1>
            <p className='fs-5 mt-3' data-aos="fade-up">Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam phasellus vestibulum lorem sed risus ultricies tristique</p>
            <div className="row mt-5">
              <div className="col-xl-6 col-sm-12 " data-aos="fade-up">
                <div className="row">
                  <div className="col-xl-4 col-sm-12 text-center">
                    <i class="fa-solid fa-wifi icon "></i>
                  </div>
                  <div className="col-xl-8 col-sm-12 text-center">
                    <p className='mt-2 ms-3 '>Free available high speed WiFi</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12" data-aos="fade-up">
                <div className="row">
                  <div className="col-xl-4 col-sm-12  text-center">
                    <i class="fa-solid fa-location-dot icon"></i>
                  </div>
                  <div className="col-xl-8 col-sm-12 text-center">
                    <p className='mt-2 ms-3 '>Сonvenient location in the center</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-xl-6 col-sm-12" data-aos="fade-up">
                <div className="row">
                  <div className="col-xl-4 col-sm-12 text-center">
                    <i class="fa-solid fa-briefcase icon"></i>
                  </div>
                  <div className="col-xl-8 col-sm-12 text-center">
                    <p className='mt-2 ms-3 '>Free storage of luggage of any size</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12" data-aos="fade-up">
                <div className="row">
                  <div className="col-xl-3 col-sm-12 text-center">
                    <i class="fa-solid fa-square-parking icon"></i>
                  </div>
                  <div className="col-xl-8 col-sm-12 text-center">
                    <p className='mt-2 ms-3 '>Parking place allocated to you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-xl-4 col-sm-6 text-center">
                <Link to='/room' className='btn btn-primary pt-2 pb-2 ps-3 pe-3'>Book Now</Link>
              </div>
              <div className="col-xl-4 col-sm-4  mt-2">
                <Link to="/room" class="text-decoration-none text-primary float-end fs-5">More About<span><i class="fa-solid fa-arrow-right text-primary ms-3 "></i></span></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 mt-5 img1" data-aos="zoom-in"></div>
        </div>
      </div>
      {/* everything */}

      {/* rating */}
      <div className="conatiner-fluid mt-5 back">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mt-5 mb-5">
              <h1 className='mt-3'>8.3 /10</h1>
              <p>1398 comments</p>
              <img src={img2} alt="" className='' height={"40px"} />
            </div>
            <div className="col-xl-3 col-sm-6 mt-5 mb-5">
              <h1 className='mt-3'>4.6 /5</h1>
              <p>460 notes</p>
              <img src={img3} alt="" className='' height={"40px"} />
            </div>
            <div className="col-xl-3 col-sm-6 mt-5 mb-5">
              <h1 className='mt-3'>4.9 /5</h1>
              <p>2389 notes</p>
              <img src={img4} alt="" className='mt-1' height={"40px"} />
            </div>
            <div className="col-xl-3 col-sm-6 mt-5 mb-5">
              <h1 className='mt-3'>4.9 /5</h1>
              <p>2389 notes</p>
              <img src={img5} alt="" className='mt-1' height={"60px"} />
            </div>
          </div>
        </div>
      </div>
      {/* rating */}

      {/* guest say */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <swiper-container class="mySwiper" pagination="true" pagination-dynamic-bullets="true" >
              <swiper-slide>
                <div className="row">
                  <div className="col-xl-5 col-sm-12">
                    <img src={silder1} alt="" className='img-fluid curd' />
                  </div>
                  <div className="col-xl-1"></div>
                  <div className="col-xl-6 col-sm-12">
                    <h1 className='' data-aos="fade-down">What our guests say</h1>
                    <div class="card p-5 mt-5">
                      <div class="card-body">
                        <h5><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i></h5>
                        <h5 class="card-title">Date of Stay: <span className='text-secondary'>May 2021</span></h5>
                        <h3 class="card-title text-dark mt-5">Ultricies eu ultricies tristique facilisis</h3>
                        <p class="card-text fs-5">Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam phasellus vestibulum lorem sed risus ultricies tristique.</p>
                        <h6 className='fs-5'>Lisa Adams</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="row">
                  <div className="col-xl-5 col-sm-12">
                    <img src={silder2} alt="" className='img-fluid curd' />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-xl-6 col-sm-12">
                    <h1 data-aos="fade-down">What our guests say</h1>
                    <div class="card p-5 mt-5">
                      <div class="card-body">
                        <h5><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i></h5>
                        <h5 class="card-title">Date of Stay: <span className='text-secondary'>Octobar 2021</span></h5>
                        <h3 class="card-title text-dark mt-5">Consequat interdum varius sit varius</h3>
                        <p class="card-text fs-5">Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam phasellus vestibulum lorem sed risus ultricies tristique.</p>
                        <h6 className='fs-5'>Max Jones</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="row">
                  <div className="col-xl-5 col-sm-12">
                    <img src={silder3} alt="" className='img-fluid curd' />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-xl-6 col-sm-12">
                    <h1 data-aos="fade-down">What our guests say</h1>
                    <div class="card p-5 mt-5">
                      <div class="card-body">
                        <h5><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i></h5>
                        <h5 class="card-title">Date of Stay: <span className='text-secondary'>April 2021</span></h5>
                        <h3 class="card-title text-dark mt-5">Elementum eu facilisis at elementum</h3>
                        <p class="card-text fs-5">Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam phasellus vestibulum lorem sed risus ultricies tristique.</p>
                        <h6 className='fs-5'>Panam Palmer</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="row">
                  <div className="col-xl-5 col-sm-12">
                    <img src={silder4} alt="" className='img-fluid curd' />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-xl-6 col-sm-12">
                    <h1 data-aos="fade-down">What our guests say</h1>
                    <div class="card p-5 mt-5">
                      <div class="card-body">
                        <h5><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i></h5>
                        <h5 class="card-title">Date of Stay: <span className='text-secondary'>July 2021</span></h5>
                        <h3 class="card-title text-dark mt-5">Very cozy room close to everything</h3>
                        <p class="card-text fs-5">Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam phasellus vestibulum lorem sed risus ultricies tristique.</p>
                        <h6 className='fs-5'>Betty Randal</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="row">
                  <div className="col-xl-5 col-sm-12">
                    <img src={silder5} alt="" className='img-fluid curd' />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-xl-6 col-sm-12">
                    <h1 data-aos="fade-down">What our guests say</h1>
                    <div class="card p-5 mt-5">
                      <div class="card-body">
                        <h5><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i><i class="fa-solid fa-star ms-2 text-warning"></i></h5>
                        <h5 class="card-title">Date of Stay: <span className='text-secondary'>December 2021</span></h5>
                        <h3 class="card-title text-dark mt-5">Diam sit molestie at elementum eu</h3>
                        <p class="card-text fs-5">Consequat interdum varius sit amet mattis vulputate enim nulla. Posuere morbi leo urna molestie at elementum eu facilisis sed. Diam phasellus vestibulum lorem sed risus ultricies tristique.</p>
                        <h6 className='fs-5'>Kate Walker</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </div>
      {/* guest say */}

      {/* room photos */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-10 col-sm-8 mt-5">
            <h1>Photos of our rooms</h1>
          </div>
          <div className="col-xl-2 col-sm-4 mt-5">
            <Link to='/gallery' className='btn btn-primary float-end mt-2'>View all photos</Link>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-xl-4 col-sm-12 mt-3" data-aos="zoom-in">
            <div className="back-1 curd">
              <div className="back-img1"></div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12 mt-3">
            <div className="row">
              <div className="col-sm-12" data-aos="zoom-in">
                <div className="back-2 curd">
                  <div className="back-img2"></div>
                </div>
              </div>
            </div>
            <div className="row margin">
              <div className="col-sm-12" data-aos="zoom-in">
                <div className="back-2 curd">
                  <div className="back-img3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12 mt-3" data-aos="zoom-in">
            <div className="back-1">
              <div className="back-img4"></div>
            </div>
          </div>
        </div>
      </div>
      {/* room photos */}

      {/* news */}
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-sm-8 mt-5">
            <h1>Hosteller news</h1>
          </div>
          <div className="col-xl-2 col-sm-4 mt-5">
            <Link to='/room' className='btn btn-primary float-end mt-2'>View all news</Link>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-xl-4 mt-5">
            <div class="card">
              <div className='cardimg1'>
                <p className='name1 p-3 mt-5 fs-5'>Travel</p>
              </div>
              <div class="card-body p-4">
                <h3 class="card-title">How to cure wanderlust without leaving your home</h3>
                <p class="card-text fs-5">Ultrices gravida dictum fusce ut<br /> placer orci nulla pellentesque. <br />Senect et netus et malesuada</p>
                <div className="row">
                  <div className="col-sm-6">
                    <i class="fa-solid fa-calendar-days fs-5"></i><span className='fs-5 ms-3'>June 16, 2021</span>
                  </div>
                  <div className="col-sm-6">
                    <i class="fa-regular fa-eye fs-5"></i><span className='fs-5 ms-3'>120 views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 mt-5">
            <div class="card">
              <div className='cardimg2'>
                <p className='name2 p-3 mt-5 fs-5'>Tourist Guide</p>
              </div>
              <div class="card-body p-4">
                <h3 class="card-title">Yoga Hostels to soothe your mind and nomadic soul</h3>
                <p class="card-text fs-5">Ultrices gravida dictum fusce ut<br /> placer orci nulla pellentesque. <br />Senect et netus et malesuada</p>
                <div className="row">
                  <div className="col-sm-6">
                    <i class="fa-solid fa-calendar-days fs-5"></i><span className='fs-5 ms-3'>June 16, 2021</span>
                  </div>
                  <div className="col-sm-6">
                    <i class="fa-regular fa-eye fs-5"></i><span className='fs-5 ms-3'>120 views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 mt-5">
            <div class="card">
              <div className='cardimg3'>
                <p className='name p-3 mt-5 fs-5'>Communication</p>
              </div>
              <div class="card-body p-4">
                <h3 class="card-title">What happens when you travel with strangers?</h3>
                <p class="card-text fs-5">Ultrices gravida dictum fusce ut<br /> placer orci nulla pellentesque. <br />Senect et netus et malesuada</p>
                <div className="row">
                  <div className="col-sm-6">
                    <i class="fa-solid fa-calendar-days fs-5"></i><span className='fs-5 ms-3'>June 16, 2021</span>
                  </div>
                  <div className="col-sm-6">
                    <i class="fa-regular fa-eye fs-5"></i><span className='fs-5 ms-3'>120 views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* news */}

      {/* contact */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-6 col-sm-12 mt-5 pt-5">
            <h1 data-aos="fade-down">Contacts</h1>
            <p className='fs-5' data-aos="fade-up">Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed</p>
            <div className="row mt-3">
              <div className="col-xl-6">
                <div className="row" data-aos="fade-up">
                  <div className="col-sm-2 text-center ">
                    <img src={phone} alt="" className='p-3 curd color' height={"70px"} />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-5">
                    <h4>Phone</h4>
                    <p>(329) 580-7077</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="row" data-aos="fade-up">
                  <div className="col-sm-2 text-center ">
                    <img src={mail} alt="" className='p-3 curd color' height={"70px"} />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-5">
                    <h4>Email</h4>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-xl-6" data-aos="fade-up">
                <div className="row">
                  <div className="col-sm-2 text-center mt-2">
                    <img src={location} alt="" className='p-3 curd color' height={"70px"} />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-7">
                    <h4>Location</h4>
                    <p>54826 Fadel Circles
                      Darrylstad, AZ 90995</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6" data-aos="fade-up">
                <div className="row">
                  <div className="col-sm-2 text-center mt-2">
                    <img src={clock} alt="" className='p-3 curd color' height={"70px"} />
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-7">
                    <h4>Working Time</h4>
                    <p>Everyday<br />
                      10 am — 20 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 mt-4 map">
            <iframe className='map' width="640" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=ratanada%20Jodhpur+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe> <a href='https://www.easybooking.eu/'></a>
            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=57252002effbb8c8967048e9676fa9a0693ee925'></script>
          </div>
        </div>
      </div>
      {/* contact */}

      {/* footer */}
      <Footer />
      {/* footer */}

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

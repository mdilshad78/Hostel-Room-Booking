import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import main from '../image/Home_image/main.png'
import '../Css/home.css'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand fs-3" href="#"><img src={main} alt="" height={"45px"}/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link fs-5 ms-3" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link fs-5 ms-3" href="#">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/room" class="nav-link fs-5 ms-3" href="#">Rooms</Link>
              </li>
              <li class="nav-item">
                <Link to="/news" class="nav-link fs-5 ms-3" href="#">News</Link>
              </li>
              <li class="nav-item page">
                <Link class="nav-link fs-5 ms-3 " href="#">Pages</Link>
                <div className='list-item ms-5 curd'>
                  <ul className='dropdown p-4'>
                    <Link to="gallery" className='text-decoration-none text-dark fs-5 mt-3'><li className='mt-1'>Gallery</li></Link>
                    <Link to="/faq1" className='text-decoration-none text-dark fs-5 mt-5'><li className='mt-2'>FAQ</li></Link>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link fs-5 ms-3" href="#">Contact</Link>
              </li>
              <li class="nav-item button">
                <Link to="/login" class="btn text-primary mt-1 fs-5" href="#">Login</Link>
              </li>
              <li class="nav-item book">
                <Link to="/book" class="btn text-primary mt-1 fs-5" href="#">Book a Room</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

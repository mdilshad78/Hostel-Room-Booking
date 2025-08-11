import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import img from '../image/Home_image/main.png'
import { useNavigate } from 'react-router-dom'
import img1 from '../image/Room_image/student.jpg'
import img2 from '../image/Room_image/dinning.jpeg'
import img3 from '../image/Room_image/lib.jpeg'
import img4 from '../image/Room_image/12.jpg'

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const submit = () => {
    axios.post("http://localhost:3001/login", { email, password })
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(email))
        navigate("/")
      }).catch((err) => {
        console.log("error")
      })
  }


  function close() {
    navigate("/");
  }

  return (
    <div>
      <div className="container mt-2" >
        <div className="row">
          <div className="col-sm-12 mt-5">
            <img src={img} className='mt-4' height={"60px"} />
            <div className='float-end mt-3'>
              <button className='btn border-0' onClick={close}><span className='fs-2'>back<i class="fa-solid fa-xmark ms-2"></i></span></button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-xl-6 mt-5">
              <p className='fs-1 text-center'>NOT A MEMBER? JOIN NOW</p>
              <div className="row">
                <div className="col-sm-6">
                  <img src={img1} alt="" className='img-fluid' />
                  <p className='fs-5 mt-2'>Exclusive Student Rates</p>
                </div>
                <div className="col-sm-6">
                  <img src={img2} alt="" className='img-fluid' />
                  <p className='fs-5 mt-2'>Comfortable Dining Area</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <img src={img3} alt="" className='img-fluid' />
                  <p className='fs-5 mt-2'>Student Study Area</p>
                </div>
                <div className="col-sm-6">
                  <img src={img4} alt="" className='img-fluid' />
                  <p className='fs-5 mt-2'>Comfatable Rooms</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-center mt-4">
                  <Link to='/register' className='btn btn-warning fs-4 pt-2 pb-2 ps-3 pe-3'>JOIN</Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6 mt-5">
              <p className='fs-1 text-center'>ALREADY A MEMBER? LOGIN</p>
              <div className="row">
                <div className="col-sm-12">
                  <p className='text-center fs-3 '>EMAIL ADDRESS</p>
                </div>
                <hr />
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <form action="" className='mt-5'>
                    <div className='form-floating'>
                      <input type="email" size={'75'} name='email' className='form-control pad' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                      <label htmlFor="">Enter Your Email</label>
                    </div>
                    <div className='form-floating mt-4'>
                      <input type="password" size={'75'} name='password' className='form-control pad' placeholder='Enter Your password' onChange={(e) => setPassword(e.target.value)} value={password} />
                      <label htmlFor="">Enter Your password</label>
                    </div>
                    <div className='mt-4'>
                      <div className="row">
                        <div className="col-sm-1 col-1 text-center">
                          <input type="checkbox" className='mt-2' />
                        </div>
                        <div className="col-sm-11 col-11">
                          <p className='fs-5'>By continuing you agree to our Terms of Use and Privacy Policy</p>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="row mt-5">
                    <div className="col-sm-12 text-center">
                      <Link className='btn btn-warning fs-4 pt-2 pb-2 ps-3 pe-3' onClick={submit}>CONTINUE</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

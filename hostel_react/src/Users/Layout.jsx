import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import News from './News'
import Room from './Room'
import Contact from './Contact'
import Gallery from './Gallery'
import Login from '../Users_Login/Login'
import Register from '../Users_Login/Register'
import Booking from '../Users_Login/Booking'
import Faq1 from './Faq1'

export default function Layout() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/room' element={<Room/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/gallery' element={<Gallery/>}/>
                        <Route path='/faq1' element={<Faq1/>}/>
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/book' element={<Booking/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

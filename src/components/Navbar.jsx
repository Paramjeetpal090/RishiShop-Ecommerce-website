import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    let [settingData ,setSettingData] =useState({
    siteName :import.meta.env.VITE_APP_SITE_NAME,
    address :import.meta.env.VITE_APP_ADDRESS,
    map1 :import.meta.env.VITE_APP_MAP1,
    email :import.meta.env.VITE_APP_EMAIL,
    phone :import.meta.env.VITE_APP_PHONE,
    whatsapp :import.meta.env.VITE_APP_WHATSAPP,
    facebook :import.meta.env.VITE_APP_FACEBOOK,
    twitter :import.meta.env.VITE_APP_TWITTER,
    linkedin :import.meta.env.VITE_APP_LINKEDIN,
    instagram :import.meta.env.VITE_APP_INSTAGRAM,
    youtube :import.meta.env.VITE_APP_YOUTUBE,  
})
  return (
   <>
   <div className="container-fluid py-2 border-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex ">
                        <Link target='_blank' rel='noreferrer' className="text-decoration-none text-secondary pe-3" to={settingData.map1}>
                               <i className="bi bi-geo-alt me-2"></i>
                               <span className='d-none d-lg-inline-block'>{settingData.address}</span>
                               </Link>
                      <Link target='_blank' rel='noreferrer' className="text-decoration-none text-secondary pe-3" to={`mailto:${settingData.email}`}>
                               <i className="bi bi-envelope me-2"></i>
                               <span className='d-none d-lg-inline-block'>{settingData.email}</span>
                               </Link>
                     <Link target='_blank' rel='noreferrer' className="text-decoration-none text-secondary pe-3" to={`tel:${settingData.phone}`}>
                               <i className="bi bi-telephone me-2"></i>
                               <span className='d-none d-lg-inline-block'>{settingData.phone}</span>
                               </Link>
                    <Link target='_blank' rel='noreferrer' className="text-decoration-none text-secondary pe-3" to={`https://wa.me/${settingData.whatsapp}`}>
                               <i className="bi bi-whatsapp me-2"></i>
                               <span className='d-none d-lg-inline-block'>{settingData.whatsapp}</span>
                               </Link>
                    </div>
                </div>
                <div className="col-xl-3 col-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-body px-2" to={settingData.facebook}>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="text-body px-2" to={settingData.twitter}>
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="text-body px-2" to={settingData.linkedin}>
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link className="text-body px-2" to={settingData.instagram}>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="text-body ps-2" to={settingData.youtube}>
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <Link to="/" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-secondary"><i className="bi bi-bag-check me-2"></i>{settingData.siteName}</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                        <NavLink to="/features" className="nav-item nav-link">Features</NavLink>
                        <NavLink to="/faq" className="nav-item nav-link">Faq</NavLink>
                        <NavLink to="/testimonials" className="nav-item nav-link">Testimonials</NavLink>
                        <NavLink to="/contactus" className="nav-item nav-link">ContactUs</NavLink>
                        <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Paramjeet Pal</a>
                            <div className="dropdown-menu bg-light text-light m-0">
                                <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
                                <NavLink to="/admin" className="dropdown-item">Admin Dashboard</NavLink>
                                <NavLink to="/profile?option=Orders" className="dropdown-item">Orders</NavLink>
                                <NavLink to="/profile?option=Wishlist" className="dropdown-item">Wishlist</NavLink>
                                <NavLink to="/cart" className="dropdown-item">Cart</NavLink>
                                <NavLink to="/checkout" className="dropdown-item">Checkout</NavLink>
                                <button className="dropdown-item">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
   </>
  )
}

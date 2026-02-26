import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Footer() {
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
    <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4  col-md-6">
                    <Link to ="/"className=" fs-4 d-inline-block text-light text-uppercase border-bottom border-5 border-secondary mb-4">
                      <i className='bi bi-bag-check'></i>  {settingData.siteName}</Link>
                    <p className="mb-4 text-justify">Apni Shop is your go-to online destination for quality products at honest prices. We’re built on trust, convenience, and customer happiness—bringing you carefully selected items, smooth shopping, and reliable service, all from the comfort of your home.
                        Want it more modern, more desi, or more premium?</p>
                    <Link to={settingData.map1} target='_blank' className="d-block text-light mb-2"><i className="bi bi-geo-alt fs-5 text-light me-3"></i>{settingData.address} </Link>
                    <Link to={`mailto:${settingData.email}`} target='_blank' className="d-block text-light mb-2"><i className="bi bi-envelope fs-5 text-light me-3"></i>{settingData.email} </Link>
                    <Link to={`tel:${settingData.phone}`} target='_blank' className="d-block text-light mb-2"><i className="bi bi-telephone text-light me-3"></i>{settingData.phone} </Link>
                    <Link to={`https://wa.me/${settingData.wha}`} target='_blank' className="d-block text-light mb-2"><i className="bi bi-whatsapp text-light me-3"></i>{settingData.whatsapp} </Link>
                    
                                </div>
                <div className="col-lg-4 col-md-6">
                    <h4 className="d-inline-block text-light text-uppercase border-bottom border-5 border-secondary mb-4">
                                    Popular Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-light mb-2" to="/" ><i className="fa fa-angle-right me-2"></i>Home</Link>
                        <Link className="text-light mb-2" to="/about" ><i className="fa fa-angle-right me-2"></i>About</Link>
                        <Link className="text-light mb-2" to="/shop" ><i className="fa fa-angle-right me-2"></i>Shop</Link>
                        <Link className="text-light mb-2" to="/features" ><i className="fa fa-angle-right me-2"></i>Features</Link>
                        <Link className="text-light mb-2" to="/faq" ><i className="fa fa-angle-right me-2"></i>Faq</Link>
                        <Link className="text-light mb-2" to="/testimonials" ><i className="fa fa-angle-right me-2"></i>Testimonials</Link>
                        <Link className="text-light mb-2" to="/contactus" ><i className="fa fa-angle-right me-2"></i>ContactUs</Link>
                        <Link className="text-light mb-2" to="/privacy-policiy" ><i className="fa fa-angle-right me-2"></i>Privacy Policy</Link>
                        <Link className="text-light mb-2" to="/terms and conditions" ><i className="fa fa-angle-right me-2"></i>Terms and Conditions</Link>
                        <Link className="text-light mb-2" to="/refund policiy" ><i className="fa fa-angle-right me-2"></i>Refund Policiy</Link>
                        </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h4 className="d-inline-block text-light text-uppercase border-bottom border-5 border-secondary mb-4">
                        Newsletter</h4>
                        <p className='text-justify'>Subscribe to our newsletter for exclusive deals, new arrivals, special discounts, and updates from Apni Shop—delivered straight to your inbox.
</p>
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address"/>
                            <button className="btn btn-secondary">Subscribe</button>
                        </div>
                    </form>
                    <h6 className=" mt-5 text-light text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div className="d-flex">
                        <Link className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" to={settingData.twitter} target='_blank'>
                            <i className="fab fa-twitter"></i>
                            </Link>
                        <Link className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" to={settingData.facebook} target='_blank'>
                            <i className="fab fa-facebook"></i>
                            </Link>
                        <Link className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" to={settingData.linkedin} target='_blank'>
                            <i className="fab fa-linkedin"></i>
                            </Link>
                        <Link className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" to={settingData.instagram} target='_blank'>
                            <i className="fab fa-instagram"></i>
                            </Link>
                        <Link className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2" to={settingData.youtube} target='_blank'>
                            <i className="fab fa-youtube"></i>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-light border-top border-light py-4">
        <div className="container">
            <div className="text-center ">
                    <p className="mb-md-0">&copy; <Link className="text-light" href="/">{settingData.siteName}</Link>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

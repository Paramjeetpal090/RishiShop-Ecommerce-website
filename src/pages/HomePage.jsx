import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import About from '../components/About'
import Features from '../components/Features'
import ProductSlider from '../components/ProductSlider'
import Testimonial from '../components/Testimonial'
import Products from '../components/Products'



export default function HomePage() {
    let[settingData,setSettingData] = useState({
        siteName:import.meta.env.VITE_APP_SITE_NAME
    })
    let sliderOptions ={
        loop:true,
        modules:[Autoplay],
      autoplay:{
          delay: 2000,
          disableOnInteraction: false,
    }
      }
  return (
    <>
    <Swiper {...sliderOptions} style={{height:650}}>
        <SwiperSlide>
             <div className="mb-5 ">
                <img src="/images/banner1.jpg"  className='my-banner-image' alt="" />
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-dark text-uppercase border-bottom border-5"
                        style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To {settingData.siteName}</h5>
                    <h1 className="display-1 text-dark mb-md-4">Run Strong. Move Fast.</h1>
                    <div className="pt-2">
                        <Link to="/shop?mc=Male" className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="mb-5 ">
                <img src="/images/banner2.jpg"  className='my-banner-image' alt="" />
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-dark text-uppercase border-bottom border-5"
                        style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To {settingData.siteName}</h5>
                    <h1 className="display-1 text-dark mb-md-4">Feel Every Beat.</h1>
                    <div className="pt-2">
                        <Link to="/shop?mc=Male" className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="mb-5 ">
                <img src="/images/banner3.jpg"  className='my-banner-image' alt="" />
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-light text-uppercase border-bottom border-5"
                        style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To {settingData.siteName}</h5>
                    <h1 className="display-1 text-light mb-md-4">Built for Speed. Ready for Anything.</h1>
                    <div className="pt-2">
                        <Link to="/shop?mc=Male" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="mb-5 ">
                <img src="/images/banner4.jpg"  className='my-banner-image' alt="" />
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-dark text-uppercase border-bottom border-5"
                        style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To {settingData.siteName}</h5>
                    <h1 className="display-1 text-dark mb-md-4">Everyday White, Done Right.</h1>
                    <div className="pt-2">
                        <Link to="/shop?mc=Male" className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="mb-5 ">
                <img src="/images/banner5.jpg"  className='my-banner-image' alt="" />
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-dark text-uppercase border-bottom border-5"
                        style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To {settingData.siteName}</h5>
                    <h1 className="display-1 text-dark mb-md-4">Elevate Every Look.</h1>
                    <div className="pt-2">
                        <Link to="/shop?mc=Male" className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="mb-5 ">
                <img src="/images/banner6.jpg"  className='my-banner-image' alt="" />
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-dark text-uppercase border-bottom border-5"
                        style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To {settingData.siteName}</h5>
                    <h1 className="display-1 text-dark mb-md-4">Where Style Meets Meaning</h1>
                    <div className="pt-2">
                        <Link to="/shop?mc=Male" className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="mb-5 ">
                <img src="/images/banner7.jpg"  className='my-banner-image' alt="" />
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-light text-uppercase border-bottom border-5"
                        style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To {settingData.siteName}</h5>
                    <h1 className="display-1 text-light mb-md-4">Style That Never Stops</h1>
                    <div className="pt-2">
                        <Link to="/shop?mc=Male" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="mb-5 ">
                <img src="/images/banner8.jpg"  className='my-banner-image' alt="" />
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h5 className="d-inline-block text-light text-uppercase border-bottom border-5"
                        style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To {settingData.siteName}</h5>
                    <h1 className="display-1 text-light mb-md-4">Own Your Time</h1>
                    <div className="pt-2">
                        <Link to="/shop?mc=Male" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
    </Swiper>
    <About/>
    <Features/>
    <ProductSlider/>
    <Testimonial/>
    <Products/>
    </>
  )
}

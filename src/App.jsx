import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import FeaturesPage from './pages/FeaturesPage'
import TestimonialsPage from './pages/TestimonialsPage'
import FaqPage from './pages/FaqPage'
import ContactUsPage from './pages/ContactUsPage'
import AdminHomePage from './pages/Admin/AdminHomePage'
import AdminMaincategoryPage from './pages/Admin/Maincategory/AdminMaincategoryPage'
import AdminMaincategoryCreatePage from './pages/Admin/Maincategory/AdminMaincategoryCreatePage'
import AdminMaincategoryUpdatePage from './pages/Admin/Maincategory/AdminMaincategoryUpdatePage'
import AdminNewsletterPage from './pages/Admin/AdminNewsletterPage'

export default function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='' element ={<HomePage/>}/>
    <Route path='/about' element ={<AboutPage/>}/>
    <Route path='/shop' element ={<ShopPage/>}/>
    <Route path='/features' element ={<FeaturesPage/>}/>
    <Route path='/testimonials' element ={<TestimonialsPage/>}/>
    <Route path='/faq' element ={<FaqPage/>}/>
    <Route path='/contactus' element ={<ContactUsPage/>}/>
    <Route path='/admin' element={<AdminHomePage/>}/>
    <Route path='/admin/maincategory' element={<AdminMaincategoryPage/>}/>
    <Route path='/admin/maincategory/create' element={<AdminMaincategoryCreatePage/>}/>
    <Route path='/admin/maincategory/update/:id' element={<AdminMaincategoryUpdatePage/>}/>
    <Route path='/admin/newsletter' element={<AdminNewsletterPage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

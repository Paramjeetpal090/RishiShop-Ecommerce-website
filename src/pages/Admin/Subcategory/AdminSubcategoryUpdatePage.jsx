import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import AdminSidebar from '../../../components/Admin/AdminSidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'
import ImageValidator from '../../../Validators/ImageValidator'

import { getSubcategory,updateSubcategory } from '../../../Redux/ActionCreators/SubcategoryActionCreators'

export default function AdminSubcategoryUpdatePage() {
  let { id } = useParams()
  let [data, setData] = useState({
    name: '',
    pic: '',
    status: true
  })
  let [errorMessage, setErrorMessage] = useState({
    name: '',
    pic: ''
  })
  let [show, setShow] = useState(false)

  let [SubcategoryStatePage, setSubcategoryStateData] = useState([])

  let navigate = useNavigate()

  function getInputData(e) {
    let name = e.target.name
    let value = name === 'pic' ? "Subcategory/" + e.target.files[0].name : e.target.value
    // let value =name==="pic"? e.target.files[0]: e.target.value   //In case or real backend

    setData({ ...data, [name]: name === 'status' ? (value === '1' ? true : false) : value })
    setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidator(e) : FormValidator(e) })
  }

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== "")
    if (error)
      setShow(true)
    else {
      let item = SubcategoryStatePage.find(x => x.id !== id && x.name?.toLowerCase() === data.name?.toLowerCase())
      if (item) {
        setErrorMessage({ ...errorMessage, name: "Subcategory With This Name Already Exist" })
        setShow(true)
      }
      else {
      dispatch (updateSubcategory({...data}))
       //  let formData = new FormData()
    //  formData.append("id",data.id)
    //  formData.append("name",data.name)
    //  formData.append("pic",data.pic)
    //  formData.append("status",data.status)
  //  dispatch(createSubcategory(formData))
        navigate(`/admin/Subcategory`)
      }
    }
  }
  useEffect(() => {
    (() => {
      dispatch(getSubcategory())
      if(setSubcategoryStateData.length){
      let item = SubcategoryStateData.find(x => x.id === id)
      if (item)
        setData({ ...data, ...item })
      else
        navigate("/admin/Subcategory ")
    }
    })()

  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <AdminSidebar />
        </div>
        <div className="col-lg-9">
          <h5 className='bg-secondary text-center p-2 text-light'>Update Subcategory <Link to="/admin/Subcategory"><i className='bi bi-arrow-left text-light fs-5 float-end'></i></Link></h5>
          <form onSubmit={postData}>
            <div className="row">
              <div className="col-12 mb-3">
                <label> Name*</label>
                <input type="text" name='name' value={data.name} onChange={getInputData} placeholder='Subcategory Name' className={`form-control ${show && errorMessage.name ? `border-danger` : `border-secondary`}`} />
                {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
              </div>
              <div className="col-lg-6 mb-3">
                <label> pic*</label>
                <input type="file" name='pic' onChange={getInputData} className={`form-control ${show && errorMessage.pic ? `border-danger` : `border-secondary`}`} />
                {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
              </div>
              <div className="col-lg-6 mb-3">
                <label>Status</label>
                <select name="status" onChange={getInputData} value={data.status ? "1" : "0"} className='form-select border-secondary'>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
              <div className="col-12 mb-3">
                <button type='submit' className='btn btn-secondary w-100'>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

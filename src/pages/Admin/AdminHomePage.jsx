import React from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'

export default function AdminHomePage() {
  return (
   <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <AdminSidebar/>
      </div>
      <div className="col-lg-9">
        <h5 className='bg-secondary text-center p-2 text-light'>Admin Home</h5>
        <table className='table table-bordered '>
          <tbody>
            <tr>
              <th>Name</th>
              <td>Paramjeet Pal</td>
            </tr>
            <tr>
              <th>User Name</th>
              <td>Paramjeet</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>paramjeetpal087@gmail.com</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>8445992287</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>Super Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </div>
  )
}

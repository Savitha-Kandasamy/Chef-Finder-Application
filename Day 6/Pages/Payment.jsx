import React from 'react'
import Topbar from '../Sample/Topbar'
import Sidebar from '../Sample/Sidebar'
function Payment() {
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <div className="dashboard-wrapper">
      <h1>Payment</h1>
      </div>
    </div>
  )
}

export default Payment

import React from 'react'
import Topbar from '../Sample/Topbar'
import Sidebar from '../Sample/Sidebar'
function Notification() {
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <div className="dashboard-wrapper">
      <h1>Notification</h1>
      </div>
    </div>
  )
}

export default Notification

import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import './Sample.css'


function Dashboard() {
  return (
    <div>
      <Topbar/>
      <Sidebar/>  
      <div className="dashboard-wrapper" style={{ height: 'calc(100vh - 500vh)' }}>
     
      </div>
    </div>
  )
}

export default Dashboard
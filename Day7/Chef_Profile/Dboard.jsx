import React from 'react'
import Topc from './Topc'
import Sidec from './Sidec'
import './Dboard.css'


function Dboard() {
  return (
    <div>
      <Topc/>
      <Sidec/>  
      <div className="dashboard-wrapper" style={{ height: 'calc(100vh - 500vh)' }}>
     
      </div>
    </div>
  )
}

export default Dboard
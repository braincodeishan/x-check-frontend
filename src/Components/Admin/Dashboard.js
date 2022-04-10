import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-4 m-2 bg-light px-3 pt-3">
          <Link to="/updateMobiles"> <h5>Phones Updated</h5>          
          <h3>1044</h3>
          <p>out of 10455 data feed.</p>
          </Link>
          <h5>Users Registered</h5>          
          <h3>15450</h3>
          
        </div>
        <div className="col m-2 bg-light">
          <h3>Sales Figures</h3>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
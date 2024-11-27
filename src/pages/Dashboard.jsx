import React from 'react'
import Navbar from '../components/Navbar'
import Tasks from '../components/Tasks'

const Dashboard = () => {
  return (
    <>
        <div className="dashboard__container">
            <Navbar />
            <Tasks />
        </div>
    </>
  )
}

export default Dashboard
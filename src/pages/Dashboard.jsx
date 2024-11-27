import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Dashboard = () => {
  return (
    <>
        <div className="dashboard__container">
            <Navbar />
            <Card />
        </div>
    </>
  )
}

export default Dashboard
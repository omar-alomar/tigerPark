import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="navbar__link">Home</Link>
        <Link to={"/issue"} className="navbar__link">Issue a permit</Link>
        <Link to={"/holders"} className="navbar__link">Manage permit holders</Link>
        <Link to={"/types"} className="navbar__link">Manage permit types</Link>
        <Link to={"/garages"} className="navbar__link">Garage details</Link>
        <Link to={"/violations"} className="navbar__link">Parking violations</Link>
      </div>
    </>
  )
}

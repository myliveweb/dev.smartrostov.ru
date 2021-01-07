import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div id="content">
      <div className="panel">
        <div className="panel-body">
          <div className="col-md-6 col-sm-12">
            <h3 className="animated fadeInLeft">Customer Service</h3>
            <p className="animated fadeInDown"><span className="fa  fa-map-marker"></span> Batavia,Indonesia</p>

            <ul className="nav navbar-nav">
                <li><NavLink to="/" >Impedit</NavLink></li>
                <li><NavLink to="/" className="active">Virtute</NavLink></li>
                <li><NavLink to="/">Euismod</NavLink></li>
                <li><NavLink to="/">Explicar</NavLink></li>
                <li><NavLink to="/">Rebum</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

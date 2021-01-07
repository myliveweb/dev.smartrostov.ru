import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-default header navbar-fixed-top">
      <div className="col-md-12 nav-wrapper">
        <div className="navbar-header" style={{ width: '100%' }}>
          <div className="opener-left-menu is-open">
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
            <NavLink to="/info/" className="navbar-brand">
              <b>ZAS</b>
            </NavLink>

          <ul className="nav navbar-nav search-nav">
            <li>
              <div className="search">
                <span className="fa fa-search icon-search" style={{ fontSize: '23px' }}></span>
                <div className="form-group form-animate-text">
                  <input type="text" className="form-text" required />
                  <span className="bar"></span>
                  <label className="label-search">Type anywhere to <b>Search</b> </label>
                </div>
              </div>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right user-nav">
            <li className="user-name"><span>Сергей Запольский</span></li>
            <li className="dropdown avatar-dropdown">
              <img src="asset/img/avatar.jpg" className="img-circle avatar" alt="user name" data-toggle="dropdown" />
              <ul className="dropdown-menu user-dropdown">
                <li><NavLink to="/"><span className="fa fa-user"></span> My Profile</NavLink></li>
                <li><NavLink to="/"><span className="fa fa-calendar"></span> My Calendar</NavLink></li>
                <li role="separator" className="divider"></li>
                <li className="more">
                  <ul>
                    <li><NavLink to="/"><span className="fa fa-cogs"></span></NavLink></li>
                    <li><NavLink to="/"><span className="fa fa-lock"></span></NavLink></li>
                    <li><NavLink to="/"><span className="fa fa-power-off "></span></NavLink></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li >
              <NavLink to="/" className="opener-right-menu">
                <span className="fa fa-coffee"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

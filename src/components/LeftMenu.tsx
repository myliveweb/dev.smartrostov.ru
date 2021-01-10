import React from 'react'
import { NavLink } from 'react-router-dom'

export const LeftMenu: React.FC = () => {
  return (
    <div id="left-menu">
      <div className="sub-left-menu scroll">
        <ul className="nav nav-list">
          <li><div className="left-bg"></div></li>
          <li className="time">
            <h1 className="animated fadeInLeft">21:00</h1>
            <p className="animated fadeInRight">Sat,October 1st 2029</p>
          </li>
          <li className="active ripple">
            <NavLink to="#" className="tree-toggle nav-header">
              <span className="fa-home fa"></span> Dashboard
              <span className="fa-angle-right fa right-arrow text-right"></span>
            </NavLink>
            <ul className="nav nav-list tree">
              <li><NavLink to="#">Dashboard v.11</NavLink></li>
              <li><NavLink to="#">Dashboard v.22</NavLink></li>
            </ul>
          </li>
          <li className="ripple">
            <NavLink to="#" className="tree-toggle nav-header">
              <span className="fa-diamond fa"></span> Layout
              <span className="fa-angle-right fa right-arrow text-right"></span>
            </NavLink>
            <ul className="nav nav-list tree">
              <li><NavLink to="#">Top Navigation</NavLink></li>
              <li><NavLink to="#">Boxed</NavLink></li>
            </ul>
          </li>
          <li className="ripple">
            <NavLink to="#" className="tree-toggle nav-header">
              <span className="fa-area-chart fa"></span> Charts
              <span className="fa-angle-right fa right-arrow text-right"></span>
            </NavLink>
            <ul className="nav nav-list tree">
              <li><NavLink to="#">ChartJs</NavLink></li>
              <li><NavLink to="#">Morris</NavLink></li>
              <li><NavLink to="#">Flot</NavLink></li>
              <li><NavLink to="#">SparkLine</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
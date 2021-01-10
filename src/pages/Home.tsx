import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div id="content">
      <div className="panel">
        <div className="panel-body">
          <div className="col-md-6 col-sm-12">
            <h3 className="animated fadeInLeft">Customer Service OK!</h3>
            <p className="animated fadeInDown"><span className="fa  fa-map-marker"></span> Batavia,Indonesia</p>

            <ul className="nav navbar-nav">
                <li><NavLink to="/" >Impedit</NavLink></li>
                <li><NavLink to="/" className="active">Virtute</NavLink></li>
                <li><NavLink to="/">Euismod</NavLink></li>
                <li><NavLink to="/">Explicar</NavLink></li>
                <li><NavLink to="/">Rebum</NavLink></li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="col-md-6 col-sm-6 text-right" style={{ paddingLeft: '10px' }}>
              <h3 style={{ color: '#DDDDDE' }}><span className="fa  fa-map-marker"></span> Banyumas</h3>
              <h1 style={{ color: '#ddd', marginTop: '-10px' }}>30<sup>o</sup></h1>
            </div>
            <div className="col-md-6 col-sm-6">
                <div className="wheather">
                <div className="stormy rainy animated pulse infinite">
                  <div className="shadow"></div>
                </div>
                <div className="sub-wheather">
                  <div className="thunder"></div>
                  <div className="rain">
                      <div className="droplet droplet1"></div>
                      <div className="droplet droplet2"></div>
                      <div className="droplet droplet3"></div>
                      <div className="droplet droplet4"></div>
                      <div className="droplet droplet5"></div>
                      <div className="droplet droplet6"></div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export const RightMenu: React.FC = () => {
  return (
    <div id="right-menu">
      <ul className="nav nav-tabs">
        <li className="active">
          <a data-toggle="tab" href="#right-menu-user">
            <span className="fa fa-comment-o fa-2x"></span>
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#right-menu-notif">
            <span className="fa fa-bell-o fa-2x"></span>
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#right-menu-config">
            <span className="fa fa-cog fa-2x"></span>
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="right-menu-user" className="tab-pane fade in active">
          <div className="search col-md-12">
            <input type="text" placeholder="search.."/>
          </div>
          <div className="user col-md-12">
            <ul className="nav nav-list">
              <li className="online">
                <img src="asset/img/avatar.jpg" alt="user name" />
                <div className="name">
                  <h5><b>Bill Gates</b></h5>
                  <p>Hi there.?</p>
                </div>
                <div className="gadget">
                  <span className="fa  fa-mobile-phone fa-2x"></span>
                </div>
                <div className="dot"></div>
              </li>
              <li className="away">
                <img src="asset/img/avatar.jpg" alt="user name" />
                <div className="name">
                  <h5><b>Bill Gates</b></h5>
                  <p>Hi there.?</p>
                </div>
                <div className="gadget">
                  <span className="fa  fa-desktop"></span>
                </div>
                <div className="dot"></div>
              </li>
            </ul>
          </div>
          <div className="col-md-12 chatbox">
            <div className="col-md-12">
              <NavLink to="#" className="close-chat">X</NavLink><h4>Akihiko Avaron</h4>
            </div>
            <div className="chat-area">
              <div className="chat-area-content">
                <div className="msg_container_base">
                  <div className="row msg_container send">
                    <div className="col-md-9 col-xs-9 bubble">
                      <div className="messages msg_sent">
                        <p>that mongodb thing looks good, huh?
                          tiny master db, and huge document store</p>
                        <time>Timothy • 51 min</time>
                      </div>
                    </div>
                    <div className="col-md-3 col-xs-3 avatar">
                      <img src="asset/img/avatar.jpg" className=" img-responsive " alt="user name" />
                    </div>
                  </div>
                  <div className="row msg_container receive">
                    <div className="col-md-3 col-xs-3 avatar">
                      <img src="asset/img/avatar.jpg" className=" img-responsive " alt="user name" />
                    </div>
                    <div className="col-md-9 col-xs-9 bubble">
                      <div className="messages msg_receive">
                        <p>that mongodb thing looks good, huh?
                          tiny master db, and huge document store</p>
                        <time>Timothy • 51 min</time>
                      </div>
                    </div>
                  </div>
                  <div className="row msg_container send">
                    <div className="col-md-9 col-xs-9 bubble">
                      <div className="messages msg_sent">
                        <p>that mongodb thing looks good, huh?
                          tiny master db, and huge document store</p>
                          <time>Timothy • 51 min</time>
                      </div>
                    </div>
                    <div className="col-md-3 col-xs-3 avatar">
                      <img src="asset/img/avatar.jpg" className=" img-responsive " alt="user name" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-input">
              <textarea placeholder="type your message here.."></textarea>
            </div>
            <div className="user-list">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
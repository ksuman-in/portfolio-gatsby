import React, { Component } from 'react'
import './LeftSideBar.scss'

class LeftSideBar extends Component {
  render() {
    return (
      <div className="leftsidebar" id="sidebar-wrapper">
        <div className="leftsidebar__header">
          <h2>My Projects</h2>
        </div>
        <div className="leftsidebar__body">
          <ul className="list">
            {/* <li className="list__item">Calendar</li> */}
            <li className="list__item">Making More</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default LeftSideBar

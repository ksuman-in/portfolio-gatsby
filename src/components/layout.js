import React from "react"
import Profile from "./Profile"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Profile />
      <div className="right-container">{children}</div>
    </div>
  )
}

export default Layout

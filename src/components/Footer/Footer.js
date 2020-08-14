import React from "react"
import "./Footer.scss"

const Footer = () => {
  const newDate = new Date()
  return (
    <footer className="footer">
      <span>
        Build by Suman Kumar | Copyright &copy; 2018 - {newDate.getFullYear()}
      </span>
    </footer>
  )
}

export default Footer

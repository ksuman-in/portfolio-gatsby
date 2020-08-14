import React from "react"
import About from "../About"
import Resume from "../Resume"
import Skills from "../Skills"
import Works from "../Works"
import Contact from "../Contact"
import Footer from "../Footer"
import "./Section.scss"

const Section = props => {
  const { activeMenu, bodyWidth } = props
  const style = bodyWidth <= 768 && `45px`
  return (
    <div className="tabs-infoblocks" style={{ paddingBottom: style }}>
      {activeMenu === "tab-about" && <About {...props} />}
      {activeMenu === "tab-resume" && <Resume {...props} />}
      {activeMenu === "tab-skills" && <Skills {...props} />}
      {activeMenu === "tab-works" && <Works {...props} />}
      {activeMenu === "tab-contact" && <Contact {...props} />}
      <Footer />
    </div>
  )
}

export default Section

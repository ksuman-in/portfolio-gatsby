import React from "react"
// import HomePage from "../components/Home"
import Layout from "../components/layout"
import Header from "../components/Header"
import Section from "../components/Section"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import "../styles/style.scss"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenu: "tab-about",
      bodyWidth: 0,
      profileHeight: 0,
    }
  }
  activeMenuList = data => {
    /* eslint-disable */
    const bodyWidth = window.innerWidth
    const profileHeight = document.getElementById("profile").clientHeight
    /* eslint-enable */
    this.setState({
      activeMenu: data,
      bodyWidth,
      profileHeight,
    })
  }
  componentDidMount() {
    /* eslint-disable */
    const docWidth = document.documentElement.offsetWidth
  }
  render() {
    const { activeMenu, bodyWidth, profileHeight } = this.state
    return (
      <Layout>
        <SEO title="Suman Kumar" />
        <div className="layout-container">
          <Profile />
          <div className="right-container">
            <Header
              activeMenuList={data => this.activeMenuList(data)}
              activeMenu={activeMenu}
            />
            <Section
              activeMenu={activeMenu}
              bodyWidth={bodyWidth}
              profileHeight={profileHeight}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

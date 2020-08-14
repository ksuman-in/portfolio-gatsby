import React, { Component } from "react"
import "./Contact.scss"
import {
  GrFacebookOption,
  GrLinkedinOption,
  GrInstagram,
  GrMail,
} from "react-icons/gr"
import {
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai"
import { FiPhoneCall } from "react-icons/fi"

class Contact extends Component {
  componentDidMount() {
    const { bodyWidth, profileHeight } = this.props
    if (bodyWidth <= 768) {
      /* eslint-disable */
      window.scrollTo({ top: profileHeight, left: 0, behavior: "smooth" })
    } else {
      /* eslint-disable */
      window.scrollTo(0, 0)
    }
  }
  render() {
    const socialDetails = [
      {
        name: "facebook",
        iconName: <GrFacebookOption />,
        profileURL: "https://www.facebook.com/ksuman.in",
        iconColor: "#3b5998",
      },
      {
        name: "linkedin",
        iconName: <GrLinkedinOption />,
        profileURL: "https://www.linkedin.com/in/ksuman-in/",
        iconColor: "#00a0dc",
      },
      {
        name: "instagram",
        iconName: <GrInstagram />,
        profileURL: "https://www.instagram.com/ksuman.in/",
        iconColor: "#f56040",
      },
      {
        name: "whatsapp",
        iconName: <AiOutlineWhatsApp />,
        profileURL: "https://wa.me/918209900773",
        iconColor: "#128c7e",
      },
      {
        name: "gmail",
        iconName: <GrMail />,
        profileURL: "mailto:suman845415@gmail.com",
        iconColor: "#ea4335",
      },
      {
        name: "github",
        iconName: <AiOutlineGithub />,
        profileURL: "https://github.com/ksuman-in",
        iconColor: "#6e5494",
      },
      {
        name: "twitter",
        iconName: <AiOutlineTwitter />,
        profileURL: "https://twitter.com/ksuman_in",
        iconColor: "#1da1f2",
      },
      {
        name: "phone",
        iconName: <FiPhoneCall />,
        profileURL: "tel:+918209900773",
        iconColor: "#32CD32",
      },
    ]
    return (
      <section id="contact-section" className="tabs-infoblock">
        <div className="tabs-infoblock__inner">
          <h2 className="title main-title">
            <span className="main-title__label">Contact</span>
          </h2>
          <div className="content__section">
            <blockquote className="blockquote">
              <div className="current-address">
                <b>Shri Lakshmi Gents PG,</b>
                <br />
                9th cross road, Bellandur, <br />
                near Bengaluru Bazzar, <br />
                Bengaluru, Karnataka 560103
              </div>
            </blockquote>
          </div>
          <div className="content__section">
            <h3 className="title title__middle">
              <i className="fa fa-address-book"></i>
              <span className="title__label">Contacts On</span>
            </h3>
            <ul className="icons">
              {socialDetails.map((social, index) => {
                const color = { "--hoverColor": social.iconColor }
                return (
                  <li className="icon" key={index} style={color}>
                    <a
                      href={social.profileURL}
                      target="_blank"
                      rel="noreferrer"
                      className={`icon__link`}
                      style={color}
                    >
                      {social.iconName}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="flag-badge"></div>
      </section>
    )
  }
}

export default Contact

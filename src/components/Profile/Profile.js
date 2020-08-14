import React, { Component } from "react"
import "./Profile.scss"
import { GrLinkedinOption, GrInstagram, GrMail } from "react-icons/gr"
import { AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instagramData: {},
    }
  }
  componentDidMount() {
    /* eslint-disable */
    const apiUrl = "https://www.instagram.com/ksuman.in/?__a=1"
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          instagramData: data.graphql.user,
        })
      })
  }
  render() {
    const socialDetails = [
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
    ]
    return (
      <div className="profile-container" id="profile">
        <div className="avatar">
          <img
            className="avatar__img"
            src={this.state.instagramData.profile_pic_url}
            alt="Suman Kumar"
          />
        </div>
        <div className="welcome">
          <h3 className="welcome__name">
            <span className="welcome__name--info">I&apos;m</span>
            <span className="welcome__name--user">Suman Kumar</span>
          </h3>
          <p className="welcome__label">
            <span className="welcome__label--prof">
              Front-end Developer From
            </span>
            <span className="welcome__label--from">India</span>
          </p>
          <p className="welcome__description">
            I&apos;m a software engineer who is passionate about making
            open-source more accessible, creating technology to elevate people,
            and building community. Some technologies I enjoy working with
            include ReactJs, JavaScript, React Native.
          </p>
        </div>
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
    )
  }
}

export default Profile

import React, { Component } from 'react'
import './Profile.scss'
import { GrLinkedinOption, GrInstagram, GrMail } from 'react-icons/gr'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const socialDetails = [
      {
        name: 'linkedin',
        iconName: <GrLinkedinOption />,
        profileURL: 'https://www.linkedin.com/in/ksuman-in/',
        iconColor: '#00a0dc',
      },
      {
        name: 'instagram',
        iconName: <GrInstagram />,
        profileURL: 'https://www.instagram.com/ksuman.in/',
        iconColor: '#f56040',
      },
      {
        name: 'whatsapp',
        iconName: <FaWhatsapp />,
        profileURL: 'https://wa.me/918209900773',
        iconColor: '#128c7e',
      },
      {
        name: 'gmail',
        iconName: <GrMail />,
        profileURL: 'mailto:suman845415@gmail.com',
        iconColor: '#ea4335',
      },
      {
        name: 'github',
        iconName: <AiOutlineGithub />,
        profileURL: 'https://github.com/ksuman-in',
        iconColor: '#6e5494',
      },
    ]

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                authorName
              }
            }
            fluidImages: file(relativePath: { regex: "/profile.jpg/" }) {
              childImageSharp {
                fluid(toFormat: PNG) {
                  src
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div className="profile-container" id="profile">
              <div className="avatar">
                <img
                  className="avatar__img"
                  src={data.fluidImages.childImageSharp.fluid.src}
                  alt={data.site.siteMetadata.authorName}
                />
              </div>
              <div className="welcome">
                <h1 className="welcome__name">
                  <span className="welcome__name--info">I&apos;m</span>
                  <span className="welcome__name--user">
                    {data.site.siteMetadata.authorName}
                  </span>
                </h1>
                <p className="welcome__label">
                  <span className="welcome__label--prof">
                    Front-End Developer From
                  </span>
                  <span className="welcome__label--from">India</span>
                </p>
                <p className="welcome__description">
                  I&apos;m a software engineer who is passionate about making
                  open-source more accessible, creating technology to elevate
                  people, and building community. Some technologies I enjoy
                  working with include ReactJs, JavaScript, React Native.
                </p>
              </div>
              <ul className="icons">
                {socialDetails.map((social, index) => {
                  const color = { '--hoverColor': social.iconColor }
                  return (
                    <li className="icon" key={index} style={color}>
                      <a
                        href={social.profileURL}
                        target="_blank"
                        rel="noreferrer"
                        className={'icon__link'}
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
        }}
      />
    )
  }
}

export default Profile

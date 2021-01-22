import React, { Component } from 'react'
import {
  FcGlobe,
  FcCalendar,
  FcHome,
  FcLike,
  FcApproval,
  FcManager,
  FcIcons8Cup,
  FcReading,
  FcSportsMode,
} from 'react-icons/fc'
import { GrCode } from 'react-icons/gr'
import './About.scss'

class About extends Component {
  componentDidMount() {
    const { bodyWidth, profileHeight } = this.props
    if (bodyWidth <= 768) {
      /* eslint-disable */
      window.scrollTo({ top: profileHeight, left: 0, behavior: 'smooth' })
    } else {
      /* eslint-disable */
      window.scrollTo(0, 0)
    }
  }
  render() {
    return (
      <section id="about-section" className="tabs-infoblock">
        <div className="tabs-infoblock__inner">
          <h2 className="title main-title">
            <span className="main-title__label">About me</span>
          </h2>
          <div className="content__section">
            <blockquote className="blockquote">
              Experience with HTML5, CSS3, JavaScript, Bootstrap4, Wordpress,
              SCSS, BEM Methodology, ReactJs, Redux, Saga, Sketch, REST API,
              Gatsby.
            </blockquote>
          </div>
          <div className="content__section">
            <h3 className="title title__middle">
              <FcReading />
              <span className="title__middle--label">Personal Info</span>
            </h3>
            <div className="iconbox">
              <div className="iconbox__info">
                <span className="iconbox__info--heading">
                  <FcGlobe /> Language
                </span>
                <span className="iconbox__info--label">English & Hindi</span>
              </div>

              <div className="iconbox__info">
                <span className="iconbox__info--heading">
                  <FcCalendar /> Date of birth
                </span>
                <span className="iconbox__info--label">21 April 1995</span>
              </div>
              <div className="iconbox__info">
                <span className="iconbox__info--heading">
                  <FcHome /> Hometown
                </span>
                <span className="iconbox__info--label">Motihari, BIHAR</span>
              </div>
              <div className="iconbox__info">
                <span className="iconbox__info--heading">
                  <FcLike /> Relationship
                </span>
                <span className="iconbox__info--label">Un-Married</span>
              </div>
            </div>
          </div>
          <div className="content__section">
            <h3 className="title title__middle">
              <FcSportsMode />
              <span className="title__middle--label">My Stats</span>
            </h3>
            <div className="iconbox">
              <div className="iconbox__info">
                <span className="iconbox__info--heading">
                  <FcApproval /> 20+
                </span>{' '}
                <span className="iconbox__info--label">projects done</span>
              </div>
              <div className="iconbox__info">
                <span className="iconbox__info--heading">
                  <FcManager /> 10+
                </span>{' '}
                <span className="iconbox__info--label">happy clients</span>
              </div>
              <div className="iconbox__info">
                <span className="iconbox__info--heading">
                  <FcIcons8Cup /> 10+
                </span>{' '}
                <span className="iconbox__info--label">cups of coffee</span>
              </div>
              <div className="iconbox__info">
                <span className="iconbox__info--heading">
                  <GrCode /> 1 000 000+
                </span>{' '}
                <span className="iconbox__info--label">lines of coding</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flag-badge"></div>
      </section>
    )
  }
}

export default About

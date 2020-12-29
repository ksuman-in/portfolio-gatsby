import React, { Component } from 'react'
import ProgressBar from '../ProgressBar'
import './Skills.scss'
import { GrGatsbyjs, GrNode } from 'react-icons/gr'
import { FcCustomerSupport } from 'react-icons/fc'
import { FaReact, FaLaptopCode, FaCodepen } from 'react-icons/fa'
import { DiJavascript1, DiMongodb } from 'react-icons/di'
import { FaWordpress, FaBootstrap, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import ReduxSagaLogo from '../../images/Redux-Saga-Logo.png'

class Skills extends Component {
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
    const skillsDetails = [
      {
        name: "React Js",
        percentage: "70%",
        colorCode: "#e91e63",
        iconName: <FaReact fill="#e91e63" />,
      },
      {
        name: "Redux",
        percentage: "70%",
        colorCode: "#e91e63",
        iconName: <FaReact fill="#e91e63"/>,
      },
      {
        name: "Redux-Saga",
        percentage: "70%",
        colorCode: "#e91e63",
        iconName: <img src={ReduxSagaLogo} alt='Redux-saga Logo'/>,
      },
      {
        name: "Gatsby JS",
        percentage: "60%",
        colorCode: "#764abc",
        iconName: <GrGatsbyjs fill="#764abc" />,
      },
      {
        name: "JavaScript",
        percentage: "75%",
        colorCode: "#f0db4f",
        iconName: <DiJavascript1 fill="#f0db4f" />,
      },
      {
        name: "Wordpress",
        percentage: "80%",
        colorCode: "#00749C",
        iconName: <FaWordpress fill="#00749C" />,
      },
      {
        name: "Bootstrap4",
        percentage: "85%",
        colorCode: "#563d7c",
        iconName: <FaBootstrap fill="#563d7c" />,
      },
      {
        name: "CSS3",
        percentage: "80%",
        colorCode: "#e31b5f",
        iconName: <FaCss3Alt fill="#e31b5f" />,
      },
      {
        name: "HTML5",
        percentage: "85%",
        colorCode: "#F16529",
        iconName: <FaHtml5 fill="#F16529" />,
      },
    ]
    const skillsLearning = [
      {
        name: "Node Js(Express)",
        percentage: "70%",
        colorCode: "#303030",
        iconName: <GrNode fill="#303030" />,
      },
      {
        name: "Mongodb",
        percentage: "70%",
        colorCode: "#4DB33D",
        iconName: <DiMongodb fill="#4DB33D"/>,
      },
      {
        name: "React Native",
        percentage: "70%",
        colorCode: "#e91e63",
        iconName: <FaReact fill="#e91e63"/>,
      },
    ]
    return (
      <section id="skills-section" className="tabs-infoblock">
        <div className="tabs-infoblock__inner">
          <h2 className="title main-title">
            <span className="main-title__label">My Skill</span>
          </h2>
          <div className="content__section">
            <blockquote className="blockquote">
              I enjoy being challenged and engaging with projects that require
              me to work outside my comfort and knowledge set, as continuing to
              learn new languages and development techniques are important to
              me. <br />
              <br />I am confident I will be an asset to your organization, and
              I&apos;d find it professionally gratifying to work with such an
              amazingly talented group of individuals.
            </blockquote>
          </div>
          <div className="content__section">
            <h3 className="title title__middle">
              <FaLaptopCode />
              <span className="title__label">Technical Skills</span>
            </h3>
            <div className="skill-details skill-details-list">
              {skillsDetails.map((skill, index) => {
                return (
                  <div className="skills-list" key={index}>
                    {skill.iconName && <div className="icons">{skill.iconName}</div>}
                    <p className="skill-name">{skill.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="content__section">
            <h3 className="title title__middle">
              <FaCodepen />
              <span className="title__label">Skills On Learning</span>
            </h3>
            <div className="skill-details skill-details-list">
              {skillsLearning.map((skill, index) => {
                return (
                  <div className="skills-list" key={index}>
                    <div className="icons">{skill.iconName}</div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="content__section">
            <h3 className="title title__middle">
              <i className="fas fa-assistive-listening-systems"></i>
              <span className="title__label">Professional Skills</span>
            </h3>
            <div className="skill-details">
              <div className="progress-bar">
                <ProgressBar dataPercent="80%" strokeColor="#FF5722" />
                <div className="skill__name">
                  <FcCustomerSupport />
                  <p className="skill__name--text">Communication</p>
                </div>
              </div>
              <div className="progress-bar">
                <ProgressBar dataPercent="100%" strokeColor="#61DBFB" />
                <div className="skill__name">
                  <p className="skill__name--text">Confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flag-badge"></div>
      </section>
    )
  }
}

export default Skills

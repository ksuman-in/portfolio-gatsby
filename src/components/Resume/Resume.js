import React, { Component } from 'react'
import './Resume.scss'
import { BsCloudDownload } from 'react-icons/bs'
import { GrView } from 'react-icons/gr'
import { FaSchool } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

class Resume extends Component {
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
      <section id="resume-section" className="tabs-infoblock">
        <div className="tabs-infoblock__inner">
          <h2 className="title main-title">
            <span className="main-title__label">Resume</span>
          </h2>
          <div className="content__section">
            <blockquote className="blockquote">
              I am confident I will be an asset to your organization, and
              I&apos;d find it professionally gratifying to work with such an
              amazingly talented group of individuals. <br />
              <br />I enjoy being challenged and engaging with projects that
              require me to work outside my comfort and knowledge set, as
              continuing to learn new languages and development techniques are
              important to me.
            </blockquote>
            <div className="resume">
              <a
                href={require('../../images/Suman_React_3years_Resume.pdf')}
                className="resume__download"
                download
              >
                <BsCloudDownload />
                <span className="resume__download--label">Download Resume</span>
              </a>
              <a
                href={require('../../images/Suman_React_3years_Resume.pdf')}
                className="resume__view"
                target="_blank"
              >
                <GrView />
                <span className="resume__view--label">View Resume</span>
              </a>
            </div>
          </div>
          <div className="content__section">
            <h3 className="title title__middle">
              <MdWork />
              <span className="title__middle--label">Work experience</span>
            </h3>
            <div className="timeline">
              <article className="timeline__box">
                <h4 className="title_small">Lead Engineer</h4>
                <div className="company">
                  <h5 className="company__name">HCL Technologies Limited</h5>
                  <p className="company__location">(Bengaluru, India)</p>
                </div>
                <div className="duration">
                  <p className="duration__from">Auguest 2021 - Present</p>
                </div>
              </article>
              <article className="timeline__box">
                <h4 className="title_small">Software Engineer</h4>
                <div className="company">
                  <h5 className="company__name">Frescano infotech pvt ltd</h5>
                  <p className="company__location">(Bengaluru, India)</p>
                </div>
                <div className="duration">
                  <p className="duration__from">April 2020 - Auguest 2021</p>
                </div>
              </article>
              <article className="timeline__box">
                <h4 className="title_small">Software Development Engineer</h4>
                <div className="company">
                  <h5 className="company__name">Handzap Inc.</h5>
                  <p className="company__location">(Bengaluru, India)</p>
                </div>
                <div className="duration">
                  <p className="duration__from">Auguest 2019 - March 2020</p>
                </div>
                <div className="timeline__box--description">
                  <p>
                    As a junior Software Engineer, my role was to create worked
                    on all the modules after that take owner shift of Admin
                    Dashboard.
                  </p>
                </div>
                <div className="timeline__box--technologies">
                  <ul className="technology">
                    <li>ReactJS</li>
                    <li>Redux</li>
                    <li>Saga</li>
                    <li>REST API</li>
                    <li>Gatsby(static site generator)</li>
                    <li>SCSS</li>
                  </ul>
                </div>
                <div className="duration">
                  <p className="duration__from">February 2019 - Auguest 2019</p>
                </div>
                <div className="timeline__box--description">
                  <p>As a Internship, my role was to</p>
                </div>
                <div className="timeline__box--technologies">
                  <ul className="technology">
                    <li>Basic of ReactJS</li>
                    <li>JavaScript</li>
                    <li>Basic of Sketch</li>
                  </ul>
                </div>
              </article>
              <article className="timeline__box">
                <h4 className="title_small">Wordpress Developer</h4>
                <div className="company">
                  <h5 className="company__name">Scribble Solutions</h5>
                  <p className="company__location">(Jaipur, India)</p>
                </div>
                <div className="duration">
                  <p className="duration__from">
                    February 2018 - Sepetember 2018
                  </p>
                </div>
                <div className="timeline__box--description">
                  <p>
                    I have worked on Wordpress theme plugin and created 5 static
                    websites and 3 E-commerce websites.
                  </p>
                </div>
                <div className="timeline__box--technologies">
                  <ul className="technology">
                    <li>Wordpress</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap4</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </article>
              <article className="timeline__box">
                <h4 className="title_small">College Internship Tranning()</h4>
                <div className="company">
                  <h5 className="company__name">
                    iBirds Software Services Pvt. Ltd.
                  </h5>
                  <p className="company__location">(Ajmer, India)</p>
                </div>
                <div className="duration">
                  <p className="duration__from">May 2017 - July 2017</p>
                </div>
                <div className="timeline__box--description">
                  <p>
                    During the period of my summer training, following are the
                    tools &amp; technologies that I learnt:
                  </p>
                </div>
                <div className="timeline__box--technologies">
                  <ul className="technology">
                    <li>Salesforce Developer(Apex, Visual-force)</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <div className="content__section">
            <h3 className="title title__middle">
              <FaSchool />
              <span className="title__middle--label">Education</span>
            </h3>
            <div className="timeline">
              <article className="timeline__box">
                <h4 className="title_small">B.TECH (Computer Science)</h4>
                <div className="company">
                  <h5 className="company__name">
                    Jaipur Engineering College & Research Center
                  </h5>
                  <p className="company__location">(Jaipur, India)</p>
                </div>
                <div className="duration">
                  <p className="duration__from">Auguest 2014 - July 2018</p>
                </div>
                <div className="timeline__box--description">
                  <p>
                    Creative and people-oriented Computer Scientist with
                    extensive project management experience. Advanced knowledge
                    in programming languages relevant to the web.
                  </p>
                </div>
              </article>
              <article className="timeline__box">
                <h4 className="title_small">Intermediate (Science)</h4>
                <div className="company">
                  <h5 className="company__name">
                    Mahadev Sah Higher Secondary School
                  </h5>
                  <p className="company__location">(Motihari, Bihar, India)</p>
                </div>
                <div className="timeline__box--description">
                  <p>Highly focused and responsible high school student.</p>
                </div>
                <div className="timeline__box--technologies">
                  <ul className="technology">
                    <li>
                      <strong>Teamwork:</strong> Able to apply lessons learned
                      as a lettered student athlete to motivate and support all
                      team members in assigned tasks and projects.
                    </li>
                    <li>
                      <strong>Mathematics:</strong> A+ math student, with
                      ability to use superb mental math skills to ensure
                      accuracy in order processing, cash handling, and credit
                      transactions.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="flag-badge"></div>
      </section>
    )
  }
}

export default Resume

import React, { Component } from "react"
import "./Works.scss"

class Works extends Component {
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
    const companyDetails = [
      {
        name: "Handzap Inc.",
        imgURL: "https://www.handzap.com/images/slider2.png",
        description: `Reward Yourself. Earn More by Inviting Friends to Handzap. Improve People's Lives and Make Money, too! How It works ...`,
        url: "https://www.handzap.com/",
      },
      {
        name: "Scribble Solutions",
        imgURL:
          "http://scribblesolutions.in/wp-content/uploads/2018/09/charts-cup-of-coffee-desk-1345089.jpg",
        description: `Scribble Solutions is a digital solution start up incepted
        in 2017. You can look forward to working with a young
        enthusiastic team, brainstorming sessions and ...`,
        url: "http://scribblesolutions.in/",
      },
      {
        name: "Paridhi Jaipuria",
        imgURL:
          "http://paridhijaipuria.com/wp-content/uploads/2018/10/home-cover-3-opti.jpg",
        description: `Paridhi Jaipuria&apos;s eponymous label drives a modern take
        on traditional ways of weaving handlooms and has earned
        renown in India&apos;s most prestigious fashion ...`,
        url: "http://paridhijaipuria.com/",
      },
      {
        name: "Pasha India",
        imgURL:
          "https://pashaindia.com/wp-content/uploads/2020/02/Untitled-5-3.jpg",
        description: `PASHA INDIA. Founded in 2014, Pasha is a quirky online destination for fashion and accessories. With the use of contrasting colors and a twist of art pop, Pasha ...`,
        url: "https://pashaindia.com/",
      },
      {
        name: "Wonder Years Preschool and Daycare",
        imgURL:
          "https://wonderyearsjaipur.com/wp-content/uploads/2018/03/Hero-5-Full.jpg",
        description: `Wonder Years is a Reggio Emilia inspired Preschool,
        After School Activity Workshop and Day Care for ..`,
        url: "https://wonderyearsjaipur.com/",
      },
    ]
    return (
      <section id="works-section" className="tabs-infoblock">
        <div className="tabs-infoblock__inner">
          <h2 className="title main-title">
            <span className="main-title__label">My Work</span>
          </h2>
          <div className="content__section">
            <blockquote className="blockquote">
              In-Depth knowledge/ Experience in HTML5, CSS3, W3C standards,
              Bootstrap4 JavaScript, ReactJS, Basic&apos;s of Redux,
              Basic&apos;s of Saga, Sketch. Solid understanding of Responsive
              Web Development.
              <br />
              <br />
              Experience in debugging and troubleshooting the existing code.
            </blockquote>
          </div>
          <div className="content__section">
            <h3 className="title title_middle">
              <i className="fa fa-globe"></i>
              <span className="title__label">Worked Web Sites</span>
            </h3>
            <div className="work-details">
              {companyDetails.map((company, index) => (
                <div className="card" key={index}>
                  <div className="card__header">
                    <a href={company.url} target="_blank" rel="noreferrer">
                      <img src={company.imgURL} alt={company.name} />
                    </a>
                  </div>
                  <div className="card__body">
                    <h5 className="card__body--title">{company.name}</h5>
                    <p className="card__body--desc">{company.description}</p>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noreferrer"
                      className="card__body--button"
                    >
                      Visit Here
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flag-badge"></div>
      </section>
    )
  }
}

export default Works

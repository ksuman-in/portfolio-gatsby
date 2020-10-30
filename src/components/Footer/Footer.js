import React from "react"
import "./Footer.scss"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const newDate = new Date()
  const query = graphql`
    query {
      site {
        siteMetadata {
          authorName
        }
      }
    }
  `
  const { site } = useStaticQuery(query)
  return (
    <footer className="footer">
      <span>
        Build by {site.siteMetadata.authorName} | Copyright &copy; 2018 -
        {newDate.getFullYear()}
      </span>
    </footer>
  )
}

export default Footer

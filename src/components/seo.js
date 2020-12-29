/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, title, themeColor }) {
  const { site, fluidImages } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
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
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const titleTemplate = `${title} | ${site.siteMetadata.title}`
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      {/* -- Primary Meta Tags -- */}
      <title>{titleTemplate}</title>
      <meta name="title" content={titleTemplate} />
      <meta name="description" content={metaDescription} />

      {/* -- Open Graph / Facebook -- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.url} />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image"
        content={fluidImages.childImageSharp.fluid.src}
      />

      {/* -- Twitter -- */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={site.siteMetadata.url} />
      <meta property="twitter:title" content={titleTemplate} />
      <meta property="twitter:description" content={metaDescription} />
      <meta
        property="twitter:image"
        content={fluidImages.childImageSharp.fluid.src}
      />
      <meta name="theme-color" content={themeColor}/>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    authorName: `Suman Kumar`,
    title: `Front-End Developer | ReactJS | JavaScript | SE`,
    description: `With a Bachelor’s degree in CSE and hands-on experience HTML5, CSS3, JavaScript, Bootstrap4, Wordpress, SaaS, BEM Methodology, ReactJs, Redux`,
    author: `@ksuman-in`,
    url: `https://ksuman.in`,
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-sass`,
    `react-icons`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ksuman`,
        short_name: `ksuman`,
        start_url: `/`,
        background_color: `rgb(236, 240, 243)`,
        theme_color: `#009688`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

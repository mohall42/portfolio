/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  /* Your site config here */

  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`
    }
  } ,
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },
    
`gatsby-plugin-react-helmet`,
`gatsby-plugin-sass`,
`gatsby-plugin-material-ui`,
`gatsby-transformer-sharp`,
`gatsby-plugin-sharp`,
`gatsby-transformer-remark`,
`react-reveal`],
}

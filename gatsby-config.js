module.exports = {
  siteMetadata: {
    title: `HackerMBA`,
    description: `Podcast for people who want to broaden their skills in the world of software.`,
    author: `@hacker_mba`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HackerMBA`,
        short_name: `HackerMBA`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#f8f9fa`,
        display: `minimal-ui`,
        icon: `src/images/hackermba-icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

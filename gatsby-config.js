module.exports = {
  siteMetadata: {
    siteTitle: `Boba Dev Team`,
    defaultTitle: `Boba Dev Team`,
    siteTitleShort: `Boba Dev`,
    siteDescription: `Boba Dev Team Tech Blog`,
    siteUrl: `https://boba-print.github.io/`,
    siteAuthor: `@KYUUUW`,
    siteImage: `/banner.png`,
    siteLanguage: `kr`,
    themeColor: `#0257AC`,
    basePath: `/`,
    footer: `Theme by Rocketseat`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/boba-print/blog`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

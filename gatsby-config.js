module.exports = {
  siteMetadata: {
    title: `Meelah's Portfolio`,
    description: `Meelah's Portfolio is a visually striking and highly customizable portfolio website built on the powerful Gatsby framework and integrated with the versatile Decap CMS`,
    siteUrl: "https://meelah-portfolio.netlify.app/",
    author: `Travis Lord <hi@travislord.xyz>`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "_content",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `arts`,
        path: `${__dirname}/src/arts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // destinationDir: "public",
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                `bmp`,
                `tiff`,
                `webp`,
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: false,
              showCaptions: false,
              quality: 100,
              disableBgImageOnAlpha: false,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meelah's Portfolio`,
        short_name: `Meelah Portfolio`,
        start_url: `/`,
        background_color: `#ebebfa`,
        theme_color: `#ebebfa`,
        display: `standalone`,
        icon: `src/images/3D-liquid-abstract-5.webp`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        enableIdentityWidget: false,
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}

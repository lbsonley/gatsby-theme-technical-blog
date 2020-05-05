module.exports = {
  plugins: [
    /**
     * Add support for theme-ui
     */
    "gatsby-plugin-theme-ui",

    /**
     * configure source-filesystem to look in posts
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },

    /**
     * Add support for mdx
     */
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600
            }
          }
        ]
      }
    }
  ]
};

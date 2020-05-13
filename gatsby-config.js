module.exports = ({
  contentPath = "posts",
  basePath = "/blog",
  categories = true,
  tags = true
}) => ({
  plugins: [
    /**
     * Add support for theme-ui
     */
    "gatsby-plugin-theme-ui",

    /**
     * configure source-filesystem to look in `contentPath`
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
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
          "gatsby-remark-katex",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
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
});

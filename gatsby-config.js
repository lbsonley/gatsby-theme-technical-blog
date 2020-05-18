module.exports = ({
  contentPath = "posts",
  basePath = "/blog",
  categories = true,
  categorySeoTitle = "Posts categorized:",
  tags = true,
  tagSeoTitle = "Posts tagged:"
}) => ({
  siteMetadata: {
    title: "Gatsby Theme Technical Blog",
    titleTemplate: "%s · Write Technically",
    description:
      "Gatsby theme for blogs with technical content.",
    url: "https://www.bensonley.com", // No trailing slash allowed!
    image: "/ironman.png", // Path to your image you placed in the 'static' folder
    twitterUsername: false
  },
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

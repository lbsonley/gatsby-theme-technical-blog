module.exports = {
  plugins: [
    /**
     * configure source-filesystem to look in posts
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },

    /**
     * Add support for mdx
     */
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          // key maps to `name` in `gatsby-source-filesystem`
          posts: require.resolve("./src/components/post-layout")
        }
      }
    }
  ]
};

module.exports = {
  plugins: [
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
    "gatsby-plugin-mdx"
  ]
};

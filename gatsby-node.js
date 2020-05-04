const fs = require("fs");

/**
 * Make sure /posts directory exists
 */
exports.onPreBootstrap = ({ reporter }) => {
  const postsPath = "posts";
  
  if (!fs.existsSync(postsPath)) {
    reporter.info(`creating the ${postsPath} directory`);
    fs.mkdirSync(postsPath);
  }
};

/**
 * Create slug for Posts based on title
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const basePath = "/blog";

  /**
   * @description - slugify terms a string into a hyphenated slug
   * @param {string} str the string to be slugified
   * @returns {string} path
   */
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/");
  }

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const title = node.frontmatter.title;
    actions.createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      value: slugify(title),
    });
  }
};

/**
 * Create Pages for Posts
 */
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const basePath = "/blog";

  /**
   * Create Post Listing Page
   */
  actions.createPage({
    path: basePath,
    component: path.resolve(`./src/templates/post-list.js`)
  })

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  // Create a page for each post
  posts.forEach(({ node }, index) => {
    actions.createPage({
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/post.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id }
    })
  });
};

const fs = require("fs");

/**
 * Make sure /posts directory exists and has one file with frontmatter
 */
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "posts";
  
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
    reporter.info(`creating your first content in ${contentPath}/post.mdx`);
    fs.writeFileSync(`${contentPath}/post.mdx`, 
`---
  title: Post 1
  date: 2020-05-05
  tags: ['first post']
---

First post.`
    );
  }
};

/**
 * Create slug for Posts based on title
 */
exports.onCreateNode = ({ node, actions, getNode }, options) => {
  const basePath = options.basePath || "/blog";

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
exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const basePath = options.basePath || "/blog";

  /**
   * Create Post Listing Page
   */
  actions.createPage({
    path: basePath,
    component: require.resolve(`./src/templates/post-list.js`)
  })

  const result = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
        tags: group(field: frontmatter___tags) {
          fieldValue
        }
        categories: group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    reporter.error(JSON.stringify(result.errors, null, 2));
    return;
  }

  const posts = result.data.allMdx.edges;
  // Create a page for each post
  posts.forEach(({ node }, index) => {
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/post.js`),
      context: { id: node.id }
    })
  });

  const tags = result.data.allMdx.tags;
  // Create page for each tag
  tags.forEach(({ fieldValue }, i) => {
    actions.createPage({
      path: `/tags/${fieldValue}`,
      component: require.resolve('./src/templates/posts-by-tag.js'),
      context: { tag: fieldValue }
    })
  });

  const categories = result.data.allMdx.categories;
  // Create page for each category
  categories.forEach(({ fieldValue }, i) => {
    actions.createPage({
      path: `/category/${fieldValue}`,
      component: require.resolve('./src/templates/posts-by-category.js'),
      context: { category: fieldValue }
    })
  });


};

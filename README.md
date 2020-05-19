# Gatsby Theme Tech(nical) Blog

[![latest version on npm](https://img.shields.io/npm/v/@lbsonley/gatsby-theme-technical-blog)](https://www.npmjs.com/package/@lbsonley/gatsby-theme-technical-blog) [![npm downloads a month](https://img.shields.io/npm/dm/@lbsonley/gatsby-theme-technical-blog)](https://www.npmjs.com/package/@lbsonley/gatsby-theme-technical-blog) [![package license](https://img.shields.io/npm/l/@lbsonley/gatsby-theme-technical-blog)](license)

A feature-rich Gatsby Blog Theme for technical bloggers. Useful for developers, scientists, teachers and anyone who wants to publish technical documents. 

**Features**

  - Categorization and Tagging
  - SEO Meta Data
  - Write posts in MDX
  - Configurable theming (`theme-ui`)
  - Code blocks (`prismjs`)
  - KaTeX Math (`katex`)
  - Image optimization (`sharp`)
  - Gif support

## Quick Start

Install the theme.

```sh
yarn add @lbsonley/gatbsy-theme-technical-blog
# or
npm i @lbsonley/gatsby-theme-technical-blog
```

Add it to your sites `gatsby-config.js`

```js
/* gatsby-config.js */

module.exports = {
  plugins: [
    "gatsby-theme-tech-blog"
  ]
};
```

Now start up gatsby with `gatsby develop` and you are ready to start writing your blog.

## Configuration

There are several options for configuring `gatsby-theme-technical-blog`, when you include it as a plugin in `gatsby-config.js`.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| postsPath | string | "posts" | The directory, from the root of your project, where theme looks for `*.mdx` files. |
| basePath | string | "/blog" | The path at which pages will be created. |
| categories | boolean | true | Whether or not to create an index page for categories |
| tags | boolean | true | Whether or not to create an index page for tags |
| categorySeoTitle | string | "Posts categorized:" | Used in SEO title on PostsByCategory page. Dynamically combined with selected category to produce a title "Post categorized: {category}". |
| tagSeoTitle | string | "Posts tagged:" | Used in SEO title on PostsbyTag page. Dynamically combined with selected category to produce a title "Post tagged: {tag}". |

```js
/* gatsby-config.js */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-technical-blog",
      options: {
        contentPath: "docs", // look for mdx files in docs directory
        basePath: "/docs", // publish pages at /docs/{page}
        categories: true,
        categorySeoTitle: "Docs categorized:",
        tags: true,
        tagSeoTitle: "Docs tagged:"
      }
    }
  ]
};
```

## Categorization and Tagging

The theme supports two ways to organize content; categories and tags. Categories should be used to group content by it's function (i.e. tutorials, gists, and opinions) and tags should be used to describe the topic (i.e. react, redux, and graphql).

Both categorization and tagging are enable by default. If you don't need both, you can turn off one or the other in the theme config (see above).

## Frontmatter

The theme builds and sorts pages based on metadata included in `mdx` files via frontmatter. All of the frontmatter fields are required unless otherwise disabled in the configuration object. If a frontmatter field is not present Gatsby will throw errors when building. Make sure to include a complete frontmatter object at the beginning of each `mdx` file.

| Key | Example Value | Description |
| --- | --- | --- |
| title | Rad Technical Stuff | The title for the content |
| date | 2020-05-13 | The date of publication |
| category | tutorials | Categorical grouping of content. Can be disabled |
| tags | [ "react", "redux" ] | Tagged grouped of content. Can be disabled |
| published | true | Whether or not to publish the content |

```js
---
  title: Rad technical stuff
  date: 2020-05-13
  category: tutorials
  tags: [ "react", "redux" ]
  published: true
---
```

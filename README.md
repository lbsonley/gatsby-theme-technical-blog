# Gatsby Theme Tech(nical) Blog

A feature-rich Gatsby Blog Theme for technical bloggers. Useful for developers, scientists, teachers and anyone who wants to publish technical documents. 

**Features**

  - Configurable theming (`theme-ui`)
  - Code blocks (`prismjs`)
  - KaTeX Math (`katex`)
  - Gatsby image optimization (`sharp`)
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

## Configuring the theme

By default `gatsby-theme-technical-blog` looks for `*.mdx` files in the `/posts` directory at the root of your project. If this directory does not exist, the theme will create it for you. You can to source your `*.mdx` files from elsewhere with the `contentPath` option.

Pages for each of the files found in your `contentPath` directory will be published at the `basePath`. By default, `basePath = "/blog"`. This can also be configured in you `gatsby-config.js`.

| Property | Type | Default |
| --- | --- | --- |
| postsPath | string | "posts" |
| basePath | string | "/blog" |

```js
/* gatsby-config.js */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-tech-blog-mdx",
      options: {
        contentPath: "docs",
        basePath: "/docs"
      }
    }
  ]
};
```

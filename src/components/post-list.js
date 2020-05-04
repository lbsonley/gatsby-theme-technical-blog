import React from "react";

const PostListItem = ({ id, excerpt, frontmatter, fields }) => {
  const { title, date } = frontmatter;
  const { slug } = fields;
  return (
    <li>
      <a href={slug}>
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{excerpt}</p>
      </a>
    </li>
  );
};

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map(post => <PostListItem key={post.node.id} {...post.node} />)}
    </>
  );
};

export default PostList;

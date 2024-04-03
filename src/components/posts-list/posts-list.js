import styled from "styled-components";

const posts = [1, 2, 3, 4, 5, 6, 7];

const PostsListContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="posts__featured-post">{posts[0].content}</div>
      <div className="posts__list">
        {posts.slice(1).map((post) => (
          <div>{post.content}</div>
        ))}
      </div>
    </div>
  );
};

export const PostsList = styled(PostsListContainer)`
  border: 1px solid black;
  min-width: 1140px;
  min-height 1929px;
`;

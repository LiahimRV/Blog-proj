import { FeaturedPost } from "./components";
import styled from "styled-components";

const posts = [1, 2, 3, 4, 5, 6, 7];

const PostsListContainer = ({ className }) => {
  return (
    <div className={className}>
      <FeaturedPost />
      <div className="posts__list">
        {posts.slice(1).map((post) => (
          <div>{post}</div>
        ))}
      </div>
    </div>
  );
};

export const PostsList = styled(PostsListContainer)`
  border: 1px solid black;
  margin: 20px 0 0 0;
  min-width: 1140px;
  min-height: 1929px;

  & .posts__featured-post {
  }
`;

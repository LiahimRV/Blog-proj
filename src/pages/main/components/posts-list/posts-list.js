import { FeaturedPost, Posts } from "./components";
import styled from "styled-components";

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

const PostsListContainer = ({ className }) => {
  return (
    <div className={className}>
      <FeaturedPost />
      <Posts />
    </div>
  );
};

export const PostsList = styled(PostsListContainer)`
  margin: 20px 0 0 0;
  min-width: 1140px;
  min-height: 1929px;
`;

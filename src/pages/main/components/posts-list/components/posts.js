import { PostContent } from "./post-content";
import styled from "styled-components";

const PostsContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="first-column">
        <PostContent />
      </div>
      <div className="second-column">
        <PostContent />
      </div>
    </div>
  );
};

export const Posts = styled(PostsContainer)`
  display: flex;
  justify-content: space-between;

  & .first-column {
    width: 558px;
  }

  & .second-column {
    width: 558px;
  }
`;

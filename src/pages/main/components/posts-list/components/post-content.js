import { Link } from "react-router-dom";
import { BlockWithReactions, Button } from "../../../../../components";
import styled from "styled-components";

const PostContentContainer = ({ className, title, postId, negReact, posReact, reactionStatus }) => {



  return (
    <div className={className}>
      <img alt="img" src="https://placehold.co/558x273" />
      <div className="post-content-data">
        <div className="post-content__title">
          <div className="post-content__title-text">{title}</div>
        </div>
        <div className="post-content__footer">
          <div className="grade-icons-frame">
            <BlockWithReactions postId={postId} negativeReactionCount={negReact} positiveReactionCount={posReact} reactionStatus={reactionStatus} />
          </div>
          <Link to={`/post/${postId}`}>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  margin: 0 0 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  max-width: 558px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(244, 244, 244, 1);
  border-radius: 12px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 10px 20px rgba(0, 0, 0, 0.04);

  & img {
    border-radius: 12px 12px 0 0;
  }
  & .post-content__title {
    display: flex;
    justify-content: space-between;
  }

  & .grade-icons-frame {
    display: flex;
  }

  & .post-content__footer {
    display: flex;
    margin: 0 20px 0 0;
    justify-content: space-between;
  }
`;

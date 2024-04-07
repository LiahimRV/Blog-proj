import { Link } from "react-router-dom";
import { BlockWithReactions, Button } from "../../../../../components";
import styled from "styled-components";

const PostContentContainer = ({ className, title, postId, negReact, posReact, reactionStatus }) => {
  return (
    <div className={className}>
      <img alt="img" src="https://placehold.co/558x273" />
      <div className="post-content-data">
        <div className="post-content__title">
          {title}
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
  max-width: 558px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(244, 244, 244, 1);
  border-radius: 12px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
   0px 10px 20px rgba(0, 0, 0, 0.04);
  
  & img {
    border-radius: 12px 12px 0 0;
  }

  & .post-content-data {
    min-height: 101px;
  }

  & .post-content__title {
    width: 526px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0px 12px 6px;
    min-height: 32px;
    max-height: 64px;
    font: 700 28px/32px Roboto, sans-serif;
  }

  & .grade-icons-frame {
    display: flex;
  }

  & .post-content__footer {
    display: flex;
    margin: 5px 0 0 0;
    justify-content: space-between;
    padding-bottom: 22px;
    margin: 0 6px 0 6px;
  }
`;

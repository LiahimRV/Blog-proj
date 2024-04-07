import { BlockWithReactions, Button } from "../../../../../components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FeaturedPostContainer = ({
  className,
  title,
  body,
  positiveReactionCount,
  negativeReactionCount,
  postId,
  reactionStatus
}) => {
  return (
    <div className={className}>
      <img alt="img" src="https://placehold.co/1140x600" />
      <div className="post-content">
        <div className="post-content__title">
          <div className="post-content__title-text">{title}</div>
          <div className="post-content__title-frame">
            <BlockWithReactions
              postId={postId}
              positiveReactionCount={positiveReactionCount}
              negativeReactionCount={negativeReactionCount}
              reactionStatus={reactionStatus}
            />
          </div>
        </div>
        <div className="post-content__subtitle">{body}</div>
        <div className="post-content__footer">
          <Link to={`/post/${postId}`}>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const FeaturedPost = styled(FeaturedPostContainer)`
  width: 1140px;
  margin: 0 0 20px 0;
  min-height: 929px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(244, 244, 244, 1);
  border-radius: 12px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 10px 20px rgba(0, 0, 0, 0.04);

  & img {
    border-radius: 12px 12px 0 0;
  }

  & .post-content__title-text {
    width: 959px;
    min-height: 32px;
    text-align: left;
    display: flex;
    align-items: center;
    font: 700 28px/32px Roboto, sans-serif;
  }

  & .post-content {
   width: 1140px;
   height:  325px;
   padding: 24px 16px 32px 16px;
   gap: 32px;

  }

  & .post-content__title {
    display: flex;
    justify-content: space-between;
  }

  & .post-content__title-frame {
    display: flex;
  }

  & .post-content__footer {
    display: flex;
    flex-direction: row-reverse;
    margin: 0 20px 0 0;
  }

  & .post-content__subtitle {
    width: 1108px;
    height: 132px;
    margin: 20px 0 10px 0;
    font: 400 24px/32px Roboto, sans-serif;
  }

  & button {
    box-sizing: border-box;
    display: block;
    min-width: 150px;
    height: 45px;
    font: 400 16px Roboto, sans-serif;
    color: rgba(10, 10, 10, 1);
    cursor: pointer;
    background: rgba(255, 255, 255, 1);
    border: 2px solid rgba(10, 10, 10, 1);
    border-radius: 60px;
  }
`;

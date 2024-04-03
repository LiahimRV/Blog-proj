import { Button } from "../../../../../components";
import styled from "styled-components";

const PostContentContainer = ({ className }) => {
  return (
    <div className={className}>
      <img alt="img" src="https://placehold.co/558x273" />
      <div className="post-content-data">
        <div className="post-content__title">
          <div className="post-content__title-text">postData.title</div>
        </div>
        <div className="post-content__footer">
          <div className="grade-icons-frame">
            <p>up</p> <p>down</p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  max-width: 558px;
  margin: 0 0 20px 0;

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

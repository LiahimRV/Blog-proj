import styled from "styled-components";

const FeaturedPostContainer = ({ className, postData }) => {
  return (
    <div className={className}>
      <img alt="img" src="https://placehold.co/1140x600" />
      <div className="post-content">
        <div className="post-content__title">
          <div className="post-content__title-text">postData.title</div>
          <div className="post-content__title-frame">
            <p>up</p> <p>down</p>
          </div>
        </div>
        <div className="post-content__subtitle">postData.subtitle</div>
        <div className="post-content__footer">
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export const FeaturedPost = styled(FeaturedPostContainer)`
  max-width: 1140px;
  margin: 0 0 20px 0;

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

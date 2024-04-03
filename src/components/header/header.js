import styled from "styled-components";

const HeaderContainer = ({ className }) => {
  return (
    <div className={className}>
      <p className="header-text">Блог</p>
      <div className="information-panel">
        <p className="information-panel__text">
          Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи
        </p>
      </div>
    </div>
  );
};

export const Header = styled(HeaderContainer)`
  & .header-text {
    font: 600 50px/30px Roboto, sans-serif;
    color: rgba(10, 10, 10, 1);
    text-align: center;
    white-space: pre-wrap;
  }

  & .information-panel__text {
    font: 400 24px/32px Roboto, sans-serif;
    color: rgba(10, 10, 10, 1);
    text-align: left;
    letter-spacing: 0.48px;
    white-space: pre-wrap;
  }
`;

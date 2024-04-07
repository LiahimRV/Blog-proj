import styled from "styled-components";

const HeaderContainer = ({ className }) => {
  return (
    <div className={className}>
      <p className="header-text">Блог</p>
      <div className="information-panel">
        <p className="information-panel__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export const Header = styled(HeaderContainer)`
  & .header-text {
    font: 600 2.5rem/1.5 Roboto, sans-serif;
    color: rgba(10, 10, 10, 1);
    text-align: center;
    white-space: pre-wrap;
  }

  & .information-panel__text {
    font: 400 1.5rem/2 Roboto, sans-serif;
    color: rgba(10, 10, 10, 1);
    text-align: left;
    letter-spacing: 0.03em;
    white-space: pre-wrap;
  }
`;
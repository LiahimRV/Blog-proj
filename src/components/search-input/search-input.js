import styled from "styled-components";

const SearchInputContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="input-wrapper">
        <div>1</div>
        <input placeholder="Поиск по названию статьи"></input>
      </div>
    </div>
  );
};

export const SearchInput = styled(SearchInputContainer)`
  min-width: 1140px;
  height: 48px;
  border: 1px solid #919eab52;
  border-radius: 6px;

  & .input-wrapper {
    height: 34px;
    display: flex;
    flex-direction: row;
    margin: 8px 0 8px 22px;
  }

  & input {
    font: 400 16px/24px Roboto, sans-serif;
    min-width: 500px;
    border: none;
    outline: none;
  }
`;

// & .flex-row-container {
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: start;
//     height: 48px;
//     border: 1px solid rgba(145, 158, 171, 0.32);
//     border-radius: 6px;
//   }
//   & .transparent-input-style {
//     box-sizing: border-box;
//     width: 100%;
//     margin-left: 7px;
//     font: 400 16px Roboto, sans-serif;
//     background: transparent;
//     border: none;
//     outline: none;
//   }
//   & .input-style-fe777632::placeholder {
//     color: rgba(51, 51, 51, 1);
//   }
//   & .flex-box-icon-container {
//     display: flex;
//     width: 24px;
//     height: 24px;
//     margin-top: 12px;
//     margin-bottom: 12px;
//     margin-left: 14px;
//     color: rgba(51, 51, 51, 1);
//   }

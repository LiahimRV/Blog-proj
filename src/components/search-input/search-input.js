import styled from "styled-components";

const SearchInputContainer = ({ className, value, onChange }) => {
  return (
    <div className={className}>
      <div className="input-wrapper">
        <div>1</div>
        <input
          placeholder="Поиск по названию статьи"
          value={value}
          type="text"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export const SearchInput = styled(SearchInputContainer)`
  min-width: 1140px;
  height: 48px;
  border: 1px solid #919eab52;
  border-radius: 6px;
  margin: 0 0 15px 0;

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


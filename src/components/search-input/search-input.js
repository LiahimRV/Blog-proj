import styled from "styled-components";
import { Icon } from "../icon/icon";

const SearchInputContainer = ({ className, value, onChange }) => {
  return (
    <div className={className}>
      <div className="input-wrapper">
        <Icon
          id="fa-search"
          margin="0 12px 0 6px "
          color="black"
          transform="disable"
          hooverColor="disable"
          cursor="initial"


        />
        <input
          placeholder="Поиск по названию статьи..."
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
    margin: 6px 0 6px 10px;
  }

  & input {
    font: 400 18px/24px Roboto, sans-serif;
    min-width: 500px;
    border: none;
    outline: none;
  }
`;


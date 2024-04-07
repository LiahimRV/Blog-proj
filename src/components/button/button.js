import styled from "styled-components";

const ButtonContainer = ({ className }) => {
  return <button className={className}>Читать далее</button>;
};

export const Button = styled(ButtonContainer)`
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
`;

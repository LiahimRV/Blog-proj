import styled from "styled-components";

const ButtonContainer = ({ className, ...props }) => {
  return <button className={className} {...props}>Читать далее</button>;
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
	transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 10px 20px rgba(0, 0, 0, 0.04);
	}
`;

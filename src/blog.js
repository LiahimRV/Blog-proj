import { Header } from "./components";
// import { Routes } from "react-router-dom";
import styled from "styled-components";

export const Blog = () => {
  return (
    <BLogContainer>
      <Header />
    </BLogContainer>
  );
};

const BLogContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 1400px;
  background: rgba(255, 255, 255, 1);
`;

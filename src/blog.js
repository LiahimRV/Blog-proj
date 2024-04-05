import { Main } from "./pages";
// import { Routes } from "react-router-dom";
import styled from "styled-components";

export const Blog = () => {
  return (
    <BLogContainer>
      <PageContent>
        <Main />
      </PageContent>
    </BLogContainer>
  );
};

const PageContent = styled.div`
  width: 1140px;
`;

const BLogContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 1400px;
  height: 2100px;
  background: rgba(255, 255, 255, 1);
`;

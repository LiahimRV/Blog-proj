import { Header, SearchInput } from "./components";
// import { Routes } from "react-router-dom";
import styled from "styled-components";

export const Blog = () => {
  return (
    <BLogContainer>
      <Page>
        <Header />
        <SearchInput />
      </Page>
    </BLogContainer>
  );
};

const Page = styled.div`
  width: 1140px;
`;

const BLogContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 1400px;
  min-height: 2330px;
  background: rgba(255, 255, 255, 1);
`;

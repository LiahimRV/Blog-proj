import { Header, SearchInput } from "../../components";
import { PostsList } from "./components";
import styled from "styled-components";

const MainContainer = () => {
  return (
    <>
      <Header />
      <SearchInput />
      <PostsList />
    </>
  );
};

export const Main = styled(MainContainer)``;

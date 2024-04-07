import { Header } from "../../components";
import { PostsList } from "./components";
import styled from "styled-components";

const MainContainer = ({ className }) => {

  return (
    <div className={className}>
      <Header />
      <PostsList />
    </div>
  );
};

export const Main = styled(MainContainer)`

`;

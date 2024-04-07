import { Header } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsList } from "./components";
import { loadPostsAsync } from "../../actions";
import { selectPosts } from "../../selectors";
import styled from "styled-components";

const MainContainer = ({ className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  console.log(posts);

  return (
    <div className={className}>
      <Header />
      <PostsList />
    </div>
  );
};

export const Main = styled(MainContainer)`

`;

import { Header } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsList } from "./components";
import { loadPostsAsync } from "../../actions";
import { selectPosts } from "../../selectors";
import styled from "styled-components";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  console.log(posts);

  return (
    <>
      <Header />
      <PostsList />
    </>
  );
};

export const Main = styled(MainContainer)``;

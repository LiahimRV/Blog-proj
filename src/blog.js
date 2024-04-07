import { Main, PostPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { loadPostsAsync } from "./actions";
import { selectPosts } from "./selectors";
import styled from "styled-components";

export const Blog = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  console.log(posts);
  return (
    <BLogContainer>
      <PageContent>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
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
  background: rgba(255, 255, 255, 1);
`;

import { Main, PostPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { loadPostsAsync, setLoading } from "./actions";
import { selectLoader } from "./selectors";
import { PageNotFound, Loader } from "./components";
import styled from "styled-components";

export const BlogContainer = ({ className }) => {
  const dispatch = useDispatch();

  const loader = useSelector(selectLoader);

  useEffect(() => {
    dispatch(setLoading(true));

    dispatch(loadPostsAsync()).then(() => {
      dispatch(setLoading(false));
    });
  }, [dispatch]);

  return (
    <div className={className}>
      {loader ? (
        <Loader />
      ) : (
        <PageContent>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PageContent>
      )}
    </div>
  );
};

const PageContent = styled.div`
  width: 1140px;
`;

export const Blog = styled(BlogContainer)`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
min-width: 1400px;
background: rgba(255, 255, 255, 1);
`



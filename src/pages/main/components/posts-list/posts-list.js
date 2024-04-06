import { FeaturedPost, PostContent } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, selectSearchTerm } from "../../../../selectors";
import { SearchInput } from "../../../../components";
import { setSearchTerm } from "../../../../actions";
import styled from "styled-components";

const PostsListContainer = ({ className }) => {
  const posts = useSelector(selectPosts);
  const slicedPostsArray = posts.slice(0, 5);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const filteredPosts = slicedPostsArray.filter((post) =>
    post.title.includes(searchTerm)
  );

  const groupedPosts = filteredPosts.reduce(
    (acc, post) => {
      if (post.id > 1) {
        return { ...acc, multiplePosts: [...acc.multiplePosts, post] };
      } else {
        return { ...acc, singlePost: post };
      }
    },
    { singlePost: null, multiplePosts: [] }
  );

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className={className}>
      <SearchInput value={searchTerm} onChange={handleSearch} />

      {groupedPosts.singlePost && (
        <FeaturedPost
          key={groupedPosts.singlePost.id}
          body={groupedPosts.singlePost.body}
          title={groupedPosts.singlePost.title}
          negativeReactionCount={groupedPosts.singlePost.negativeReactionCount}
          positiveReactionCount={groupedPosts.singlePost.positiveReactionCount}
        />
      )}
      <div className="another-posts">
        {groupedPosts.multiplePosts.map((post) => (
          <>
            <PostContent key={post.id} title={post.title} postId={post.id} negReact={post.negativeReactionCount} posReact={post.positiveReactionCount} />
          </>

        ))}
      </div>
    </div>
  );
};

export const PostsList = styled(PostsListContainer)`
  margin: 20px 0 0 0;
  width: 1140px;
  min-height: 1929px;

  & .another-posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

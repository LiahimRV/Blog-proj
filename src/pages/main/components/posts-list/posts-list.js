import { FeaturedPost, PostContent } from "./components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../../../../selectors";
import { SearchInput } from "../../../../components";
import styled from "styled-components";

const PostsListContainer = ({ className }) => {
  const posts = useSelector(selectPosts);
  const slicedPostsArray = posts.slice(0, 5);
  const [filteredPosts, setFilteredPosts] = useState(slicedPostsArray);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setFilteredPosts(slicedPostsArray);
    } else {
      setFilteredPosts((prevFilteredPosts) =>
        prevFilteredPosts.filter((post) => post.title.includes(search))
      );
    }
  }, [search, slicedPostsArray]);

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

  return (
    <div className={className}>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />

      {groupedPosts.singlePost && (
        <FeaturedPost
          key={groupedPosts.singlePost.id}
          body={groupedPosts.singlePost.body}
          title={groupedPosts.singlePost.title}
        />
      )}
      <div className="another-posts">
        {groupedPosts.multiplePosts.map((post) => (
          <PostContent key={post.id} title={post.title} />
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

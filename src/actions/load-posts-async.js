import axios from "axios";
import { setPostsData } from "./set-posts-data";

export const loadPostsAsync = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

      if (response.status === 200) {
        const postsWithReactions = response.data.map((post) => ({
          ...post,
          positiveReactionCount: Math.floor(Math.random() * 51),
          negativeReactionCount: Math.floor(Math.random() * 51),
        }));

        dispatch(setPostsData(postsWithReactions));
      } else {
        throw new Error("Failed to fetch");
      }
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  };
};
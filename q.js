// import axios from "axios";
// import { setPostsData } from "./set-posts-data";

// export const loadPostsAsync = () => {
//     return async (dispatch) => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );

//         if (response.status === 200) {
//           dispatch(setPostsData(response.data));
//         } else {
//           throw new Error("Failed to fetch");
//         }
//       } catch (error) {
//         console.error("Error loading posts:", error);
//       }
//     };
//   };

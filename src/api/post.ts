import axios from "../utils/axiosInstance";

export const getWallPosts = async (page: number) => {
  try {
    let response = await axios.get(
      `https://padosi-backend.herokuapp.com/api/post/wall?page=${page}&limit=10`
    );
    return response.data.value;
  } catch (err) {
    console.error(err);
  }
};

export const getPost = async (postId: string) => {
  try {
    let response = await axios.get(`post/view/${postId}`);
    return response.data.value;
  } catch (err) {
    console.error(err);
  }
};

export const createPost = async (post: { tags: string[]; postText: string }) => {
  try {
    let response = await axios.post("post/create", post);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const searchPostsByTags = async (page: number, tags: { tags: string[] }) => {
  try {
    let response = await axios.post(`post/search?page=${page}&limit=10`, tags);
    return response.data.value;
  } catch (err) {
    console.error(err);
  }
};

export const likePost = async (postIdObj: { postId: string }) => {
  try {
    let response = await axios.put("post/like", postIdObj);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const unlikePost = async (postIdObj: { postId: string }) => {
  try {
    let response = await axios.put("post/unlike", postIdObj);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const addComment = async (commentData: { commentText: string; postId: string }) => {
  try {
    let response = await axios.put("post/comment", commentData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = async (commentData: { commentId: string; postId: string }) => {
  try {
    let response = await axios.put("post/uncomment", commentData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

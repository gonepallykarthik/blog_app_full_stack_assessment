import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();

    dispatch({ type: "Fetch_Posts", payload: data });
  } catch (e) {
    console.log(e.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  const { data } = await api.CreatePost(newPost);

  dispatch({ type: "Create_Post", payload: data });
};

export const updatePost = (id, post) => async (dispatch) => {
  const { data } = await api.updatepost(id, post);

  dispatch({ type: "UPDATE", payload: data });
};

export const DeletePost = (id) => async (dispatch) => {
  await api.deletepost(id);
  dispatch({ type: "DELETE", payload: id });
};

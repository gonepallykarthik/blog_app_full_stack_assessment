import axios from "axios";

const url = process.env.REACT_APP_API;

export const fetchData = () => axios.get(url);

export const CreatePost = (post) => axios.post(`${url}/post`, post);

export const updatepost = (id, postdata) =>
  axios.patch(`${url}/update/${id}`, postdata);

export const deletepost = (id) => axios.delete(`${url}/delete/${id}`);

import useStyles from "./style";
import { Paper, Typography, Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrent }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    selectedfile: "",
  });
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrent(null);
    setPostData({ creator: "", title: "", message: "", selectedfile: "" });
  };

  return (
    <Paper variant="outlined" className={classes.paper}>
      <form
        autoComplete="off"
        className={`${classes.root} ${classes.form}`}
        onSubmit={submitHandler}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          label="title"
          name="title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          label="creator"
          name="creator"
          variant="outlined"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          label="message"
          name="message"
          variant="outlined"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <Button type="submit" color="primary" size="lg" fullWidth>
          Submit
        </Button>
        <Button
          type="button"
          color="secondary"
          size="lg"
          fullWidth
          onClick={clear}
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

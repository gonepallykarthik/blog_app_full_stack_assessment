import Post from "./Post/Post";
import useStyle from "./style";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

const Posts = ({ setCurrent }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const classes = useStyle();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      alignItems="stretch"
      className={classes.mainContainer}
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} setCurrent={setCurrent} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

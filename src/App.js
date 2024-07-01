import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import "./App.css";
import Form from "./Components/form/form";
import Posts from "./Components/posts/post";
import useStyles from "./style";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [currentId, setcurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="secondary">
        <Typography variant="h1" align="center">
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrent={setcurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrent={setcurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;

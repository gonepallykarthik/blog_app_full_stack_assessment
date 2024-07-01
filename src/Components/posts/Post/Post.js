import useStyles from "./style";
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { DeletePost } from "../../../actions/posts";
import Bgsvg from "../../../bg";

const Post = ({ post, setCurrent }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {/* <CardMedia className={classes.media} image={<Bgsvg />} /> */}
      <Bgsvg />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size="small" onClick={() => setCurrent(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography
        className={classes.title}
        variant="body2"
        color="textSecondary"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: "primary" }} onClick={() => {}}>
          <ThumbUpAlt fontSize="default" />
          Like
          {post.likeCount}
        </Button>
        <Button
          size="small"
          style={{ color: "primary" }}
          onClick={() => dispatch(DeletePost(post._id))}
        >
          <DeleteIcon fontSize="default" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

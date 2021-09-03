
import { Fragment } from "react"
import Post from "./Post"
import classes from './PostList.module.css'
function PostList(props) {
    return (
        <Fragment>
    <ul className={classes['post-ul']}>
      {props.user.map((post) => (
        <Post
          title={post.title}
          objectID = {post.objectID}
        />
      ))}
    </ul>
        </Fragment>
    )
}

export default PostList
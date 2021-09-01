import { Fragment } from "react"
import User from "./User"
import classes from './UserList.module.css'
function UserList(props) {
    return (
        <Fragment>
    <ul className={classes['post-list']}>
      {props.users.map((post) => (
        <User 
          title={post.title}
          objectID = {post.objectID}
        />
      ))}
    </ul>
        </Fragment>
    )
}

export default UserList

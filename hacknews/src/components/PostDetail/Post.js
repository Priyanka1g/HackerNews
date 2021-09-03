import React from 'react';
import { Fragment } from 'react';

import classes from './Post.module.css';

const Post = (props) => {
  return (
    <Fragment>
    <li className={classes.poststyle}>
      <p>{props.title}</p>
    </li>
    </Fragment>
  );
};

export default Post;
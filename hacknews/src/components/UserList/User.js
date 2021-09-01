import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './User.module.css';

const User = (props) => {
  return (
    <Fragment>
    <li  className={classes.post}>
    <Link style={{ textDecoration: 'none'}} to={`/post/${props.objectID}`}>
      <h2 >{props.title}</h2>
      </Link>
    </li>
    </Fragment>
  );
};

export default User;
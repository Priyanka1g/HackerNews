import React from 'react'
import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import classes from './PostDetail.module.css'
function PostDetail() {
    const Params = useParams();

    const [res, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(` http://hn.algolia.com/api/v1/items/${Params.objectID}` );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const result = await response.json();

      const resData = result.children.map((postData) => {
        return {
          title: postData.text,
          author:postData.author,
          points:postData.points,
        };
      });
    // console.log(transformedData)
      setRes(resData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
}, [Params.objectID]);


  useEffect(() => {
    fetchResHandler();
  }, [fetchResHandler]);

  
  let content = <h1 className={classes.center}>Found no data.</h1>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (res.length > 0) {
    content = <div>
    <ul >
    {res.map((post) => (
      <li >
      <div className={classes.center}>
      <h4>{post.author}</h4>
      <h4>{post.points}</h4>
      </div>
      <h5 className={classes.small}>{post.title}</h5>
    </li>
       
    ))}
  </ul>
  </div>
    
  }

  if (isLoading) {
    content = <p className={classes.para}>Loading...</p>;
  }
 
 
    return (
        <div>
            {content}
        </div>
    )
}

export default PostDetail

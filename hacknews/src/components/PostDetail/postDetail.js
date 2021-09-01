import React from 'react'
import { useCallback } from 'react';
import { useParams, useState, useEffect } from 'react-router-dom'
function PostDetail() {
    const Params = useParams();
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(` http://hn.algolia.com/api/v1/items/${Params}` );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedData = data.hits.map((postData) => {
        return {
          title: postData.title,
          objectID:postData.objectID,
        };
      });
    
      setData(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
});


  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

    return (
        <div>
            <h1>{}</h1>
        </div>
    )
}

export default PostDetail

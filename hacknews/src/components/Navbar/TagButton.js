// import SearchOutlined from '@material-ui/icons/SearchOutlined';
import classes from './TagButton.module.css';
import { useState, useEffect } from 'react';
const TagButton = (props) => {
  const [select, setSelect]= useState()

  useEffect(()=>{
    props.onsave(select)
  }, [select])
 
  return (
    <div>
     
      <select name="tags" id="tags" className={classes.button} value={select} onChange={(event) => setSelect(event.target.value)}>
        <option value="story" name="story">Story</option>
        <option value="comments" name="comments" >Comments </option>
        <option value="poll" name="poll" >Poll</option>
        
        <option value="ask_hn" name="ask_hn">Ask_hn</option>
        <option value="show_hn" name="show_hn">Show_hn</option>

    </select>
    </div>
  );
};

export default TagButton;

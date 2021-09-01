import SearchOutlined from '@material-ui/icons/SearchOutlined'
import classes from './SearchButton.module.css'
import React from 'react'
import { useState } from 'react'
function SearchButton(props) {
  const[value, setValue]=useState()
  const changeHandler = (event)=>{
       setValue(event.target.value)
  }
  const submitHandler=(event)=>{
    // console.log(value)
    props.onInputData(value)
  }
    return (
        <div>
            <div className={classes.button}>
      <span className={classes.icon}>
        <SearchOutlined onClick={submitHandler}/>
      </span>
      <input className="queryinp" type = "text" placeholder="Enter your query" onChange={changeHandler}/>
    </div>
        </div>
    )
}

export default SearchButton

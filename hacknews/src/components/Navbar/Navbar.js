import React from 'react'
import TagButton from './TagButton'
import classes from './Navbar.module.css'
import SearchButton from './SearchButton'
const Navbar =(props) =>{

    const saveDataHandler = (data)=>{
        // console.log(data);
        props.onGetData(data);
    }
    const getDataHandler = (input)=>{
        // console.log(data);
        props.onInputData(input);
    }
    return (
           <header className={classes.header}>
           <h1>Welcome</h1>
           <TagButton onsave={saveDataHandler}/>
           <SearchButton onInputData={getDataHandler}/>
           </header> 
    )
}

export default Navbar

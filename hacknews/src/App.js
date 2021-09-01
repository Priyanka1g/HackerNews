import React from "react";
import { Fragment } from "react";
import PostDetail from "./components/PostDetail/postDetail";
import { Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {

  return (
    <Fragment>
    <Switch>
    <Route path='/' exact>
     <SearchBar/>
     </Route>
    <Route path='/post/:objectID' exact>
    <PostDetail/>
    </Route>
    </Switch>
    </Fragment>
    
  );
}

export default App;

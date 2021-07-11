import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default App;

/*
-[x] Header -> logo -------- Home sign in sign up
-[x] Sign in
-[x] Sign up
-[x] Banner
-[x] Post
-[] Pagination
-[x] Like
-[x] Tags
*/

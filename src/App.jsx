import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import SignIn from 'components/Signin';
import Signup from 'components/Signup';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={Signup} />
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default App;

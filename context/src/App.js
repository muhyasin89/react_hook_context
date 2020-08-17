import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import BookList from './components/pages/book/BookList';
import BookAddForm from './components/pages/book/BookAddForm';
import BookDelete from './components/book/BookDelete';
import status404 from './components/pages/status404'


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
          <Switch>
            <Route exact path="/" component={BookList} />
            <Route exact path="/add" component={BookAddForm} />
            <Route exact path="/delete" component={BookDelete} />
            <Route component={status404} />
          </Switch>
        </Router>
    </React.Fragment>    
  );
}

export default App;

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import BookList from './components/pages/book/BookList';
import BookAddForm from './components/pages/book/BookAddForm';
import BookDelete from './components/pages/book/BookDelete';
import status404 from './components/pages/status404'
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <React.Fragment>
      <ThemeContextProvider>
          <NavigationBar />
        <Router>
            <Switch>
              <Route exact path="/" component={BookList} />
              <Route exact path="/add" component={BookAddForm} />
              <Route exact path="/delete" component={BookDelete} />
              <Route component={status404} />
            </Switch>
          </Router>
      </ThemeContextProvider>  
    </React.Fragment>    
  );
}

export default App;

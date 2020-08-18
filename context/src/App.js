import React from 'react';

import NavigationBar from './components/NavigationBar';
import BookList from './components/pages/book/BookList';
import BookAddForm from './components/pages/book/BookAddForm';
import BookDelete from './components/pages/book/BookDelete';
import status404 from './components/pages/status404'
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
      <ThemeContextProvider>
          <NavigationBar />
          <BookList />
      </ThemeContextProvider>  
  );
}

export default App;

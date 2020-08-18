import React from 'react';

import NavigationBar from './components/NavigationBar';
import BookList from './components/pages/book/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';


function App() {
  return (
      <ThemeContextProvider>
          <NavigationBar />
          <BookList />
          <ThemeToggle />
      </ThemeContextProvider>  
  );
}

export default App;

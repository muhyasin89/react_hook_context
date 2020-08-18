import React from 'react';

import ThemeToggle from './components/ThemeToggle';
import NavigationBar from './components/NavigationBar';
import BookList from './components/pages/book/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
      <ThemeContextProvider>
        <AuthContextProvider>
            <NavigationBar />
            <BookList />
            <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>  
  );
}

export default App;

import React from 'react';

import ThemeToggle from './components/ThemeToggle';
import NavigationBar from './components/NavigationBar';
import BookList from './components/pages/book/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import { BookContextProvider } from './contexts/BookContext';

function App() {
  return (
      <ThemeContextProvider>
        <AuthContextProvider>
            <NavigationBar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
            
            <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>  
  );
}

export default App;

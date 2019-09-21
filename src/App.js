import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className='App'>
      {/* wrap the children components in the specific context */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

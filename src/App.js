import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navigation from './Navigation';
import LoginForm from './LoginForm';
import BookList from './BookList';
import BookDetails from './BookDetails';
import UserProfile from './UserProfile';
import Ranking from './Ranking';
import { books } from './booksData';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  const [user, setUser] = useState(null);
  const [usersData, setUsersData] = useState({});
  const [currentPage, setCurrentPage] = useState("books");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleLogin = (username) => {
    if (!usersData[username]) {
      setUsersData((prev) => ({
        ...prev,
        [username]: { points: 0, trophies: [], readBooks: [] },
      }));
    }
    setUser(username);
    setCurrentPage("books");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("login");
    setSelectedBook(null);
  };

  const updateUser = (updatedData) => {
    setUsersData((prev) => ({
      ...prev,
      [user]: { ...prev[user], ...updatedData },
    }));
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setCurrentPage("bookDetails");
  };

  const renderPage = () => {
    if (!user) return <LoginForm onLogin={handleLogin} />;

    switch (currentPage) {
      case "books":
        return <BookList books={books} user={user} userData={usersData[user]} updateUser={updateUser} onBookSelect={handleBookSelect} />;
      case "bookDetails":
        return <BookDetails books={books} book={selectedBook} user={user} userData={usersData[user]} updateUser={updateUser} setCurrentPage={setCurrentPage} />;
      case "profile":
        return <UserProfile user={user} data={usersData[user]} />;
      case "ranking":
        return <Ranking usersData={usersData} />;
      default:
        return <BookList books={books} user={user} userData={usersData[user]} updateUser={updateUser} onBookSelect={handleBookSelect} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation 
        user={user} 
        onLogout={handleLogout} 
        setCurrentPage={setCurrentPage}
      />
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        {renderPage()}
      </Container>
    </ThemeProvider>
  );
};

export default App;

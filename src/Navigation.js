import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Navigation = ({ user, onLogout, setCurrentPage }) => {
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setCurrentPage('books')}>
        <MenuBookIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Esse eu já li!
      </Typography>
      {user && (
        <>
          <Button color="inherit" onClick={() => setCurrentPage('books')}>Lista de Livros</Button>
          <Button color="inherit" onClick={() => setCurrentPage('ranking')}>Ranking</Button>
          <Button color="inherit" onClick={() => setCurrentPage('profile')}>Perfil</Button>
          <Button color="inherit" onClick={onLogout}>Sair</Button>
        </>
      )}
    </Toolbar>
  </AppBar>
  );
};

export default Navigation;

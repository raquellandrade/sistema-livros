import React from "react";
import { books } from './booksData';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Button, Divider, Box } from '@mui/material';


const calculatePoints = (pages) => Math.floor(pages / 100) + 1;

const BookDetails = ({ book, user, userData, updateUser, setCurrentPage }) => {
  const handleMarkAsRead = () => {
    if (!userData.readBooks.includes(book.id)) {
      const points = calculatePoints(book.pages);
      const updatedReadBooks = [...userData.readBooks, book.id];
      const genreCount = updatedReadBooks.filter(
        (id) => id === book.id || books.find((b) => b.id === id).genre === book.genre
      ).length;

      const updatedTrophies = [...userData.trophies];
      if (genreCount === 5 && !updatedTrophies.includes(`Leitor de ${book.genre}`)) {
        updatedTrophies.push(`Leitor de ${book.genre}`);
      }

      updateUser({
        points: userData.points + points,
        readBooks: updatedReadBooks,
        trophies: updatedTrophies,
      });
    }
  };

  return (
    <Grid container direction="column" spacing={2}>
        <Grid item>
            <Typography variant="h3" gutterBottom>
                {book.title}
            </Typography>
        </Grid>
        <Grid item container xs={12}>
            <Grid item sx={{width: '200px'}}>
                <img src={book.image} alt={book.title} style={{ width: '200px' }} />
            </Grid>
            <Grid item xs size="grow">
            <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                <strong>Gênero:</strong> {book.genre}
            </Typography>
            <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                <strong>Número de Páginas:</strong> {book.pages}
            </Typography>
            <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                <strong>Resumo:</strong> {book.summary}
            </Typography>
            <Divider sx={{ mt: 2 }} />
            {!userData.readBooks.includes(book.id) && (
                <Button sx={{ mt: 2 }} variant="contained" color="primary" onClick={handleMarkAsRead}>Esse eu já li!</Button>
            )}
            </Grid>
        </Grid>
        <Grid item container>
        <Box mt={2}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => setCurrentPage('books')}
          >
            Voltar para a Lista de Livros
          </Button>
        </Box>
        </Grid>
        
    </Grid>
    
  );
};

export default BookDetails;

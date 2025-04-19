import React from "react";
import { books } from './booksData';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

const calculatePoints = (pages) => Math.floor(pages / 100) + 1;

const BookList = ({ book, user, userData, updateUser, onBookSelect }) => {
  const handleMarkAsRead = (book) => {
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
    <Grid container spacing={4} sx={{marginBottom: '150px'}}>
      {books.map((book) => (
        <Grid item key={book.id} sx={{width: '200px'}}>
          <Card>
            <CardActionArea onClick={() => onBookSelect(book)}>
              <CardMedia
                component="img"
                height="240"
                image={book.image}
                alt={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.genre} - {book.pages} páginas
                </Typography>
              </CardContent>
              </CardActionArea>
                <CardActions sx={{display: "flex", flexFlow: "column"}}>
                  {!userData.readBooks.includes(book.id) && (
                    <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => handleMarkAsRead(book)}>Esse eu já li!</Button>
                )}
                    <Button size="small" onClick={() => onBookSelect(book)}>Ver Detalhes</Button>
                </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;

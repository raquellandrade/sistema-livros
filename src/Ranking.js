import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmojiEvents from '@mui/icons-material/EmojiEvents';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { yellow } from "@mui/material/colors";

const Ranking = ({ usersData }) => {
  const ranking = Object.entries(usersData)
    .map(([username, data]) => ({ username, points: data.points }))
    .sort((a, b) => b.points - a.points)
    .slice(0, 10);

  return (
    <Grid container direction="column" spacing={2}>
         <Grid item>
            <Typography variant="h3" gutterBottom>
                Ranking
            </Typography>
        </Grid>
        <Grid item container xs={12}>
            <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
                {ranking.map((user, index) => (
                    <ListItem key={index}>
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: yellow[600] }}>
                        <EmojiEvents />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary={
                            <Typography variant="h6">
                                {user.username}
                            </Typography>
                        } 
                        secondary={
                            <Typography variant="body2" gutterBottom>
                                {user.points} pontos
                            </Typography>
                        } />
                    </ListItem>
                ))}
            </List>
        </Grid>
    </Grid>
   
  );
};

export default Ranking;

import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmojiEvents from '@mui/icons-material/EmojiEvents';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { yellow } from "@mui/material/colors";

const UserProfile = ({ user, data }) => {
  return (
    <Grid container direction="column" spacing={2}>
        <Grid item>
            <Typography variant="h3" gutterBottom>
                Perfil de {user}
            </Typography>
        </Grid>
        <Grid item container direction="column" xs={12}>
            <Typography variant="h6">
                Pontos acumulados: 
            </Typography>
            <Typography variant="h5" gutterBottom sx={{marginLeft:'20px'}}>
            {data.points}
            </Typography>
        </Grid>
        <Grid item container direction="column" xs={12}>
            <Typography variant="h6" gutterBottom>
                 Troféus:
            </Typography>
            <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
                {data.trophies.length > 0 ? (
                    data.trophies.map((trophy, index) => 
                        <ListItem key={index}>
                            <Typography variant="body1" gutterBottom>
                            <EmojiEvents sx={{color: 'purple'}} /> {trophy}
                            </Typography>
                        </ListItem>
                    )
                    ) : (
                        <ListItem>
                            <Typography variant="body1" gutterBottom>
                                Nenhum troféu conquistado ainda.
                            </Typography>
                        </ListItem>
                )}
            </List>
        </Grid>
    </Grid>
    
  );
};

export default UserProfile;

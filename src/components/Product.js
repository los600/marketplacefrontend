//import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container, Paper, Button } from '@material-ui/core';
import React, { useEffect, useState } from "react";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
 
  const paperStyle={margin:'50px'};
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const[product, setProduct]=useState([]);


 

  return (
      <Container>
        <Paper elevation={0}  style={paperStyle}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                            <Avatar sx={{ bgcolor: red[700] }} aria-label="recipe">
                                
                            </Avatar>
                            }
                    title="Criptos"
                    subheader="September 14, 2016"
                />
                <CardContent>
                {product.map(product=>(
                    <Typography variant="body2" color="text.secondary" key={product.id}>
                    name="{product.name}",
                    price="{product.price}",
                    </Typography>))};
                </CardContent>

                <Button variant="outlined" color="success">Edit</Button>
                <Button variant="outlined" color="error">Delete</Button>
                
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" sx={{ bgcolor: red[100] }}>
                        <FavoriteIcon />
                    </IconButton>
                   
                </CardActions>
            </Card>
        </Paper>

    </Container>
  );
}
{/* <Paper elevation={3} style={paperStyle}>
            
            {product.map(product=>(
                <Paper elevation={6} style={{margin:"10px", textAlign:"left", padding:"px"}} key={product.id}>
                    
                    Name:{product.name}<br/>
                    Price:{product.price}
                </Paper>
 */}
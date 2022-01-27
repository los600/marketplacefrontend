import React from 'react';
/* import { useStyles } from 'react'; */
import { makeStyles } from '@material-ui/core/styles';
import  TextField  from '@material-ui/core/TextField';
import { Container, Paper } from '@material-ui/core';


const useStyles = makeStyles ((theme) =>({
    root:{
        '& > *' : {
            margin: theme.spacing(1),
            
        },
    },
}));

export default function Create() {
    const paperStyle={padding: '50px 20px', width:600, margin: "20px auto"}
    const classes = useStyles();

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
        <form className={classes.root} noValidate autoComplete ="off">  
        
        <TextField id= "outlined-basic" label="Product Name" variant= "outlined" />
        <TextField id= "outlined-basic" label="Product Price" variant= "outlined" /> 
        </form>    
        </Paper>
        </Container>   
    );


}
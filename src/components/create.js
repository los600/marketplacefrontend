import React from 'react';
import { makeStyles } from '@material/core/styles';
import { TextField } from '@material-ui/core/TextField';

const useStyles = makeStyles ((theme) =>({
    root:{
        '& > *' : {
            margin: theme.spacing(1),
            
        },
    },
}));

export default function Create() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete ="off">  
        
        <TextField id= "outlined-basic" label="Product Name" variant= "outlined" />
        <TextField id= "outlined-basic" label="Product Price" variant= "outlined" /> 
        </form>       
    );


}
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Create() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const[product, setProduct]=useState([]);
  const classes = useStyles();
  
  
  const handleClick = (e) => {
    e.preventDefault();
    const Product = { name, price };
    console.log(Product);

    fetch("http://localhost:8080/product/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Product),
    }).then(() => {
      console.log("New Product added");
    });
  };

  useEffect(()=>{
    fetch("http://localhost:8080/product/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setProduct(result);
    }
  )
  },[])

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Create Product</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Product Price"
            variant="outlined"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Submit
          </Button>
        </form>
        
        <Paper elevation={3} style={paperStyle}>
            
            {product.map(product=>(
                <Paper elevation={6} style={{margin:"10px", textAlign:"left", padding:"px"}} key={product.id}>
                    
                    Name:{product.name}<br/>
                    Price:{product.price}
                </Paper>
            ))}
        </Paper>
      </Paper>
      
    </Container>
  );
}

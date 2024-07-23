import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, colors } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Second.css"
import { blue } from '@mui/material/colors';

const Second = () => {
    const [output, setOutput] = useState([]);
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response.data);
                setOutput(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Grid container spacing={2}>
            {output.map((val, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            sx={{ 
                                height:'auto',
                                display:'block',
                                textAlign:'center'
                            }}
                            image={val.image}
                            title={val.title}
                        />
                        <CardContent style={{textAlign:'center',borderImage:blue}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ${val.price}
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Second;
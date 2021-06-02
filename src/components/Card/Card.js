import React from 'react'
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Card(props) {

    const {name, flag, capital} = props.info;

    const cardStyle = {
        border: "1px solid black",
        height: "auto",
        width: "150px",
        margin: "20px"
    }

    const history = useHistory();

    const handleDetail = () =>{
        history.push(`/details/${name}`);
    }

    return (
        <Grid container item xs={6} md={2}>
            <div style={cardStyle}>
                <img style={{width: "100%", height:"100px", objectFit: "cover"}} src={flag} alt="flag"></img>
                <h3>{name}</h3>
                <p>{capital}</p>
                <Button onClick={handleDetail} size="small" style={{margin:"8px"}} variant="contained" color="secondary">
                Show Detail
                </Button>
            </div>
        </Grid>
    )
}

export default Card;
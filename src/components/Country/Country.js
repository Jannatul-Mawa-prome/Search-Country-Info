import React, { useState, useEffect } from 'react'
import Card from '../Card/Card';
import { Grid, TextField } from '@material-ui/core';

function Country() {

    const [country, setCountry] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

    const [search, setSearch] = useState('');

    return (
        <div>
            <h2>These are country.</h2>

            <TextField onChange={e => setSearch(e.target.value)} label="Search country..." />
            <br />
            <Grid container spacing={1}>
                {
                    country.filter(con =>{
                        if(con === '')
                        {
                            return con;
                        }else if(con.name.toLowerCase().includes(search.toLowerCase()))
                        {
                            return con;
                        }
                    }).map(info => <Card info={info} />)
                }
            </Grid>

        </div>
    )
}

export default Country;

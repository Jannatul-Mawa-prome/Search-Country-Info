import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CountryDetails() {

    const {name} = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() =>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => setDetail(data[0]))
    }, [])

    return (
        <div style={{border:"1px solid black", textAlign:"center"}}>
            <img style={{width: "200px"}} src={detail.flag} alt="flag"></img>
            <h3>Country name: {detail.name}</h3>
            <h5>Capital: {detail.capital}</h5>
            <h5>Population: {detail.population}</h5>
        </div>
    )
}

export default CountryDetails;
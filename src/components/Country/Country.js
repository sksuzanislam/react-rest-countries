import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, region, population, flags } = props.country;

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>Country Name:{name.common}</h1>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Region:{region}</small></p>
        </div>
    );
};

export default Country;
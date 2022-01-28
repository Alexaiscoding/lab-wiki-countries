import React from 'react'; 
import { NavLink } from "react-router-dom";



const CountriesList = () => {

return (

    <div> 
    <ul>  
    {CountriesList.map((country) => { 
        return( 

<li key={country.name.common}>

	<Link to={country.alpha3Code}>{country.name.common}</Link>
		
</li>
     ) }}
</ul>

    
    </div>
)

}

export default CountriesList;
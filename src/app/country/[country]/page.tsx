import {countriesList} from "../page"


export default function CountryName ({params}:{ params:{country:string}}){
    const selectedCountry = countriesList.find((country) => country.name.toLowerCase() === params.country.toLowerCase());
    return(
        <>
            <div>
                {selectedCountry  ? (
                    <div>
                        <p>Name:{selectedCountry.name}</p>
                        <p>Population:{selectedCountry.population}</p>
                        <p>Capital:{selectedCountry.capital}</p>
                    </div>

                ) :(
                    <p>Country not found</p>    
                 
                )}
            </div>
        </>
    );
}


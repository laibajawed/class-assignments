type Country = {
    name: string;
    population: number;
    capital: string;
  }

  const countriesList: Country[] = [
    { name: "Pakistan", population: 235800000, capital: "Islamabad" },
    { name: "India", population: 1417000000, capital: "Delhi" },
    { name: "Afghanistan", population: 41130000, capital: "Kabul" }
  ];


  export default function CountryName(params) {

    //This is done to localise the imported variable and to prevent any errors occuring during the routing in the URL
    const selectedCountry = countriesList.find((country) => country.name.toLowerCase() === params.country.toLowerCase()); 

    return (
      <div>
        { // curly bracket (braces) used to enable javascript/typescript so that we can use our variable
        selectedCountry && ( //I remove the ? because it would complicate the stuff. Anyways we declared our constant here so that we can use it below. Parenthesis () to re-enable HTML
          <div>

            <p>Name: {selectedCountry.name}</p> 
            <p>Capital: {selectedCountry.capital}</p>
            <p>Population: {selectedCountry.population}</p>
          </div>
          ) //closed the HTML here
        } 
      </div>
    );
  }
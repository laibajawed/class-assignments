export interface Country{
    name: string;
    population: number;
    capital: string;
}

export const countriesList: Country[] =[
    {name: 'Pakistan', population: 223700000, capital: 'Islamabad'},
    {name: 'China', population: 1439323776, capital: 'Beijing'},
    {name: 'India', population: 1380004385, capital: 'New Delhi'}  
 
]



export default  function Country(){
    return(
        <div>
            <h1>Hello</h1>
            <button><a href="./country/pakistan">Pakistan</a></button> <br />
            <button><a href="./country/china">China</a></button>  <br />
            <button><a href="./country/india">India</a></button>  <br />
        </div>
    )
}
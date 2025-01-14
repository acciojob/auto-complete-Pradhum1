import { useState } from "react";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const Autocomplete =()=>{
    const[searchValue, setSearchValue]= useState('');

    return<div>
        <input placeholder="Search Fruit" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <ul>

            {
               fruits
               .filter(fruit => fruit.indexOf(searchValue) != -1)
               .map(fruit => {
                return <li key={fruit}>{fruit}</li>
               })
            }
        </ul>
    </div>
}

export default Autocomplete;

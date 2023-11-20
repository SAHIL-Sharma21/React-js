//creating custom hooks

//simple example how hooks is
// function hello() {
//     return []; //return 2 values
// }
//This above defination is example of custom hook.


//creating useCurrencyInfo hook

import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) // we converting string to json format data.
            .then((res) => setData(res[currency]))
        // console.log(data);
    }, [currency]);
    console.log(data);
    return data
}

export default useCurrencyInfo; // we are exporting full function to get its value as we are using useState hook we are exporting full function and extracting the return values.

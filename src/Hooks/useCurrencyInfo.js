import { useEffect,useState } from "react";
function useCurrencyInfo (currency){
    
    const [data, setData] = useState({})
    
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    },[currency]).than((res)=>res.json())
    .than((res)=> setData(res[currency]) )
    console.log(data);
    return data;
}
export default useCurrencyInfo;
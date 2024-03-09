import { useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  const [convertedAmount , setConvertedAmount ] = useState(0)
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo)

  return (
    <>
     
      <h1 className='text-3xl font-bold underline justify-center'>Vishal Sharma </h1>
    </>
  )
}

export default App

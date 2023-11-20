import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from './hooks/useCurrencyInfo' //importing our custom hook

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  //setting up our custom hook
  const currencyInfo = useCurrencyInfo(from);

  //getting all keys of an object as we get data from useCurrencyInfo and saving them in option variable :-- (as we get the json data we only need keys no the values so thats why we getting keys.)
  const options = Object.keys(currencyInfo);

  //swapping functionality
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  //logic for convert
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
       <h1 className="absolute text-4xl ml-[38rem] mt-[0.75rem] text-[#DD1155] font-semibold"> Currency Convertor </h1>
       <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1cnJlbmN5fGVufDB8fDB8fHww')`
        }}
    >
        <div className="w-1/2">
            <div className="w-full">
            <div className="w-full max-w-md  mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) =>  setAmount(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-[#DD1155] text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#DD1155] text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        </div>
       <div className="w-1/2">
           <div className="">
              <div className="w-full max-w-md  mx-auto">
                 <img className="h-full w-full rounded-lg backdrop-blur-md" src="https://plus.unsplash.com/premium_photo-1670249419881-b115ba63924a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="right side image" />
              </div>
           </div>
           
       </div>
    </div> 
    </>
    
);
}

export default App

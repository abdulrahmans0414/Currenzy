
function App() {


  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)


  return (
    <>
      <h1 className="text-3xl font-bold underline">Hi, Abdul Rahman</h1>
    </>
  )
}

export default App

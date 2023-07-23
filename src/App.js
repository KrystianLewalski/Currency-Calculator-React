import { Form } from "./Form";
import { useState } from "react";
import { useApi } from "./currencies";

function App() {
  const [result, setResult] = useState();
  const currencies = useApi();

  const calculateResult = (currency, amount) => {
    const rate = currencies.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  return (
    <Form
      result={result}
      calculateResult={calculateResult}
    />
  );
}

export default App;

import { Form } from "./Form";
import { useState } from "react";
import { currencies } from "./currencies";
import { Body } from "./styled"


function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <Body>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </Body>
  );
}

export default App;

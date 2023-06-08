import { Form } from "./Form";
import { useState } from "react";
import { currencies } from "./currencies";

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
    <body className="body">
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </body>
  );
}

export default App;

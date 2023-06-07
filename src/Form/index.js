import { Result } from "./Result";
import { useState } from "react";
import { currencies } from "../currencies"
import "./style.css";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <div className="container">
            <form className="form" onSubmit={onSubmit}>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">
                        Kalkulator Walut
                    </legend>
                    <p className="form__container">
                        <label>
                            <span className="form__labelText">
                                Kwota*:
                            </span>
                            <input
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                className="form__field"
                                name="kwota"
                                type="number"
                                placeholder="Podaj kwotę w PLN"
                                autoFocus
                                step="0.01"
                                min="0.01"
                                required
                            />
                        </label>
                    </p>
                    <p className="form__container">
                        <label>
                            <span className="form__labelText">
                                Wybierz walutę**:
                            </span>
                            <select className="form__field"
                                required
                                onChange={({ target }) => setCurrency(target.value)}
                            >
                                {currencies.map((currency => (
                                    <option
                                        key={currency.short}
                                        value={currency.short}
                                    >
                                        {currency.name}
                                    </option>
                                )))}
                            </select>
                        </label>
                    </p>
                    <p className="form__container">Pola wymagane oznaczone *</p>
                    <p className="form__container">Kurs na dzień 21.05.2023**</p>
                    <p className="form__container">
                        <button className="form__button">Oblicz</button>
                    </p>
                    <Result result={result} />
                </fieldset>
            </form>
        </div>
    )
};

export default Form;
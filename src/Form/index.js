import { Result } from "./Result";
import { useState } from "react";
import { currencies } from "../currencies"
import { DateField } from "./Date";
import {
    CalculatorForm, FieldSet, Legend, FormContainer,
    LabelText, FormField, SelectField, FormButton
} from "./styled"

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <CalculatorForm onSubmit={onSubmit}>
            <FieldSet>
                <DateField />
                <Legend>
                    Kalkulator Walut
                </Legend>
                <FormContainer>
                    <label>
                        <LabelText>
                            Kwota*:
                        </LabelText>
                        <FormField
                            value={amount}
                            onChange={({ target }) =>
                                setAmount(target.value)}
                            name="kwota"
                            type="number"
                            placeholder="Podaj kwotę w PLN"
                            autoFocus
                            step="0.01"
                            min="0.01"
                            required
                        />
                    </label>
                </FormContainer>
                <FormContainer>
                    <label>
                        <LabelText>
                            Wybierz walutę**:
                        </LabelText>
                        <SelectField
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
                        </SelectField>
                    </label>
                </FormContainer>
                <FormContainer>
                    Pola wymagane oznaczone *
                </FormContainer>
                <FormContainer>
                    Kurs na dzień 21.05.2023**
                </FormContainer>
                <FormContainer>
                    <FormButton>
                        Oblicz
                    </FormButton>
                </FormContainer>
                <Result result={result} />
            </FieldSet>
        </CalculatorForm>
    )
};

export default Form;
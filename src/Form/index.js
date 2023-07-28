import { Result } from "./Result";
import { useState } from "react";
import { useApi } from "../currencies"
import { DateField } from "./Date";
import {
    CalculatorForm, FieldSet, Legend, FormContainer,
    LabelText, FormField, SelectField, FormButton, Loading,
    Error, Footer
} from "./styled"

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState(0);
    const currencies = useApi();

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    const currencyDate = currencies.date;

    return (
        <CalculatorForm onSubmit={onSubmit}>
            <FieldSet>
                <DateField />
                <Legend>
                    Kalkulator Walut
                </Legend>
                {currencies.status === "loading" ? (
                    <Loading>
                        Proszę chwilę poczekać.<br />
                        Dane kursów pobierają się
                        z Europejskiego Banku Centralnego.<br />
                    </Loading>
                ) : currencies.status === "error" ? (
                    <Error>
                        Wystąpił błąd! Sprawdź połączenie z internetem. <br />
                        Jeśli błąd dalej wystepuje spróbuj ponownie później.
                    </Error>
                ) : (
                    <>
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
                                    value={currency}
                                    required
                                    onChange={({ target }) =>
                                        setCurrency(target.value)}
                                >

                                    {Object.keys(currencies.rates).map(currency => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    ))}
                                </SelectField>
                            </label>
                        </FormContainer>
                        <FormContainer>
                            Pola wymagane oznaczone *
                        </FormContainer>
                        <FormContainer>
                            <Footer>
                                Kurs na dzień {currencyDate}**.<br />
                                Dane pobierane są z Europejskiego Banku Centralnego.
                            </Footer>
                        </FormContainer>
                        <FormContainer>
                            <FormButton>
                                Oblicz
                            </FormButton>
                        </FormContainer>
                        <Result result={result} />
                    </>
                )}
            </FieldSet>
        </CalculatorForm>
    )
};

export default Form;
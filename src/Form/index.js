import "./style.css";

const Form = () => {
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator Walut</legend>
            <p>
                <label>
                    <span className="form__labeltext">
                        Kwota*:
                    </span>
                    <input className="form__field js-Field" name="kwota" type="number" placeholder="Podaj kwotę w PLN"
                        autofocus step="0.01" min="0.01" required />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Wybierz walutę**:
                    </span>
                    <select className="form__field js-Currency" required>
                        <option value="">---</option>
                        <option value="4.66">EUR</option>
                        <option value="4.37">USD</option>
                        <option value="4.68">CHF</option>
                        <option value="5.27">GBP</option>
                    </select>
                </label>
            </p>
            <p>Pola wymagane oznaczone *</p>
            <p>Kurs na dzień 21.05.2023**</p>
            <p>
                <button className="form__button">Oblicz</button>
            </p>
            <p>Wynik:<strong className="js-Converter">N/A</strong></p>
        </fieldset>
    </form>
};

export default Form;
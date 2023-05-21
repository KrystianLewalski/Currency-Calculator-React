

function App() {
  return (
    <body class="body">
    <div class="container">
        <form class="form">
            <fieldset class="form__fieldset">
                <legend class="form__legend">Kalkulator Walut</legend>
                <p>
                    <label>
                        <span class="form__labeltext">
                            Kwota*:
                        </span>
                        <input class="form__field js-Field" name="kwota" type="number" placeholder="Podaj kwotę w PLN"
                            autofocus step="0.01" min="0.01" required/>
                    </label>
                </p>
                <p>
                    <label>
                        <span class="form__labelText">
                            Wybierz walutę**:
                        </span>
                        <select class="form__field js-Currency" required>
                            <option value="">---</option>
                            <option value="4.66">EUR</option>
                            <option value="4.37">USD</option>
                            <option value="4.68">CHF</option>
                            <option value="5.27">GBP</option>
                        </select>
                    </label>
                </p>
                <p>Pola wymagane oznaczone *</p>
                <p>Kurs na dzień 24.12.2022**</p>
                <p>
                    <button class="form__button">Oblicz</button>
                </p>
                <p>Wynik:<strong class="js-Converter">N/A</strong></p>
            </fieldset>
        </form>
    </div>
</body>
  );
}

export default App;

import axios from "axios";
import { useEffect, useState } from "react";

const apiURL = "https://api.exchangerate.host/latest?base=PLN";

export const useApi = () => {
    const [currencies, setCurrencies] = useState({
        status: "wait",
    });

    useEffect(() => {
        const pullCurrencies = async () => {
            try {
                const response = await axios.get(apiURL);
                const date = await response.data.date;
                const rates = await response.data.rates;
                setCurrencies({
                    status: "succes",
                    date,
                    rates,
                });
            } catch (error) {
                setCurrencies({
                    status: "error",
                });
            }
        };
        setTimeout(pullCurrencies, 3000);
    }, []);

    return currencies;
};
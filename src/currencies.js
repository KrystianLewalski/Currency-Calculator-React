import axios from "axios";
import { useEffect, useState } from "react";

const apiURL = "https://api.exchangerate.host/latest?base=PLN";

export const useApi = () => {
    const [currencies, setCurrencies] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get(apiURL);
                const { rates, date } = response.data;
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
        setTimeout(fetchCurrencies, 2000);
    }, []);

    return currencies;
};
import { useState, useEffect } from "react";
import { DateContainer } from "./styled"

export const DateField = () => {
    const [date, setDate] = useState(new Date());

    const day = date.toLocaleDateString(undefined,
        {
            month: "long",
            weekday: "long",
            day: "numeric",
            year: "numeric"
        });

    const time = date.toLocaleTimeString(undefined);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <DateContainer>
            Data i godzina: {day}, {time};
        </DateContainer>
    );
};

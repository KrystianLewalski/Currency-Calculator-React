import { useState, useEffect } from "react";
import "./style.css"

export const DateField = () => {
    const [date, setDate] = useState(new Date());

    const day = date.toLocaleDateString(
        undefined, {
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric"
    },);

    const time = date.toLocaleDateString(undefined);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
    <p className="date">
        Data i godzina: {day}, {time}
    </p>
    );
};


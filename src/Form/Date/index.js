import { DateContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) =>
    date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

export const DateField = () => {
    const Clock = useCurrentDate();

    return (
        <DateContainer>
            Data i godzina:
            {" "}
            {formatDate(Clock)}
        </DateContainer>
    );
};

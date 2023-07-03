import { DateContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const DateField = () => {
    const date = useCurrentDate();

    return (
        <DateContainer>
            Data i godzina:
            {" "}
            {date}
        </DateContainer>
    );
};

import { Container } from "./styled"

export const Result = ({ result }) => (
    <Container>
        {result !== undefined && (
            <>
                <strong>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                </strong>
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </Container>
);
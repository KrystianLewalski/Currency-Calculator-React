import styled from "styled-components"

export const CalculatorForm = styled.form`
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const FieldSet = styled.fieldset`
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    padding: 10px;
    margin-top: 150px;
    background-color: ${({ theme }) => theme.colors.aliceBlue};
    min-width: 500px;
`;

export const Legend = styled.legend`
    border: 5px solid ${({ theme }) => theme.colors.teal};
    border-radius: 20px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
`;

export const FormContainer = styled.div`
    display:flex;
    justify-content: center;
`;

export const LabelText = styled.span`
    min-width: 120px;
    max-width: 150px;
    margin-right: 5px;
    width: 100%;
`;

export const FormField = styled.input`
    display: grid;
    border-radius: 10px;
    padding: 5px;
    border: 3px solid ${({ theme }) => theme.colors.black};
    max-width: 200px;
    width: 100%;
`;

export const SelectField = styled.select`
    display: grid;
    border-radius: 10px;
    padding: 5px;
    border: 3px solid ${({ theme }) => theme.colors.black};
    max-width: 200px;
    width: 100%;
`;

export const FormButton = styled.button`
    width: 100%;
    max-width: 70px;
    border: none;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transition: 0.5s;
    padding: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hoverTeal};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.activeTeal};
    }
`;

export const Loading = styled.p`
    font-size: 16px;
    text-align: center;
`;

export const Error = styled.p`
    font-size: 16px;
    text-align: center;
`;

export const Footer = styled.p`
    font-size: 16px;
    text-align: center;
`;
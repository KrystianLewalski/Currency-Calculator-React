import styled from "styled-components"

export const CalculatorForm = styled.form`
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const FieldSet = styled.fieldset`
    border: 3px solid black;
    border-radius: 10px;
    padding: 10px;
    margin-top: 150px;
    background-color: aliceblue;
    min-width: 500px;
`;

export const Legend = styled.legend`
    border: 5px solid teal;
    border-radius: 20px;
    padding: 5px;
    background-color: teal;
    color: white;
`;

export const FormContainer = styled.p`
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
    border: 3px solid black;
    max-width: 200px;
    width: 100%;
`;

export const SelectField = styled.select`
    display: grid;
    border-radius: 10px;
    padding: 5px;
    border: 3px solid black;
    max-width: 200px;
    width: 100%;
`;

export const FormButton = styled.button`
    width: 100%;
    max-width: 70px;
    border: none;
    background-color: hsl(180, 100%, 25%);
    color: white;
    border-radius: 10px;
    transition: 0.5s;
    padding: 5px;

    &:hover {
        background-color: hsl(180, 100%, 30%);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;
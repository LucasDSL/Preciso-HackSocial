import styled from "styled-components";

export const StyledMain = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200&display=swap');
    
    font-family: 'Poppins';
    background-color: #10142D;
    color: #96969C;
    padding: 4% 10% 5% 10%;

    h1 {
        font-weight: 600;
    }

    .alignInputs {
        display: flex;
        flex-direction: row;
    }

    .alignButtons {
        display: flex;
        flex-content: row;
    }

    input {
        background-color: transparent; 
        border-radius: 60px;
        border: 1px solid white;
        min-height: 40px;
    }

    .label-input {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 1%;
    }

    .label-inputEnd {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 1%;
    }

    button {
        font-family: 'Poppins';
        color: white;
        font-weight: 500;
        border: none;
        cursor: pointer;
    }

    #cancel {
        background-color: #96969C;
        
    }

    #send {
        background-color: #006466;        
    }
`;
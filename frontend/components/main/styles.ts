import styled from "styled-components";

export const StyledMain = styled.main`
height: 83vh;
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
        width: 100%;
        justify-content: space-between;
    }
    input {
        color: white;
        padding-left: 17px;
        background-color: transparent; 
        border-radius: 60px;
        border: 1px solid white;
        min-height: 40px;
    }
    .label-input {
        color: white;
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 1%;
    }
    button {
        font-family: 'Poppins';
        color: white;
        font-weight: 500;
        border: none;
        cursor: pointer;
        width: 150px;
        max-height: 40px;
        margin-top: 7%;
    }
    #cancel {
        background-color: #96969C;
        margin-left: 10%;
    }
    #send {
        background-color: #006466;        
    }
    span {
        margin-left: 12px;
        padding: 0 4px;
        background-color: #10142D;
        position: relative;
        align-self: flex-start;
        top: 8px;
        transition: background-color 0.3s;
        z-index: 1;
    }
`;
import styled from "styled-components";

export const StyledMain = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,600;0,700;1,100;1,200&display=swap');
    
    font-family: 'Poppins';
    display: flex;
    flex-direction: column;
    padding: 5.5em;
    background-color: #10142D;
    color: #96969C;

    .alignInputs {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
    }

    input {
        background-color: transparent;
        border-radius: 30px;
        border: 1px solid white;
        margin: 0.5%;
        min-height: 50px;
        min-weight: 100%;
    }

    #cancel {
        font-family: 'Poppins';
        font-size: 10px;
        font-weight: 600;
        padding: 5px;
        background-color: #96969C;
        color: white;
        border: none;
    }

`;
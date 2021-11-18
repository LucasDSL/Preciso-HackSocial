import styled from "styled-components";

export const Header = styled.header `
display: flex;
flex-direction: row;
width: 100%;
background-color: #272640;
height: 90px;
align-items: center;

justify-content: space-around;
h1 {
    font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 0.2rem;
/* identical to box height */


/* 272640 */

color: #C5C5C5;
}

`

export const PrecisoWrapper = styled.div `
align-self: center;
align-items: center;
justify-content: center;
height: 100%;
width:20%;
margin-top: 3px;
border-bottom: 3px solid white;
p {
    margin-top:15px;
    align-items: center;
    align-self: center;
     font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 2.4rem;
line-height: 3.3rem;
/* identical to box height */
color: #FFFFFF;
}

`

export const Botoes = styled.div `
display: flex;
flex-direction: row;
align-items: center;
width: 30%;
align-self: center;
justify-content: center;
justify-self: center;
height: 100%;
background-color:#aaa;

`

export const VerPedidos = styled.div `
align-items: center;
display: flex;
flex-direction: row;
width: 50%;

`

export const Possibilidades = styled.div `
align-items: center;
display: flex;
flex-direction: row;
width: 50%;

`

export const Perfil = styled.div `
display: flex;
flex-direction: row;
width: 30%;

`
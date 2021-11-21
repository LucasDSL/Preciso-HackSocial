import styled from "styled-components";

export const Header = styled.header `
display: flex;
flex-direction: row;
width: 100%;
background-color: #272640;
height: 90px;
align-items: center;
padding-left: 3%;
justify-content: space-around;
@media (max-width:1010px){
    z-index: 1000;
    justify-content:space-between;
    padding-right: 5%;
}
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
z-index: 100;
align-self: center;
align-items: center;
justify-content: center;
height: 100%;
width:20%;
margin-top: 3px;
border-bottom: 1px solid white;
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
@media (max-width: 426px) {
    width:30%;
   p{margin-top:28px;} 
}
@media (max-width:321px){
    width:40%;
   p{margin-top:29px;} 
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
@media (max-width:1010px){
    display:none;
}

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

export const LivroCinzaWrapper = styled.div `
width: 24px;
height: 24px;
margin-right:13px;

`

export const SettingsWrapper = styled.div `
width: 24px;
height: 24px;
margin-right:13px;
`

export const Perfil = styled.div `
display: flex;
flex-direction: row;
width: 15%;
height: 100%;
align-items:center;
@media (max-width:1010px){
    display:none;
}

`

export const FotoDePerfilWrapper = styled.div `
display: flex;
width: 22.6%;
height: 56.52%;
align-items: center;
justify-content: center;
background:#FFFFFF;
border-radius: 4.688rem;
@media (max-width: 1329px) {
    width: 28.6%;
height: 56.52%;
}
@media (max-width: 1113px) {
    width: 34.6%;
height: 56.52%;
}
 p {
    font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 1.2rem;
line-height: 1.65rem;
 }
`
export const NomeEProfissao = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
width:75%;
height: 100%;
padding-left: 8px;
h1 {
    font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
}
h2 {
    font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;

}
`


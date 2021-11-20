import styled from 'styled-components'

interface Props {
  isOpen: boolean
}


export const MenuToggle = styled.div`
  display: none;
  @media (max-width: 1010px) {
      z-index: 100;
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 30px;
    height: 22.5px;
    .one,
    .two,
    .three {
      background-color: #ffffff;
      height: 3px;
      width: 100%;
      margin-top: 3px;
      display: ${(props: Props) => (props.isOpen ? 'none' : 'flex')};
    }
    .four {
      display: ${(props: Props) => (props.isOpen ? 'flex' : 'none')};
      height: 3px;
      width: 100%;
      transform: rotate(45deg) translate(7px, 7px);
      background-color: #ffffff;
    }
    .five {
      display: ${(props: Props) => (props.isOpen ? 'flex' : 'none')};
      height: 3px;
      width: 100%;
      background-color: #ffffff;
      transform: rotate(-45deg) translate(-5px, 4px);
    }
  }
`

export const MenuAberto = styled.div`
  display: none;
  @media (max-width: 1010px) {
    z-index: 10;
    display: ${(props: Props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #272640;
  }
`
export const MenuResponsivoConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 18%;
  background: #272640;
  margin-top: 9%;
  h1 {
    margin-top:3%;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.8rem;
line-height: 3rem;
/* identical to box height */


color: #C5C5C5;
  }
`
export const ImgWrpper = styled.div `
width: 30px;
height: 30px;
`
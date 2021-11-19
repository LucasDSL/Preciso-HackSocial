import styled from "styled-components";
import "./styles";
interface Props{
  background_color_btn: boolean
}
export const Possibilidades = styled.div`
  height: 100%;
  font-family: "Poppins";
  background-color: #10142d;
  color: #96969c;
  padding: 4% 10% 5% 10%;
  .possibilities-title {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 32px;
      font-weight: 500;
    }
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #ffffff;
      font-family: "Poppins";
      color: #10142d;
      font-size: 16px;
      font-weight: 500;
      padding: 5px 50px;
      border-radius: 5px;
    }
    button > div {
      width: 24px;
    }
  }
  .cards-section {
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .card-titles {
    background-color: #272640;
    color: #c5c5c5;
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    border-radius: 7px;
    padding: 15px 0px;
  }
  .card {
    background-color: #96969c;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 7px;
    padding: 15px 0px;
  }
  button {
    background-color: ${(props: Props) => props.background_color_btn ? '#006466' : 'black'};
    font-family: "Poppins";
    color: white;
    font-weight: 500;
    border: none;
    cursor: pointer;
    max-height: 40px;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 16px;
  }
`;

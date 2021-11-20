import styled from "styled-components";
export const Possibilidades = styled.div`
  font-family: "Poppins";
  background-color: #10142d;
  color: #96969c;
  padding: 4% 10% 5% 10%;
  .possibilities-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h2 {
      font-size: 20px;
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
      display: none;
    }
    .card {
      background-color: #96969c;
      color: #ffffff;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 50px;
      gap: 20px;
      padding: 15px 0px;
    }
    .reserve-btn {
      background-color: ${"#006466"};
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
  @media (min-width: 768px) {
    font-family: "Poppins";
    background-color: #10142d;
    color: #96969c;
    padding: 4% 10% 5% 10%;
    .possibilities-title {
      flex-direction: row;
      justify-content: space-between;
      h2 {
        font-size: 32px;
      }
    }
    .cards-section {
      padding: 60px 0px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .card-titles {
      display: flex;
      justify-content: space-around;
      background-color: #272640;
      padding: 15px 40px 15px 0px;
      border-radius: 7px;
    }
    .card {
      flex-direction: row;
      border-radius: 7px;
    }
  }
`;

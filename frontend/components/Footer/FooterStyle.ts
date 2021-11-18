import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #262740;
  display: flex;
  justify-content: center;
  a {
    color: #c5c5c5;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 15px 0px;
    gap: 5px;
  }
  div {
    width: 20px;
  }
  p {
    font-size:10px;
  }
  @media (min-width: 768px) {
    p{
      font-size: 15px;
    }
  }
`;

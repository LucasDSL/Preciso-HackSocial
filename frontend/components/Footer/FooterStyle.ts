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
    padding: 20px 0px;
    gap: 5px;
  }
  div {
    width: 20px;
  }
  p {
    font-size:10px;
    font-weight: 600;
  }
  p > span{
    font-style: italic;
  }
  @media (min-width: 768px) {
    p{
      font-size: 15px;
    }
  }
`;

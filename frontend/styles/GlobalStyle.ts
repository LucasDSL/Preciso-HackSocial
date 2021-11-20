import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`   

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
 
  }
 


  @media (max-width: 768px) {
    html{
      font-size: 85%;
    }
  }
  @media (max-width: 426px) {
    html{
        font-size: 60%;
      }
  }
  @media (max-width: 376px) {
    html{
        font-size: 57%;
      }
  }
  @media (max-width: 321px) {
    html{
        font-size: 55%;
      }
  }
  
 
`

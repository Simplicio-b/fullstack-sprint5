import styled from "styled-components"

export const ContainerProducts = styled.section `
    margin-top: 20px;
    margin-bottom: 20px;
  
   .products__row {
        margin: 8px;
    }
`

export const List = styled.ol `
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 1200px) {
        flex-wrap: wrap;
    }
  
    @media (min-width: 1201px) {
        flex-wrap: wrap; 
    }

`

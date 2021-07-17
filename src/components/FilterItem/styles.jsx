import styled from "styled-components"

export const Container = styled.li `
    display: flex;
    align-items: center;
    padding: 12px 14px;

    &:hover {
        cursor: pointer;
        background-color: rgba(38, 30, 30, 0.04);
    }
  
    .filters__img {
        height: 20px;
        margin-left: 8px;
    }
  
`

export const Label = styled.span `
    text-transform: uppercase;
    font-size: 0.6875rem;
    font-weight: 400;
    color: #261e1e;
`

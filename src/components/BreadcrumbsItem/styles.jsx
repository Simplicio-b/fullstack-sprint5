import styled from "styled-components"

export const BreadcrumbItem = styled.li `
  font-size: 0.8125rem;
  font-weight: 600;
  color: #585858;
  
  @media (max-width: 1200px) {
    display: none;
  }

  &:not(:last-child):hover {
    text-decoration: underline;
  }

`

export const Separator = styled.span `
  margin-left: 8px;
  margin-right: 8px;
  user-select: none;
`

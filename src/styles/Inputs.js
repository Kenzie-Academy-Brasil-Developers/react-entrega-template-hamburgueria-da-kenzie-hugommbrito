import styled from 'styled-components'

export const StyledInput = styled.input`
    height: 3.75rem;
    max-width: 365px;
    width: 30%;
    padding: 0 .625rem 0 .9375rem;

    border: .125rem solid var(--color-grey-3);
    border-radius: var(--radius-2);
    
    color: var(--color-grey-3);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-3);
    
    &:focus-visible{
        outline: none;
        border: .125rem solid var(--color-primary);

    }
`
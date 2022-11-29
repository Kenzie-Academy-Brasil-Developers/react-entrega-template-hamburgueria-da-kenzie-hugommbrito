import styled from "styled-components";

export const StyledCartCotnainer = styled.div`
    width: 22.8125rem;
    max-width: 28%;

    @media (max-width: 950px){
        width: 90%;
        max-width: 90%;
        margin: 0 auto;
    }

`

export const StyledCartTop = styled.div`
    width: 100%;
    height: 4.0625rem;

    padding: 1.25rem;

    background-color: var(--color-primary);
    border-radius: var(--radius-1) var(--radius-1) 0 0;

    color: var(--color-white);
`

export const StyledCartCard = styled.div`
    width: 100%;
    height: 6.25rem;
    padding: .625rem;

    background-color: var(--color-grey-4);

    display: flex;
    justify-content: space-between;
    
    & > div{
        display: flex;
        gap: .625rem;
    }

    img{
        width: 5rem;
        height: 5rem;
        border-radius: var(--radius-1);
        background-color: var(--color-grey-3);
    }

    div > h4{
        font-weight: var(--font-weight-1);
        font-size: var(--font-heading-4);
    }

    div > p{
        font-weight: var(--font-weight-3);
        font-size: var(--font-caption);
        color: var(--color-grey-2);
    }

    & > p{
        font-weight: var(--font-weight-2);
        font-size: var(--font-caption);
        color: var(--color-grey-2);

        cursor: pointer;
    }

`

export const StyledCartTotal = styled.div`
    width: 100%;
    padding: .625rem;

    background-color: var(--color-grey-4);
    border-top: 2px solid var(--color-grey-3);
    border-radius: 0 0 var(--radius-1) var(--radius-1);

    div{
        display: flex;
        justify-content: space-between;
    }

    button{
        margin: 1.375rem 0 .625rem 0;
        width: 100%;
    }
`

import styled from 'styled-components'

export const StyledHeader = styled.div`
    width: 100vw;
    padding: 10px 0;
    background-color: var(--color-grey-4);

    
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: relative;
    }

    button{
        position: absolute;
        right: .625rem;
    }

    @media (max-width: 950px){
        div{
            flex-direction: column;
            gap: 20px;
        }

        button{
            display: none;
        }
    }

`
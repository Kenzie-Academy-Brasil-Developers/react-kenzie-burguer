import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    margin-bottom: 40px;
    padding: 10px 0;
    background-color: #f5f5f5;

    h1{
        font-weight: 700;
        font-size: 24px;
    }
    span {
        font-weight: 600;
        font-size: 18px;
        color: #f10;
    }

    @media (max-width: 520px) {
        h1 {
            margin-bottom: 15px
        }
        
        > .flex {
            flex-direction: column
        }
    }
`
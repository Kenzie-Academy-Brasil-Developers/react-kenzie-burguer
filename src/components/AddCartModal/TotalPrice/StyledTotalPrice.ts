import styled from "styled-components";

export const StyledTotalPrice = styled.div`
    margin-top: 18px;
    padding-top: 20px;
    border-top: 2px solid var(--grey1);

    h4 {
        color: var(--grey6);
        font-weight: var(--weight6);
        font-size: 18px;
        display: inline-block;
    }

    small {
        float: right;
        font-weight: var(--weight6);
    }
    
    button {
        width: 100%;
        margin-top: 20px;
        height: 50px;
        color: var(--grey3);
        font-size: var(--size3);
        font-weight: var(--weight6);
        background-color: var(--grey1);
    }

    button:hover {
        background-color: var(--grey0);
    }
`
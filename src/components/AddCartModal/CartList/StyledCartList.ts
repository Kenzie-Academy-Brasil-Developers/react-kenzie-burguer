import styled from "styled-components";

export const StyledCartList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 300px;
    overflow: auto;
    
    li {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 14px;
    }

    figure {
        background: #E0E0E0;
        border-radius: 5px;
    }
    
    figure img {
        width: 78px;
        height: 78px;
    }

    h3 {
        width: fit-content;
        display: inline-block;
    }

    li div {
        width: -webkit-fill-available;
    }

    div img {
        float: right;
        cursor: pointer;
    }

    li div div {
        margin-bottom: 25px;
    }

    span {
        display: inline-grid;
        place-items: center;
        width: 35px;
        height: 35px;
        background-color: var(--grey0);
        color: var(--brand2);
        font-weight: var(--weight5);
        font-size: 24px;
        cursor: pointer;
    }

    small {
        padding: 0 15px;
        font-weight: var(--weight5);
        font-size: 16px;
        color: var(--grey6);
    }
`
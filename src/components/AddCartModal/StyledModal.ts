import styled from "styled-components";

export const StyledCartModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    background-color: rgba(18, 18, 20, 0.5);
    
    section {
        width: 100%;
        max-width: 500px;
        margin: 40px auto;
        padding: 0.6rem;
    }

    section > div:first-child {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-radius: 4px 4px 0 0;
        background-color: var(--brand1);
    }

    section > div + div {
        background-color: #ffffff;
        border-radius: 0 0 4px 4px;
        padding: 20px;
    }
    
    section .emptyList {
        display: grid;
        place-items: center;
        padding: 40px 0;
    }

    section > div > span {
        color: var(--grey1);
        font-size: var(--size2);
        cursor: pointer;
    }

    p {
        font-weight: var(--weight7);
        font-size: 20px;
        margin-bottom: 15px;
    }

    small {
        font-weight: var(--weight4);
        font-size: var(--size3);
        color: var(--grey3);
    }
`
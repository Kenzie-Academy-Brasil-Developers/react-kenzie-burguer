import styled from "styled-components";

export const StyledCartModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    background-color: rgba(18, 18, 20, 0.5);
    
    section {
        width: 100%;
        max-width: 400px;
        margin: 40px auto;
        padding: 0.6rem;
    }

    > div {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-radius: 4px 4px 0px 0px;
        background-color: var(--grey2);
    }

    span {
        color: var(--grey1);
        font-size: var(--size2);
        cursor: pointer;
    }
`
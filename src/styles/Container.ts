import styled from "styled-components";

export const StyledContainerForm = styled.main`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 0.6rem;
`

export const StyledContainerHeader = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0.6rem;

    @media (max-width: 1170px) {
        max-width: 1000px;
    }

    @media (max-width: 900px) {
        max-width: 750px;
    }

    > div {
        display: flex;
        align-items: center;
    }

    > div img {
        cursor: pointer;
        margin-left: 12px;
    }

    .counter{
        background-color: var(--brand1);
        color: #ffffff;
        font-size: 12px;
        font-weight: var(--weight6);
        border-radius: var(--radius2);
        padding: 4px;
        position: relative;
        bottom: 10px;
        right: 30px;
    }
`

export const StyledContainerMenu = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0.6rem;


    @media (max-width: 1170px) {
        max-width: 1000px;
    }

    @media (max-width: 900px) {
        max-width: 750px;
    }
`
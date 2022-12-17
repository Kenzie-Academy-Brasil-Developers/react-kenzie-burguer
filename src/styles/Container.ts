import styled from "styled-components";

export const StyledContainerForm = styled.main`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 0.6rem;
`

export const StyledContainerMenu = styled.div`
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
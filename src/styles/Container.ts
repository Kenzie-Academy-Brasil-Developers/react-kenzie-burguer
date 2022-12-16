import styled from "styled-components";

export const StyledContainerForm = styled.main`
    width: 100%;
    max-width: 380px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 0.6rem;
`

export const StyledContainerDashboard = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 0.6rem;
`

export const StyledContainerNotFound = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    max-width: 1100px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0.6rem;
    
    p {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    small {
        display: block;
        margin-bottom: 20px;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
    }

    a {
        display: block;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        color: var(--brand);
    }
`
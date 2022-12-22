import styled from "styled-components";

export const StyledMenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 50px;

    @media (max-width: 1170px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 690px) {
        max-width: 100vw;
        overflow-y: auto;
        display: flex;
        margin-bottom: 0;

    }
`
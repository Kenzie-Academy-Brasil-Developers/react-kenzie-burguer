import styled from "styled-components";

export const StyledSectionForm = styled.section`
    border: 2px solid var(--grey0);
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: var(--radius2);
    padding: 25px;
    width: 90%;

    h3{
        margin-bottom: 20px;
    }

    p{
        font-weight: var(--weight4);
        font-size: var(--size4);
        color: var(--grey5);
        text-align: center;
        line-height: 18px;
        width: 60%;
        margin: 0 auto 20px auto;
    }

    > a {
        background-color: var(--grey0);
        border-radius: var(--radius1);
        color: var(--grey5);
        text-align: center;
        text-decoration: none;
        font-weight: var(--weight5);
        display: block;
        width: 100%;
        padding: 18px;
    }

    > a:hover {
        background-color: var(--grey1);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    div > h3{
        margin: 0;
    }
    
    div > a {
        color: var(--grey5);
        font-weight: var(--weight6);
    }
`

export const StyledSectionSlogan = styled.section`
    h1 {
        margin-bottom: 25px;
    }

    div {
        border: 1px solid #E0E0E0;
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
        padding: 15px;
        width: 100%;
    }

    figure {
        background-color: rgba(39, 174, 96, 0.1);
        border-radius: 5px;
        display: grid;
        place-items: center;
        width: 105px;
        height: 58px;
    }

    p {
        font-weight: var(--weight4);
        font-size: var(--size4);
        line-height: 22px;
        color: var(--grey3);
    }

    strong {
        color: #000000;
        font-weight: var(--weight6);
    }
`
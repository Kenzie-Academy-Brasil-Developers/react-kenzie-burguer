import styled from "styled-components";

export const StyledMenuCard = styled.li`
    width: 250px;
    border: 2px solid #E0E0E0;
    border-radius: 5px;

    @media (max-width: 900px) {
        width: 300px;
        min-width: 250px;
    }

    figure {
        display: grid;
        place-items: center;
        background-color: #f5f5f5;
    }

    img{
        height: 150px;
    }

    div {
        height: 196px;
        padding: 25px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h2{
        font-weight: 700;
        font-size: 18px;
    }

    span {
        font-weight: 400;
        font-size: 14px;
    }

    small{
        font-weight: 600;
        font-size: 16px;
        color: #27AE60;
    }

    button{
        background-color: #27AE60;
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        padding: 12px 0;
        width: 120px;
    }
    button:hover{
        background-color: #209751;
    }
`
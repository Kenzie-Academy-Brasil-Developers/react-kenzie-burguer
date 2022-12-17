import styled from "styled-components";

export const StyledSearchDiv = styled.div`
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    padding: 8px;
    margin-right: 10px;
    
    @media (max-width: 520px) {
        width: 100%;
    }
    
    input {
        margin-right: 14px;
        padding-left: 8px;
        width: 200px;
        height: 42px;
        font-size: 16px;
        outline: none;
    }
    
    @media (max-width: 360px) {
        input {
            width: 140px;
        }
    }
    button {
        border-radius: 8px;
        background-color: #27AE60;
        padding: 14px 20px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
    }
    
    button:hover{
        background-color: #209751;
    }
`
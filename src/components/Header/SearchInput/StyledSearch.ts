import styled from "styled-components";

export const StyledSearchDiv = styled.div`
    background-color: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    padding: 8px;
    
    @media (max-width: 690px) {
        
        
        > button {
            padding: 0;
        }
        
        .seachIcon {
            margin-left: 0;
        }
    }

    @media (max-width: 620px) {
        position: fixed;
        z-index: 10;
        left: 10px;
        width: 96.7%;
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
        background-color: var(--brand1);
        padding: 14px 20px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
    }
    
    button:hover{
        background-color: #209751;
    }

    img {
        margin-right: 0;
    }
    
    div > span {
        color: #BDBDBD;
        margin-right: 5px;
        margin-left: 12px;
        cursor: pointer;
    }
`
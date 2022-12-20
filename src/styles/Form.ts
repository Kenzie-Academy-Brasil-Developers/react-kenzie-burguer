import styled, { css } from "styled-components";

interface iStyledFormProps {
    disabledButton?: boolean;
}

export const StyledForm = styled.form<iStyledFormProps>`
    margin-bottom: 20px;

    label {
        font-weight: 400;
        font-size: 12px;
        color: var(--grey5);
        text-align: center;
        background-color: #ffffff;
        display: block;
        margin-top: 10px;
        width: fit-content;
        padding: 0 4px;
        position: relative;
        top: 7px;
        left: 12px
    }

    input {
        background-color: #FFFFFF;
        border: 2px solid var(--grey5);
        border-radius: var(--radius1);
        width: 100%;
        height: 60px;
        padding-left: 15px;
        margin-bottom: 8px;
    }

    input:focus {
        border: 2px solid var(--grey6);
    }

    .error {
        color: var(--alert);
    }
    
    button {
        width: 100%;
        height: 60px;
        border: 2px solid transparent;      
        color: white;
        font-weight: 600;
        font-size: var(--size3);
        margin-top: 15px;
    }

    ${({disabledButton}) => {
        if (disabledButton) {
            return css`
                button {
                    background-color: #2dd3738c;
                }
            `
        } else {
            return css`
                button {
                    background-color: var(--brand1);
                }

                button:hover {
                    border: 2px solid #000000;
                }
            `
        }
    }}
`
import styled, { css } from "styled-components";
import { BaseTitle } from "./BaseTitle";

export const StyledTitle = styled(BaseTitle)`    

    ${({ tag }) => {
        switch (tag) {
            case 'h1':
                return css`
                    font-size: var(--size1);
                    font-weight: 700;
                    color: var(--brand);

                    span {
                        color: var(--brand2);
                        font-size: 22px;
                    }
                `
            case 'h2':
                return css`
                    font-size: var(--size2);
                    font-weight: 700;
                    color: var(--grey0);
                `
            case 'h3':
                return css`
                    font-size: var(--size2);
                    font-weight: 700;
                    color: var(--grey6);
                `
            case 'h4':
                return css`
                    font-size: var(--size3);
                    font-weight: 600;
                    color: var(--grey0);
                `
        }
      }
    }
`
import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button, select, textarea {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        line-height: 1;
        list-style: none;
        text-decoration; none;
        box-sizing: border-box;
        color: var(--grey4);
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: var(--grey4);
    }

    button {
        cursor: pointer;
    }
    
    button, input {
        border-radius: var(--radius)
    }

    
    :root {
        --brand1: #FF577F;
        --brand2: #EB5757;
        --grey0: #F5F5F5;
        --grey1: #E0E0E0;
        --grey3: #828282;
        --grey6: #333333;
        --success: #168821;
        --alert:  #E60000;
        --warn: #FFCD07;
        --info: #155BCB;
        
        --radius1: 8px;
        --radius2: 5px;

        --weight4: 400;
        --weight5: 500;
        --weight6: 600;
        --weight7: 700;
        --weight8: 800;
        
        --size1: 1.375rem;
        --size2: 1.25rem;
        --size3: 1rem;
        --size4: 0.875rem;
        --size5: 0.75rem;

        .flex{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .layout{
            display: flex;
            justify-content: space-between;
            gap: 20px;
        }

        @media (max-width: 690px) {
            .layout{
                flex-direction: column;
            }
        }
    }
`
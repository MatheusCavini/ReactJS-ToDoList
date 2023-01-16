import styled, {css} from "styled-components";

interface activeProps{
    active: boolean;
}

export const Container = styled.div<activeProps>`
    width: 80px;
    height: 24px;
    border-radius:8px;
    border: 1px solid #ccc;
    display: flex;
    align-items:center;
    justify-content:center;
    margin:0 2px;

    &:hover{
        cursor:pointer;
        background: #eee;
    }

    ${props => props.active && css`
        background: white;
        border:0;
        box-shadow: 0 1px 2px #ccc;
    ` }
`

export const TagName = styled.h3<activeProps>`
    font-size: 16px;
    color:#ccc;

    ${props => props.active && css`
        color: #333;
    ` }
`
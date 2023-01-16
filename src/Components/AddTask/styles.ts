import styled from "styled-components";

export const Container =styled.div`
    height: 50px;
    width: 70vw;
    border: 1px solid #ccc;
    border-radius: 16px;
    display: flex;
    margin: 8px;
    box-sizing:border-box;
    align-items: center;
    justify-content: center;

    &:hover{
        background: #eee;
        cursor: pointer;
    }
`

export const Icon = styled.img` 
    width:24px;
`

export const Text =  styled.p`
    color: #ccc;
    font-size: 20px;
    font-weight:400;
    margin:16px;
`
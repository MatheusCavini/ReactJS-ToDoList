import styled, {css} from "styled-components";

interface ColorTagProps{
    color:string;
}

interface DoneProps{
    done:boolean;
}

export const Container =styled.div`
    height: 80px;
    width: 70vw;
    background: white;
    border-radius: 16px;
    box-shadow: 0 3px 3px #ccc;
    display: flex;
    margin: 8px;
    box-sizing:border-box;
`
export const Name = styled.h2<DoneProps>`
    font-size: 22px;
    color: #555;
    margin: 8px 16px;
    font-weight:500;

    ${props => props.done &&
    css`
        color:#bbb;
        font-weight:400;
        text-decoration: line-through;`}
`
export const Icon = styled.img`
    width: 24px;
    margin: 24px;
    background: white;

    &:hover{
        cursor:pointer;
    }
`
export const CheckField = styled.div`
    width: 80px;
    height: 80px;
    border-right: 2px solid #eee ;
    display: flex;
    align-items:center;
    justify-content:center;
`
export const Description = styled.div`
    height: 80px;
    width: 50vw;
    padding: 6px 8px;
    box-sizing: border-box;
`
export const ListBelong = styled.div`
    height: 20px;
    margin: 0 16px;
    display: flex;
    align-items: center;
`

export const ColorTag = styled.div<ColorTagProps>` 
    height: 16px;
    width: 16px;
    border-radius: 6px;
    background: ${props=> props.color};
`

export const ListName = styled.p`
    font-size: 16px;
    color: #999;
    margin-left:8px;
    font-weight:400; 
`

export const InvisibleCheck = styled.input.attrs({type:'checkbox'})`
    display: none;
`

export const CheckboxRing = styled.div`
    background: white;
    height: 24px;
    width: 24px;
    border: 1px solid #7f56da;
    border-radius:12px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
    }

`
export const CheckFill = styled.div<DoneProps>`
    background: #7f56da;
    height: 20px;
    width: 20px;
    border-radius:10px;
    ${props => !props.done &&
    css`display:none;`}
`
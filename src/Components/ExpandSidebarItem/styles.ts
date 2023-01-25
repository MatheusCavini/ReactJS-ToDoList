import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

interface ContainerProps{
    isActive: boolean;
}


export const Name = styled.h3`
    font-size:16px;
    font-weight:500;
`
export const OuterContainer = styled.div<ContainerProps>`
    height: auto;
    width: 15vw;
    border-radius:
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: top;
    color:#777;
    font-weight:100;
    margin: 4px 0;
    
    border-radius:8px;

    ${props =>
	    props.isActive &&
	    css`
	      background: #f5f5f5;
    `};
    margin: 0;
`

export const Container = styled.div<ContainerProps>`
    height: 40px;
    width: 15vw;
    border-radius:8px;
    display: flex;
    align-items:center;
    justify-content: left;
    color:#777;
    font-weight:100;
    ${props =>
	    props.isActive &&
	    css`
	      background: #f5f5f5;
    `};
    margin: 0;

    &:hover{
        cursor:pointer;
        ${props =>
	    props.isActive ?
	    css`
	      background: #f5f5f5;
    `: css`
	      background: #fafafa;
    `};
    }

`



export const Icon = styled.img`
    width: 20px;
    margin: 8px 16px;
`

export const Arrow = styled.img<ContainerProps>`
    width: 14px;
    margin: 8px 16px;

    ${props =>
	    props.isActive &&
	    css`
	      transform:rotate(180deg);
    `};
    margin: 4px 24px;
`

export const CatArea = styled.div<ContainerProps>`
    display: flex;
    width:15vw;
    height: auto;
    background: #f5f5f5;
    border-radius:8px;
    flex-direction:column;
    padding-bottom: 8px;

    ${props =>
	    !props.isActive &&
	    css`
	      display:none;
    `};

`

export const AddArea = styled.div`
    height: 20px;
    margin: 4px 0 4px 52px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
`


export const AddText = styled.p`
    font-size: 16px;
    color: #ccc;
    margin-left:8px;
    font-weight:400; 
`

export const AddIcon = styled.img`
    height: 16px;
`



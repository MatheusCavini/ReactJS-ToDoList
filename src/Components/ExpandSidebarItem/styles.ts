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
export const OuterContainer = styled.div`
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
    background: #f5f5f5;
    border-radius:8px;
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



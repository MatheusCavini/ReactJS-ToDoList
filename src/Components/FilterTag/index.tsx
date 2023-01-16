import React from "react";
import * as S from "./styles";


interface tagProps  {
    name:string;
    active:boolean; 
}


const FilterTag:React.FC<tagProps> =({name, active})=>{
    return (
        <S.Container active={active}>
            <S.TagName active={active}>{name}</S.TagName>
        </S.Container>
    );
}

export default FilterTag;
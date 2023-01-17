import React from "react";
import * as S from "./styles"

interface CategorieItemProps{
    name:string;
    color:string;
}

const CategorieItem:React.FC<CategorieItemProps> =({name,color})=>{

    return(
        <S.Categorie>
            <S.ColorTag color={color}/>
            <S.ListName>{name}</S.ListName>
        </S.Categorie>
    )
};

export default CategorieItem;
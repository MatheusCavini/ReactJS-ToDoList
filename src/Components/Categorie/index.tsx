import React from "react";
import * as S from "./styles"
import { Link } from "react-router-dom";

interface CategorieItemProps{
    name:string;
    color:string;
}

const CategorieItem:React.FC<CategorieItemProps> =({name,color})=>{

    return(
        <Link  to={"/categorie/"+name} style={{ textDecoration: 'none' }}>
            <S.Categorie>
                <S.ColorTag color={color}/>
                <S.ListName>{name}</S.ListName>
            </S.Categorie>
        </Link>
)};

export default CategorieItem;
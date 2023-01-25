import React, {useState, useContext} from "react";
import * as S from "./styles"
import Arrow from "../../Img/arrow.svg"
import CategorieItem from "../Categorie";
import Add from "../../Img/add.svg";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/categoriesType";

interface SidebarItemProps{
    name: string;
    icon: string;
    
}



const ExpandSidebarItem:React.FC<SidebarItemProps> =({name, icon})=>{
    const [active, setActive] = useState(false);
    const {categList}= useContext(CategoriesContext) as CategorieContextType;

    function handleActivate(){
        setActive(!active);
    }

    return(
        <S.OuterContainer isActive={active}>
            <S.Container isActive={active} onClick={handleActivate}>
                <S.Icon src={icon}/>
                <S.Name>{name}</S.Name>
                <S.Arrow isActive={active} src={Arrow}/>
            </S.Container>
            <S.CatArea isActive={active}>
                {categList.map(cat=><CategorieItem name={cat.name} color={cat.color} />)}
                <S.AddArea>
                    <S.AddIcon src={Add}/>
                    <S.AddText>Add new</S.AddText>
                </S.AddArea>
            </S.CatArea>

        </S.OuterContainer>
    );
};


export default ExpandSidebarItem;
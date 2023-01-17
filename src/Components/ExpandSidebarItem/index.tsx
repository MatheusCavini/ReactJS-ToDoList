import React, {useState} from "react";
import * as S from "./styles"
import Arrow from "../../Img/arrow.svg"
import CategorieItem from "../Categorie";

interface SidebarItemProps{
    name: string;
    icon: string;
    
}



const ExpandSidebarItem:React.FC<SidebarItemProps> =({name, icon})=>{
    const [active, setActive] = useState(false);

    const catList = [
        {
            name: "Home",
            color: "#FF9C9C"
        },
        {
            name:"School",
            color: "#FFD79C"
        },
        {
            name:"Shopping list",
            color: "#9CD0FF"
        }
    ]

    function handleActivate(){
        setActive(!active);
    }

    return(
        <S.OuterContainer>
            <S.Container isActive={active} onClick={handleActivate}>
                <S.Icon src={icon}/>
                <S.Name>{name}</S.Name>
                <S.Arrow isActive={active} src={Arrow}/>
            </S.Container>
            <S.CatArea isActive={active}>
                {catList.map(cat=><CategorieItem name={cat.name} color={cat.color}/>)}

            </S.CatArea>

        </S.OuterContainer>
    );
};


export default ExpandSidebarItem;
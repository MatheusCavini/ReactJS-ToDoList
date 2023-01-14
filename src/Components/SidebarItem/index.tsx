import React from "react";
import * as S from "./styles"

interface SidebarItemProps{
    name: string;
    icon: string;
    isActive: boolean;
}

const SidebarItem:React.FC<SidebarItemProps> =({name, icon, isActive})=>{
    return(
        <S.Container isActive={isActive}>
            <S.Icon src={icon}/>
            <S.Name>{name}</S.Name>
        </S.Container>
    );
};


export default SidebarItem;
import React from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png"
import TaskFill from "../../Img/taskFill.png";
import Settings from "../../Img/settings.svg";
import Folder from "../../Img/folder.svg";
import Logout from "../../Img/logout.svg"
import SidebarItem from "../../Components/SidebarItem";
import TaskCard from "../../Components/TaskCard"; 


const Home:React.FC = ()=>{
    return(
        <S.Page>
            <S.Sidebar>
                <S.Img src={Logo}/>
                <S.Tabs>
                    <SidebarItem icon={TaskFill} name="Tasks" isActive={true} ></SidebarItem>
                    <SidebarItem icon={Folder} name="Projects" isActive={false} ></SidebarItem>
                    <SidebarItem icon={Settings} name="Settings" isActive={false} ></SidebarItem>
                </S.Tabs>
                <SidebarItem icon={Logout}name="Logout" isActive={false}></SidebarItem>
            </S.Sidebar>
            <S.Main>
                <S.Header>All your tasks</S.Header>
                <TaskCard name="Take care of the pets" list="Home" color="#FF9C9C"/>
                <TaskCard name="Take care of the pets" list="Home" color="#FF9C9C"/>
                <TaskCard name="Take care of the pets" list="Home" color="#FF9C9C"/>
                <TaskCard name="Take care of the pets" list="Home" color="#FF9C9C"/>
            </S.Main>
        </S.Page>
    )
}

export default Home
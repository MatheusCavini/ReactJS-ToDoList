import React, {useContext, useState} from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png"
import TaskFill from "../../Img/taskFill.png";
import Settings from "../../Img/settings.svg";
import Folder from "../../Img/folder.svg";
import Logout from "../../Img/logout.svg"
import SidebarItem from "../../Components/SidebarItem";
import TaskCard from "../../Components/TaskCard"; 
import AddTask from "../../Components/AddTask";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType } from "../../Contexts/taskType";

const Home:React.FC = ()=>{
    const{taskList, addTask} = useContext(TaskListContext) as TaskListType;
    return(
        <S.Page>
            <S.Sidebar>
                <S.Img src={Logo}/>
                <S.Tabs>
                    <SidebarItem icon={TaskFill} name="Tasks" isActive={true} ></SidebarItem>
                    <SidebarItem icon={Folder} name="Categories" isActive={false} ></SidebarItem>
                    <SidebarItem icon={Settings} name="Settings" isActive={false} ></SidebarItem>
                </S.Tabs>
                <SidebarItem icon={Logout}name="Logout" isActive={false}></SidebarItem>
            </S.Sidebar>
            <S.Main>
                <S.Header>All your tasks</S.Header>
                {taskList.map(task =><TaskCard id={task.id} name={task.title} list={task.categorie} color={task.color} done={task.done}/>)}
                <AddTask></AddTask>
            </S.Main>
        </S.Page>
    )
}

export default Home
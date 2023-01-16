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
import { TaskListType, TaskProps } from "../../Contexts/taskType";
import FilterTag from "../../Components/FilterTag";


import Filter from "../../Img/filter.svg";

const Home:React.FC = ()=>{
    const{taskList, doneTasks, notDoneTasks} = useContext(TaskListContext) as TaskListType;
    const [listToDisplay, setListToDisplay] = useState(0);
    const listOfLists = [taskList, doneTasks, notDoneTasks];

    const [allActive, setAllActive] = useState(true);
    const [doneActive, setDoneActive] = useState(false);
    const [notDoneActive, setNotDoneActive] = useState(false);

   
   
    function handleAll(){
        setListToDisplay(0);
        setAllActive(true);
        setDoneActive(false);
        setNotDoneActive(false);
    };

    function handleDone(){
        setListToDisplay(1);
        setAllActive(false);
        setDoneActive(true);
        setNotDoneActive(false);
    };
    function handleNotDone(){
        setListToDisplay(2);
        setAllActive(false);
        setDoneActive(false);
        setNotDoneActive(true);
    };




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
                <S.TitleAndFilter>
                    <S.Title onClick={handleDone}>Tasks </S.Title>
                    <S.FilterField>
                        <div onClick={handleAll}><FilterTag name="All" active={allActive}/></div>
                        <div onClick={handleDone}><FilterTag name="Done" active={doneActive}/></div>
                        <div onClick={handleNotDone}><FilterTag name="Not done" active={notDoneActive}/></div>
                        <S.FilterIcon src={Filter}/>
                    </S.FilterField>
                </S.TitleAndFilter>
                {listOfLists[listToDisplay].map(task =><TaskCard id={task.id} name={task.title} list={task.categorie} color={task.color} done={task.done}/>)}
                <AddTask></AddTask>
            </S.Main>
        </S.Page>
    )
}

export default Home
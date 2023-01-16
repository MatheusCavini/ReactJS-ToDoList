import React, {useState, createContext, ReactNode} from "react";
import { TaskProps, TaskListType } from "./taskType";

interface ChildrenProps {
    children: React.ReactNode;
  }

export const TaskListContext = createContext<TaskListType|null>(null);

export const TaskListContextProvider: React.FC<ChildrenProps> = ({children}) =>{
    const [taskList, setTaskList] = useState<TaskProps[]>([
        {
            id:1,
            title: "Exemple task",
            done: false,
            categorie: "Home",
            color: "#FF9C9C",
        },
        {
            id:2,
            title: "Exemple task 2",
            done: false,
            categorie: "Home",
            color: "#FF9C9C",
        },
        {
            id:3,
            title: "Exemple task 3",
            done: true,
            categorie: "Home",
            color: "#FF9C9C",
        },

    ]);

    const addTask = (task: TaskProps)=>{
        const newTask:TaskProps = {
            id: Math.random(),
            title: task.title,
            done: false,
            categorie: task.categorie,
            color: task.color,
        };

        setTaskList([...taskList, newTask]);
    };

    const checkTask = (id:number)=>{
        taskList.filter((task: TaskProps) => {
            if (task.id === id) {
              task.done = !task.done
              setTaskList([...taskList])
            }
        });
    }

    return(
        <TaskListContext.Provider value={{taskList, addTask, checkTask}}>
            {children}
        </TaskListContext.Provider>
    )
}


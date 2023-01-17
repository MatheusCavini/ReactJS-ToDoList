import React from "react";
import { DeleteContextProvider } from "./Contexts/deleteContext";
import { TaskListContextProvider } from "./Contexts/taskListContext";
import { ChildrenProps } from "./Contexts/deleteContext";


const ContextProviders:React.FC<ChildrenProps>=({children})=>{
    return(
        <TaskListContextProvider>
            <DeleteContextProvider>
                {children}
            </DeleteContextProvider>
        </TaskListContextProvider>
    )
};

export default ContextProviders;
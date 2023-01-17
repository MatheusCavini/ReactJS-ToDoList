import React from "react";
import { DeleteContextProvider } from "./Contexts/deleteContext";
import { TaskListContextProvider } from "./Contexts/taskListContext";
import { ChildrenProps } from "./Contexts/deleteContext";
import { CategoriesContextProvider } from "./Contexts/categoriesContext";


const ContextProviders:React.FC<ChildrenProps>=({children})=>{
    return(
        <TaskListContextProvider>
            <DeleteContextProvider>
                <CategoriesContextProvider>
                    {children}
                </CategoriesContextProvider>
            </DeleteContextProvider>
        </TaskListContextProvider>
    )
};

export default ContextProviders;
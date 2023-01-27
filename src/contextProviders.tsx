import React from "react";
import { DeleteContextProvider } from "./Contexts/deleteContext";
import { TaskListContextProvider } from "./Contexts/taskListContext";
import { ChildrenProps } from "./Contexts/deleteContext";
import { CategoriesContextProvider } from "./Contexts/categoriesContext";
import { AddContextProvider } from "./Contexts/addContext";
import { AuthProvider } from "./Contexts/authContext";

const ContextProviders:React.FC<ChildrenProps>=({children})=>{
    return(
        <TaskListContextProvider>
            <DeleteContextProvider>
                <AddContextProvider>
                <CategoriesContextProvider>
                    <AuthProvider>
                    {children}
                    </AuthProvider>
                </CategoriesContextProvider>
                </AddContextProvider>
            </DeleteContextProvider>
        </TaskListContextProvider>
    )
};

export default ContextProviders;
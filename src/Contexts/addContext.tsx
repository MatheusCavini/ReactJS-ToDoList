import React, {useState, createContext, ReactNode} from "react";
import { AddType } from "./addType";

export interface ChildrenProps {
    children: React.ReactNode;
}

export const AddContext = createContext<AddType|null>(null);

export const AddContextProvider: React.FC<ChildrenProps> = ({children}) =>{
    const [showAdd, setShowAdd] = useState(false);
    const [id, setId] = useState(0);

    return(
        <AddContext.Provider value={{showAdd, setShowAdd, id, setId}}>
            {children}
        </AddContext.Provider>
    );

}
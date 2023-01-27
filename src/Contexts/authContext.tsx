import React, {useState, createContext} from "react";
import { ChildrenProps } from "./deleteContext";

export interface UserDataProps{
    email: string,
}

export type AuthType = {
    userData: UserDataProps,
    setUserData: Function
}

const AuthContext = createContext<AuthType|null>(null);

export const AuthProvider:React.FC<ChildrenProps> = ({ children }) => {

	const [userData, setUserData] = useState(() => {
        const email = localStorage.getItem('@Project:email');

        if (email) {
            return { email: JSON.parse(email) };
        }else{
            return {email:""} };
	});

    return(
		<AuthContext.Provider value={{userData, setUserData}} > 
		    {children} 
		</AuthContext.Provider>
	);

}

export default AuthContext;
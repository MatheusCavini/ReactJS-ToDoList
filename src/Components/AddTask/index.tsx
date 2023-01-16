import React from "react";
import * as S from "./styles";
import Add from "../../Img/add.svg";

const AddTask:React.FC = ()=>{
    return(
        <S.Container>
            <S.Icon src={Add}/>
            <S.Text>Add a task</S.Text>
        </S.Container> 
    );
};

export default AddTask;
import React from "react";
import * as S from "./styles";
import { DeleteType } from "../../Contexts/deleteType";
import { DeleteContext } from "../../Contexts/deleteContext";
import { useContext } from "react";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType } from "../../Contexts/taskType";




const DeleteModal:React.FC =()=>{
    const { setShowDelete, id, setId }= useContext(DeleteContext) as DeleteType;
    const{deleteTask} = useContext(TaskListContext) as TaskListType;

    function handleCancel(){
        setShowDelete(false);
    };

    function handleConfirm(){
        deleteTask(id);
        setId(0);
        setShowDelete(false);
        
    }


    return(
        <S.Background>
            <S.Container>
                <S.Text>Are you sure you want to delete this task?</S.Text>
                <S.Buttons>
                    <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
                    <S.DeletButton onClick={handleConfirm}>Delete</S.DeletButton>
                </S.Buttons>
            </S.Container>
        </S.Background>
    )
};

export default DeleteModal;
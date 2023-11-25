import styled from "styled-components";


export const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
`

export const ColumnsWrapper = styled.div`
    display: flex;
    gap: 4px;
`

export const TodoListWrapper = styled.div`
    width: 400px;
    background-color: white;
    border-radius: 4px;
`

export const ProgressHeading = styled.h2`
    padding-bottom: 20px;
    font-weight: 500;
    border-bottom: 2px solid red;
    margin: 24px;
`

export const TaskWrapper = styled.div`
    border: 1px solid red;
    border-left: 6px solid red;
    border-radius: 6px;
    margin: 24px;

`

export const TaskUl = styled.ul`
    margin: 0;
    padding: 0;
`
export const TaskP = styled.p`
    padding: 10px;
`
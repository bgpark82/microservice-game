import {useCallback, useState} from "react";
import styled from "@emotion/styled";
import {Interface} from "readline";

const DayInput = styled.input`
    width: 2rem;
    border: none;
    border-radius: 3px;
    background: #f8f9fa;
    padding: 0.5rem;
    margin: 0.125rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    
    &::placeholder {
      color: #dee2e6;
      font-weight: 400;
    }
`

const TextInput = styled.input`
    width: 10rem;
    border: none;
    border-radius: 3px;
    background: #f8f9fa;
    padding: 0.5rem;
    margin: 0.125rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    
    &::placeholder {
      color: #dee2e6;
      font-weight: 400;
    }
`

const TodoButton = styled.button`
    border: none;
    color: white;
    background: #444;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;
`

const TodoList = styled.div`
    display: flex;
    font-size: 1.1rem;
    color: #444;
    font-weight: 600;   
`

const TodoTime = styled.div`
    display: flex;
    margin: 0 1rem 0 0;
    gap: 0.25rem;
`

interface ITodo {
    text: string,
    startHour: string,
    startMinute: string,
    endHour: string,
    endMinute: string
}

function Index() {

    const [todo, setTodo] = useState<ITodo>({
        text: '',
        startHour: '',
        startMinute: '',
        endHour: '',
        endMinute: ''
    });
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    const onChangeTodo = useCallback((e) => {
        const {name, value} = e.target;
        if(value.length > 2) return;
        console.log(todo)
        setTodo({
            ...todo,
            [name]: value
        });
    },[todo]);

    const onChangeText = useCallback((e) => {
        const {name, value} = e.target;

        setTodo({
            ...todo,
            [name]: value
        });
    },[todo]);

    const onSubmitTodo = useCallback((e) => {
        if(todo.startHour === '') return;
        setTodos([
            ...todos,
            todo
        ]);
    },[todo, todos])

    return (
        <>
            <DayInput type="text" placeholder="11" name="startHour" onChange={onChangeTodo} value={todo.startHour}/> :
            <DayInput type="text"  placeholder="30" name="startMinute" onChange={onChangeTodo} value={todo.startMinute}/>
            ~
            <DayInput type="text"  placeholder="13" name="endHour" onChange={onChangeTodo}  value={todo.endHour}/> :
            <DayInput type="text"  placeholder="45" name="endMinute" onChange={onChangeTodo}  value={todo.endMinute}/>
            <TextInput type="text" placeholder="할 일" name="text" onChange={onChangeText} value={todo.text}/>
            <TodoButton onClick={onSubmitTodo}>추가</TodoButton>
            <div>
                {todos.map((todo,index) => (
                    <TodoList key={index}>
                        <TodoTime>
                            <div>{todo.startHour}</div> :
                            <div>{todo.startMinute}</div> ~
                            <div>{todo.endHour}</div> :
                            <div>{todo.endMinute}</div>
                        </TodoTime>
                        <div>{todo.text}</div>
                    </TodoList>
                ))}
            </div>
        </>
    );
}

export default Index;
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const todo = () => {

  const [todoText, setTodotext] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const addTask = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodotext("");
  }

  const deleteTask = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const completeTask = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const backTask = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
    
  }


  const onChangeText = (e) => setTodotext(e.target.value)

  return (
    <div>
      <div className='w-8/12 m-auto mt-5'>
        <input value={todoText} onChange={onChangeText} className='border border-gray rounded-lg py-1 px-3' placeholder='ここに入力してください' />
        <button onClick={addTask} className='border border-black py-1 px-2 ml-1 rounded-lg'>作成</button>
      </div>
      <div className='w-8/12 m-auto bg-blue-100 rounded-lg p-5 mt-5'>
        <h3 className='text-xl '>Todoリスト</h3>
        <ul>{
          incompleteTodos.map((todo,index)=>{
            return (
              <div key={todo} className='flex items-center'>
                <li>{ todo }</li>
                <button onClick={() => completeTask(index)} className='border py-1 px-2 ml-1 rounded-lg'>完了</button>
                <button onClick={() => deleteTask(index)} className='border py-1 px-2 ml-1 rounded-lg'>削除</button>
              </div>
            );
        })}
          
        </ul>
      </div>
      <div className='w-8/12 m-auto bg-red-100 rounded-lg p-5 mt-5'>
        <h3 className='text-xl'>完了済み</h3>
        <ul>{
          completeTodos.map((todo,index) => {
            return (
              <div key={todo} className='flex items-center'>
                <li>{todo}</li>
                <button onClick={() => backTask(index)} className='border py-1 px-2 ml-1 rounded-lg'>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default todo

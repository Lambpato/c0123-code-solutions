/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './PageTitle';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const url = (path) => `${process.env.REACT_APP_BASE_URL}${path}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getJsonData = async () => {
      try {
        const response = await fetch(url('/api/todos'));
        if(!response.ok) throw new Error(`Error Code: ${response.status} Error Message: It Broken`);
        const dataJson = await response.json();
        setTodos(dataJson);
      } catch (err) {
        setError(err);
        console.error('Error:', err.message)
      } finally {
        setIsLoading(false);
      }
    }
    getJsonData();
  }, [isLoading]);

  async function addTodo(newTodo) {
       try {
         const response = await fetch(url('/api/todos'), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTodo),
      });

       if (!response.ok) throw new Error(`Error Code: ${response.status} Error Message: It Broken`);
        const postJson = await response.json();
        const newTodoList = todos.concat(postJson);
        setTodos(newTodoList);
      } catch (err) {
        setError(err);
        console.error('Error:', err);
      }
  };

  async function toggleCompleted(todoId) {
   try {
      let matchTodo = {};
      const status = {};

      for (let i = 0; i < todos.length; i++) {
        if (todos[i].todoId === todoId) {
          matchTodo = todos[i];
          status.isCompleted = !matchTodo.isCompleted;
        }
      }

      const response = await fetch(url(`/api/todos/${todoId}`), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(status)
      });
      if (!response.ok) {
        throw new Error('Network response not OK', response.status);
      }
      const jsonData = await response.json();
      const newTodos = todos.map(item => {
        if (item.todoId === todoId) {
          return jsonData;
        }
        return item;
      });
      setTodos(newTodos);
    } catch (error) {
      setError(error);
  }
};

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}

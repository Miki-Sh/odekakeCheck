import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../stylesheets/ToDoList.css';
import ModalEdit from './ModalEdit';
import ModalNew from './ModalNew';

const ToDoList = () => {
  const [todoData, setTodoData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // APIからデータを取得する
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('/api/todos');
        setTodoData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTodos();
  }, []);

  const openEditModal = (index) => {
    setEditIndex(index);
    setModalOpen(true);
  };

  const deleteTodo = async (index) => {
    const todoId = todoData[index].id;
    try {
      await axios.delete(`/api/todos/${todoId}`);
      const updatedData = todoData.filter((_, i) => i !== index);
      setTodoData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="container-header">
      {newModalOpen && 
        <ModalNew
          setNewModalOpen={setNewModalOpen}
          setTodoData={setTodoData} />}
      <h1>おでかけ前のチェックリスト</h1>
      <button className="new-button" onClick={() => setNewModalOpen(true)}>+ やること追加</button>
    </div>
    <div className="index-table-wrapper">
      <div className="table-head">
        <span className="id-column">☑️</span>
        <span>やること</span>
      </div>
      <ul className="table-body">
        {todoData.map((todo, index) => (
          <li key={todo.id}>
            <div className='item-data'>
              <input type="checkbox" name="chk" />
              <span className="name-column">{todo.task}</span>
            </div>
            <div className='item-menu'>
              <button className='edit-btn' onClick={() => openEditModal(index)}>編集</button>
              <button className='del-btn' onClick={() => deleteTodo(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
      {modalOpen &&
        <ModalEdit
          index={editIndex}
          todoData={todoData}
          setTodoData={setTodoData}
          setModalOpen={setModalOpen} />}
    </div>
    </>
  );
};

export default ToDoList;
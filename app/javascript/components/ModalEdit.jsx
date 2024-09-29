import React, { useState } from 'react';
import axios from 'axios';
import '../stylesheets/Modal.css';

const ModalEdit = (props) => {
  const { index, todoData, setTodoData, setModalOpen } = props;
  const [updatedTask, setUpdatedTask] = useState(todoData[index].task);

  const editTodo = async (e) => {
    e.preventDefault();
    if (!updatedTask.trim()) return; // 空のタスクを防止
    const todoId = todoData[index].id;
    try {
      const res = await axios.put(`/api/todos/${todoId}`, { task: updatedTask });
      const updatedData = [...todoData];
      updatedData[index] = res.data;
      setTodoData(updatedData);
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='overlay' onClick={() => setModalOpen(false)}>
      <div className="container">
        <div className="item-form-wrapper" onClick={(e) => e.stopPropagation()}>
          <h1>おでかけチェックリスト編集</h1>
          <p className="form-label">↓に入力してください</p>
          <form method="post" onSubmit={editTodo}>
            <input
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
              className="itemName"
            />
            <input type="submit" value="更新する" />
          </form>
        </div>
        <button onClick={() => setModalOpen(false)} className="cancel-button">もどる</button>
      </div>
    </div>
  );
};

export default ModalEdit;
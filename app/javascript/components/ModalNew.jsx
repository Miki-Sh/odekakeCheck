import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../stylesheets/NewEdit.css';

const ModalNew = (props) => {
  const { setNewModalOpen, setTodoData } = props;
  const [task, setTask] = useState("");

  const saveTodo = async (e) => {
    e.preventDefault();
    if (!task.trim()) return; // 空のタスクを防止
    try {
      const res = await axios.post('/api/todos', { task });
      setTodoData(prev => [...prev, res.data]);
      setNewModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='overlay' onClick={() => setNewModalOpen(false)}>
      <div className="container">
        <div className="item-form-wrapper" onClick={(e) => e.stopPropagation()}>
          <h1>おでかけ前にすることを追加しよう！</h1>
          <p className="form-label">↓に入力してください</p>
          <form onSubmit={saveTodo}>
            <input
              type="text"
              className="itemName"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input type="submit" value="作成する" />
          </form>
        </div>
        <button onClick={() => setNewModalOpen(false)} className="cancel-button">もどる</button>
      </div>    
    </div>    
  );
};

export default ModalNew;
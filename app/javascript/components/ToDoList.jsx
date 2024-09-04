import React, { useState, useEffect } from 'react';
import '../stylesheets/ToDoList.css'
import ModalEdit from './ModalEdit';
import ModalNew from './ModalNew';

const ToDoList = () => {
  const [todoData, setTodoData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // ローカルストレージからデータを読み込む
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('todo')) || ['火の元を確認する','玄関の鍵を閉める'];
    setTodoData(storedData);
  }, []);

  // 編集モーダルを開く
  const openEditModal = (index) => {
    setEditIndex(index);
    setModalOpen(true);
  };

  // データを削除する
  const deleteTodo = (index) => {
    const updatedData = [...todoData];
    updatedData.splice(index, 1);
    setTodoData(updatedData);
    localStorage.setItem('todo', JSON.stringify(updatedData));
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
          <li key={index}>
            <div className='item-data'>
              <input type="checkbox" name="chk" />
              <span className="name-column">{todo}</span>
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

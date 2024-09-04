import React from 'react';
import '../stylesheets/NewEdit.css';

const ModalEdit = (props) => {
  const { index, todoData, setTodoData, setModalOpen } = props;

  const editTodo = () => {
    const updatedData = [...todoData];
    updatedData[index] = document.querySelector('.itemName').value;
    setTodoData(updatedData);
    localStorage.setItem('todo', JSON.stringify(updatedData));
    setModalOpen(false);
  };

  return(
    <div className='overlay' onClick={() => setModalOpen(false)}>
      <div className="container">
        <div className="item-form-wrapper" onClick={(e) => e.stopPropagation()}>
          <h1>おでかけチェックリスト編集</h1>
          <p className="form-label">↓に入力してください</p>
          <form method="post">
            <input type="text" defaultValue={todoData[index]} className="itemName" />
            <input type="submit" value="更新する" onClick={editTodo} />
          </form>
        </div>
        <button onClick={() => setModalOpen(false)} className="cancel-button">もどる</button>
      </div>
    </div>
  );
};

export default ModalEdit;

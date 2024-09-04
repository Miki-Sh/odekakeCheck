import React from 'react';
import '../stylesheets/NewEdit.css';

const ModalNew = (props) => {
  const { setNewModalOpen, setTodoData } = props;
  const saveTodo = () => {
    let existingData = localStorage.getItem('todo');
    if (!existingData) {
      existingData = ['火の元を確認する','玄関の鍵を閉める'];
    } else {
      existingData = JSON.parse(existingData);
    }
    const val = document.querySelector('.itemName').value;
    existingData.push(val);
    setTodoData(existingData);
    localStorage.setItem('todo', JSON.stringify(existingData));
    setNewModalOpen(false);
  };

    return(
      <div className='overlay' onClick={() => setNewModalOpen(false)}>
        <div className="container">
          <div className="item-form-wrapper" onClick={(e) => e.stopPropagation()}>
            <h1>おでかけ前にすることを追加しよう！</h1>
            <p className="form-label">↓に入力してください</p>
            <form method="post">
              <input type="text" className="itemName" />
              <input type="submit" value="作成する" onClick={saveTodo} />
            </form>
          </div>
          <button onClick={() => setNewModalOpen(false)} className="cancel-button">もどる</button>
        </div>    
      </div>    
    );
};

export default ModalNew;
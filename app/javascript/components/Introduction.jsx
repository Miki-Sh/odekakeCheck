import React from "react";
import '../stylesheets/Introduction.css'

const Introduction = (props) => {
  const setIntroOpen = props.setIntroOpen;
  return(
    <div className="overlay" onClick={() => setIntroOpen(false)}>
      <div className="top-wrapper">
        <div className="top-detail" onClick={(e) => e.stopPropagation()}>
          <h2 className="subtitle">おでかけ前のチェックリストアプリ</h2>
          <h1 className="title">おでかけチェック</h1>
          <p className="description">
            おでかけチェックは、おでかけ前にすることをリスト化するサービスです。
            <br /><br />
            おでかけ前にすることや持っていくものなどをリストにして、毎回チェックすることで、
            おでかけ先で「戸締り忘れた！」や「エアコンちゃんと消したかな？」という失敗や不安を無くしましょう！
          </p>
          <button className="index-button" 
            onClick={() => setIntroOpen(false)}>チェックリストを開く</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
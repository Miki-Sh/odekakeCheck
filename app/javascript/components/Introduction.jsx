import React, {useState} from 'react';
import '../stylesheets/Introduction.css'
import Login from './Login';
import Signup from './Signup';

const Introduction = (props) => {
  const {setUserData, setIsLoggedIn} = props;
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return(
    <div className="overlay">
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
          <div className="menu">
            <h2>はじめての方は新規登録をクリックしてください</h2>
              <button className='signup-btn' onClick={() => setSignupOpen(true)}>新規登録</button>
            <h2>それ以外の方はログインをクリックしてください</h2>
              <button className='login-btn' onClick={() => setLoginOpen(true)}>ログイン</button>
          </div>
        {signupOpen && <Signup setSignupOpen={setSignupOpen} setUserData={setUserData} setIsLoggedIn={setIsLoggedIn} />}
        {loginOpen && <Login setLoginOpen={setLoginOpen} setUserData={setUserData} setIsLoggedIn={setIsLoggedIn} />}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
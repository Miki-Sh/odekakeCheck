import React, { useState } from 'react';
import axios from 'axios';
import '../stylesheets/Modal.css';

const Login = (props) => {
  const setLoginOpen = props.setLoginOpen;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMessage("メールアドレスとパスワードを入力してください。");
      return;
    }
    try {
      const res = await axios.post('/api/login', { email: email, password: password });
      setLoginOpen(false);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("ログインに失敗しました。メールアドレスかパスワードが間違っていないか確認して、もう一度お試しください。");
      }
    }
  };

  return (
    <div className='overlay' onClick={() => setLoginOpen(false)}>
      <div className="container">
        <div className="item-form-wrapper" onClick={(e) => e.stopPropagation()}>
          <h1>メールアドレスとパスワードでログインしておでかけチェックをはじめましょう！</h1>
          <form onSubmit={login}>
            <label htmlFor="email">メールアドレス</label>
            <input type="text" className="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">パスワード</label>
            <input type="password" className="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="ログインする" />
          </form>
        </div>
        <button onClick={() => setLoginOpen(false)} className="cancel-button">もどる</button>
      </div>    
    </div>    
  );
};

export default Login;
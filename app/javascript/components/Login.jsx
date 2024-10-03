import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import '../stylesheets/Modal.css';

const Login = (props) => {
  const {setLoginOpen, setUserData, setIsLoggedIn} = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const login = async (e) => {
    e.preventDefault();
    const remChk = document.getElementsByName("rem-chk");
    let remSwitch
    remChk.checked ? remSwitch = 1 : remSwitch = 0 ;

    if (!email.trim() || !password.trim()) {
      setErrorMessage("メールアドレスとパスワードを入力してください。");
      return;
    }
    try {
      const res = await axios.post('/login', { session: { email: email, password: password, remember_me: remSwitch }});
      Cookies.set('token', res.data.remember_digest, { expires: 14 });
      setUserData(res.data);
      setIsLoggedIn(true);
    } catch (e) {
      if (e.response && e.response.data) {
        setErrorMessage(e.response.data);
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
          <p>{errorMessage}</p>
          <form onSubmit={login}>
            <label htmlFor="email">メールアドレス</label>
            <input type="text" className="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">パスワード</label>
            <input type="password" className="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="rememberme">
              <input type="checkbox" className="rem-chk" />
              <span className="remember">ログインしたままにする</span>
            </div>
            <input type="submit" value="ログインする" />
          </form>
        </div>
        <button onClick={() => setLoginOpen(false)} className="cancel-button">もどる</button>
      </div>    
    </div>    
  );
};

export default Login;
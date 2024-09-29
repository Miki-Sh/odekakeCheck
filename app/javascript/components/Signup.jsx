import React, { useState } from 'react';
import axios from 'axios';
import '../stylesheets/Modal.css';

const Signup = (props) => {
  const setSignupOpen = props.setSignupOpen;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !passwordConfirmation.trim()) return;
    try {
      const res = await axios.post('/api/signup', { email: email, password: password, password_confirmation: passwordConfirmation });
      setSignupOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='overlay' onClick={() => setSignupOpen(false)}>
      <div className="container">
        <div className="item-form-wrapper" onClick={(e) => e.stopPropagation()}>
          <h1>メールアドレスとパスワードを登録しておでかけチェックをはじめましょう！</h1>
          <form onSubmit={signup}>
            <label for="email">メールアドレス</label>
            <input type="text" className="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label for="password">パスワード</label>
            <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label for="passwordConfirmation">パスワード（↑と同じものをもう一度入力してください）</label>
            <input type="password" className="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            <input type="submit" value="作成する" />
          </form>
        </div>
        <button onClick={() => setSignupOpen(false)} className="cancel-button">もどる</button>
      </div>    
    </div>    
  );
};

export default Signup;
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
    if (!email.trim() || !password.trim() || !passwordConfirmation.trim()) {
      setErrorMessage("メールアドレスとパスワードを入力してください。");
      return;
    }
    try {
      const res = await axios.post('/api/signup', { email: email, password: password, password_confirmation: passwordConfirmation });
      setSignupOpen(false);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrorMessage(error.response.data.errors.join(", "));
      } else {
        setErrorMessage("登録に失敗しました。もう一度お試しください。");
      }
    }
  };

  return (
    <div className='overlay' onClick={() => setSignupOpen(false)}>
      <div className="container">
        <div className="item-form-wrapper" onClick={(e) => e.stopPropagation()}>
          <h1>メールアドレスとパスワードを登録しておでかけチェックをはじめましょう！</h1>
          <form onSubmit={signup}>
            <label htmlFor="email">メールアドレス</label>
            <input type="text" className="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">パスワード</label>
            <input type="password" className="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="passwordConfirmation">パスワード（↑と同じものをもう一度入力してください）</label>
            <input type="password" className="passwordConfirmation" autoComplete="new-password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            <input type="submit" value="登録する" />
          </form>
        </div>
        <button onClick={() => setSignupOpen(false)} className="cancel-button">もどる</button>
      </div>    
    </div>    
  );
};

export default Signup;
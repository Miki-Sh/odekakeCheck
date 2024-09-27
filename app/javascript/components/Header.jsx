import React, {useState} from 'react';
import '../stylesheets/header.css';
import Introduction from './Introduction';
// import Login from './Login';
// import Signup from './Signup';

const Header = () => {
  const [introOpen, setIntroOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  return(
    <header>
      <a className="header-logo" onClick={() => setIntroOpen(true)}>おでかけチェック</a>
      <div className='header-menu'>
        <button className='login-btn' onClick={() => setLoginOpen(true)}>ログイン</button>
        <button className='signup-btn' onClick={() => setSignupOpen(true)}>新規登録</button>
      </div>
      {introOpen && <Introduction setIntroOpen={setIntroOpen} />}
      {/* {loginOpen && <Login setLoginOpen={setLoginOpen} />} */}
      {/* {signupOpen && <Signup setSignupOpen={setSignupOpen} />} */}
    </header>
  );
};

export default Header;
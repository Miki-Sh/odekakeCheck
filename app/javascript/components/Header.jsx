import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../stylesheets/header.css';
import Introduction from './Introduction';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    const checkLoginStatus = () => {
      const tokenCookie = Cookies.get('token');
      console.log(session);
      if (tokenCookie) {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  },[]);

  const logout = async () => {
    try {
      const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      const res = await axios.delete('/logout', { headers: {'X-CSRF-Token': token}});
      Cookies.remove('token');
      setIsLoggedIn(false);
    } catch (e) {
      if (e.response && e.response.data) {
        setErrorMessage(e.response.data);
      } else {
        setErrorMessage("ログアウトに失敗しました。");
      }
    }
  };

  return(
    <header>
      { (!isLoggedIn) && <p>ログインして</p>}
      <p className="header-logo">おでかけチェック</p>
      <p>{errorMessage}</p>
      <div className='header-menu'>
        <button className='logout-btn' onClick={() => logout()}>ログアウト</button>
      </div>
      { !isLoggedIn && <Introduction userData={userData} setUserData={setUserData} setIsLoggedIn={setIsLoggedIn} />}
    </header>
  );
};

export default Header;
import React, { useEffect } from "react";
import '../stylesheets/Uncheck.css';

const Uncheck = () => {
  useEffect(() => {
    const uncheckBtn = document.getElementById("uncheck-btn"); 
    const el = document.getElementsByName("chk"); 
    const uncheckAll = () => { 
      for (let i = 0; i < el.length; i++) { 
        el[i].checked = false;
    }}; 
    uncheckBtn.addEventListener("click", uncheckAll, false);
        
    return () => {
      uncheckBtn.removeEventListener("click", uncheckAll, false);
    };
  }, []);
  
  return(
    <button id="uncheck-btn" className="uncheck-btn">全てのチェックを外す</button>
  );
}

export default Uncheck;
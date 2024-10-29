import React from 'react';
import style from "./signin.module.css";
import im from "../../assets/sign-up/Frame 72.png";
import logo from "../../assets/sign-up/Group 2.png"

const SignIn = () => {
  return (
    <div className={style.conta}>
      
      <div className={style.layout}>
        <div className={style.d1}>
         <img className={style.logo} src={logo} alt="" />
         <p className={style.mercado}>Mercado</p>
        </div>

        <p className={style.welcom}>WELCOM BACK!</p>

        <p className={style.acess}>Access Your Personal account by logging in</p>

        <div className={style.dinp1}>
          <input type="text" placeholder="enter your email or username" className={style.input} />
        </div>
        
        <div className={style.dinp2}>
          <input type="text" placeholder="enter your email or username" className={style.input} />
        </div>
        
        <div className={style.dinp3}>
          <input type="text" placeholder="enter your email or username" className={style.input} />
        </div>

      </div>

      
        <img className={style.im} src={im} alt='' />
      
    </div>
  )
}

export default SignIn

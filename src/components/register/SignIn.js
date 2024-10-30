import React, { useState } from 'react';
import style from "./signin.module.css";
import im from "../../assets/sign-up/Frame 72.png";
import logo from "../../assets/sign-up/Group 2.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { IoIosEye } from "react-icons/io";
// import { IoIosEyeOff } from "react-icons/io";
// import open from "../../assets/6.png";
// import close from "../../assets/4.png";

const SignIn = () => {


    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
};

  return (
    <div className={style.conta}>
      
        <div className={style.layout}>

          <div className={style.d1}>
           <img className={style.logo} src={logo} alt="" />
           <p className={style.mercado}>Mercado</p>
          </div>
  
          <p className={style.welcom}>WELCOM BACK!</p>
  
          <p className={style.acess}>Access Your Personal account by logging in</p>
  
          <form action="https://your-backend-endpoint.com/submit" method="post">

            <div className={style.dinp1}>
              <label htmlFor="Email" className={style.label1}> Email or mobile number</label>
              <input
              value='' 
              name="Email" 
              type="text" 
              id='Email' 
              placeholder="Enter your email or username" 
              required 
              className={style.input1} />
            </div>

            <div className={style.dinp1}>
              <label htmlFor="Pass" className={style.label2}> Password</label>
              <input 
              value=""
              name="Pass"
              type={showPassword ? 'text' : 'password'}
              id='Pass'
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              required
              className={style.input1}>
               {/* <img
                // src={showPassword ? {open} : {close} } > 
                </img> */}
                </input>

                <button className={style.passicon} onClick={toggleShowPassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>

            {/* <div>
              <input ></input>
            </div> */}

          </form>
        </div>
      
      
        <img className={style.im} src={im} alt='' />
      
    </div>
  )
}

export default SignIn





//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div>
//             <label htmlFor="password">Password:</label>
//             <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 required
//             />
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={showPassword}
//                     onChange={toggleShowPassword}
//                 /> Show Password
//             </label>
//             <button type="submit">Submit</button>
//         </div>
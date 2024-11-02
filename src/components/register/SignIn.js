import React, { useState } from "react";
import style from "./signin.module.css";
import im from "../../assets/sign-up/Frame 72.png";
import logo from "../../assets/sign-up/Group 2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { IoIosEye } from "react-icons/io";
// import { IoIosEyeOff } from "react-icons/io";
// import open from "../../assets/6.png";
// import close from "../../assets/4.png";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.conta}>
      <div className={style.layout86}>
        <div className={style.frame85}>
          <div className={style.frame81}>
            <img className={style.group2} src={logo} alt="" />
            <p className={style.mercado}>Mercado</p>
          </div>

          <div className={style.frame84}>
            <p className={style.welcom}>WELCOM BACK!</p>
            <p className={style.acess}>
              Access Your Personal account by logging in
            </p>
          </div>
        </div>

        <div className={style.frame64}>
          <form
            action="https://your-backend-endpoint.com/submit"
            method="post"
            className={style.frame63}
          >
            <div className={style.frame60}>
              <div className={style.frame55}>
                <div className={style.frme53}>
                  <label htmlFor="Email" className={style.lab1}>
                    {" "}
                    Email or mobile number
                  </label>
                  <div className={style.group21}>
                    <input
                      name="Email"
                      type="text"
                      id="Email"
                      placeholder="Enter your email or username"
                      required
                      className={style.input1}
                    />
                  </div>
                </div>

                <div className={style.frme54}>
                  <label htmlFor="password" className={style.lab1}>
                    {" "}
                    password
                  </label>

                  <div className={style.group22}>
                    <div>
                      <input
                        name="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={style.input2}
                      />

                      <span
                      className={style.eyeicon }
                        checked={showPassword}
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaEyeSlash className={style.eyeicon} />
                        ) : (
                          <FaEye className={style.eyeicon} />
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={style.group4}></div>
              </div>

              <div className={style.group4}>
                <div className={style.frame59}>
                  <div className={style.frame58}>
                    <input
                      className={style.rememberinp}
                      type="radio"
                      id="Remember"
                      name="gender"
                      value="Remember"
                    />
                    <label className={style.remembertex} for="Remember">
                      Remember me
                    </label>
                  </div>
                  <Link className={style.forget}>Forget password</Link>
                </div>
              </div>
            </div>
            <div className={style.frame62}>
              <div className={style.frame61}>
                <p className={style.signIn}>
                  sign in
                </p>
              </div>
              <div className={style.frame6}></div>
            </div>
          </form>

          <div className={style.frame87}></div>
        </div>
      </div>

      <img className={style.im} src={im} alt="" />
    </div>
  );
};

export default SignIn;

//
//     return (
//         <div>
//             <input
//                 type={showPassword ? 'text' : 'password'}
//                 id="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 required
//             />
//
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={showPassword}
//                     onChange={toggleShowPassword}
//                 /> Show Password
//             </label>
//             <button type="submit">Submit</button>
//         </div>

/*
const [password, setPassword] = useState('');


const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const toggleShowPassword = () => {
setShowPassword(!showPassword);
};*/

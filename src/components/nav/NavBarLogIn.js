import React from 'react'
import {Link} from  "react-router-dom";
import style from "./nav.module.css"
import icon1 from "../../assets/2.png"
import icon2 from "../../assets/4.png"
import icon3 from "../../assets/6.png"
import icon4 from "../../assets/emojione_flag-for-egypt.png"
import iconSearch from "../../assets/Symbol.png"
import { IoIosArrowDown } from "react-icons/io";
import { FaStore } from "react-icons/fa6";
import { RiMapPinLine } from "react-icons/ri";

// import { MdOutlineShoppingCart } from "react-icons/md";

const NavBarLogIn = () => {
  return (
    
    <div className={style.body}>
      
      <div className={style.row0}>
        
        <div className={style.special}>
          
          <p className={style.p1}>special</p>
        </div>
        <div>
        
         <p className={style.r0p}>
           Get 10% <span>DISCOUNT</span> for first order
         </p>
        </div>
         <Link to='/register' className={style.linRegi}><p>Register Now</p></Link>
      </div>

      <div className={style.row1}>

        <div className={style.part1}>
          
          <div className={style.el1}>
            <img className={style.icon1} src={icon1} alt=''/>
            <p className={style.r1p}>Sell On Mercado</p>
          </div>
          <div className={style.el2}>
            <img  className={style.icon2} src={icon2} alt=''/>
            <p className={style.r1p}>Order Tracking</p>
          </div>
          <div className={style.el3}>
            <img className={style.icon3} src={icon3} alt=''/>
            <p className={style.r1p}>Recently Viewed</p>
          </div>
        </div>
        <div className={style.part2}>
          <div className={style.el4}>
            <p>EGP</p>
            <IoIosArrowDown className={style.arro1}/>
            
          </div>
          <div className={style.el5}>
         <img className={style.icon4} src={icon4} alt=''/>
            <p>ENG</p>
            <IoIosArrowDown className={style.arro2} />
          </div>
        </div>
      </div>
    
      <div className={style.pr} />

      <div className={style.row2}>

        <div className={style.r2d1}>
          <Link to='/'>
          <FaStore className={style.r2icon} />
          </Link>

          <Link className={style.linkhome} to='/'>
          <p className={style.mercado}>Mercado</p>
          </Link>
        </div>

        <div className={style.r2d2}>
          <>
          <p>Demos</p>
          <IoIosArrowDown className={style.arro3}/>
          </>
          <>
          <p>Products</p>
          <IoIosArrowDown className={style.arro3}/>
          </>
          
          <Link to='/contact' className={style.content}><p>Contact</p></Link>
          
          <Link to='/about' className={style.about}><p>About</p></Link>

        </div>

        <div className={style.r2d3}>
          
          <div className={style.navallcateg}>
            All Categories
          <IoIosArrowDown className={style.arro3}/>
          </div>
          
          <>
          <input type="search" className={style.inputsearch} placeholder="Search anything..."/>
          <div className={style.searchdiv}>
            <img className={style.iconSearch} src={iconSearch} alt='' />
          </div>
          </>
        </div>

        <div className={style.r2d4}>
          <div className={style.diliver}>
            <RiMapPinLine className={style.dilvericon} />
            <p className={style.dilivp}>
              <span className={style.dilivspan}>
              diliver to {" "}
              </span>
               Egypt
            </p>
            
          </div>
          <RiMapPinLine className={style.dilvericon2} />
          <RiMapPinLine className={style.dilvericon3} />
        </div>



      </div>
      
      
    </div>
  )
}

export default NavBarLogIn










// // import { Link } from 'react-router-dom'

// const NavBarLogIn = () => {
//   return (


//         <Row  className={}>
             
//             <div  className={style.el1}>

//             </div>     
//         </Row>
//         <Row  className={style.row2}>


//         </Row>


// export default NavBarLogIn

// {/*  */}

// {/* 
// //         <Link to='/'>
// //         <h3>logo</h3>
// //         </Link>
// //         <Link to='/cart'  className={style.cart}>
// //         </Link>  */}



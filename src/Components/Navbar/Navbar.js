import React from 'react'
import './Navbar.css';
import { BsFillBagFill} from "react-icons/bs";

const Navbar = () => {
  return (
   <>
        <nav>
            <div className="main">
            <div className="logo">
                <h2>ecomerce</h2>
            </div>

                <div className="icon">
                <BsFillBagFill className='icon-c' />

                    <span className='counter'>5</span>
                </div>
            </div>
        </nav>
   </>
  )
}

export default Navbar;
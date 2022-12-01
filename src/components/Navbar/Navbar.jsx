import React from 'react';
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { useState } from 'react';
import { motion} from 'framer-motion/dist/framer-motion';

import './Navbar.scss';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo' />
        </div>
        <ul className='app__navbar-links '>
            {['home', 'about', 'work', 'skills', 'contact'].map((items)=> (
                <li key={`key-${items}`} className='app__flex p-text'>
                    <div />
                    <a href={`#${items}`}>{items}</a>
                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={()=> setToggle(true)} />
            
            { toggle && (
                <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} >
                    <HiX onClick={()=> setToggle(false)}/>
                    <ul>
                        {['home', 'about', 'work', 'skil', 'contact'].map((items)=> (
                            <li key={items}>
                                <a href={`#${items}`} onClick={() => setToggle(false)}>{items}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ) }
        </div>
    </nav>
  )
}

export default Navbar;
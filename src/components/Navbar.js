import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
// import './Navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components';



function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <Nav>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                   <div className="search">
                       <input type="text"/>
                   </div>
                    <div className="signbtn">
                    <Link to="/signin">
                        Signin
                            </Link>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </Nav>
    );
}

export default Navbar;

const Nav = styled.nav`
    background-color: #008ecc;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
.search{
    padding:10px;
    width:300px;
}
.search input{
    width:100%;
    
}

.signbtn{
   padding:20px;

}
.signbtn a{
    text-decoration:none;
    color:white;
    font-size:1.2rem;
    

}
.menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
}

.nav-menu {
    background-color:#008ecc;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
}

.nav-menu.active {
    left: 0;
    transition: 350ms;
}

.nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
}

.nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
}


.nav-text a:hover {
    background-color: #1a83ff;
}

.nav-menu-items {
    width: 100%;
}

.navbar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
}

span {
    margin-left: 16px;
}
.header-nav{
  list-style:none;
  color:white;
  display:inline-flex;
  margin-top: 25px;
  font-size: 1.2rem;
  
}

.header-nav li{
  padding:6px 0px 8px 8px;
}
.header-nav a{
  text-decoration:none;
  color:white;
  font-size: 18px;
}

.header-nav input{
  width:50vh;
}

`
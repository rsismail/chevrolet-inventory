import React from 'react'
import styled from "styled-components";
import logos from '../images/EV.svg'
import Links from '../components/Links'
import menubar from '../images/Menu.svg'
import cancel from '../images/cancelwhite.svg'
import {useAuth} from '../contexts/AuthContext'
import Media from 'react-media'

import Menudown from './Menu'

const Navbar = () => {
    const {menufunction,menuDropDown}=useAuth()
    return (
        <Nav className="navbar">
        <div>
            <img src={logos}className="logo" alt="logo"/>
        </div>

       <Media query="(min-width: 1024px)" render={() =>
          (
            <div className="link1152">
            <Links className='linkNone'/>
            </div>
          )}>
       
       </Media>
        
        <div className="leftnav">
            <div className="left">
<h4>MY ACCOUNT</h4>
            </div>
            <Media queries={{
                small:"(min-width: 320px) and (max-width: 767px)" ,
                large:"(min-width: 768px)"
            }}>
                {matches=>(<>
                {matches.small && <div>
                <img src={menuDropDown?cancel:menubar} alt='menus'className='Menus' onClick={menufunction}/>
            </div>}
            {matches.large && <div>
                <img src={menubar} alt='menus'className='Menus' onClick={menufunction}/>
            </div>}
                
                
                </>)}
       
       </Media>
        
            
        </div>
        </Nav>
    )
}

export default Navbar
const Nav = styled.nav`
position:fixed;
top:0;
right:0;
left:0;
z-index:3;
background:#202020;
display:flex;
// width: 100%;
height: 48px;
color:red;
align-items:center;
justify-content:space-between;





`;
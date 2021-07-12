import { Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import './navbar.scss'
import 'boxicons'
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    const searchOpen = () => {
        let search = document.querySelector('.searchBox')
        search.classList.toggle("searchOpen")
    }
    const openNav = () => {
        let nav = document.querySelector('.navIn ul')
        let button = document.querySelector('.burger')
        nav.classList.toggle('openNav')
        button.classList.toggle('rotateBtn')
    }
    return (
        <div>
            {/* <nav>
                <div className="container navBar">
                    <span className="logo">Logo</span>
                    <div className="navin">
                        <SystemUpdateAltRounded onClick={openNav} className="downArrow " />
                        <div className="navbarNav">
                            <span>Latest</span>
                            <span>Posts</span>
                            <span>Blog</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div className="searchArea">
                        <input name="search" id="search" className="searchBox" placeholder="Search" />
                        <Search onClick={searchOpen} className="search" fontSize={'large'} />
                    </div>
                </div>
            </nav> */}
            <div className="header">
                <div className="nav">
                    <div className="burger">
                       <MenuIcon onClick={openNav} fontSize="large" className="burgerBtn "/>
                    </div>
                    <div className="navIn">
                        <ul>
                            
                            <li>
                                <box-icon name='notification' ></box-icon>
                                <span className="">Latest</span>
                            </li>
                            <li>
                                <box-icon name='comment-add' ></box-icon>
                                <span className="">Posts</span>
                            </li>
                            <li>
                                <box-icon type='logo' name='blogger'></box-icon>
                                <span className="">Blog</span>
                            </li>
                            <li>
                                <box-icon name='message'></box-icon>
                                <span className="">Contact</span>
                            </li>
                        </ul>
                    </div>
                    <div className="searchArea">
                        <input name="search" id="search" className="searchBox" placeholder="Search" />
                        <Search onClick={searchOpen} className="search" fontSize={'large'} />
                    </div>
                </div>
            </div>
        </div>
        

        // <>
        //     <div className="header">

        //         <div className="logo">
        //             <div className="logoText">Meet Blog</div>
        //         </div>
        //         <ul className="navbarNav">
        //             <li>
        //                 <div className="searchArea">
        //                     <input name="search" id="search" className="searchBox" placeholder="Search" />
        //                     <Search onClick={searchOpen} className="search" fontSize={'large'} />
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </>

    )
}
export default Navbar

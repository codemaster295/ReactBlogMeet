import React, { useState } from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'

function Sidebar() {
    
    const openNav = () => {
        
        const sidebar = document.querySelector('.sidebar');
        const app = document.querySelector(".blogbox");
        // app.classList.toggle("openSide")

        sidebar.classList.toggle("open")
        console.log(sidebar)
        const menuBtnChange = () => {
            let sidebar = document.querySelector('.sidebar');
            let closeBtn = document.querySelector('.closeBtn')
            if (sidebar.classList.contains("open")) {
                closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
            } else {
                closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
            }
        }
        menuBtnChange()
    }
    const searchOpen = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle("open")
        const menuBtnChange = () => {
            let sidebar = document.querySelector('.sidebar');
            let closeBtn = document.querySelector('.closeBtn')
            if (sidebar.classList.contains("open")) {
                closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
            } else {
                closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
            }
        }
        menuBtnChange()
    }
     
    
    return (

        <div className="sidebar animationClass">
            <div className="logo-details">
                <i class='bx bxl-blogger icon'></i>
                <div className="logo_name">BlogDaily</div>
                <i className='bx bx-menu closeBtn' onClick={openNav}  ></i>
            </div>
            <ul className="nav-list">
                <li>
                    <i className='bx bx-search' onClick={searchOpen}></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li>
                <Link to='ReactBlog'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-react' ></i>
                            <span className="links_name">React</span>
                        </span>
                        <span className="tooltip">React</span>
                    </li>
                </Link>
                <Link to='/Angular'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-angular' ></i>
                            <span className="links_name">Angular</span>
                        </span>
                        <span className="tooltip">Angular</span>
                    </li>
                </Link>
                <Link to='/Shopify'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-shopify' ></i>
                            <span className="links_name">Shopify</span>
                        </span>
                        <span className="tooltip">Shopify</span>
                    </li>
                </Link>
                <Link to='/BootStrap'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-bootstrap' ></i>
                            <span className="links_name">Bootstrap</span>
                        </span>
                        <span className="tooltip">Bootstrap</span>
                    </li>
                </Link>
                <Link to='/Python'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-python' ></i>
                            <span className="links_name">Python</span>
                        </span>
                        <span className="tooltip">Python</span>
                    </li>
                </Link>
                <Link to='/Magento'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-magento' ></i>
                            <span className="links_name">Magento</span>
                        </span>
                        <span className="tooltip">Magento</span>
                    </li>
                </Link>
                <Link to='/WordPress'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-wordpress' ></i>
                            <span className="links_name">WordPress</span>
                        </span>
                        <span className="tooltip">WordPress</span>
                    </li>
                </Link>
                <Link to='/VueJs'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-vuejs' ></i>
                            <span className="links_name">VueJS</span>
                        </span>
                        <span className="tooltip">VueJS</span>
                    </li>
                </Link>
                <Link to='/Redux'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-redux' ></i>
                            <span className="links_name">Redux</span>
                        </span>
                        <span className="tooltip">Redux</span>
                    </li>
                </Link>
                <Link to='/NodeJs'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-nodejs' ></i>
                            <span className="links_name">Nodejs</span>
                        </span>
                        <span className="tooltip">Nodejs</span>
                    </li>
                </Link>
                <Link to='/Github'>
	
                    <li>
                        <span className="link">
                            <i class='bx bxl-git' ></i>
                            <span className="links_name">Github</span>
                        </span>
                        <span className="tooltip">Github</span>
                    </li>
                </Link>
                <Link to='/Sass'>
                    <li>
                        <span className="link">
                            <i class='bx bxl-sass' ></i>
                            <span className="links_name">Sass</span>
                        </span>
                        <span className="tooltip">Sass</span>
                    </li>
                </Link>
                <li>
                    <span className="link">
                            <i class='bx bxl-wordpress Meet'></i>
                            <span className="links_name">Meet Moradiya</span>
                    </span>
                    <span className="tooltip">Meet Moradiya</span>
                </li>
            </ul>
        </div>


    )
}

export default Sidebar

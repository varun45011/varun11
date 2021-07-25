import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuactive, setMenuactive] = useState(false);
    return (
        <>
            <header className="main_header">
                <div className="ctm_cont">
                    <div className="inner_header">
                        <div className="logo_wrap">
                            <NavLink to="/" >
                                <div className="logo_area">
                                    <div className="logo_img"><img src="/assets/images/logo.jpg" alt="" /></div>
                                    <div className="logo_cont">
                                        <h5>Varun Sareen</h5>
                                        <p>Web/Graphic Designer</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <nav className={menuactive ? "nav_menu active_menu" : "nav_menu"}>
                            <button className="menutoggle_btn" onClick={() => { setMenuactive(!menuactive); }}>
                                <span className="menu_btn fa fa-bars"></span>
                            </button>
                            <ul className="menu_area">
                                <li className="menu_items"><NavLink exact className="menu_link" activeClassName=" active" to="/" ><span className="menu_text">Home</span> <span className="fa fa-home"></span></NavLink></li>
                                <li className="menu_items"><NavLink exact className="menu_link" activeClassName=" active" to="/" ><span className="menu_text">About</span> <span className="fa fa-user"></span></NavLink></li>
                                <li className="menu_items"><NavLink exact className="menu_link" activeClassName=" active" to="/" ><span className="menu_text">Skills</span> <span className="fa fa-cogs"></span></NavLink></li>
                                <li className="menu_items"><NavLink exact className="menu_link" activeClassName=" active" to="/" ><span className="menu_text">Portfolio</span> <span className="fa fa-suitcase"></span></NavLink></li>
                                <li className="menu_items"><NavLink exact className="menu_link" activeClassName=" active" to="/" ><span className="menu_text">Contact</span> <span className="fa fa-comments-o"></span></NavLink></li>
                            </ul>
                            <span className="stretch_bar"></span>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

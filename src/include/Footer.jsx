import React from 'react';
import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className="main_footer">
                <div className="ctm_cont">
                    <div className="footer_inner">
                        <div className="footer_social_links">
                            <ul className="social_links_area">
                                <li className="social_items">
                                    <NavLink exact to="https://www.facebook.com/"><span className="fa fa-facebook"></span>Facebook</NavLink>
                                </li>
                                <li className="social_items">
                                    <NavLink exact to="https://www.facebook.com/"><span className="fa fa-twitter"></span>Twitter</NavLink>
                                </li>
                                <li className="social_items">
                                    <NavLink exact to="https://www.facebook.com/"><span className="fa fa-instagram"></span>Instagram</NavLink>
                                </li>
                                <li className="social_items">
                                    <NavLink exact to="https://www.facebook.com/"><span className="fa fa-linkedin"></span>Linkedin</NavLink>
                                </li>
                                <li className="social_items">
                                    <NavLink exact to="https://www.facebook.com/"><span className="fa fa-github"></span>Github</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <p className="copyright_text">© Copyright Reserved. Designed by Varun Sareen</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

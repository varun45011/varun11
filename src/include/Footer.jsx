import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className="main_footer">
                <div className="ctm_cont">
                    <div className="footer_inner">
                        <div className="footer_social_links">
                            <ul className="social_links_area">
                                <li className="social_items">
                                    <Link exact to="https://www.facebook.com/"><span className="fa fa-facebook"></span>Facebook</Link>
                                </li>
                                <li className="social_items">
                                    <Link exact to="https://www.facebook.com/"><span className="fa fa-twitter"></span>Twitter</Link>
                                </li>
                                <li className="social_items">
                                    <Link exact to="https://www.facebook.com/"><span className="fa fa-instagram"></span>Instagram</Link>
                                </li>
                                <li className="social_items">
                                    <Link exact to="https://www.facebook.com/"><span className="fa fa-linkedin"></span>Linkedin</Link>
                                </li>
                                <li className="social_items">
                                    <Link exact to="https://www.facebook.com/"><span className="fa fa-github"></span>Github</Link>
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

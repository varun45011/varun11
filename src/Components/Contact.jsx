import React from 'react';
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="contact_section section_padding">
            <div className="ctm_cont">
                <div className="cmn_heading">
                    <h2 className="heading">Get <span>In Touch</span></h2>
                    <p className="info">I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</p>
                </div>
                <div className="contact_details">
                    <div className="inner_row">
                        <div className="ctm_col_4">
                            <div className="contact_box center dark_bg">
                                <span className="fa fa-envelope-o"></span>
                                <h4>Email Us</h4>
                                <Link to="mailto:varunsareen11@gmaiil.com">varunsareen11@gmaiil.com</Link>
                            </div>
                        </div>
                        <div className="ctm_col_4">
                            <div className="contact_box center dark_bg">
                                <span className="fa fa-phone"></span>
                                <h4>Call Us</h4>
                                <Link to="tel:7087702180">7087702180</Link>
                            </div>
                        </div>
                        <div className="ctm_col_4">
                            <div className="contact_box center dark_bg">
                                <span className="fa fa-bullhorn"></span>
                                <h4>Follow Us</h4>
                                <ul className="social_media">
                                    <li><Link to=""><span className="fa fa-facebook"></span></Link></li>
                                    <li><Link to=""><span className="fa fa-twitter"></span></Link></li>
                                    <li><Link to=""><span className="fa fa-instagram"></span></Link></li>
                                    <li><Link to=""><span className="fa fa-linkedin"></span></Link></li>
                                    <li><Link to=""><span className="fa fa-github"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

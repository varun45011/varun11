import React from 'react';

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
                                <a href="mailto:varunsareen11@gmaiil.com">varunsareen11@gmaiil.com</a>
                            </div>
                        </div>
                        <div className="ctm_col_4">
                            <div className="contact_box center dark_bg">
                                <span className="fa fa-phone"></span>
                                <h4>Call Us</h4>
                                <a href="tel:7087702180">+91 70877-02180</a>
                            </div>
                        </div>
                        <div className="ctm_col_4">
                            <div className="contact_box center dark_bg">
                                <span className="fa fa-bullhorn"></span>
                                <h4>Follow Us</h4>
                                <ul className="social_media">
                                    <li><a href="https://www.facebook.com/varun.sareen.54"><span className="fa fa-facebook"></span></a></li>
                                    <li><a href="https://twitter.com/VarunSareen13"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="https://www.instagram.com/official_varun_sareen/"><span className="fa fa-instagram"></span></a></li>
                                    <li><a href="https://www.linkedin.com/in/varun-sareen/"><span className="fa fa-linkedin"></span></a></li>
                                    <li><a href=""><span className="fa fa-github"></span></a></li>
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

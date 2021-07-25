import React from "react";
const About = () => {
    return (
        <div className="about_sec section_padding dark_bg">
            <div className="ctm_cont">
                <div className="cmn_heading">
                    <h2 className="heading">A few things <span>about me.</span></h2>
                    <p className="info">I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                </div>
                <div className="about_cont">
                    <div className="inner_row">
                        <div className="ctm_col_8">
                            <div className="about_left">
                                <div className="inner_row">
                                    <div className="ctm_col_6">
                                        <div className="about_box center">
                                            <h1 className="experience_heading  "><span className="fa fa-star"></span> 3 <span className="fa fa-star"></span></h1>
                                            <p className="about_cont_info">Three years of experience in web & Graphic Designs</p>
                                        </div>
                                    </div>
                                    <div className="ctm_col_6">
                                        <div className="about_box center">
                                            <p className="about_cont_info">Delivered projects in a variety of fields</p>
                                            <ul className="about_tags">
                                                <li className="about_tag_item">E-commerce</li>
                                                <li className="about_tag_item">Donation</li>
                                                <li className="about_tag_item">HealthCare</li>
                                                <li className="about_tag_item">Online Learning</li>
                                                <li className="about_tag_item">Blog</li>
                                                <li className="about_tag_item">Spices</li>
                                                <li className="about_tag_item">Personal</li>
                                                <li className="about_tag_item">Holding</li>
                                                <li className="about_tag_item">Auction</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ctm_col_12"><div className="about_box"></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="ctm_col_4">
                            <div className="about_box">
                                <p className="about_cont_info center">Versatile in working on diverse types of digital products</p>
                                <ul className="about_skill_pts">
                                    <li><span className="fa fa-laptop"></span>App Designs</li>
                                    <li><span className="fa fa-laptop"></span>Website Designs</li>
                                    <li><span className="fa fa-laptop"></span>Branding</li>
                                    <li><span className="fa fa-laptop"></span>Responsive Web Designs</li>
                                    <li><span className="fa fa-laptop"></span>Wordpress/ Shopify Development</li>
                                    <li><span className="fa fa-laptop"></span>Web Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;

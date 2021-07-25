import React from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom'
function Banner() {
    // const location = useLocation();
    // console.log(location)
    return (
        <div className="banner_sec section_padding">
            <div className="ctm_cont">
                <div className="inner_row">
                    <div className="ctm_col_6">
                        <div className="banner_text_sec">
                            <h4 className="banner_sub_heading">HI THERE !</h4>
                            <h1 className="banner_heading">I Am Web & Graphic Designer</h1>
                            <p className="banner_info">I'm a Freelance UI/UX Designer and Developer based in Punjab, India. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                            <div className="banner_btn_group">
                                <Link to="#" className="btn"><span className="fa fa-download"></span> Download CV</Link>
                                <Link to="#" className="btn banner_btn2"><span className="fa fa-user"></span> Contact Me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="ctm_col_6">
                        <div className="banner_img_sec">
                            <img src="/assets/images/banner_img.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;

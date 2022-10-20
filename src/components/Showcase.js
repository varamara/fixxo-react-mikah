import React from 'react'
import LeftImage from '../assets/images/LeftImage.svg';
import RightImage from '../assets/images/RightImage.svg';
 

const Showcase = () => {
  return (
    <section className="__showcase">
        <div className="__container">
            <img className="showcase_img" src={LeftImage} alt="" />
            <div className="showcase_mid">
              <h2>SALE UP</h2>
              <h1>To 50% Off</h1>
              <div className="theme_btn">
                <div className="btn_border_top"></div>
                <p>SHOP NOW</p>
                <div className="btn_border_bottom"></div>
              </div>
            </div>
            <img className="showcase_img" src={RightImage} alt="" />
        </div>
        </section>
  )
}

export default Showcase
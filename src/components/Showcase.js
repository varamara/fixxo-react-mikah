import React from 'react'
import LeftImage from '../assets/images/LeftImage.svg';
import RightImage from '../assets/images/RightImage.svg';
 

const Showcase = () => {
  return (
    <section className="__showcase">
        <div className="__container">
            <img className="showcase_img" src={LeftImage} alt="placeholder" />
            <div className="showcase_mid">
              <h1>SALE UP</h1>
              <h2>To 50% Off</h2>
              <p>Online shopping free home delivery over $100</p>
              <div className="theme_btn">
                <div className="btn_border_top"></div>
                <p>SHOP NOW</p>
                <div className="btn_border_bottom"></div>
              </div>
            </div>
            <img className="showcase_img" src={RightImage} alt="placeholder" />
        </div>
        </section>
  )
}

export default Showcase
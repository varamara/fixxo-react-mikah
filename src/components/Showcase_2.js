import React from 'react'
import pamela from '../assets/images/pamela.svg';
import concious from '../assets/images/conscious.svg';


const Showcase_2 = () => {
  return (
    <section className="__showcase_2">
            <img className="showcase_img" src={pamela} alt="placeholder" />
             <div className="top_picks">
                <h1>Pamela Reif's </h1>
            <h1>Top Picks</h1>
            <div className="dark_btn">
                <div className="btn_border_top"></div>
                <p>SHOP NOW</p>
                <div className="btn_border_bottom"></div>
            </div>
        </div>
        <img className="showcase_img" src={concious} alt="placeholder" />
            <div className="conscious"> 
            <h1>Let's Be</h1>
            <h1>Conscious</h1>
            <div className="light_btn">
                <div className="btn_border_top"></div>
                <p>FLASH SALE</p>
                <div className="btn_border_bottom"></div>
            </div>
        </div>
    </section>
  )
}

export default Showcase_2
import React from 'react'
import credit_card from '../assets/icones/credit_card.svg';
import customer_service from '../assets/icones/customer_service.svg';
import delivery_truck from '../assets/icones/delivery_truck.svg';

const Support = () => {
  return (
    <section className='__support'>
       <div className="btn_container">
            <div className="support_options">
                <a href="#" className='__shop_btn'><img className="customer_service" src={customer_service} alt="icon"/></a>
                <a href=""><h1>Customer Support</h1></a>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="support_options">
                <a href="#" className='__shop_btn'><img className="credit_card" src={credit_card} alt="icon"/></a>
                <a href=""><h1>Secured Payment</h1></a>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="support_options">
                <a href="#" className='__shop_btn'><img className="delivery_truck" src={delivery_truck} alt="icon"/></a>
                <a href=""><h1>Free Delivery</h1></a>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="support_options">
                <a href="#" className='__shop_btn'><img className="delivery_truck" src={delivery_truck} alt="icon"/></a>
                <a href=""><h1>Customer Support</h1></a>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default Support
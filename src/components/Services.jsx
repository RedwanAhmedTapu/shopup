import React from 'react';
import styled from 'styled-components';
import {CiDeliveryTruck} from "react-icons/ci";
import {GiFireShield} from "react-icons/gi";
import {RiSecurePaymentFill} from "react-icons/ri";
import {BiDonateHeart} from "react-icons/bi";


const Services = () => {
    const Services=styled.section`
    padding: 9rem 12rem;
    .services{
        width: 100%;
        height:30rem;
        background: #fff;
        display: grid;
        gap:5rem;
        .boxService{
            gap: 5rem;
            background-color:#e9e9e9;
            border-radius: 2rem;
            opacity: 0.8;
        }
        .serviceIcon{
                width: 8rem;
                height: 8rem;
                font-size: 5rem;
                border-radius:50%;
                background-color: #fff;
                color: blue;
                display: flex;
                justify-content: center;
                align-items: center;
               
            }
            .textService{
                background: -webkit-linear-gradient(#39B5E0, #301E67);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 1.8rem;
                    font-weight: 400;
            }
        .service1{
            grid-row:1/3;
            grid-column: 1/2;
            display: flex;
            gap:1.5rem;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 3rem;
        }
        .service2{
            grid-row: 1/2;
            grid-column: 2/3;
            display: flex;
            gap:1.5rem;
            justify-content: center;
            align-items: center;
        }
        .service3{
            grid-row: 2/3;
            grid-column: 2/3;
            display: flex;
            gap:1.5rem;
            justify-content: center;
            align-items: center;
        }
        .service4{
            grid-row: 1/3;
            grid-column: 3/4;
            display: flex;
            gap:1.5rem;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 3rem;
        }
    }
        /* mobile responsive */
        @media (max-width: 743px) {
            padding: 25rem 2rem;
            .service1,.service4{
                width: 100%;
                height: 120%;
                padding: 6rem;
            }
            .service2,.service3{
                width: 100%;
                height: 20%;
                padding: 6rem;
            }

            .services{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }

    
        
    `
  return (
    <Services>
    <div className="services">
        <div className="boxService service1">
          <div className='serviceIcon trucIcon'><CiDeliveryTruck /></div>
          <p className="textService">Super Fast and Free Delivery</p>
        </div>
        <div className="boxService service2">
        <div className='serviceIcon trucIcon'><GiFireShield /></div>
          <p className="textService">Non-contact Shipping</p>
        </div>
        <div className="boxService service3">
        <div className='serviceIcon trucIcon'><RiSecurePaymentFill /></div>
          <p className="textService">Money-back Guaranteed</p>
        </div>
        <div className="boxService service4">
        <div className='serviceIcon trucIcon'><BiDonateHeart /></div>
          <p className="textService">Super Secure Payment System</p>
        </div>
    </div>
    </Services>
  )
}

export default Services
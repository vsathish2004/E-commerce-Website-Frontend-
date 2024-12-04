import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div id="offers">
        <div id='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>

        </div>
        <div id='offers-right'>
            <img src={exclusive_image} alt="" />

        </div>
    </div>
  )
}

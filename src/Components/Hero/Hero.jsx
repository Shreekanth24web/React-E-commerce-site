import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
import { Link } from 'react-router-dom';

const Hero = () => {
      return (
            <div className='hero'>
                  <div className="hero-left">
                        <h2>NEW ARRIVALS ONLY</h2>
                        <div>
                              <div className="hero-hand-icon">
                                    <p>new</p>
                                    <img src={hand_icon} alt="hand_icon.png" />

                              </div>
                              <p>collections</p>
                              <p>for everyone</p>
                        </div>
                        <div className="hero-latest-btn">
                              <Link to='/newcollections' className='hero-latest-btn-link'>Latest collection</Link>
                              <img src={arrow_icon} alt="arrow_icon" />
                        </div>
                  </div>
                  <div className="hero-right">
                        <img src={hero_img} alt="hero_img" />
                  </div>
            </div>
      )
}

export default Hero
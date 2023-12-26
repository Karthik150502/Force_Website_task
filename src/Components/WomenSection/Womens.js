import React, { useEffect, useRef } from 'react'
import styles from "./WomenStyle.css"
import img1 from "../../Assets/images/img1.png";
import img2 from "../../Assets/images/img2.png";
import img3 from "../../Assets/images/img3.png";
import img4 from "../../Assets/images/img4.png";
import img5 from "../../Assets/images/img5.png";
import img6 from "../../Assets/images/img6.png";
import img7 from "../../Assets/images/img7.png";
import mens1 from "../../Assets/images/mens1.avif";
import mens2 from "../../Assets/images/mens2.avif";
import mens3 from "../../Assets/images/mens3.avif";

export default function Mens() {

  return (
    <div className='main'>

        <div className="box mentrad">
            <img src={img1} className='imgs img1' alt="" />
            <div className='images images1'>
            <img src={img2} className='imgs img2' alt="" />
            </div>

            <div className='images images2'>
                <img src={img3} className='imgs img3' alt="" />
                <img src={img4} className='imgs img4' alt="" />
                <img src={img5} className='imgs img5' alt="" />
                <section class="slider-container">
                  <div class="slider-wrapper">
                      <div class="slider">
                          <img id="slide-1" src={mens1} alt="Bugatti Divo 2023"/>
                          <img id="slide-2" src={mens2} alt="Ford Mustang"/>
                          <img id="slide-3" src={mens3} alt="Rolls Royce"/>
                      </div>
                      <div class="slider-nav">
                          <a href="#slide-1"></a>
                          <a href="#slide-2"></a>
                          <a href="#slide-3"></a>
                      </div>
                  </div>
              </section>
            </div>

            <div className="iamges images3">
                <img src={img6} className='imgs img6' alt="" />
                <img src={img7} className='imgs img7' alt="" />
            </div>
        </div>
    </div>
  )
}

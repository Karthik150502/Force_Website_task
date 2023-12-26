import React, { useEffect, useState } from 'react'
import myntra from "../../Assets/TheMyntraLogo.png"
import styles from "./Navbarstyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faBagShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import Mens from '../MenSection/Mens'
export default function Navbar() {

  return (
    <>
        <nav className='navbar'>
          <a href="https://www.myntra.com/" target='_blank' rel='noreferrer noopener'>
            <img src={myntra} className='logo' alt="" />
          </a>  
          <ul className='items'>
            <li className='item men'>
                <a href="/mensection">
                    MEN
                </a>
            </li>
            <li className='item women'>
                <a href="/womensection">
                    WOMEN
                </a>
            </li>
            <li className='item kids'>
                <a href="">
                    KIDS
                </a>
            </li>
            <li className='item homeliving'>
                <a href="">
                    HOME & LIVING
                </a>
            </li>
            <li className='item beauty'>
                <a href="">
                    BEAUTY
                </a>
            </li>
            <li className='item studio'>
                <a href="">
                    STUDIO<sup className='supStudio'>NEW</sup>
                </a>
            </li>
          </ul>

          <div className='rightcontents'>
            <div className="searchbox">
                <span className='searchglass'><FontAwesomeIcon icon={faMagnifyingGlass} /></span><input  type="search" className='search' placeholder='Search for products, brands and more'/>
            </div>
                <div className="icons">
                    <span className='usericon'>
                        <a href="">
                            <FontAwesomeIcon className='theIcons theIconUser' icon={faUser}/>
                            <p>Profile</p>
                        </a>
                    </span>
                    <span className='hearticon'>
                        <a href="">
                            <FontAwesomeIcon className='theIcons theIconHeart' icon={faHeart}/>
                            <p>Wishlist</p>
                        </a>
                    </span>
                    <span className='bagicon'>
                        <a href="">
                            <FontAwesomeIcon className='theIcons theIconBag' icon={faBagShopping}/>
                            <p>Bag</p>
                        </a>
                    </span>

                </div>
                <span className='barsicon'>
                        <FontAwesomeIcon className='theIcons theIconBars' icon={faBars}/>
                </span>
          </div>
    </nav>
    </>

  )
}

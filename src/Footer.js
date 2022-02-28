import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div id="footerContainer">
            <div className='subContainers' id="subContainer1">
            <div><h4 style={{ color: '#9DAAF2' }}>Contact</h4></div>
            <div><p>Blue Diamond HQ</p>
            <p>PO Box Somewhere</p>
            <p>Somewhere, NY 99999</p>
            </div>
            <div><p className='footerItems'>P: 777-777-7777</p>
            <p className='footerItems'>E: contact@bluediamondhealthcare.com</p>
            </div>
            </div>

            <div className='subContainers' id="subContainer2">
            <div><h4 style={{ color: '#9DAAF2' }}>Learn More</h4></div>
            <div><p className='footerItems'>Our Studies</p>
            <p className='footerItems'>Our Partners</p>
            <p className='footerItems'>The Blue Diamond Foundation</p>
            </div>
            </div>

            <div className='subContainers' id="subContainer3">
            <div><h4 style={{ color: '#9DAAF2' }}>Partner</h4></div>
            <div><p className='footerItems'>Become a spokesperson</p>
            <p className='footerItems'>Medical mentorship</p>
            <p className='footerItems'>Grandparents program</p>
            </div>
            </div>

            <div className='subContainers' id="subContainer4">
            <div><h4 style={{ color: '#9DAAF2' }}>Get Involved</h4></div>
            <div><p className='footerItems'>Donate</p>
            <p className='footerItems'>Volunteer</p>
            <p className='footerItems'>Share our message</p>
            </div>
            </div>
        </div>
    )
}

export default Footer

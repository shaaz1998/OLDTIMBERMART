import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join in our Bussines and decorate your place with furnitures
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='tel:+9199440954183'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/invites/contact/?i=pxkpszfe311r&utm_content=odwckpt
' target='https://www.instagram.com/invites/contact/?i=pxkpszfe311r&utm_content=odwckpt'>Instagram</a>
            
            <a href='https://www.facebook.com/OTMAmbur?mibextid=LQQJ4d
' target='https://www.facebook.com/OTMAmbur?mibextid=LQQJ4d'>Facebook</a>
            <a href='https://youtube.com/@oldtimbermartambur2483
' target='https://youtube.com/@oldtimbermartambur2483'>Youtube</a>
            <a href='https://maps.app.goo.gl/Hj6KYd996McanePB9?g_st=ic' target='https://maps.app.goo.gl/Hj6KYd996McanePB9?g_st=ic'>Location</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              OTM
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>OTM © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/OTMAmbur?mibextid=LQQJ4d

              "
              target='https://www.facebook.com/OTMAmbur?mibextid=LQQJ4d

              '
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/invites/contact/?i=pxkpszfe311r&utm_content=odwckpt
              "
              target='https://www.instagram.com/invites/contact/?i=pxkpszfe311r&utm_content=odwckpt'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href="https://youtube.com/@oldtimbermartambur2483
              "
              target='https://youtube.com/@oldtimbermartambur2483'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link Google MAP'
              href='https://maps.app.goo.gl/Hj6KYd996McanePB9?g_st=ic'
              target='https://maps.app.goo.gl/Hj6KYd996McanePB9?g_st=ic'
              aria-label='Google MAP'
            >
              <i class='fa fa-map-marker'/>
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

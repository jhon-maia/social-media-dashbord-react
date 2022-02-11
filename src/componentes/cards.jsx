import React from 'react'
import Facebook from './images/icon-facebook.svg';
import Twitter from './images/icon-twitter.svg';
import YouTube from './images/icon-youtube.svg';
import Instagram from './images/icon-instagram.svg'
import Up from './images/icon-up.svg';

export default function Cards()
{

  return(
      
      <>
   
      	
       <section className="followers-section">
    <div className="social-media-box facebook">
        <span className="username">
            <img src={Facebook} alt="facebook"/>
            @elianbecali
          </span>
          <p className="count-follow">
            <span>1987</span>
            Followers
          </p>
          <span>
            <img src={Up} alt="Up Followers"/>
            12 Today
          </span>
    </div>
     <div className="social-media-box twitter">
       <span className="username">
            <img src={Twitter}alt="twitter"/>
            @elianbecali
          </span>
          <p className="count-follow">
            <span>1987</span>
            Followers
          </p>
          <span>
            <img src={Up} alt="Up Followers"/>
            122 Today
          </span>
    </div>
     <div className="social-media-box instagram">
        <span className="username">
            <img src={Instagram} alt="instagram"/>
            @elianbecali
          </span>
          <p className="count-follow">
            <span>1987</span>
            Followers
          </p>
          <span>
            <img src={Up} alt="instagram"/>
            24 Today
          </span> 
    </div>
     <div className="social-media-box youtube">
        <span className="username">
            <img src={YouTube}alt="youtube"/>
            @elianbecali
          </span>
          <p className="count-follow">
            <span>1987</span>
            Followers
          </p>
          <span>
            <img src={Up} alt="Up Followers"/>
            33 Today
          </span>
    </div>
    
  </section>


      </>



  	);



}
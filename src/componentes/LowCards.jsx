import React from 'react';
import Facebook from './images/icon-facebook.svg';
import Twitter from './images/icon-twitter.svg';
import YouTube from './images/icon-youtube.svg';
import Instagram from './images/icon-instagram.svg'
import Up from './images/icon-up.svg'
import Down from './images/icon-down.svg'



export default function LowCards(){
    
    return(
    	
    <>
    <section className="section-overview">
    <h2>Overview -Today</h2>

    <article class="overview-box-colection">
    <div className="overview-box">
      <span className="page-views">page views <img src={Instagram}/></span>
      
      <p className="count-follow">97
      <span><img src={Up} /> 12%</span>
      </p>
      
    </div>
    <div className="overview-box">
      <span className="page-views">page views <img src={YouTube}/></span>
      
      <p className="count-follow">72
      <span><img src={Down}/> 52%</span>
      </p>
      
    </div>
     <div className="overview-box">
      <span class="page-views">page views <img src={Facebook}/></span>
      
      <p className="count-follow">457
      <span><img src={Up}/> 73%</span>
      </p>
      
    </div>
    <div className="overview-box">
      <span className="page-views">page views <img src={Twitter}/></span>
      
      <p className="count-follow">626
      <span><img src={Up}/> 12%</span>
      </p>
      
    </div>
    <div className="overview-box">
      <span class="page-views">page views <img src={Facebook} /></span>
      
      <p className="count-follow">88
      <span><img src={Down}/> 42%</span>
      </p>
      
    </div>
     <div className="overview-box">
      <span class="page-views">page views <img src={Twitter}/></span>
      
      <p className="count-follow">123
      <span><img src={Down}/> 09%</span>
      </p>
      
    </div>
    </article>

  </section>
 </>
);
 


}
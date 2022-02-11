import React,{useState} from 'react';
import styled from 'styled-components';
import {ChangeTheme} from './btn.jsx'







export default function Header({changeTheme})
{

 
 return(

 	<>
 	 <header className="cabecalho">
 	 <div className="title-text">
    <h1>Social Media Dashboard</h1>
    <p> Total Followers: 23,004</p>
    </div>

    <div className="dark-mode-btn">
      <p>Dark Mode</p>
      <ChangeTheme changeTheme={changeTheme}/>
    </div>
 	 </header>
 	</>





 	);




}
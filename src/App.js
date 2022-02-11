
import './App.css';
import React,{useState} from 'react';
import Header from './componentes/header.jsx';
import Cards from './componentes/cards.jsx';
import LowCards from './componentes/LowCards.jsx';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './componentes/themes.js';
import {GlobalStyle} from  './componentes/globalstyle.js';





export default function App()
{
    const[color,setTheme]=useState("ligth");

  function changeTheme(){
      
      console.log(color);
     if(color==="ligth")
     {
      setTheme("dark");
     }else{
      setTheme("ligth");
     }
   

  }


   

  return(
    
      <ThemeProvider theme={color=="dark"?lightTheme:darkTheme}>
      <GlobalStyle/>
      <Header changeTheme={changeTheme} />
      <Cards/ >
      <LowCards/>
      </ThemeProvider>
   );
}



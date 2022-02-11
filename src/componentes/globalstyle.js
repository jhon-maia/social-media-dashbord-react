import {createGlobalStyle} from 'styled-components';

export  const GlobalStyle=createGlobalStyle`
 
 body{
 	background:${({theme})=>theme.body};
 }

 .title-text
{
  color: ${({theme})=>theme.text};
  float: left;
  display: inline-block;
}

.dark-mode-btn
{
float: right;
color:${({theme})=>theme.text};
display: flex;
font-size: 20px;
align-items: center;
}

.social-media-box
{
  
  color:${({theme})=>theme.text};
  background-color:${({theme})=>theme.card};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  width: 300px;
  height: 300px;
  font-weight: 700;
  
}

.social-media-box .username
{
  display: flex;
  align-items: center;
  color:  ${({theme})=>theme.text};
}
.section-overview
{
  color:  ${({theme})=>theme.text};
}

.overview-box
{
  width: 25%;
  height: 150px;
  background-color:  ${({theme})=>theme.card};
  display: flex;
  justify-content: center;
    flex-direction: column;
  padding: 10px;
  
}



`;
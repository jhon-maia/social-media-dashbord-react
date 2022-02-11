import React from 'react';
import styled from 'styled-components';


 export const ChangeButton=styled.input`
 -webkit-appearance:none ;
  width: 90px;
  height: 30px;
  position: relative;
  border-radius: 100px;
  background:${({theme})=>theme.btn};
`;





export const ChangeTheme=({changeTheme})=>
{

 return(

       <ChangeButton onClick={changeTheme} type="checkbox"/>
);

}

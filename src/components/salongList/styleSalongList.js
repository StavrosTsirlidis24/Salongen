import Styled from 'styled-components';
import SelectArrow from '../../material/selectArrow.png';
// import Font from '../../font/FontBureau-MillerBannerLight.otf';


export const container = Styled.div `
height:100vh;
width:100vw;
background-color:white;
display:flex;
flex-direction:column;
font-family: 'Roboto', sans-serif;


`
/* @font-face{
  font-family:'MyWebFont';
  src: url(${Font});
} */

export const header = Styled.div `
height:25vh;
width:100vw;
background-color:white;
display:flex;
flex-direction:column;
position: sticky;
top:0px;
/* font-family: 'MyWebFont'; */
font-family: 'Playfair Display', serif;
`

export const topHeader = Styled.div `
display:flex;
flex-direction:row;
justify-content:space-between;
padding:25px 20px 20px 20px;
font-size:9vw;
border-bottom: 1px solid #cca300;

p{
    margin:0px;
}
i{
    color:#cca300;
}
`
export const filterHeader = Styled.div `
padding:0px;
border-bottom: 1px solid #cca300;
select{
    font-size:5vw;
    width:100%
    height:8vh;
    color:black;
    background:white url(${SelectArrow}) no-repeat 97% ;
    background-size:5vw;
    border:0px;
    padding:0px 25px 0px 25px;
    appearance:none;
    
    
    &:focus{
       outline:none;
      
    }
    
}
`

export const main = Styled.div `
height:100vh;
background-color:white;
`
import Styled from 'styled-components';
import Fotohair from '../../material/alexander-krivitskiy-WSMM0s2F7iU-unsplash.jpg';
import Font from '../../font/FontBureau-MillerBannerLight.otf';
export const container = Styled.div `
height:100vh;
width:100vw;
background-color:white;
display:flex;
flex-direction:column;
`
//*Head Section********************************************************
export const header = Styled.div `
background-image:url(${Fotohair});
background-size:cover;
object-fit:cover;
width:100%;
height:40vh;
display:flex;
color:white;
flex-direction:column;
justify-content:space-between;
a{
    margin-top:15px;
    width:50px;
    cursor:default;
}
`
export const topHeader= Styled.div `

font-weight:bold;
height:9vh;
display:flex;
justify-content:space-between;
align-items:center;
color:black;
flex-direction:row;

i{
     color:white;
     font-size:8vw;
     cursor:pointer;
     margin:0px 25px 0px 25px;
     &:hover{
         color:#cca300;
     }
}
     
`
export const bottomHeader= Styled.div `

display:flex;
flex-direction:column;
color:white;  
margin: 15px 10px 30px 15px;
p{
    font-size:8vw;
    margin: 0px 0px 0px 15px;
}
`
export const starCollection= Styled.div `

display:flex;
color:white;
flex-direction:row;  
margin: 5px 10px 20px 15px;
i{
    font-size:5vw;
    color:#cca300;
    &:hover{
        color:white;
    }
}

p{
    font-size:4vw;
    margin:0px 0px 0px 5px;
}   
`

//*Middle Section********************************************************


export const middleNav= Styled.div `
background-color:white;
font-weight:bold;
font-size:5vw;
height:9vh;
display:flex;
justify-content:center;
align-items:center;
color:black;
flex-direction:row;
border-bottom: 20px solid #f5f5f5;
margin-bottom:10px;
`

export const infoButton= Styled.div `
width:100%;
height:100%;
border-bottom: 4px solid  #cca300;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
color:black;

`
export const schemaButton= Styled.div `
width:100%;
height:100%;
border-top: 4px solid white;
display:flex;
justify-content:center;
align-items:center;
color:black;
`

//*Main Section********************************************************
export const main = Styled.div `
background-color:white;
height:50vh;
display:flex;
color:black;
flex-direction:column;

span{
    border-bottom:1px solid #e8e8e8; 
    margin:10px 10px 10px 10px;
    font-size:5vw;
}
i{
    margin:0px 10px 0px 10px;
    padding-bottom:10px;
    
    
}
p{
    margin:10px 20px 0px 20px;
    font-size:4vw;
}
`




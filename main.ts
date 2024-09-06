import styled from "styled-components";

export const ConteienrMain = styled.div`
display:flex;
justify-content:flex-start;
margin:auto;
width:1216px;
height:966px;
`;
export const ConteinerTitle = styled.div`
display:flex;
align-items:center;
margin:30px auto 70px auto;
flex-direction:column;
width:740px;
height:124px;
text-align:center;
div{
display:flex;
width: 120px;
height: 0px;
border: 10px solid #D21920
}
`;
export const Title = styled.h1`
font-weight:700;
font-size:2em;
padding:10px;
margin:10px;
`;
export const SubTitle = styled.p`
font-size:1.125em;
fonr-weight:500;
`;
export const ConteinerInformation = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
gap:16px;
`;
export const ConteinerImage = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
margin:auto 0px auto 0px;
background-color:#F5F5F5;
align-items:flex-end;
width: 740px;
height: 638px;
border-radius: 24px;
`;
export const Image = styled.img`
display:flex;
width: 689px;
height: 402px;
margin:auto -40px auto 0px;
`;
export const BtnAnnouncement = styled.button`
display:flex;
width: 130px;
height:42px;
background:#D21920;
cursor:pointer;
margin:0px 50px 30px 0px ;
font-size:1em;
font-weigth:400;
color: #FFFFFF;
padding: 8px 20px 8px 20px;
border-radius:8px;
border:1px;
align-items:center;
`;

export const ImageInf = styled.div`
display:flex;
background: #FFFFFF;
width:592px;
height: 170px;
border-radius: 24px;
border: 1px solid #0000001A;
align-items:center;
margin-right:-100px;
z-index:1;
`;
export const ConteinerIconInf= styled.div`
display:flex;
background: #F5F5F5;
align-items:center;
justify-content:center;
margin:15px;
width:54px;
height:106px;
border-radius:16px;
`;
export const Icon = styled.img`
width: 20px;
height: 20.75px;
`;

export const Reason = styled.h1`
width:454px;
height:33px;
color: #D21920;
font-size: 22px;
font-weight:700;
line-height:33px;
text-align: left;

`;
export const Information = styled.p`
width: 454px;
height: 78px;
font-size: 16px;
font-weight: 400;
line-height: 23px;
text-align: left;
`;
export const Link = styled.p`
display:flex;
justify-content:flex-end;
margin:0px 30px 0px 0px;
`;
export const MainOffers = styled.div`
width: 100%vw;
height: 1500px;
background: #F5F5F5;
`;
export const ConteinerOffers = styled.div`
display:flex;
align-items:flex-end;
flex-direction:column;
tamplate-grid-columns:1fr 1fr 1fr;
tamplete-grid-rows:1fr 2fr 2fr
border:1px solid red;
margin:auto;
width:1216px;
height:966px;
Section{
display:flex;
flex-direction:row;
flex-wrap:wrap;
width:1216px;
}

`
export const ButtonOffers = styled.button`
display:flex;
cursor:pointer;
border:none;
width: 85px;
outline:none;
align-items:center;
background:transparent;
color: #0F0F0F;
height:20px;
`;
export const Offers = styled.div`
display:flex;
flex-direction:column;
margin:40px 15px 40px 15px;
border-radius:10px 10px 0px 0px ;
background: #FFFFFF;
width:368px;
height:443px;
`;
export const ImageOffers = styled.div`
display:flex;
width: 368px;
background:url("ImageOffers.png");
height: 214.23px;
border-radius: 10px;
`;
export const ConteinerInfOffers = styled.div`
display:flex;
flex-direction:column;
width:336px;
margin:auto;
align-items:center;
justify-content:center;
height:141.85px;
gap:16px;
`;
export const NameOffers = styled.div`
display:flex;
flex-direction:column;
width:336px;
height:61px;
gap: 12px;
h1{
font-size: 20px;
font-weight: 500;
line-height: 30px;
text-align: left;
}
h3{
font-size: 16px;
font-weight: 500;
line-height: 19.2px;
text-align: left;
}
`;
export const InfOffers = styled.div`
display:flex;
background: #F6F6F6;
width:336px;
height:64.85px;
margin:0px auto 0px auto;
justify-content:space-between;
align-items:center;
gap:8px;
border-radius:16px;
div{
display:flex;
flex-direction:column;
align-items:center;
width:60px;
height:48.85px;
gap:10px;
font-size:14px;
font-weight:500;
line-height:21px;
text-align:left;
}
img{
displayflex;
width:20px;
height:17.85px;
}
`;
export const LocationOffers = styled.div`
display:flex;
margin:auto;
width:336.17px;
align-items:center;
height:20px;
gap: 6px;
img{
display:flex;
width:14.17px;
height:16.65px;
}
p{
font-size:14px;
font-weight:200;
line-height:20px;
text-align:left;
}
`;
export const ContinerPageOfOffers = styled.div`
display:flex;
margin:10px 0px 0px 0px;
justify-content:space-evenly;
align-items:center;
width:270px;
height:54px;
button{
display:flex;
width:25px;
height:32px;
padding:8px;
gap: 10px;
background: #F5F5F5;
border:none;
}
.NamerOffers:hover{
justify-content:center;
text-color:#272727;
border-bottom:3px solid red ;
background: rgba(210, 25, 32, 0.15);
}
`;



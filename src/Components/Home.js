import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Card from './Card';
import axios from '../axios';

function Home() {
      const [products, setProducts] = useState("");
      useEffect(()=>{
        const fetchData = async () =>{
          
          const data = await axios.get("/products/get");
          console.log("products >>>>>", data);
          setProducts(data);
           
        };
        fetchData();
      }, []);
  
  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
      </Banner>
      <Main>
       
         {
          products && products.data.map((product)=> (<Card 
               id={product._id}
           image = {product.imageURL}
            price={product.price}
            rating={product.rating}
            title={product.title}
           />))
         }
          
           
          
           

      </Main>
    </Container>
  )
}

const Container = styled.div`
   width:100%
   background-color: rgb(234, 237, 237);
   max-width:1400px;
   margin: auto;
   height: fit-content;
`;
const Banner = styled.div`
   width:100%;
   img{
    width:100%;
    -webkit-mask-image: linear-gradient( 
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
);
 &:nth-child(2){
  display:none;
 }

 @media only screen and (max-width: 767px) {
   &:nth-child(1){
    display: none;
   }
   &:nth-child(2){
    display: block;
    -webkit-mask-image: none;
   }
 }
   }
`;

const Main = styled.div`
display: grid;
justify-content:center;
place-items: center;
width: 100%;   
 

grid-auto-rows: 440px 440px;
grid-template-columns: repeat(4,300px);
grid-gap: 20px;


 /* mobile */
@media only screen and (max-width:767px){
  grid-template-columns: repeat(2, 50%);
  grid-gap:0;
}

@media only screen and (min-width:768px) and (max-width: 1200px){
  grid-template-columns: repeat(3, 30%);
  
}
@media only screen and (min-width:768px){
 margin-top: -130px;
 padding: 10px 0px;
  
}
`;




export default Home
import React from 'react';
import './Home.css';
import HomeHeader from './Home_Header';
import Box from './Box';
import Product from './product';
import Contact from './contact';

function Home() {
      function leftScroll() {
        const left = document.querySelector(".scrolling_div");
        left.scrollBy(-800, 0);
      }
      function rightScroll() {
        const right = document.querySelector(".scrolling_div");
        right.scrollBy(+800, 0);
      }
  return (
    <div className="home">
        <HomeHeader />
      <img className="home_image" 
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg" alt=""/>
      <div className="boxes">
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      </div>
      <div className="boxes">
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      </div>
      <div className="cover">
      <button className="left" onClick={leftScroll}>&lt;</button>
      <div className="scrolling_div">
        <Product 
        id="112224"
        image="https://m.media-amazon.com/images/I/712N9TX2hpL._SS460_.jpg"
        name="Centrino mens"
        price={869.00}
        mrp="2199.00"
        star={3}
        />
        <Product 
        id="112225"
        image="https://images-eu.ssl-images-amazon.com/images/I/71qGNawFUEL._AC_UL160_SR160,160_.jpg"
        name="Mens Formal Shoes"
        price={629.00}
        mrp="1599.00"
        star={4}
        />
        <Product 
        id="112226"
        image="https://m.media-amazon.com/images/I/41i3XybOquL._AC_SR320,320_.jpg"
        name="Macktree Men Black Shoes"
        price={899.00}
        mrp="2199.00"
        star={4}
        />
        <Product 
        id="112227"
        image="https://m.media-amazon.com/images/I/41C2LmxYfhL._AC_SR320,320_.jpg"
        name="Centrino mens Brwon Shoes"
        price={849.00}
        mrp="2199.00"
        star={4}
        />
        <Product 
        id="112228"
        image="https://m.media-amazon.com/images/I/41MNu7+arvL._AC_SR320,320_.jpg"
        name="Men's Mid Top Ankle Boots"
        price={999.00}
        mrp="2199.00"
        star={4}
        />
        <Product 
        id="112229"
        image="https://m.media-amazon.com/images/I/410B0HDX7UL._AC_SR320,320_.jpg"
        name="Centrino black formal shoe"
        price={599.00}
        mrp="2499.00"
        star={3}
        />
        <Product 
        id="112230"
        image="https://m.media-amazon.com/images/I/41gk+XBhSyL._AC_SR320,320_.jpg"
        name="Centrino mens uniform dree shoes"
        price={669.00}
        mrp="2199.00"
        star={4}
        />
        <Product 
        id="112231"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price={869.00}
        mrp="2199.00"
        star={5}
        />
        <Product 
        id="112232"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price={869.00}
        mrp="2199.00"
        star={5}
        />
        <Product 
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price="869.00"
        mrp="2199.00"
        star={5}
        />
        <Product 
        id="112233"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price="869.00"
        mrp="2199.00"
        star={5}
        />
        <Product 
        id="112234"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price="869.00"
        mrp="2199.00"
        star={5}
        />
        <Product 
        id="112235"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price="869.00"
        mrp="2199.00"
        star={5}
        />
        <Product 
        id="112236"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price="869.00"
        mrp="2199.00"
        star={5}
        />
        <Product 
        id="112237"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price="869.00"
        mrp="2199.00"
        star={5}
        />
        <Product 
        id="112238"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price="869.00"
        mrp="2199.00"
        star={5}
        />
        <Product 
        id="112239"
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg"
        name="Centrino mens"
        price="869.00"
        mrp="2199.00"
        star={5}
        />
        
      </div>
      <button className="right" onClick={rightScroll}>&gt;</button>
      </div>
      <a href="#back">
      <div className="footer" >
        Back To Top
      </div>
      </a>
      <Contact/>
    </div>

  )
}

export default Home;

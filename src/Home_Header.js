import React from 'react';
import './Home_Header.css';

function HomeHeader() {
  return (
    <div className="Home_Header">
      <div className="Home_options">All</div>
      <div className="Home_options">Fresh</div>
      <div className="Home_options">Sell</div>
      <div className="Home_options">Best Sellers</div>
      <div className="Home_options">Today's Deal</div>
      <div className="Home_options">Mobiles</div>
      <div className="Home_options">Electronics</div>
      <div className="Home_options">
        <select>
            <option>Prime</option>
        </select>
      </div>
      <div className="Home_options">Customer Service</div>
      <div className="Home_options">Gift Ideas</div>
      <div className="Home_options">New Releases</div>
      <div className="news">
        <span className="news_first">Dehati Lakhe </span>
        <span>Watch Now | Free On</span>
      </div>
    </div>

  )
}

export default HomeHeader;

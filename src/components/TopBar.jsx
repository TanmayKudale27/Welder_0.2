import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar-container">
        <a href="/">
          <h4 className="topbar-brand">Avinash Kudale</h4>
        </a>
        <div className="topbar-info">
          <span>
            <i className="fa fa-map-marker-alt"></i>
            Janani Mandir Karanje , Main Road
          </span>
          <span>
            <i className="fa fa-envelope"></i>
            gurukrupawelders3354@gmail.com
          </span>
          <span>
            <i className="fa fa-phone-alt"></i>
            +91 9373139543
          </span>
        </div>
        {/* <div className="topbar-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;

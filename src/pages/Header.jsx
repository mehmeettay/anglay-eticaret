
import React from 'react';
import './Header.css';
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-info">
          <IoIosMail />

          <a href="mailto:info@websiteniz.com">info@websiteniz.com</a>

          {[
              // { text: "info@websiteniz.com", label: "info@websiteniz.com" }
              { text: "Kurumsal Satış", label: "Kurumsal Satış" },
              { text: "Yardım Merkezi", label: "Yardım Merkezi" },
              { text: "Sipariş Takibi", label: "Sipariş Takibi" }
            ].map((link, index) => (
              <a key={index} href={`mailto:${link.text}`}>
                {`\u2022 ${link.label}`}
              </a>
            ))}
            {/* 
            <a href="mailto:info@websiteniz.com">Kurumsal Satış</a>
            <a href="mailto:info@websiteniz.com">İletişim</a> */}

          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;


  




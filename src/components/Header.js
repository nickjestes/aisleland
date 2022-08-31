import React from "react";
import '../styles/Header.css';


const styles = {
    headerStyle: {
      background: '#F8B77C',
    },
  };

function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 className='text-center' style={styles.headingStyle}>AisleLand</h1>
      </header>
    );
  }
  
  
  export default Header;
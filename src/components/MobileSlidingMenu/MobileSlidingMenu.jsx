import './MobileSlidingMenu.css';
import React, { useState, useEffect } from 'react';
import { Menu as HamburgerMenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";


function MobileSlidingMenu({ buttonId, menuId, buttonIcon, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [closedByNavItem, setClosedByNavItem] = useState(false);

  const handleItemClick = (item) => {
    if (!item.disabled && item.handleClick) {
      item.handleClick();
      setClosedByNavItem(true);
      setIsOpen(false);
    } 
     

  };

    // Lock background scroll while allowing menu scroll
    useEffect(() => {
      if (isOpen) {
        // Save current scroll position
        setScrollPosition(window.scrollY);
        const scrollY = window.scrollY;
        // Add styles to prevent background scroll while maintaining position
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        // Reset menu scroll
        const menuElement = document.querySelector('.side-menu.open');
        if (menuElement) {
         menuElement.scrollTop = 0;
         
        }

      } else {
        // Restore scroll position when menu closes
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      
         
      // Makes sure the slider always opens at last position if not closed by nav item
         
      if (!closedByNavItem) {
        window.scrollTo(0, scrollPosition);
        console.log('scroll pos!');
    
      } else {
        window.scrollTo(0, 0); // Always scroll to top when closed by nav item
        setClosedByNavItem(false);
       
      }
        
      }
  
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
  
      };
    }, [isOpen]);

  return (
    <div className="container">
      <button id={buttonId} onClick={toggleMenu}>
        {isOpen ? (
          <CloseIcon 
            fontSize="large"
            className="close-icon"
     
          />
        ) : (
          <HamburgerMenuIcon 
            fontSize="large"
           
          />
        )}
      </button>
      

      {/* The sliding menu */}
      <nav id={menuId} className={`side-menu ${isOpen ? 'open' : ''}`}>

        <ul>
          {menuItems.map((item) => (
            <li 
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={item.disabled ? 'disabled' : ''}
            >
              {item.icon && <img src={item.icon} alt={`${item.name} icon`} />}
              {item.name}
            </li>
          ))}
        </ul>
        <div className="social-list">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/company/baltimore-code-coffee/"
                className="social-button"
                target = '_blank'
              >
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://baltimoretech.slack.com/archives/CTDNSM6EP"
                className="social-button"
                target = '_blank'
              >
                <FontAwesomeIcon className="social-icon" icon={faSlack} />
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/baltimore-code-and-coffee"
                className="social-button"
                target = '_blank'
              >
                <FontAwesomeIcon className="social-icon" icon={faMeetup} />
              </a>
            </li>
          </ul>
        </div>
        <div>
        <p className="copyright">
          © 2024 Baltimore Code and Coffee All rights reserved.
        </p>
        </div>
     
      </nav>

   
    </div>
  );
}
export default MobileSlidingMenu;

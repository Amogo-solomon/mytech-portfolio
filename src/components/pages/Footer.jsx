import React from "react"
import { social } from '../data/dummydata'
import { WhatsApp } from '@mui/icons-material';

export const Footer = () => {

  const whatsappNumber = '+2347084857763'; // WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const whatsAppButtonStyle = {
    position: 'fixed',
    bottom: '3rem',
    right: '0.2rem',
    backgroundColor: '#25d366', // Green color for WhatsApp
    color: '#fff', // Text color
    padding: '0.2rem',
    borderRadius: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    zIndex: '999', // Ensure it's above other elements
    maxWidth: '200px',
    
    
  };

  const buttonTextStyle = {
    maxWidth: '200px', // Limiting the width of the button text
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '10px',
  };




  return (
    <>
      <footer>

      <button
            style={whatsAppButtonStyle}
            onClick={handleWhatsAppClick}
          >
            <WhatsApp sx={{ color: '#fff' }} /> {/* WhatsApp icon */}
            How may we help you?
          </button>

        {social.map((item) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.id}>
                <i data-aos='zoom-in-left'>{item.icon}</i>
           </a>
        ))}
        <p data-aos='zoom-in-right'>All Right Reserves 2023</p>
      </footer>
    </>
  )
}


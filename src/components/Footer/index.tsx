import React from 'react';
import './styles.css';
import { FaGithub, FaLinkedin, MdEmail } from "react-icons/all";

export default function Footer() {
  return (
    <div className={'footer-container'}>
      <div className={'footer-decorator-top'} />
      <div className={'footer'}>
        <div>&copy; {new Date().getFullYear()} Nikhil Nayak. All Rights Reserved</div>
        <div style={{ fontSize: '20px', width: '150px', display: 'flex', justifyContent: 'space-evenly' }}>
          <FaGithub style={{cursor: 'pointer'}} onClick={() => window.open('https://github.com/NikhilCodes')} />
          <MdEmail style={{cursor: 'pointer'}} onClick={() => window.open('mailto:nikhil.nixel@gmail.com')} />
          <FaLinkedin style={{cursor: 'pointer'}} onClick={() => window.open('https://www.linkedin.com/in/nikhil-nayak-3b0967179/')} />
        </div>
      </div>
    </div>
  );
}

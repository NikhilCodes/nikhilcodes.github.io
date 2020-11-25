import React from 'react';
import './styles.css';
import githubLogo from '../../assets/github.png'
import emailLogo from '../../assets/email.png';
import linkedinLogo from '../../assets/linkedin.png';

export default function Footer() {
  return (
    <div className={'footer-container'}>
      <div className={'footer-decorator-top'} />
      <div className={'footer'}>
        <div>&copy; {new Date().getFullYear()} Nikhil Nayak. All Rights Reserved</div>
        <div>
          <img src={githubLogo} height={'30px'} />
          <img src={emailLogo} height={'30px'} />
          <img src={linkedinLogo} height={'30px'} />
        </div>
      </div>
    </div>
  );
}

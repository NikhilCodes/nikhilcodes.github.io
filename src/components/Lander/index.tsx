import React, { useEffect } from 'react';
import { MdDescription } from 'react-icons/md';
import { FaGithub } from 'react-icons/all'
import './styles.css';
import PseudoTerminal from './pseudoTerminal';
import CoolButton from "../fragments/CoolButton";

export default function Lander() {

  useEffect(() => {
    const jobTitleDecorator = Array.from(document.getElementsByClassName('horizontal-line') as HTMLCollectionOf<HTMLElement>);
    jobTitleDecorator.forEach((element) => {
      element.style.width = '40px';
    });

    const skillCells = Array.from(document.getElementsByClassName('skill-cell') as HTMLCollectionOf<HTMLElement>);
    skillCells.forEach((element, index) => {
      setTimeout(() => {
        element.style.visibility = 'visible';
        element.style.opacity = '1';
      }, 200 * (index + 1));
    });
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        height: '100vh',
        justifyContent: 'stretch'
      }}
    >
      <div className={'style-box-1'} />
      <div className={'style-box-2'} />
      <div
        className={'landing-container'}
        id={'lander'}
      >
        <div style={{alignSelf: 'flex-start'}}>
          <h1>NIKHIL <span style={{fontWeight: 200}}>NAYAK</span></h1>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: 'max-content',
              alignItems: 'center',
              fontSize: '1.8rem',
            }}>
              <hr className={'horizontal-line'} />
              Full Stack Developer
              <hr className={'horizontal-line'} />
            </div>
          </div>
          <br /><br />
          <div style={{display: 'flex', flexWrap: 'wrap', width: '420pt', justifyContent: 'center'}}>
            <div className={'skill-cell'}>ReactJS</div>
            <div className={'skill-cell'}>Flutter</div>
            <div className={'skill-cell'}>Angular</div>
            <div className={'skill-cell'}>Express</div>
            <div className={'skill-cell'}>Python</div>
            <div className={'skill-cell'}>Mongo</div>
            <div className={'skill-cell'}>Postgresql</div>
            <div className={'skill-cell'}>SpringBoot</div>
            <div className={'skill-cell'}>Firebase</div>
            <div className={'skill-cell'}>TensorFlow</div>
          </div>
          <br /><br /><br />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <CoolButton theme={0} onClick={() => {
              window.open(require('../../assets/resume.pdf'));
            }}>
              <MdDescription />&nbsp; Resume
            </CoolButton>
            <div style={{width: 40}} />
            <CoolButton theme={0} onClick={() => {
              window.open('https://github.com/NikhilCodes');
            }}>
              <FaGithub />&nbsp; GitHub
            </CoolButton>
          </div>
        </div>
        <PseudoTerminal />
      </div>
    </div>
  );
}

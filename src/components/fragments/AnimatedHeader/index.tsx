import React, { useEffect } from 'react';
import './styles.css';

export default function AnimatedHeader(props: any) {
  useEffect(() => {
    window.addEventListener('scroll', (ev) => {
      let aboutDOM = document.getElementById(props.id);
      let rect = aboutDOM ? aboutDOM.getBoundingClientRect() : {top: 0, left: 0, bottom: 0, right: 0};
      if (
        rect.top >= 0 &&
        rect.bottom - 20 <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        let hr = Array.from(document.getElementsByClassName('hr-extensible-' + props.id) as HTMLCollectionOf<HTMLElement>);
        hr.forEach(value => {
          value.style.width = '30px';
        });
      }
    });
  });

  return (
    <div
      id={props.id}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div className={'ringed-circle'} style={{borderColor: props.color}} />
      <div className={'hr-extensible-' + props.id} style={{
        height: '3pt',
        width: 0,
        backgroundColor: props.color,
        transitionDelay: '100ms',
        transitionDuration: '400ms',
        transitionProperty: 'width'
      }} />
      <div className={'dot'} style={{backgroundColor: props.color}} />
      <h2 style={{color: props.color}}>{props.children}</h2>
      <div className={'dot'} style={{backgroundColor: props.color}} />
      <div className={'hr-extensible-' + props.id} style={{
        height: '3pt',
        width: 0,
        backgroundColor: props.color,
        transitionDelay: '100ms',
        transitionDuration: '400ms',
        transitionProperty: 'width'
      }} />
      <div className={'ringed-circle'} style={{borderColor: props.color}} />
    </div>
  );
}

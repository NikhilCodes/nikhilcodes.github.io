import React, { useEffect } from 'react';
import AnimatedHeader from "../fragments/AnimatedHeader";
import './styles.css';
import laptopMockup from '../../assets/laptop-mockup.png';

function LaptopScreenTiles({ title, themeColor }: any) {
  return (
    <div className={'tiles'} style={{ backgroundColor: themeColor }} onClick={() => {alert('LOL')}}>
      {title}
    </div>
  );
}

export default function Projects() {
  useEffect(() => {
    window.addEventListener('scroll', (ev) => {
      const screen = document.getElementById('laptop-content') as HTMLElement;
      let rect = screen ? screen.getBoundingClientRect() : {top: 0, left: 0, bottom: 0, right: 0};
      if (
        rect.top >= 0 &&
        rect.bottom - 20 <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        screen.style.filter = 'none';
        screen.style.backgroundColor = 'white';
      }
    });
  });
  return (
    <div>
      <AnimatedHeader id={'projects'} color={'#1c2530'}>
        Personal Projects
      </AnimatedHeader>
      <div>
        <div id={'laptop-mockup-container'}>
          <img id={'laptop-mockup'} alt={'laptop-mockup'} src={laptopMockup} />
          <div id={'laptop-content'}>
            <LaptopScreenTiles title={'Curious.io'} themeColor={'#690000'} />
            <LaptopScreenTiles title={'MERN Task Manager'} themeColor={'#cf8a00'} />
            <LaptopScreenTiles title={'Quizily'} themeColor={'#001979'} />
            <LaptopScreenTiles title={'PathFinder Simulation'} themeColor={'#246218'} />
            <LaptopScreenTiles title={'Image Recolorizer'} themeColor={'#4b0079'} />
            <LaptopScreenTiles title={'PhotoMozaicIt'} themeColor={'#40b9fd'} />
            <LaptopScreenTiles title={'EOF'} themeColor={'#7a0e54'} />
            <LaptopScreenTiles title={'DrawAnywhere'} themeColor={'#0eab79'} />
            <LaptopScreenTiles title={'OmniCalc'} themeColor={'#cb3900'} />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import AnimatedHeader from '../fragments/AnimatedHeader';
import './styles.css';
import laptopMockup from '../../assets/laptop-mockup.png';
import mobileMockup from '../../assets/mobile-mockup.png';
import {
  DiMongodb,
  FaAngular,
  FaNodeJs,
  FaObjectGroup,
  FaPython,
  FaReact,
  FaWifi,
  FcScatterPlot, SiDocker,
  SiFlutter, SiMysql,
  SiPostgresql, SiRaspberrypi,
  SiSpring,
  SiTensorflow,
} from 'react-icons/all';
import CoolButton from '../fragments/CoolButton';

function ScreenTiles({ title, themeColor, toolIcons, projectUrl }: any) {
  return (
    <div style={{ backgroundColor: themeColor }} className={'tiles'} onClick={() => {
      window.open(projectUrl);
    }}>
      <div>{title}</div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, display: 'flex', flexDirection: 'row' }}>
        {toolIcons.map((toolIcon: HTMLElement) => <div
          style={{ paddingRight: 10, paddingBottom: 10 }}>{toolIcon}</div>)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [projectCategory, setProjectCategory] = useState(0);  // 0 for PC and 1 for Mobile
  useEffect(() => {
    window.addEventListener('scroll', (ev) => {
      const screen = document.getElementById('laptop-content') as HTMLElement;
      let rect = screen ? screen.getBoundingClientRect() : { top: 0, left: 0, bottom: 0, right: 0 };
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
      <div style={{ marginBottom: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'hidden' }}>
          <div
            id={'laptop-mockup-container'}
            style={{ transform: projectCategory === 1 ? 'translateX(-100%)' : 'none' }}
          >
            <img id={'laptop-mockup'} alt={'laptop-mockup'} src={laptopMockup} />
            <div id={'laptop-content'}>
              <ScreenTiles
                title={'ExpZen'}
                toolIcons={[<FaAngular />, <SiSpring />, <SiMysql />, <SiRaspberrypi />, <SiDocker />]}
                themeColor={'#001979'}
                projectUrl={'https://github.com/NikhilCodes/ExpZen'}
              />
              <ScreenTiles
                title={'Curious.io'}
                toolIcons={[<SiSpring />, <FaAngular />, <SiPostgresql />]}
                themeColor={'#690000'}
                projectUrl={'https://github.com/NikhilCodes/curious.io'}
              />
              <ScreenTiles
                title={'MERN Task Manager'}
                toolIcons={[<FaReact />, <DiMongodb />, <FaNodeJs />]}
                themeColor={'#cf8a00'}
                projectUrl={'https://github.com/NikhilCodes/MERN-tasker'}
              />
              <ScreenTiles
                title={'PathFinder Simulation'}
                toolIcons={[<FaPython />]}
                themeColor={'#246218'}
                projectUrl={'https://github.com/NikhilCodes/PathFinder-AlgoVisual'}
              />
              <ScreenTiles
                title={'Image Recolorizer'}
                toolIcons={[<FaPython />, <SiTensorflow />]}
                themeColor={'#4b0079'}
                projectUrl={'https://github.com/NikhilCodes/Image-Recolorizer'}
              />
              <ScreenTiles
                title={'PhotoMozaicIt'}
                toolIcons={[<FaPython />, <FaObjectGroup />]}
                themeColor={'#40b9fd'}
                projectUrl={'https://github.com/NikhilCodes/PhotoMosaicIt'}
              />
              <ScreenTiles
                title={'SnakeRoam'}
                toolIcons={[<FaPython />, <SiTensorflow />]}
                themeColor={'#7a0e54'}
                projectUrl={'https://github.com/NikhilCodes/SnakeRoam'}
              />
              <ScreenTiles
                title={'DrawAnywhere'}
                toolIcons={[<FaPython />, <SiTensorflow />, <FaObjectGroup />]}
                themeColor={'#0eab79'}
                projectUrl={'https://github.com/NikhilCodes/Draw-Anywhere'}
              />
              <ScreenTiles
                title={'OmniCalc'}
                toolIcons={[<FaPython />, <FcScatterPlot />]}
                themeColor={'#cb3900'}
                projectUrl={'https://github.com/NikhilCodes/OmniCalc'}
              />
            </div>
          </div>
          <div
            id={'mobile-mockup-container'}
            style={{ transform: projectCategory === 0 ? 'translateX(100%)' : 'none' }}
          >
            <img id={'mobile-mockup'} alt={'mobile-mockup'} src={mobileMockup} />
            <div
              style={{
                display: 'flex',
                width: '35.3vh',
                height: '77vh',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <div style={{
                width: '100%',
                height: 30,
                backgroundColor: '#0f5ca4',
                color: 'white',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                fontSize: 12,
                fontWeight: 600,
                borderRadius: '20px 20px 0 0',
              }}>
                <div style={{ paddingLeft: '5%', paddingTop: 8 }}>1:30pm</div>
                <div style={{ paddingRight: 28, paddingTop: 8 }}><FaWifi /></div>
              </div>
              <div style={{
                backgroundColor: '#1991de',
                width: '100%',
                color: 'white',
                paddingTop: 20,
                paddingBottom: 20,
                boxShadow: '0px 2px 15px #36363699',
                zIndex: 20,
              }}>
                <SiFlutter />&nbsp;Flutter Projects
              </div>
              <div id={'mobile-content'} style={{ flexGrow: 1, overflowY: 'scroll', backgroundColor: 'grey' }}>
                <ScreenTiles title={'COVID-19-India'} themeColor={'#5e39e2'}
                             projectUrl={'https://github.com/NikhilCodes/COVID-19-India'} toolIcons={[]} />
                <ScreenTiles title={'News App'} themeColor={'#3f9bff'}
                             projectUrl={'https://github.com/NikhilCodes/Flutter-News-App'} toolIcons={[]} />
                <ScreenTiles title={'MusixInfo'} themeColor={'#202'}
                             projectUrl={'https://github.com/NikhilCodes/MusixInfo'} toolIcons={[]} />
                <ScreenTiles title={'LoginUI'} themeColor={'#830155'}
                             projectUrl={'https://github.com/NikhilCodes/Login_UI'} toolIcons={[]} />
                <ScreenTiles title={'MindPlane'} themeColor={'#5c0492'}
                             projectUrl={'https://github.com/NikhilCodes/MindPlane'} toolIcons={[]} />
                <ScreenTiles title={'BMI-Calculator'} themeColor={'#c88003'}
                             projectUrl={'https://github.com/NikhilCodes/BMI-Calculator'} toolIcons={[]} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CoolButton
            style={{
              width: 120,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              color: projectCategory === 0 ? 'dodgerblue' : 'grey',
              borderColor: projectCategory === 0 ? 'dodgerblue' : 'lightgrey',
              fontWeight: projectCategory === 0 && 700,
            }}
            onClick={() => {
              setProjectCategory(0);
            }}
            theme={1}
          >
            PC
          </CoolButton>
          <CoolButton
            style={{
              width: 120,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              color: projectCategory === 1 ? 'dodgerblue' : 'grey',
              borderColor: projectCategory === 1 ? 'dodgerblue' : 'lightgrey',
              fontWeight: projectCategory === 1 && 700,
            }}
            onClick={() => {
              setProjectCategory(1);
            }}
            theme={1}
          >
            Mobile
          </CoolButton>
        </div>
      </div>
    </div>
  );
}

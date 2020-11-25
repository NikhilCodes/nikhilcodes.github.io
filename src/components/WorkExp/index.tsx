import React from 'react';
import './styles.css';
import AnimatedHeader from "../fragments/AnimatedHeader";

function WorkLogo({ url, theme, animate }: any) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 140
    }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: `2px solid ${theme}`,
          borderRadius: '50%',
          padding: 5,
        }}
        className={animate && 'rippling-border'}>
        <img
          alt={'work-exp'} src={url} height={`${100 + (animate ? 10 : 0)}px`} width={`${100 + (animate ? 10 : 0)}px`}
          style={{
            borderRadius: '50%',
            border: !animate ? '1pt solid lightgrey' : 'none',
            padding: 0,
            margin: 0,
            opacity: '1',
            objectFit: 'contain'
          }} />
      </div>
    </div>
  );
}

export default function WorkExp() {
  const dscKiitLogo = 'https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2086/859e9317-d715-4a2b-b88e-61cdfd379039.png';
  const kideLogo = 'https://avatars0.githubusercontent.com/u/63716484';
  const gigsyLogoUrl = 'https://i.imgur.com/RaT5wAx.png';
  return (
    <div id={'experience'} className={'experience-container'} style={{ marginTop: 60 }}>
      <div className={'sub-container'}>
        <AnimatedHeader id={'experience'} color={'#1c2530'}>
          Work Experience
        </AnimatedHeader>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: "60px 0",
            width: '33.3%',
            fontWeight: 800,
            color: 'grey'
          }}>
            <div>Oct 2020 - Present</div>
            <div>Jan 2020 - Aug 2020</div>
            <div>Aug 2019 - July 2020</div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: "33.3%",
          }}>
            <div style={{ minWidth: '50vw' }} />
            <WorkLogo url={gigsyLogoUrl} theme={'tomato'} animate={true} />
            <div style={{ minWidth: '1px', height: '50px', backgroundColor: 'lightgrey' }} />
            <WorkLogo url={kideLogo} theme={'blue'} />
            <div style={{ minWidth: '1px', height: '50px', backgroundColor: 'lightgrey' }} />
            <WorkLogo url={dscKiitLogo} theme={'green'} />
            <div style={{ minWidth: '50vw' }} />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: "55px 0",
            width: '33.3%',
            fontWeight: 600,
            color: '#565656',
            textAlign: 'left',
          }}>
            <div><div style={{color: '#2d2d2d', fontWeight: 700}}>Gigsy LLP</div>SDE Intern</div>
            <div><div style={{color: '#2d2d2d', fontWeight: 700}}>Kide</div>Web & Android Developer</div>
            <div><div style={{color: '#2d2d2d', fontWeight: 700}}>DSC-KIIT</div>Android Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

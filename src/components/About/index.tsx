import React from 'react';
import AnimatedHeader from "../fragments/AnimatedHeader";
import './styles.css';

export default function About() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <AnimatedHeader id={'about'} color={'#282c34'}>About</AnimatedHeader>
      <p className={'content-body'} style={{
        textAlign: 'left',
        padding: '0 14%'
      }}>
        I am an undergraduate student in the Department of computer Science at KIIT University, Bhubaneswar graduating in
        May 2023.
        <br /><br />
        Being an Open-Source enthusiast, I have built a lot of full blown projects which need knowledge in Software
        Development for both PCs and Mobile Devices (Flutter), and have also done many projects related to Web Development
        and Machine Learning which are listed in GitHub.
        Apart from software development I also have an eye for UI/UX design.
      </p>
    </div>
  );
}

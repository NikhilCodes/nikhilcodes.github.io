import React, { useEffect, useState } from 'react';
import emailJs, { EmailJSResponseStatus } from 'emailjs-com';
import './styles.css';
import AnimatedHeader from "../fragments/AnimatedHeader";
import { CgSpinner } from "react-icons/all";

require('dotenv').config();

export default function ContactMe() {
  useEffect(() => {
    emailJs.init(process.env.REACT_APP_EMAILJS_USERID ?? '');
  });


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSending, setIsSending] = useState(false);

  async function sendEmail(name: string, from_email: string, message: string): Promise<EmailJSResponseStatus> {
    let templateParams = {
      from_name: name,
      from_email,
      to_name: 'Nikhil Nayak',
      message
    };

    return await emailJs.send('service_jtc06ls', 'template_wq4d56u', templateParams);
  }

  return (
    <div className={'contact-container'}>
      <AnimatedHeader id={'contact'} color={'#282c34'}>
        Contact Me
      </AnimatedHeader>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
      }}>
        <div className={'contact-window'}>
          <div className={'title'}>
            <div style={{
              backgroundColor: '#d75a5a',
              height: 16,
              width: 16,
              borderRadius: 10,
              marginRight: 10,
              cursor: 'not-allowed'
            }} />
            <div
              style={{
                backgroundColor: '#d7c65a',
                height: 16,
                width: 16,
                borderRadius: 10,
                marginRight: 10,
                cursor: 'pointer'
              }}
            />
            <div
              style={{
                backgroundColor: '#00a71c',
                height: 16,
                width: 16,
                borderRadius: 10,
                marginRight: 20,
                cursor: 'pointer'
              }}
            />
          </div>
          <div className={'base'}>
            <div className={'left-section'}>
              <div>
                Contact
                <div style={{ width: 60, height: 5, backgroundColor: '#fd0a6b', borderRadius: 2.5 }} />
              </div>
            </div>
            <div className={'right-section'}>
              <input
                placeholder={'YOUR NAME'}
                spellCheck={'false'}
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
              />
              <input
                placeholder={'EMAIL'}
                spellCheck={'false'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder={'MESSAGE'}
                spellCheck={'false'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                fontWeight: 700,
                letterSpacing: 3,
                color: '#fd0a6b',
                paddingTop: 10
              }}>
                <div className={'spinner'} style={{ color: '#ff2f8e', opacity: isSending ? '1' : '0' }}>
                  <CgSpinner />
                </div>
                <div style={{ width: 20 }} />
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={async () => {
                    if (name && email) {
                      setIsSending(true);
                      await sendEmail(name, email, message);
                      setName('');
                      setEmail('');
                      setMessage('');
                      setIsSending(false);
                    }
                  }}
                >
                  SEND
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

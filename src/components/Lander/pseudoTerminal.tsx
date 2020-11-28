import React, { useState } from 'react';

function Prompt() {
  return <span style={{color: '#01a500'}}>❯&nbsp;</span>
}

export default function PseudoTerminal() {
  const [consoleLog, setConsoleLog] = useState([
    {text: 'Type `help` to get list of available commands.', isCommand: false},
  ]);
  const [commandEntry, setCommandEntry] = useState('');

  function focusPrompt(): void {
    document.getElementById('sh-prompt')?.focus();
  }

  function getCommandResponse(cmd: string): string {
    switch (cmd.split(' ')[0]) {
      case 'ls':
        return 'lander about experience projects contact';
      case 'clear':
        // Already handled else where
        return '';
      case 'help':
        return 'List of available commands:\n==========================\n\nls\nhelp\nintro\ncopyright\nclear\ncd\n';
      case 'intro':
        return 'This is Nikh!l\nThe stupid portfolio is right before you!';
      case 'copyright':
        return `Copyright © ${new Date().getFullYear()} | Nikhil Nayak`;
      case 'cd':
        if (cmd === 'cd') {
          return 'Error: Must pass a folder name.';
        }

        let dir = cmd.split(' ')[1];
        document.getElementById(dir)?.scrollIntoView({behavior: 'smooth'});
        return '';
      case '':
        return '';
      default:
        return `Not Found: ${cmd}`;
    }
  }

  function sendInCommand(cmd: string): void {
    if (cmd === 'clear') {
      setConsoleLog([]);
    } else {
      setConsoleLog([
        ...consoleLog,
        {text: cmd, isCommand: true},
        {text: getCommandResponse(cmd), isCommand: false}
      ]);
    }
  }

  function displayTerminal() {
    const terminal = (document.getElementsByClassName('terminal')[0] as HTMLElement);
    terminal.style.transform = 'translateX(0%)';
    const terminalBody = (terminal.getElementsByClassName('sub-body')[0] as HTMLElement);
    terminalBody.style.opacity = '1';
    terminalBody.style.visibility = 'visible';
  }

  function minimizeTerminal() {
    const terminal = (document.getElementsByClassName('terminal')[0] as HTMLElement);
    terminal.style.transform = 'translateX(87%)';
    const terminalBody = (terminal.getElementsByClassName('sub-body')[0] as HTMLElement);
    terminalBody.style.opacity = '0';
    terminalBody.style.visibility = 'hidden';
  }

  return (
    <div className={'terminal'}>
      <div className={'title-bar'}>
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
          onClick={displayTerminal}
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
          onClick={minimizeTerminal}
        />
        <div style={{width: '1pt', height: '100%', backgroundColor: 'grey', marginRight: 20}} />
        <div style={{fontSize: 16, fontWeight: 600}}>
          portfolio@nikhil
        </div>
      </div>
      <div className={'body'} onClick={focusPrompt}>
        <div className={'sub-body'}>
          {consoleLog.map((value, index) => value.text && <div key={index}>{value.isCommand &&
          <Prompt />}{value.isCommand ? value.text : value.text.split('\n').map((value1, index1) => <p
            key={index1}
            style={{padding: 0, margin: 1}}>{value1}</p>)}</div>)}
          <Prompt />
          <input
            type={'text'} id={'sh-prompt'}
            spellCheck={"false"}
            value={commandEntry}
            onChange={(e) => setCommandEntry(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendInCommand(commandEntry);
                setCommandEntry('');
              }
            }} />
        </div>
      </div>
    </div>
  );
}

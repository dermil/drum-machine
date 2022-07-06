import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import logo from './logo.svg'

const drumInfo = [
    {
      keyBind: 'Q',
      keyCode: 81,
      id: 'Heat-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyBind: 'W',
      keyCode: 87,
      id: 'Heat-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyBind: 'E',
      keyCode: 69,
      id: 'Heat-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyBind: 'A',
      keyCode: 65,
      id: 'Heat-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyBind: 'S',
      keyCode: 83,
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyBind: 'D',
      keyCode: 68,
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyBind: 'Z',
      keyCode: 90,
      id: 'Kick-n-Hat',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyBind: 'X',
      keyCode: 88,
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyBind: 'C',
      keyCode: 67,
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  class PadApp extends React.Component {
    constructor(props){
      super(props);
    };
  
  render() {
    let padCell;
    padCell = drumInfo.map((drumObj, i, padInfoArr) => {
      return (
        <Pad 
        keyBind={padInfoArr[i].keyBind}
        clipID={padInfoArr[i].id} 
        clipSrc={padInfoArr[i].url} 
        />
      )
    });
    
    return <div>{padCell}</div>;
  }  
  }
  
  class Pad extends React.Component {
    constructor(props){
      super(props);
      this.playSound = this.playSound.bind(this);
    };
   
    playSound () {
      const sound = document.getElementById(this.props.keyBind);
      sound.play();
    }

    render () {
      return (
        <div
          id={this.props.clipID}
          className='drum-pad border'
          onClick={this.playSound}
        > 
          <audio
            className='clip'
            src={this.props.clipSrc}
            id={this.props.keyBind}
          />
          {this.props.keyBind}
        </div>
      );
    }
    
  };

  export default PadApp;
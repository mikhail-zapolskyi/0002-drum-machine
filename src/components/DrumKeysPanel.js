import './styles/DrumKeysPanel.css';
import { useEffect, useCallback } from 'react';
import { DrumPad } from '.';
import { useContext } from 'react';
import { StateContext } from '../App';

const AudioClips = [ 
     {
          value: 'Q',
          name: 'Heater 1',
          name2: 'Chord 1',
          keyCode: 81 ,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
     }, 
     {
          value: 'W',
          name: 'Heater 2',
          name2: 'Chord 2',
          keyCode: 87,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
     },
     {
          value: 'E',
          name: 'Heater 3',
          name2: 'Chord 3',
          keyCode: 69,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
     },
     {
          value: 'A',
          name: 'Heater 4',
          name2: 'Shaker',
          keyCode: 65,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
     },
     {
          value: 'S',
          name: 'Clap',
          name2: 'Open HH',
          keyCode: 83,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
     },
     {
          value: 'D',
          name: 'Open-HH',
          name2: 'Closed HH',
          keyCode: 68,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
     },
     {
          value: 'Z',
          name: 'Kick-n-Hat',
          name2: 'Punchy Kick',
          keyCode: 90,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
     },
     {
          value: 'X',
          name: 'Kick',
          name2: 'Side Stick',
          keyCode: 88,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
     },
     {
          value: 'C',
          name: 'Closed-HH',
          name2: 'Snare',
          keyCode: 67,
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
          url2: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
     }
];

const DrumKeysPanel = () => {
     const {  checkedPower, checkedSound, setDisplayInfo } = useContext(StateContext);
     
     const handleDramPad = useCallback(e => {
          const { keyCode } = e;
          
          const [clip] = AudioClips.filter(clip => {
               return clip.keyCode === keyCode
          });

          if(checkedPower) {
               if (clip) {
                    const audio = document.getElementById(clip.value);
                    setDisplayInfo(!checkedSound ? clip.name : clip.name2);
                    audio.play();
               }
          }

        }, [setDisplayInfo, checkedSound, checkedPower]);
     
     useEffect(() => {
          window.addEventListener('keydown', handleDramPad);
      
          return () => {
            window.removeEventListener('keydown', handleDramPad);
          };
        }, [handleDramPad]);

     const handleDramPadMouse = (e) => {
          if(checkedPower) {
               const { id } = e.target.childNodes[1];
               setDisplayInfo(e.target.id);
               const audio = document.getElementById(id);
               audio.play()
          }
     };

     return (
        <div className="drum-keys-panel">
          {AudioClips.map((clip) => 
               <DrumPad 
                    key={ clip.keyCode }
                    name={ !checkedSound ? clip.name : clip.name2}
                    keyValue={clip.value}
                    url={ !checkedSound ? clip.url : clip.url2}
                    onClick={handleDramPadMouse}
               />)
          }
        </div>
     )
};

export default DrumKeysPanel;
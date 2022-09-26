import { useState } from 'react';
import './styles/ControlPanel.css'
import { DefaultfSwitch, Display, Volume } from '.';

const ControlPanel = () => {
     const [checkedPower, setCheckedPower] = useState(false);
     const [checkedSound, setCheckedSound] = useState(false);
     const [displayInfo, setDisplayInfo] = useState('Info Display');
     const [volumeValue, setVolumeValue] = useState(50);

     const handleChangePower = () => {
          setCheckedPower(!checkedPower);
          setDisplayInfo(!checkedPower ? 'Power ON' : "Power OFF")
     }

     const handleChangeSound = () => {
          setCheckedSound(!checkedSound);
          setDisplayInfo(!checkedSound ? 'Smooth Piano Kit' : "Heater Kit")
     }
     
     const handleChangeVolume = (e) => {
          setVolumeValue(e.target.value);
          setDisplayInfo(`Volume: %${volumeValue}`)
     }

     return (
          <div className='control-panel'>
               <DefaultfSwitch handleChange={ handleChangePower } checked={ checkedPower } optionText="Power"/>
               <Display optionText={ displayInfo }/>
               <Volume handleChange={ handleChangeVolume } value={ volumeValue }/>
               <DefaultfSwitch handleChange={ handleChangeSound } checked={ checkedSound } optionText="Bank"/>
          </div>
     )
};

export default ControlPanel;
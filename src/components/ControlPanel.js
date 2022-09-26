import { useState } from 'react';
import './styles/ControlPanel.css'
import { DefaultfSwitch, Display } from '.';

const ControlPanel = () => {
     const [checkedPower, setCheckedPower] = useState(false);
     const [checkedSound, setCheckedSound] = useState(false);
     const [displayInfo, setDisplayInfo] = useState('Info Display');

     const handleChangePower = () => {
          setCheckedPower(!checkedPower);
          setDisplayInfo(!checkedPower ? 'Power ON' : "Power OFF")
     }

     const handleChangeSound = () => {
          setCheckedSound(!checkedSound);
          setDisplayInfo(!checkedSound ? 'Smooth Piano Kit' : "Heater Kit")
     }
     
     return (
          <div className='control-panel'>
               <DefaultfSwitch handleChange={ handleChangePower } checked={ checkedPower } optionText="Power"/>
               <Display optionText={ displayInfo }/>
               <div className='control-panel'>Volume</div>
               <DefaultfSwitch handleChange={ handleChangeSound } checked={ checkedSound } optionText="Bank"/>
          </div>
     )
};

export default ControlPanel;
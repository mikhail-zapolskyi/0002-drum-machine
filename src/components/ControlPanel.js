import { useState } from 'react';
import './styles/ControlPanel.css'
import { DefaultfSwitch } from '.';

const ControlPanel = () => {
     const [checkedPower, setCheckedPower] = useState(false);
     const [checkedSound, setCheckedSound] = useState(false);

     const handleChangePower = () => {
          setCheckedPower(!checkedPower);
     }

     const handleChangeSound = () => {
          setCheckedSound(!checkedSound)
     }
     
     return (
          <div className='control-panel'>
               <DefaultfSwitch handleChange={ handleChangePower } checked={ checkedPower } optionText="Power"/>
               <div className='control-panel'>Display</div>
               <div className='control-panel'>Volume</div>
               <DefaultfSwitch handleChange={ handleChangeSound } checked={ checkedSound } optionText="Bank"/>
          </div>
     )
};

export default ControlPanel;
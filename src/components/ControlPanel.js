import './styles/ControlPanel.css'
import { DefaultfSwitch, Display, Volume } from '.';
import { useContext } from 'react';
import { StateContext } from '../App';

const ControlPanel = () => {
     const { 
          checkedPower, 
          checkedSound, 
          displayInfo, 
          volumeValue,
          handleChangePower,
          handleChangeSound,
          handleChangeVolume
     } = useContext(StateContext);

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
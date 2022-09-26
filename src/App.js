import { DrumKeysPanel, ControlPanel } from './components/index';
import { createContext, useState } from 'react';
import './App.css';

export const StateContext = createContext();

function App() {
     const [checkedPower, setCheckedPower] = useState(false);
     const [checkedSound, setCheckedSound] = useState(false);
     const [displayInfo, setDisplayInfo] = useState('Info Display');
     const [volumeValue, setVolumeValue] = useState(50);

     const state = {
          checkedPower, setCheckedPower,
          checkedSound, setCheckedSound,
          displayInfo, setDisplayInfo,
          volumeValue, setVolumeValue,
          handleChangePower: () => {
               setCheckedPower(!checkedPower);
               setDisplayInfo(!checkedPower ? 'Power ON' : "Power OFF")
          },
          handleChangeSound: () => {
               setCheckedSound(!checkedSound);
               setDisplayInfo(!checkedSound ? 'Smooth Piano Kit' : "Heater Kit");
          },
          handleChangeVolume: (e) => {
               setVolumeValue(e.target.value);
               setDisplayInfo(`Volume: %${volumeValue}`);
               
          }
     };

     return (
          <StateContext.Provider value={state}>
               <div className="drum-background">
                    <div id="drum-machine">
                         <DrumKeysPanel />
                         <ControlPanel />
                    </div>
               </div>
          </StateContext.Provider>
     );
}

export default App;

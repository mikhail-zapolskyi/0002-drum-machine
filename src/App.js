import { DrumKeysPanel, ControlPanel } from './components/index';

import './App.css';

function App() {
     return (
         <div className="drum-background">
               <div id="drum-machine">
                    <DrumKeysPanel />
                    <ControlPanel />
               </div>
         </div>
     );
}

export default App;

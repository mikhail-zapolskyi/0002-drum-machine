import './styles/DrumKeysPanel.css';
import { DrumPad } from '.';

const keys = [ 
     {value: 'Q'}, 
     {value: 'W'},
     {value: 'E'},
     {value: 'A'},
     {value: 'S'},
     {value: 'D'},
     {value: 'Z'},
     {value: 'X'},
     {value: 'C'}
]

const DrumKeysPanel = () => {
     return (
        <div className="drum-keys-panel">
          { keys.map((key, index) => 
               <DrumPad 
                    keyValue={ key.value } 
                    key={ key.value + index }
                    id={ key.value }
               />)
          }
        </div>
     )
};

export default DrumKeysPanel;
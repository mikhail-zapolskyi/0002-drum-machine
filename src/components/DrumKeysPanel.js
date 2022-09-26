import './styles/DrumKeysPanel.css';
import { DrumKey } from '.';

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
          { keys.map((key, index) => <DrumKey keyValue={ key.value } key={ key.value + index }/>)}
        </div>
     )
};

export default DrumKeysPanel;
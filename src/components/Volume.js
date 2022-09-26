import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';
import './styles/Volume.css';


const Volume = ({ value, handleChange }) => {
     const clips = document.querySelectorAll('.clip');

     for(let i = 0; clips.length > i; i++) {
          clips[i].volume = value / 100;
     }
     
     return (
          <div className='volume'>
               <VolumeDown />
               <Slider 
                    aria-label="Volume" 
                    value={value} 
                    onChange={ handleChange } 
                    min={0}
                    max={100}
                    step={1}
               />
               <VolumeUp />
          </div>
     )
}

export default Volume;
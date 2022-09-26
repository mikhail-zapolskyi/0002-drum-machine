import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';
import './styles/Volume.css';


const Volume = ({ value, handleChange }) => {
  return (
    <div className='volume'>
          <VolumeDown />
          <Slider 
               aria-label="Volume" 
               value={value} 
               onChange={ handleChange } 
               min={1}
               max={100}
               step={1}
          />
          <VolumeUp />
    </div>
  )
}

export default Volume;
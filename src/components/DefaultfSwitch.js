
import { Switch, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import './styles/DefaultfSwitch.css';

const DefaultfSwitch = ({ checked, handleChange, optionText }) => {
     const BlueColor = blue[500];
     
     return (
          <div className="defaultf-switch">
               <Switch checked={ checked } onChange={ handleChange }/>
               <Typography color={checked && BlueColor} fontSize={ 20 }>{ optionText }</Typography>
          </div>
     )
}    

export default DefaultfSwitch;
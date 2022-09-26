import './styles/DrumPad.css';

const DrumPad = ({ keyValue }) => {
     return (
          <div className='drum-pad'>{ keyValue }</div>
     )
};

export default DrumPad;
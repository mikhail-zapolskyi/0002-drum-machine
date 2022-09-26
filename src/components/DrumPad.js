import './styles/DrumPad.css';

const DrumPad = ({ name, keyValue, url, onClick, onKeyDown }) => {
     
     return (
          <button className='drum-pad' onClick={ onClick } id={ name }>
               { keyValue }
               <audio src={ url } className='clip' id={ keyValue } onKeyDown={ onKeyDown }/>
          </button>
     )
};

export default DrumPad;
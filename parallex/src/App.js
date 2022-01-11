import imgL from './images/imgL.jpg'
import imgR from './images/imgR.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
    <div className='zoom'>
      <img src={imgL} alt='pic' id="img1" />
      <img src={imgR} alt='' id='img2'/>
    </div>
    </div>
  );
}

export default App;

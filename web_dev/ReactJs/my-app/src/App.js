import logo from './logo.svg';
import './App.css';
import SoapItems  from './components/item';

function App() {
  return (
    // only single parent exist, we can't return multiple components at same time
    <div className="App">
      <div >
        Hello Harsh!
        <p>Can You buy!!</p>
      </div>
      <SoapItems></SoapItems>
    </div>
  );
}

export default App;

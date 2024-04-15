// import logo from './logo.svg';
import './App.css';
import SoapItems from './components/item';
import ItemPrice from './components/ItemPrice';

function App() {
  return (
    // only single parent exist, we can't return multiple components at same time
    <div className="App">
      <div >
        Hello Harsh!
        <p>SoapItems:</p>
      </div>
      <SoapItems></SoapItems>
      <ItemPrice></ItemPrice>
      <p>Can you buy..?</p>
    </div>
  );
}

export default App;

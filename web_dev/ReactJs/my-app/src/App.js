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
        <div className="soap-item">
            <p>SoapItems:</p>
          <div className="items">
            {/* how can i print text in b/w of custom items we can handle this stuff using property.child */}
            <SoapItems name="Nirma">M hu first item</SoapItems>
            <ItemPrice price="150"></ItemPrice>
          </div>
          <div className="items">
            <SoapItems name="SurfExcel">M hu second item</SoapItems>
            <ItemPrice price="250"></ItemPrice>
          </div>
          <div className="items">
            <SoapItems name="555">M hu third item</SoapItems>
            <ItemPrice price="125"></ItemPrice>
          </div>          
        </div>
      </div>
      
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
// import SoapItems from './components/item';
// import ItemPrice from './components/ItemPrice';

import ItemName from './components2/ItemName'
import ItemDate from './components2/ItemDate'
import Button from './components2/Button';
import NewProduct from './components2/NewProduct'

function App() {
  return (

    // new code 

    <div className="App">
      <h1>Hello Harsh!!</h1>
      <NewProduct className="New-Pdt"></NewProduct>

      <div className="items">
        <ItemDate date="21" month="September" year="2021"></ItemDate>
        <ItemName name="Nirma"></ItemName>
        <Button text="Add To Cart"></Button>
      </div>
      <div className="items">
        <ItemDate date="20" month="October" year="2021"></ItemDate>
        <ItemName name="Surf-Excel"></ItemName>
        <Button text="Add To Cart"></Button>
      </div>
      <div className="items">
        <ItemDate date="01" month="June" year="2021"></ItemDate>
        <ItemName name="Tide"></ItemName>
        <Button text="Add To Cart"></Button>
      </div>
      <div className="items">
          <ItemDate date="11" month="July" year="2021"></ItemDate>
        <ItemName name="Maggie"></ItemName>
        <Button text="Add To Cart"></Button>
      </div>

      {/* <Button text="Submit"></Button> */}

    </div>



    // old code
    
    // only single parent exist, we can't return multiple components at same time
    // <div className="App">
    //   <div >
    //     Hello Harsh!
    //     <div className="soap-item">
    //         <p>SoapItems:</p>
    //       <div className="items">
    //         {/* how can i print text in b/w of custom items we can handle this stuff using property.child */}
    //         <SoapItems name="Nirma">M hu first item</SoapItems>
    //         <ItemPrice price="150"></ItemPrice>
    //       </div>
    //       <div className="items">
    //         <SoapItems name="SurfExcel">M hu second item</SoapItems>
    //         <ItemPrice price="250"></ItemPrice>
    //       </div>
    //       <div className="items">
    //         <SoapItems name="555">M hu third item</SoapItems>
    //         <ItemPrice price="125"></ItemPrice>
    //       </div>          
    //     </div>
    //   </div>
      
    // </div>
  );
}

export default App;

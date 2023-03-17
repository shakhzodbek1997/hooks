import React, {useState} from "react";

function randomNumber(){
  console.log("CAlULATING...")
  return Math.trunc(Math.random() * 20);
}



function App() {
  // useState --> 
  // number: is equal the given default value in useState(#), 
  // setNumber is a function, it helps to change the number's value
  
  //const [number, setNumber] = useState(0); // useState(0) <-- I can change this default 0 with any fucntion
  //const [number, setNumber ] = useState(randomNumber); // useState reciving a fucntion "randomNUmber" 
  
  // it is possible to call callBack functin inside the useState↓↓↓
  
  const [number, setNumber] = useState(() => {
    return randomNumber();
  })

  // it is possible to use Object in useState ↓↓↓
  const [state, setState] = useState(
    {
      text: 'Number1', 
      date: Date.now(),
      name: "King",
      age: 21
    }
  );

  function increment() {
    // srtNumber is a function, I'm writing a "callBack function to this"
    // this callback function recive an argument 
    // this argument is prev -->"Oldingi aholat = prev"
    setNumber((prev) => {
      return prev + 1; // oldingi holatini bittaga qo'shib 
    });

    // short form of this code == this is absalutely same with previous one
    // setNumber((prev) => prev + 1);
  }

  function decrement(){
    if(number > 0) setNumber((prev) => prev - 1); // I used shortest version
  }


  // when I click edit button, this function will chang eonly text: not whole objkect
  function uploadObject() {
    setState((prev) => {
      return{
        ...prev,
        text: 'New Text '
      }
    })
  }


  return (
    <div className="container">
      <div className="btn-group">
        <p>Nomer: {number}</p>
        <button onClick={increment} className="success">ADD</button>
        <button onClick={decrement} className="danger">DELETE</button>
        
        <button 
          // onClick={() => { // i'm going to change the state with setState↓↓↓  (in this case full object will change)
          //   setState({text: "New text changed!"}) 
          // }} 

          onClick={uploadObject}
          className="secondary">Edit</button>
      </div>

      <pre>{JSON.stringify(state, null, 5)}</pre>
    </div>
  );
}

export default App;

// useState >>(hook) >> is a asynchron function/ hook
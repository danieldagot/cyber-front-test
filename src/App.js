import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
          <Router>

       <Switch>

          {/* <Route  path="/" component = {Test1}/> */}

//           <Route   path="/very/secret" exact  component = {Test2} >
          <Route   path="/secret" exact  component = {Test2} >
            
          
          </Route>

        </Switch>
        </Router>

    </div>
  );
}

export default App;



function Test1(){
return(
  <div>
     saer2123
  </div>
)


}




function Test2(){
  let a  =  localStorage.getItem("open")
  a ? console.log("hello") : localStorage.setItem("open","0")
  return(
    <div>
      {<Door1 />}
    </div>
  )
  
  
  }

function Door1 () {

  let a  =  localStorage.getItem("open")
  return(
    <div>
      {a == 0 ? "open door one" : <Door3 /> }
    </div>
  )
  

}



function Door3()
{
  let code = 84105115102108
  const [input, setInput] = useState(0);

  return(
<div>
    {input == code ? "flag" :  <input onChange = { e => setInput(inscription(e.target.value)) } ></input> }
    

</div>
  )


}





function inscription(str) {

  let hash = []
  for (let index = 0; index < str.length; index++) {
      let char  =  str.charCodeAt(index)
      hash.push(char+1)
      
    
  }
  return hash.join('')
}

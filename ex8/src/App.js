import React, {useState } from "react";
import Input from "./Input";
export default function App(){
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

     return(
<center><p>REUSABLE COMPONENTS</p>
<div classname="App">
<Input 
      setInputValue={setFirstInput}
      InputValue={firstInput}
      inputType="text"
     />
<Input 
      setInputValue={setSecondInput}
      InputValue={secondInput}
      inputType="number"
     />
<Input 
      setInputValue={setThirdInput}
      InputValue={thirdInput}
      inputType="text"
     />
<div>
<p>Name: {firstInput}</p>
<p>Age: {secondInput}</p>
<p>Address: {thirdInput}</p>
</div>
</div>
</center>
  );
}

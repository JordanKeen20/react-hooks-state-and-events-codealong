import React, {useState} from "react";

function Toggle() {
    const[isOff, setIsOff] = useState(true)
  function handleToggle(){
    setIsOff((isOff) => !isOff)
  }

  const color = isOff ? "white" : "green";

  return <button style={{background: color}} onClick = {handleToggle} >{isOff ? "off" : "on"}</button>;
}

export default Toggle;

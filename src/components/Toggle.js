// import React from "react";
import React, { useState } from "react"

function Toggle() {

  const [isOn, setIsOn] = useState(false)

  function handleBtn(){
      setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white";

  return <button style={{background: color}} onClick={handleBtn}>{isOn ? "ON" : "OFF" }</button>;
}

export default Toggle;

// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
      <div>
        <form action="">
          <input
            type="password"
            onChange={(e) => {
                console.log("Entering password...")
            }}
          />
        </form>
      </div>
    );
}

export default Keypad;
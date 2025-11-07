import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Opérationel !",
          "Polyvalent",
          "Développeur full stack",
          "Autonome",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 20,
      }}
    />
  );
}

export default Type;

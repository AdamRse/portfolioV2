import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Opérationel !",
          "Développeur full stack",
          //"Freelance",
          "Polyvalent",
          "Code from scratch",
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

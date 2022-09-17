import React from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.css";

export default function TypedStuff() {
  return (
    <div className="typewritter-text">
      <Typewriter
        options={{
          strings: ["Open to work", "Eager to learn", "Ready to contribute"],
          autoStart: true,
          loop: true,
          deleteSpeed: "natural",
        }}
      />
    </div>
  );
}

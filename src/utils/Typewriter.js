import React from "react";
import Typewriter from "typewriter-effect";

const styles = {
  display: "inline-block",
  backgroundColor: "#ccff00cf",
  color: "#000",
  fontSize: "1.5rem",
};

export default function TypedStuff() {
  return (
    <div style={styles}>
      <Typewriter
        options={{
          strings: [
            "PERN stack developer",
            "Problem solver",
            "Bootcamp graduate",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: "natural",
        }}
      />
    </div>
  );
}

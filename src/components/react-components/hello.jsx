import React from "react";

const Hello = ({ name, age, location }) => {
  return (
    <div>
      Hello!! I am {name}, I am {age} years old, and I'm from {location}
    </div>
  );
};

export default Hello;

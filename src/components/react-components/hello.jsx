import React from "react";

const Hello = ({ name, age, location }) => {
  const [text, setText] = React.useState(
    `Hello!! I am ${name}, I am ${age} years old, and I'm from ${location}`
  );
  return (
    <div>
      <h2 className="text-6xl font-bold text-center text-white">{text}</h2>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setText("Hello!! I am a React Component");
          console.log("Button clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Hello;

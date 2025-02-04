import React, { useEffect } from "react";

const Hello = ({ name, age, location }) => {
  const textArray = [
    `Hello! I am ${name}!!`,
    `I am ${age} years old`,
    `I am from ${location}`,
  ];
  const [text, setText] = React.useState(textArray[0]);
  const [progressWidth, setProgressWidth] = React.useState(100);
  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setText(textArray[i]);
      i++;
      if (i === textArray.length) {
        clearInterval(interval);
        // Restart the process
        i = 0;
        setProgressWidth(100);
      } else {
        // progress bar reduce smoothly to down
        setProgressWidth((prev) => prev - 50);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [name, age, location]);
  return (
    <div>
      {/* loader progress */}
      <div className="progress w-full fixed top-0 left-0 h-[6px]">
        <div
          className={`progress-inner h-full bg-amber-400`}
          style={{ width: progressWidth + "%" }}
        ></div>
      </div>
      <h2 className="text-6xl font-bold mb-10 text-center text-white">
        {text}
      </h2>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setText(textArray[0]);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Hello;

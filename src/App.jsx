import { useState, useEffect } from "react";

function App() {
  const [position, setPosition] = useState("left"); // Default position for the nav bar
  const [color, setColor] = useState("olive"); // Background color
  const [showTooltip, setShowTooltip] = useState(true); // Tooltip visibility

  const colors = [
    { name: "Red", value: "red-500", hover: "red-600", shadow: "red-400/50", text: "text-white" },
    { name: "Green", value: "green-500", hover: "green-600", shadow: "green-400/50", text: "text-white" },
    { name: "Yellow", value: "yellow-400", hover: "yellow-500", shadow: "yellow-400/50", text: "text-black" },
    { name: "Blue", value: "blue-500", hover: "blue-600", shadow: "blue-400/50", text: "text-white" },
    { name: "Black", value: "black", hover: "gray-800", shadow: "black/50", text: "text-white" },
    { name: "Grey", value: "gray-400", hover: "gray-500", shadow: "gray-400/50", text: "text-white" },
    { name: "Pink", value: "pink-400", hover: "pink-500", shadow: "pink-400/50", text: "text-white" },
    { name: "Purple", value: "purple-500", hover: "purple-600", shadow: "purple-400/50", text: "text-white" },
    { name: "Lavender", value: "lavender-300", hover: "lavender-400", shadow: "lavender-400/50", text: "text-black" },
    { name: "White", value: "white", hover: "gray-100", shadow: "gray-400/50", text: "text-black border border-gray-300" }
  ];

  // Determine the CSS classes based on the selected position
  const getPositionClass = () => {
    switch (position) {
      case "up":
        return "top-0 left-1/2 transform -translate-x-1/2 flex-row"; // Horizontally at the top
      case "down":
        return "bottom-20 left-1/2 transform -translate-x-1/2 flex-row"; // Horizontally at the bottom
      case "left":
        return "left-0 top-1/2 transform -translate-y-1/2 flex-col"; // Vertically on the left
      case "right":
        return "right-0 top-1/2 transform -translate-y-1/2 flex-col"; // Vertically on the right
      default:
        return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col"; // Centered and vertical
    }
  };

  // Hide the tooltip after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen duration-300 ease-in-out" style={{ backgroundColor: color }}>
      {/* Floating Nav Bar (Color Changer) */}
      <div
        className={`fixed flex gap-4 p-4 bg-white/70 shadow-2xl backdrop-blur-lg rounded-3xl transition-all ease-in-out ${getPositionClass()}`}
        style={{
          zIndex: 1000, // Ensures it floats above other content
          backdropFilter: 'blur(10px)', // For a frosted-glass effect
          transitionDuration: "7000ms", // 7 seconds transition duration
        }}
      >
        {colors.map(({ name, value, hover, shadow, text }) => (
          <button
            key={name}
            className={`bg-${value} hover:bg-${hover} ${text} px-5 py-2 rounded-full shadow-md transition-all hover:shadow-${shadow} hover:scale-105`}
            onClick={() => setColor(name.toLowerCase())}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Directional Controls */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md"
          onClick={() => setPosition("up")}
        >
          Up
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md"
          onClick={() => setPosition("left")}
        >
          Left
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md"
          onClick={() => setPosition("down")}
        >
          Down
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
          onClick={() => setPosition("right")}
        >
          Right
        </button>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
          Use the buttons below to control the nav bar position!
        </div>
      )}
    </div>
  );
}

export default App;

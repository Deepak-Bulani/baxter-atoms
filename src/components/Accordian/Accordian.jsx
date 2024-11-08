import React, { useState } from "react";

const Accordion = ({tabs}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {tabs.map((tab, index) => (
        <div key={index} className="border border-gray-300 rounded-md mb-1">
          <div
            className="bg-gray-100 p-4 cursor-pointer hover:bg-gray-200 transition duration-200"
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-lg font-semibold">{tab.name}</h3>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-white border-t border-gray-300">
              <p>{tab.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

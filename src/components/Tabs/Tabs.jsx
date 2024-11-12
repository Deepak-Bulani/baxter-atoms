import React, {useState} from 'react';

const Tabs = ({props}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-4 border border-primary-borderColorNew rounded-b-[3px]">
      {props.map((item, index) => (
        <button
          key={index}
          className={`py-2 px-4 border-x border-t rounded-t-lg mt-4 ml-2 mr-2 ${
            activeTab === index
              ? 'bg-white text-black  border-primary-activeTabBorder font-bold'
              : 'bg-white border-gray-300'
          }`}
          onClick={() => setActiveTab(index)}
        >
          {item.text}
        </button>
      ))}
      <div className="bg-primary-boxHeaderColor min-h-[20px] text-[12px] text-white"></div>
      <div className="m-4">{props[activeTab].comp}</div>
    </div>
  );
};

export default Tabs;

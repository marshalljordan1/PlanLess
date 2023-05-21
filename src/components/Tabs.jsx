import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tabs tabs-boxed bg-secondary-focus">
        <a
          className={`tab ${activeTab === "upcoming" ? "tab-active" : ""} `}
          onClick={() => handleTabClick("upcoming")}
        >
          Upcoming Classes
        </a>
        <a
          className={`tab ${activeTab === "previous" ? "tab-active" : ""}`}
          onClick={() => handleTabClick("previous")}
        >
          Previous Classes
        </a>
      </div>
    </>
  );
};

export default Tabs;

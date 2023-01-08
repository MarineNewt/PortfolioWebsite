import React from "react";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2"><b>• {skill}</b></p>
      
    </div>
  );
}

export default SkillsBar;

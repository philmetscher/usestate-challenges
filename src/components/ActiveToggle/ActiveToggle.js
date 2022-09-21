import { useState } from "react";
import "./ActiveToggle.css";

function ActiveToggle() {
  const [active, setActive] = useState(true);
  return (
    <main>
      <div className={"box" + (active ? " box--active" : "")} />
      <button
        type="button"
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

export default ActiveToggle;

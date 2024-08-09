import { useRef, useState } from "react";
import arrow from "../assets/icons/arrow.svg";

function Collapse({ title, children, open = false }) {
  const [isOpen, setIsOpen] = useState(open);
  const ref = useRef(null);

  return (
    <div className={`collapse ${isOpen ? "open" : "close"}`}>
      <button className="toggle" type="type" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img className="arrow" src={arrow} alt="" />
      </button>
      <div
        className="content-parent"
        ref={ref}
        style={{
          height: isOpen ? ref.current.scrollHeight + "px" : 0,
        }}
      >
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;

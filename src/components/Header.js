import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Header() {
  const typing = useRef(null);
  useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: [
        "UI/UX Designer",
        "Mobile App Development",
        "Frontend Developer"
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="header-wrepper">
      <div className="main-info">
        <h1>i am a Developer</h1>
        <p ref={typing}></p>
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
}

export default Header;

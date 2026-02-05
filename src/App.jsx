import { useEffect } from "react";
import Home from "./Home";

function App() {

  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      <div className="cursor-glow"></div>

      <Home />
    </>
  );
}

export default App;

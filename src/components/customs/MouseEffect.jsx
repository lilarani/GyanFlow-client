import React, { useState, useEffect } from "react";

const MouseEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        
          <div
              className="w-10 h-10 border  border-yellow-400 rounded-full fixed pointer-events-none mix-blend-difference transition-all duration-75 ease-out z-50"
              style={{
                  top: position.y,
                  left: position.x,
                  transform: "translate(-50%, -50%)",
              }}
          >
          </div>
         
    );
};

export default MouseEffect;

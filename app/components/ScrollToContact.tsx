"use client"; // Needed for Next.js App Router  

import { useEffect, useState } from "react";  

const ScrollToBottom = () => {  
  const [isVisible, setIsVisible] = useState(false);  

  useEffect(() => {  
    const handleScroll = () => {  
      const scrollTop = window.scrollY;  
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;  
      setIsVisible(scrollTop < scrollHeight - 200); // Show only if not near bottom  
    };  

    window.addEventListener("scroll", handleScroll);  
    return () => window.removeEventListener("scroll", handleScroll);  
  }, []);  

  const scrollToBottom = () => {  
    window.scrollTo({  
      top: document.documentElement.scrollHeight,  
      behavior: "smooth",  
    });  
  };  

  return (  
    <button  
      style={{background: "transparent", border: "none", fontSize: "1.4rem", color: "#fff", cursor: "pointer"}}  
      onClick={scrollToBottom}  
      className={`fixed bottom-10 right-10 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}  
    >  
      Contact
    </button>  
  );  
};  

export default ScrollToBottom;  

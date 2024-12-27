import React, { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage';
import TextConvertor from './pages/TextConvertor';

function App() {
  const [theme,setTheme] = useState(()=>{
    return localStorage.getItem("theme") || "coffee";
  });
  
  useEffect(()=>{
    document.body.setAttribute("data-theme", theme);
  },[theme]);

  const handleThemeChange = (newTheme) =>{
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div data-theme={theme}>
      <TextConvertor heading="Transformify - Text Convertor" />
      <LandingPage onThemeChange={handleThemeChange}/>
    </div>
  )
}

export default App


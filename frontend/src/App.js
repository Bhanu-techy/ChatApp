import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import HomePage from "./components/HomePage";

function App() {
  const [darkTheme, setTheme] = useState(false)

  const onChangeTheme = () =>{
    setTheme(prev => !prev)
  }
  
  return (
    <BrowserRouter>
    <div className={`h-[100vh] flex flex-col ${darkTheme && "bg-gray-700 text-white"}`}>
      <ThemeToggle onChangeTheme={onChangeTheme} darkTheme={darkTheme}/>
      {darkTheme && <hr className="h-[2px] w-full bg-gray-400"/>}
      <div className="flex justify-start items-center h-screen">
        <Sidebar darkTheme={darkTheme}/>
        {darkTheme && <hr className="h-full bg-gray-400 w-[2px]"/>}
        <Routes>
          <Route path="/" element={<HomePage darkTheme={darkTheme}/>} />
          <Route path="/chat/:sessionId" element={<ChatWindow darkTheme={darkTheme}/>} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

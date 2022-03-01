import { useState } from "react";
import "./App.css";
import { LoginPage } from "./views/LoginPage";

function App() {
  return (
    <div className="font-dmsans flex justify-center items-center h-screen w-screen">
        <LoginPage />
    </div>
  );
}

export default App;

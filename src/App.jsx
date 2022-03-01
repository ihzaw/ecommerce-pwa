import "./App.css";
import { LoginPage } from "./views/LoginPage";
import { HomePage } from "./views/HomePage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState('Login')

  return (
    <div className="font-dmsans flex justify-center items-center h-screen w-screen">
        {page === 'Login' && <LoginPage setPage={setPage} />}
        {page === 'Home' && <HomePage setPage={setPage} />}
    </div>
  );
}

export default App;

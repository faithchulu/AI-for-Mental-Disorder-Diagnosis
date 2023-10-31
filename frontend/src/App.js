import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Assessment from "./pages/assessment";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element = {< Login/>}/>
        <Route path="/assessment" element={< Assessment/>}/>
        <Route path= "/home" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

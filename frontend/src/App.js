import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Assessment from "./pages/assessment";
import LandingPage from "./pages/landingPage";
import ViewDiagnosis from "./pages/viewDiagnosis"
import ViewPastDiagnosis from "./pages/viewPastDiagnosis"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element = {< Login/>}/>
        <Route path="/assessment" element={< Assessment/>}/>
        <Route path="/home" element={<LandingPage/>}/>
        {/* <Route path="/diagnosis/:id" element={< ViewDiagnosis/>}/> */}
        <Route path="/diagnosis" element={< ViewDiagnosis/>}/>
        <Route path="/diagnoses" element={< ViewPastDiagnosis/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

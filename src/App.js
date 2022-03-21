import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Defilabs from "./components/Defilabs";
import Farm from "./components/Farm";
import Trade from "./components/Trade";
import Network from "./components/Network";
import Transaction1 from "./components/Transaction1";
import Transaction2 from "./components/Transaction2";
import Reward1 from "./components/Reward1";
import Reward2 from "./components/Reward2";
import Invite from "./components/Invite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {GlobalStateProvider} from "./js/GlobalContext";

function App() {
  return (
    <GlobalStateProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/defipro" element={<Defilabs />} />
        <Route path="/farms" element={<Farm />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/network" element={<Network />} />
        <Route path="/current-stake" element={<Transaction1 />} />
        <Route path="/transaction-history" element={<Transaction2 />} />
        <Route path="/reward" element={<Reward1 />} />
        <Route path="/bonus-plan" element={<Reward2 />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </GlobalStateProvider>
  );
}

export default App;

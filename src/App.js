import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import Navibar from "./components/Navibar/Navibar";
import Register from "./components/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import UserHome from "./components/UserHome/UserHome";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <Navibar/>
        <Routes>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/userhome" element={<UserHome/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element="Home" />
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

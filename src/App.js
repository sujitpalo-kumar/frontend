import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MessageForm />} />
          <Route path="/list" element={<MessageList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

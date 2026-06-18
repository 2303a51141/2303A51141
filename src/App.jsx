import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/all">All</Link>
      {" | "}
      <Link to="/priority">Priority</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllNotifications />} />
        <Route path="/priority" element={<PriorityNotifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
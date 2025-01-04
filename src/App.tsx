import { Route, BrowserRouter as Router, Routes } from "react-router";
import Editor from "./pages/Editor";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Editor />} />
      </Routes>
    </Router>
  );
}

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import CustomForm from "./CustomForm";
import Thanks from "./Thanks";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscribe" element={<CustomForm />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import StyledComponent from "./components/StyledComponent";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="styled-component" element={<StyledComponent />} />
      </Route>
    </Routes>
  );
}

export default App;

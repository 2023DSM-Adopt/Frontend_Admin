import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import MainPage from "./components/pages/main";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="main" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

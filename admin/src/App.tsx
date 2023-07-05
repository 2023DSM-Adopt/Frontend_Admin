import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import MainPage from "./components/pages/main";
import EnterInformationPage from "./components/pages/enterInformation";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="main" element={<MainPage />} />
          <Route path="enterInformation" element={<EnterInformationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

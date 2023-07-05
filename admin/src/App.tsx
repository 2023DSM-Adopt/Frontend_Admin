import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import MainPage from "./pages/main";
import EnterInformationPage from "./pages/enterInformation";
import "./App.css";
import { DetailPage } from "./pages/detail/inedex";
import TimeSettingPage from "./pages/timeSetting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="main" element={<MainPage />} />
          <Route path="detail" element={<DetailPage />} />
          <Route path="enterInformation" element={<EnterInformationPage />} />
          <Route path="timeSetting" element={<TimeSettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

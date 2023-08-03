import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import { UserCreate } from './pages/UserCreate';
import { CouponCreate } from './pages/CouponCreate';
import { Menu } from './components/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<CouponCreate />} />
          <Route path="/users" element={<UserCreate />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;

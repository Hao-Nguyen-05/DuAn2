// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./path/HomeOnly";
import Service from "./path/ServiceOnly";
import Booking from "./path/BookingPageOnly";
import Notification from "./path/NotificationsPageOnly";

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<Home />} />

        {/* Dịch vụ */}
        <Route path="/ServiceOnly" element={<Service />} />

        {/* Đặt lịch */}
        <Route path="/BookingPageOnly" element={<Booking />} />

        {/* Thông báo */}
        <Route path="/NotificationsPageOnly" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;

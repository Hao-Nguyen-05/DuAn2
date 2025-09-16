import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const BookingPage = () => {
  const services = [
    "Chăm sóc da mặt cơ bản",
    "Chăm sóc da mặt cao cấp",
    "Massage thư giãn 60 phút",
    "Massage toàn thân thư giãn",
    "Làm móng tay cơ bản",
    "Làm móng nghệ thuật",
    "Trang điểm dự tiệc",
    "Trang điểm cô dâu",
    "Trị liệu collagen",
    "Tẩy lông Wax toàn thân",
  ];

  const staff = [
    "Chị Linh - Chuyên viên chăm sóc da",
    "Chị Mai - Chuyên viên massage",
    "Chị Hương - Chuyên viên làm móng",
    "Chị Thảo - Chuyên viên trang điểm",
    "Chị Nga - Chuyên viên trị liệu",
  ];

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#"
            style={{ color: "#e91e63", fontSize: "24px" }}
          >
            BeautySpa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ServiceOnly">
                  Dịch vụ
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="#"
                  style={{ color: "#e91e63" }}
                >
                  Đặt lịch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lịch hẹn
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NotificationsPageOnly">
                  Thông báo
                </Link>
              </li>
            </ul>
            <div className="navbar-nav">
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Khách hàng
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Tài khoản
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0)" }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Đặt lịch hẹn</h1>
          <p className="lead">Chọn dịch vụ và thời gian phù hợp với bạn</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-white rounded shadow-sm p-5">
              {/* Booking Information Section */}
              <h4 className="mb-4 fw-bold" style={{ color: "#333" }}>
                Thông tin đặt lịch
              </h4>

              <div className="row mb-4">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Chọn dịch vụ <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select py-2"
                    style={{ border: "1px solid #ddd" }}
                  >
                    <option value="">-- Chọn dịch vụ --</option>
                    {services.map((service, index) => (
                      <option key={index}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Chọn nhân viên <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select py-2"
                    style={{ border: "1px solid #ddd" }}
                  >
                    <option value="">-- Chọn nhân viên --</option>
                    {staff.map((member, index) => (
                      <option key={index}>{member}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Chọn ngày <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select py-2"
                    style={{ border: "1px solid #ddd" }}
                  >
                    <option value="">-- Chọn ngày --</option>
                    <option>Thứ 2 - 15/09/2024</option>
                    <option>Thứ 3 - 16/09/2024</option>
                    <option>Thứ 4 - 17/09/2024</option>
                    <option>Thứ 5 - 18/09/2024</option>
                    <option>Thứ 6 - 19/09/2024</option>
                    <option>Thứ 7 - 20/09/2024</option>
                    <option>Chủ nhật - 21/09/2024</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Chọn giờ <span className="text-danger">*</span>
                  </label>
                  <div className="row g-2 mt-1">
                    {timeSlots.map((time, index) => (
                      <div key={index} className="col-3 mb-2">
                        <button
                          type="button"
                          className="btn w-100 py-2 border text-dark bg-white"
                          style={{
                            borderColor: "#ddd",
                            fontSize: "13px",
                            fontWeight: "400",
                          }}
                        >
                          {time}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Customer Information Section */}
              <h4 className="mb-4 fw-bold" style={{ color: "#333" }}>
                Thông tin khách hàng
              </h4>

              <div className="row mb-4">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Họ và tên <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    placeholder="Nhập họ và tên"
                    style={{ border: "1px solid #ddd" }}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Số điện thoại <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control py-3"
                    placeholder="Nhập số điện thoại"
                    style={{ border: "1px solid #ddd" }}
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control py-3"
                    placeholder="Nhập email (tùy chọn)"
                    style={{ border: "1px solid #ddd" }}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Ghi chú
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Ghi chú thêm (tùy chọn)"
                    style={{ border: "1px solid #ddd" }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <button
                    type="button"
                    className="btn btn-outline-secondary w-100 py-3 fw-semibold"
                    style={{ borderColor: "#6c757d", color: "#6c757d" }}
                  >
                    Hủy bỏ
                  </button>
                </div>
                <div className="col-md-6 mb-3">
                  <button
                    type="button"
                    className="btn w-100 py-3 fw-semibold text-white"
                    style={{
                      backgroundColor: "#e91e63",
                      border: "none",
                      boxShadow: "0 2px 4px rgba(233, 30, 99, 0.2)",
                    }}
                  >
                    Đặt lịch hẹn ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-top py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold" style={{ color: "#e91e63" }}>
                BeautySpa
              </h5>
              <p className="text-muted">
                Trung tâm làm đẹp chuyên nghiệp với đội ngũ chuyên viên giàu
                kinh nghiệm.
              </p>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Dịch vụ</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Chăm sóc da
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Massage
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Làm móng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Trang điểm
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Liên kết</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Đặt lịch
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Lịch hẹn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Thông báo
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold">Liên hệ</h6>
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} className="me-2 text-muted" />
                <span className="text-muted">0123 456 789</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Mail size={16} className="me-2 text-muted" />
                <span className="text-muted">info@beautyspa.com</span>
              </div>
              <div className="d-flex align-items-center">
                <MapPin size={16} className="me-2 text-muted" />
                <span className="text-muted">
                  123 Đường ABC, Quận 1, TP HCM
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted mb-0">
                © 2024 BeautySpa. Tất cả quyền được bảo lưu.
              </p>
            </div>
            <div className="col-md-6 text-end">
              <p className="text-muted mb-0">Made with ❤️ by Readdy</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bootstrap CSS & JS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

      {/* Custom Styles */}
      <style jsx>{`
        .form-control:focus,
        .form-select:focus {
          border-color: #e91e63 !important;
          box-shadow: 0 0 0 0.2rem rgba(233, 30, 99, 0.15) !important;
        }

        .btn:focus {
          box-shadow: 0 0 0 0.2rem rgba(233, 30, 99, 0.25) !important;
        }

        .btn:hover {
          transform: translateY(-1px);
          transition: all 0.2s ease;
        }

        .dropdown-menu {
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .navbar-nav .nav-link:hover {
          color: #e91e63 !important;
        }
      `}</style>
    </div>
  );
};

export default BookingPage;

import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  Gift,
  Star,
  Info,
} from "lucide-react";

const NotificationsPage = () => {
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
                <a className="nav-link" href="#">
                  Đặt lịch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lịch hẹn
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold"
                  href="#"
                  style={{ color: "#e91e63" }}
                >
                  Thông báo
                </a>
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

      {/* Hero */}
      <div
        className="text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0)" }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Thông báo</h1>
          <p className="lead">Theo dõi các thông báo và nhắc nhở quan trọng</p>
        </div>
      </div>

      {/* Main */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-white rounded shadow-sm">
              {/* Header */}
              <div className="p-4 border-bottom d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1 fw-bold">Thông báo</h4>
                  <p className="text-muted mb-0">Bạn có 2 thông báo chưa đọc</p>
                </div>
                <div className="d-flex gap-2">
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-secondary btn-sm dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Tất cả
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Tất cả
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Chưa đọc
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Đã đọc
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-outline-primary btn-sm">
                    <span style={{ color: "#e91e63" }}>
                      Đánh dấu tất cả đã đọc
                    </span>
                  </button>
                </div>
              </div>

              {/* Notifications list (static) */}
              <div className="p-0">
                {/* Item 1 */}
                <div
                  className="notification-item p-4 border-bottom position-relative bg-light"
                  style={{ borderLeft: "4px solid #e91e63" }}
                >
                  <div className="d-flex align-items-start">
                    <div className="me-3 mt-1">
                      <Calendar size={20} className="text-primary" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-semibold d-flex align-items-center">
                        Nhắc nhở lịch hẹn
                        <span
                          className="badge ms-2"
                          style={{
                            backgroundColor: "#e91e63",
                            fontSize: "10px",
                          }}
                        >
                          Quan trọng
                        </span>
                        <span
                          className="badge bg-primary ms-2"
                          style={{ fontSize: "8px" }}
                        >
                          ●
                        </span>
                      </h6>
                      <p className="text-muted mb-2 small">
                        Bạn có lịch hẹn "Chăm sóc da mặt cao cấp" vào ngày mai
                        lúc 14:30 với chị Lan Anh
                      </p>
                      <small className="text-muted">14/1/2024</small>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div
                  className="notification-item p-4 border-bottom position-relative bg-light"
                  style={{ borderLeft: "4px solid #e91e63" }}
                >
                  <div className="d-flex align-items-start">
                    <div className="me-3 mt-1">
                      <CheckCircle size={20} className="text-success" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-semibold d-flex align-items-center">
                        Xác nhận đặt lịch
                        <span
                          className="badge ms-2"
                          style={{
                            backgroundColor: "#e91e63",
                            fontSize: "10px",
                          }}
                        >
                          Quan trọng
                        </span>
                      </h6>
                      <p className="text-muted mb-2 small">
                        Lịch hẹn "Trang điểm dự tiệc" của bạn đã được xác nhận
                        cho ngày 20/01/2024 lúc 18:00
                      </p>
                      <small className="text-muted">13/1/2024</small>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="notification-item p-4 border-bottom position-relative">
                  <div className="d-flex align-items-start">
                    <div className="me-3 mt-1">
                      <Gift size={20} className="text-danger" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-semibold">Ưu đãi đặc biệt</h6>
                      <p className="text-muted mb-2 small">
                        Giảm 20% cho dịch vụ massage thư giãn trong tuần này.
                        Đặt lịch ngay!
                      </p>
                      <small className="text-muted">12/1/2024</small>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="notification-item p-4 border-bottom position-relative">
                  <div className="d-flex align-items-start">
                    <div className="me-3 mt-1">
                      <Star size={20} className="text-warning" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-semibold">Hoàn thành dịch vụ</h6>
                      <p className="text-muted mb-2 small">
                        Cảm ơn bạn đã sử dụng dịch vụ "Massage thư giãn 60
                        phút". Hãy đánh giá trải nghiệm của bạn!
                      </p>
                      <small className="text-muted">12/1/2024</small>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="notification-item p-4 border-0 position-relative">
                  <div className="d-flex align-items-start">
                    <div className="me-3 mt-1">
                      <Info size={20} className="text-info" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-semibold">Cập nhật hệ thống</h6>
                      <p className="text-muted mb-2 small">
                        Hệ thống đặt lịch đã được cập nhật với nhiều tính năng
                        mới. Khám phá ngay!
                      </p>
                      <small className="text-muted">10/1/2024</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer inside box */}
              <div className="p-4 text-center border-top">
                <a
                  href="#"
                  className="btn text-decoration-none"
                  style={{ color: "#e91e63" }}
                >
                  Xem tất cả thông báo cũ
                </a>
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

      {/* Bootstrap */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

      <style jsx>{`
        .notification-item:hover {
          background-color: #f8f9fa !important;
          transform: translateX(2px);
        }
        .btn:focus {
          box-shadow: 0 0 0 0.2rem rgba(233, 30, 99, 0.25) !important;
        }
        .dropdown-menu {
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .navbar-nav .nav-link:hover {
          color: #e91e63 !important;
        }
        .notification-item .btn {
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .notification-item:hover .btn {
          opacity: 1;
        }
        .badge {
          font-size: 10px;
        }
      `}</style>
    </div>
  );
};

export default NotificationsPage;

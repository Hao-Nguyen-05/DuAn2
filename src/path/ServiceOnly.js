import React from "react";
import { Star, Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link, Outlet } from "react-router-dom";


const Service = () => {
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
                <Link className="nav-link"  to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  style={{ color: "#e91e63" }}
                  to=""
                >
                  Dịch vụ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BookingPageOnly">
                  Đặt lịch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Lịch hẹn
                </Link>
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

      {/* Hero */}
      <div
        className="text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #e91e63, #9c27b0)" }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Tất cả dịch vụ</h1>
          <p className="lead">
            Khám phá đầy đủ các dịch vụ làm đẹp chuyên nghiệp
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row">
          {/* Sidebar Filters (chỉ giao diện) */}
          <div className="col-lg-3 mb-4">
            <div className="bg-white rounded shadow-sm p-4 mb-4">
              <h5 className="fw-bold mb-3">Danh mục dịch vụ</h5>
              <button className="btn btn-link text-start p-2 w-100 text-primary fw-bold">
                <span className="me-2" style={{ color: "#e91e63" }}>
                  ■
                </span>{" "}
                Tất cả dịch vụ
                <span className="badge bg-light text-dark ms-auto">10</span>
              </button>
              <button className="btn btn-link text-start p-2 w-100 text-dark">
                <span className="me-2" style={{ color: "#e91e63" }}>
                  ■
                </span>{" "}
                Chăm sóc da mặt
                <span className="badge bg-light text-dark ms-auto">2</span>
              </button>
              <button className="btn btn-link text-start p-2 w-100 text-dark">
                <span className="me-2" style={{ color: "#e91e63" }}>
                  ■
                </span>{" "}
                Massage
                <span className="badge bg-light text-dark ms-auto">2</span>
              </button>
              <button className="btn btn-link text-start p-2 w-100 text-dark">
                <span className="me-2" style={{ color: "#e91e63" }}>
                  ■
                </span>{" "}
                Làm móng
                <span className="badge bg-light text-dark ms-auto">2</span>
              </button>
              <button className="btn btn-link text-start p-2 w-100 text-dark">
                <span className="me-2" style={{ color: "#e91e63" }}>
                  ■
                </span>{" "}
                Trang điểm
                <span className="badge bg-light text-dark ms-auto">2</span>
              </button>
              <button className="btn btn-link text-start p-2 w-100 text-dark">
                <span className="me-2" style={{ color: "#e91e63" }}>
                  ■
                </span>{" "}
                Trị liệu
                <span className="badge bg-light text-dark ms-auto">2</span>
              </button>
            </div>

            {/* Bộ lọc khoảng giá, thời gian, đánh giá: giữ nguyên UI */}
            <div className="bg-white rounded shadow-sm p-4 mb-4">
              <h5 className="fw-bold mb-3">Khoảng giá</h5>
              <div>
                <input type="radio" name="price" className="me-2" />
                Tất cả mức giá
              </div>
              <div>
                <input type="radio" name="price" className="me-2" />
                Dưới 500.000đ
              </div>
              <div>
                <input type="radio" name="price" className="me-2" />
                500.000đ - 1.000.000đ
              </div>
              <div>
                <input type="radio" name="price" className="me-2" />
                Trên 1.000.000đ
              </div>
            </div>

            <div className="bg-white rounded shadow-sm p-4 mb-4">
              <h5 className="fw-bold mb-3">Thời gian thực hiện</h5>
              <div>
                <input type="checkbox" className="me-2" />
                Dưới 60 phút
              </div>
              <div>
                <input type="checkbox" className="me-2" />
                60 - 120 phút
              </div>
              <div>
                <input type="checkbox" className="me-2" />
                Trên 120 phút
              </div>
            </div>

            <div className="bg-white rounded shadow-sm p-4">
              <h5 className="fw-bold mb-3">Đánh giá</h5>
              <div>⭐⭐⭐⭐⭐ từ 5 sao</div>
              <div>⭐⭐⭐⭐ từ 4 sao</div>
              <div>⭐⭐⭐ từ 3 sao</div>
            </div>
          </div>

          {/* Service List (chỉ render tĩnh vài dịch vụ mẫu) */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Tìm thấy 10 dịch vụ</h4>
              <select className="form-select" style={{ width: "auto" }}>
                <option>Phổ biến nhất</option>
                <option>Giá tăng dần</option>
                <option>Giá giảm dần</option>
                <option>Đánh giá cao nhất</option>
              </select>
            </div>

            <div className="row">
              {/* Mẫu 1 */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div
                    className="card-img-top d-flex align-items-center justify-content-center"
                    style={{ height: "200px", background: "#f3e5f5" }}
                  >
                    🏥
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-bold mb-2">
                      Chăm sóc da mặt cơ bản
                    </h6>
                    <p className="card-text text-muted small mb-3">
                      Làm sạch da, tẩy tế bào chết nhẹ nhàng và dưỡng ẩm cơ bản
                    </p>
                    <div className="text-warning mb-2">
                      ⭐⭐⭐⭐⭐ 4.8 (124)
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 fw-bold" style={{ color: "#e91e63" }}>
                        300.000đ
                      </span>
                      <button
                        className="btn text-white"
                        style={{ background: "#e91e63" }}
                      >
                        Đặt lịch
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mẫu 2 */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div
                    className="card-img-top d-flex align-items-center justify-content-center"
                    style={{ height: "200px", background: "#e8f5e9" }}
                  >
                    🏥
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-bold mb-2">
                      Massage thư giãn 60 phút
                    </h6>
                    <p className="card-text text-muted small mb-3">
                      Massage thư giãn với tinh dầu thiên nhiên giúp giảm căng
                      thẳng
                    </p>
                    <div className="text-warning mb-2">⭐⭐⭐⭐ 4.7 (156)</div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 fw-bold" style={{ color: "#e91e63" }}>
                        600.000đ
                      </span>
                      <button
                        className="btn text-white"
                        style={{ background: "#e91e63" }}
                      >
                        Đặt lịch
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* bạn có thể copy thêm các card khác giống vậy */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-top py-5">
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
      <Outlet />
      {/* Bootstrap */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Service;

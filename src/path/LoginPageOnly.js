import React from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <span style={{ color: "#e91e63" }}>Beauty</span>
            <span style={{ color: "#9c27b0" }}>Spa</span>
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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dịch vụ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
            <div className="navbar-nav">
              <a className="nav-link" href="#">
                <i className="bi bi-person-circle me-1"></i> Khách hàng
              </a>
              <a className="nav-link position-relative" href="#">
                <i className="bi bi-bell"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section py-5 mt-5 text-center">
        <div className="container">
          <h1>Đăng nhập tài khoản</h1>
          <p>Truy cập vào hệ thống để trải nghiệm dịch vụ tốt nhất</p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card shadow-sm">
                <div className="card-body p-5">
                  <h3 className="mb-4 text-center">Đăng nhập</h3>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Nhập email"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Nhập mật khẩu"
                      />
                    </div>
                    <div className="d-grid mb-3">
                      <button type="button" className="btn btn-danger">
                        Đăng nhập
                      </button>
                    </div>
                  </form>
                  <div className="text-center mt-3">
                    <a href="#" className="text-decoration-none">
                      Quên mật khẩu?
                    </a>
                    <br />
                    <a href="#" className="text-decoration-none">
                      Chưa có tài khoản? Đăng ký
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-light py-4">
        <div className="container text-center">
          <p>© 2024 BeautySpa. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      id: 1,
      title: "Chăm sóc da mặt cao cấp",
      description:
        "Làm sạch sâu, cấp nước và phục hồi làn da, mang lại vẻ đẹp rạng rỡ và khỏe khoắn.",
      price: "500.000đ",
      originalPrice: "800.000đs",
      discount: "37%",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
      badge: "popular",
    },
    {
      id: 2,
      title: "Massage toàn thân thư giãn",
      description:
        "Thư giãn hoàn toàn với các liệu pháp massage chuyên nghiệp, giúp giảm căng thẳng và mệt mỏi.",
      price: "800.000đ",
      originalPrice: "1.200.000đ",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400",
      badge: "popular",
    },
    {
      id: 3,
      title: "Làm móng nghệ thuật",
      description:
        "Thiết kế móng tay đẹp với các họa tiết độc đáo và màu sắc thời thượng, nổi bật cá tính riêng.",
      price: "300.000đ",
      originalPrice: "450.000đ",
      discount: "33%",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
      badge: "hot",
    },
    {
      id: 4,
      title: "Trang điểm cô dâu",
      description:
        "Makeup cô dâu hoàn hảo cho ngày cưới với phong cách trang nhã, quyến rũ và lôi cuốn nhất.",
      price: "1.500.000đ",
      originalPrice: "2.000.000đ",
      discount: "25%",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
    },
    {
      id: 5,
      title: "Trị liệu collagen",
      description:
        "Công nghệ trị liệu collagen hiện đại giúp tái tạo và làm chậm quá trình lão hóa da hiệu quả.",
      price: "1.500.000đ",
      originalPrice: "2.200.000đ",
      discount: "32%",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400",
      badge: "hot",
    },
    {
      id: 6,
      title: "Waxing toàn thân",
      description:
        "Dịch vụ tẩy lông toàn thân an toàn, sạch sẽ với công nghệ wax cao cấp không gây đau rát.",
      price: "600.000đ",
      originalPrice: "900.000đ",
      discount: "33%",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400",
      badge: "hot",
    },
  ];

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
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
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
                <Link className="nav-link active">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ServiceOnly">
                  Dịch vụ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Liên hệ
                </Link>
              </li>
            </ul>

            <div className="navbar-nav">
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle me-1"></i> Khách hàng
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person me-2"></i>Thông tin cá nhân
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-calendar-check me-2"></i>Lịch hẹn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-heart me-2"></i>Yêu thích
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-box-arrow-right me-2"></i>Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-item">
                <a className="nav-link position-relative" href="#">
                  <i className="bi bi-bell"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section py-5 mt-5">
        <div className="container text-center">
          <h1>
            Trải nghiệm <span className="text-danger">làm đẹp</span> đẳng cấp
          </h1>
          <p>
            Khám phá không gian thư giãn tuyệt vời với các dịch vụ chăm sóc sắc
            đẹp chuyên nghiệp.
          </p>
          <div>
            <button className="btn btn-danger me-2">Đặt lịch ngay</button>
            <button className="btn btn-outline-danger">Xem dịch vụ</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">
            Dịch vụ <span className="text-danger">nổi bật</span>
          </h2>
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm">
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                    <p>
                      <span className="text-danger fw-bold">
                        {service.price}
                      </span>{" "}
                      <del>{service.originalPrice}</del>
                    </p>
                    <button className="btn btn-danger w-100">
                      Đặt lịch ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
}

export default Home;

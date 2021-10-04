import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-dark text-light">
      <div class="container mt-3">
        <div class="row row-cols-1 row-cols-lg-3 g-4">
          <div class="col">
            <h1 className="text-white">About us</h1>
            <div className="d-flex flex-column ">
              <a className="mt-2" href="">Aim</a>
              <a className="mt-2" href="">visions</a>
              <a className="mt-2" href="">Testimonials</a>
            </div>
          </div>
          <div class="col">
            <h1 className="text-white">services</h1>
            <div className="d-flex flex-column ">
              <a className="mt-2" href="">internships</a>
              <a className="mt-2" href="">teaching</a>
              <a className="mt-2" href="">guide in a proper way</a>
            </div>
          </div>
          <div class="col">
            <h1 className="text-white">Contact with us</h1>
            <div className="d-flex flex-column ">
              <a className="mt-2" href="">Mirpur</a>
              <a className="mt-2" href="">Mohammadpur</a>
              <a className="mt-2" href="">Dhanmondi</a>
              <a className="mt-2" href="">Gulshan</a>
              <a className="mt-2" href="">Banani</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

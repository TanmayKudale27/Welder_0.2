import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/About.css'; 
import 'animate.css';


const AboutSection = () => {
  return (
    <div className="container-fluid pt-6 pb-6">
      <div className="container">
        <div className="row g-5">
          {/* Left Image */}
          <div className="col-lg-6 animate__animated animate__fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <img className="img-fluid w-100" src="../src/assets/img/about.jpg" alt="About" />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 animate__animated animate__fadeIn" data-wow-delay="0.5s">
            <h1 className="display-6 text-uppercase mb-4">
              Ultimate Welding and Quality Metal Solutions
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
              iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor,
              malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.
            </p>

            {/* Two Icon Features */}
            <div className="row g-5 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-xl-square bg-light me-3 d-flex align-items-center justify-content-center">
                    <i className="fa fa-users-cog fa-2x text-primary"></i>
                  </div>
                  <h5 className="lh-base text-uppercase mb-0">Certified Expert & Team</h5>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 btn-xl-square bg-light me-3 d-flex align-items-center justify-content-center">
                    <i className="fa fa-tachometer-alt fa-2x text-primary"></i>
                  </div>
                  <h5 className="lh-base text-uppercase mb-0">Fast & Reliable Services</h5>
                </div>
              </div>
            </div>

            {/* Bullet List */}
            <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum</p>
            <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum</p>
            <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum</p>

            {/* Bottom Highlight Box */}
            <div className="border border-5 border-primary p-4 text-center mt-4">
              <h4 className="lh-base text-uppercase mb-0">
                We’re Good in All Metal Works Using Quality Welding Tools
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

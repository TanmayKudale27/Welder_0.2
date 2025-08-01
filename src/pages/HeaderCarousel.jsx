import React from 'react';

const HeaderCarousel = () => {
  return (
    <div className="container-fluid p-0 mb-6 wow fadeIn" data-wow-delay="0.1s">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img className="img-fluid" src="../src/assets/img/carousel-1.jpg" alt="Image" />
          </button>
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <img className="img-fluid" src="../src/assets/img/carousel-2.jpg" alt="Image" />
          </button>
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <img className="img-fluid" src="../src/assets/img/carousel-3.jpg" alt="Image" />
          </button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="../src/assets/img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption">
              <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                Best Metalcraft Solutions
              </h1>
              <a href="#" className="btn btn-primary py-3 px-4">
                Explore More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="../src/assets/img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption">
              <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                Best Metalcraft Solutions
              </h1>
              <a href="#" className="btn btn-primary py-3 px-4">
                Explore More
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img className="w-100" src="../src/assets/img/carousel-3.jpg" alt="Image" />
            <div className="carousel-caption">
              <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">
                Best Metalcraft Solutions
              </h1>
              <a href="#" className="btn btn-primary py-3 px-4">
                Explore More
              </a>
            </div>
          </div>
        </div>
        
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
       
      </div>
    </div>
  );
};

export default HeaderCarousel;

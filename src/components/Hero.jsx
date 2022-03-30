import React from "react";
function Hero(){
    return(
        <section id="hero" className="d-flex align-items-center">

        <div className="container hero-become-larger">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Bettter experience with Nutritional Wellness</h1>
              <h2>We are team of talented designers making websites with Bootstrap</h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">Get Started</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src="https://pbs.twimg.com/media/FD9KchwUYAEbPPd.png" className="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
    
      </section>
      /* <!-- End Hero --> */
    );
}
export default Hero;
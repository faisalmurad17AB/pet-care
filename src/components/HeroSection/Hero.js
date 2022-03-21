import React from 'react'

const Hero = () => {
  return (
    <section>
      <div id="carouselExampleControls" className="carousel slide vertical" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active">
        <div className="row">
        <div className="col-md-6 my-auto">
                <h3>Test</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi corporis eligendi soluta reprehenderit, ab sit tempore ex provident sed ut, voluptatem amet in facere voluptates? Similique, consequatur tenetur. Quasi, id?</p>
                <h6>
                    <span>John</span>
                    <br/>
                    <span>CEO</span>
                </h6>

            </div>
            <div className="col-md-6 ">      
      <img src="assets/images/slider1-img-1.jpg" className="img-test" alt="..." />
            </div>
            
        </div>    
    </div>

    <div className="carousel-item ">
        <div className="row">
            <div className="col-md-6 my-auto">
                <h3>Test</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi corporis eligendi soluta reprehenderit, ab sit tempore ex provident sed ut, voluptatem amet in facere voluptates? Similique, consequatur tenetur. Quasi, id?</p>
                <h6>
                    <span>John</span><br/>
                    <span>CEO</span>
                </h6>
            </div>
            <div className="col-md-6">      
      <img src="assets/images/slider1-img-1.jpg" className="img-test" alt="..." />
            </div>
        </div>    
    </div>
    <div className="carousel-item ">
        <div className="row">
            <div className="col-md-6 my-auto">
                <h3>Test</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi corporis eligendi soluta reprehenderit, ab sit tempore ex provident sed ut, voluptatem amet in facere voluptates? Similique, consequatur tenetur. Quasi, id?</p>
                <h6>
                    <span>John</span><br/>
                    <span>CEO</span>
                </h6>
            </div>
            <div className="col-md-6">      
      <img src="assets/images/slider1-img-1.jpg" className="img-test" alt="..." />
            </div>
        </div>    
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>
  )
}

export default Hero

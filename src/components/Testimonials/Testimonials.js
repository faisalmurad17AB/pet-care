import React from 'react'

const Testimonials = () => {
    return (
        <section id='blog' className='blog-section'>
            <div className="container">
                <div className="row mb-5 ">
                    <div className="col-md-8 mx-auto text-center">
                        <span>Testimonials</span>
                        <h2>What Our Customers Are Saying</h2>
                        <img src="assets/images/sep-img-1.jpg" alt="" />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-4">
                        <div class="card">
                            <img src="assets/images/slider1-img-1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img src="assets/images/slider1-img-1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img src="assets/images/slider1-img-1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials

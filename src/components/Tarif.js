import React from 'react';
import '../css/style.css';
import background from '../images/hero-bg.jpg';
function Tarif() {
    return (
        <>
            <main id="main">

{/* <!-- ======= FeatPricingures Section ======= --> */}
<div className="hero-section inner-page" style={{ backgroundImage: `url(${background})` }}>
  <div className="wave">
     <svg width="1920px" height="265px" viewBox="0 0 1920 265" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
          <path d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z" id="Path"></path>
        </g>
      </g>
    </svg> 

  </div>

  <div className="container">
    <div className="row align-items-center">
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center hero-text">
            <h1 data-aos="fade-up" data-aos-delay="">Nos tarifs</h1>
            <p className="mb-5" data-aos="fade-up" data-aos-delay="100">
              Minimisez vos efforts et maximisez votre rendement, avec un petit budget !
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

{/*    
<!-- ======= Pricing Section ======= --> */}
 <section id="pricing" className="pricing">
  <div className="container" data-aos="fade-up">

    <div className="row">

      <div className="col-lg-3 col-md-6">
        <div className="box">
          <h3>Free</h3>
          <h4><sup>$</sup>0<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li className="na">Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
        <div className="box featured">
          <h3>Business</h3>
          <h4><sup>$</sup>19<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
        <div className="box">
          <h3>Developer</h3>
          <h4><sup>$</sup>29<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li>Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
        <div className="box">
          <span className="advanced">Advanced</span>
          <h3>Ultimate</h3>
          <h4><sup>$</sup>49<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li>Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

{/* <!-- End Pricing Section --> */}
  
    
</main>
        </>
    )
}

export default Tarif

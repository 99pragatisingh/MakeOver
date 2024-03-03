import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../assets/Animation1.mp4';
import video1 from "../assets/video2.mp4";
import video2 from "../assets/video3.mp4";
import "./style.css"


const Home = () => {

  return (
    <div>
      <section className="kv">
        <div className="slider-banner">
          <div className="slider-container">
            <div className="item item-kv-1 active">
              <div className="container">
                <div className="row">
                  <div className="item-kv-txt col-md-6 col-xl-4">
                    <h2>Take Care of Your Face</h2>
                    <h3>At Glam Aura, we are dedicated to provide skin treatments</h3>
                    <Link to="/contact" className="btn">make an appointment</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section style={{margin:"15px 0"}}>
      <video src={video1} autoPlay loop muted/>
      <div className='our-service' style={{top:"130%"}}>Our MUAS</div>
      <div className='our-service-content' style={{top:"140%"}}>Painting confidence one brushstroke at a time.</div>
    </section>

    <section className="doc-section">
      <div className="container">
        <div className="row">
          <h2 className="col-12">Skin Surgeon Specialist</h2>
          <div className="col-12 col-md-6 col-xl-4 item">
            <div className="icon icon-pills"></div>
            <h3>Spec Dr.Auth</h3>
            <p>Dr. Auth is specialist in Hair Dresser, and Certified by "Central hair salon"</p>

          </div>
          <div className="col-12 col-md-6 col-xl-4 item">
            <div className="icon icon-doctor"></div>
            <h3>Dr. Mary</h3>
            <p>Dr. Mary is specialist in Facial treatment, and Certified by "Dr. Kumar center"</p>

          </div>
          <div className="col-12 col-md-6 col-xl-4 item">
            <div className="icon icon-car"></div>
            <h3>Dr.Nancy</h3>
            <p>Dr. Nancy is specialist in Facial treatment, and Certified by "Dr. Kumar center"</p>
            <Link to="/staff"><p>view more <i class="fa-solid fa-arrow-right"></i></p></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="fill-banner banner-1-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-xl-5">
            <h2>All Kinds <br className="d-none d-xl-inline-block" />of Skin-rejuvenation</h2>
            <p>Experience the ultimate in skin rejuvenation with our comprehensive range of treatments. Whether you're looking to combat signs of aging, improve skin texture, or achieve a radiant complexion, we have the solution for you. Our expert team will tailor a personalized treatment plan to address your specific concerns and help you achieve your skincare goals. Say goodbye to dull, tired-looking skin and hello to a fresh, youthful glow.</p>
            <Link to="/register" className="btn">free consultation</Link>
          </div>
        </div>
      </div>
    </section>

    <div className="services-container">
      <div className="inner-container">
        <h1 className="section-title">Services</h1>
        <div className="border"></div>
        <div className="service-container">
          <div className="service-box">
            <div className="service-icon">
              <img src="images/Eyebrow-shaping-and-tinting.png" />
            </div>
            <div className="service-title">
              <b>Eyebrow Shaping and Tinting</b>
            </div>
            <div className="description">Enhance your brows with our professional shaping and tinting services. Our expert estheticians will sculpt your brows to perfection and customize the tint to match your desired look.</div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <img src="images/Facial-treatments.png" />
            </div>
            <div className="service-title">
              <b>Facial Treatments</b>
            </div>
            <div className="description">Revitalize your skin with our rejuvenating facial treatments. From deep cleansing to hydration and anti-aging, our facials are tailored to address your specific skincare concerns and leave your complexion glowing.</div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <img src="images/Haircut-and-styling.png" style={{ marginTop: '.3em' }} />
            </div>
            <div className="service-title">
              <b>Haircut and Styling</b>
            </div>
            <div className="description">Transform your look with our professional haircut and styling services. Whether you're looking for a trim, a complete style overhaul, or a special occasion updo, our talented hairstylists will create the perfect look for you.</div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <img src="images/Hair-removal.png" />
            </div>
            <div className="service-title">
              <b>Hair Removal</b>
            </div>
            <div className="description">Say goodbye to unwanted hair with our gentle and effective hair removal treatments. From waxing to threading, we offer a range of services to keep your skin smooth and hair-free.</div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <img src="images/skin-rejuvenation.png" />
            </div>
            <div className="service-title">
              <b>Skin Rejuvenation</b>
            </div>
            <div className="description">Restore youthfulness to your skin with our advanced skin rejuvenation treatments. From laser therapy to chemical peels, we offer innovative solutions to target wrinkles, sun damage, and other signs of aging.</div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <img src="images/Spa-treatments.png" />
            </div>
            <div className="service-title">
              <b>Spa Treatments</b>
            </div>
            <div className="description">Indulge in relaxation and pampering with our luxurious spa treatments. From massages to body wraps, our spa services are designed to promote relaxation, relieve stress, and enhance your overall well-being.</div>
            <br/><Link to="/service"><p>View More <i class="fa-solid fa-arrow-right"></i></p></Link>
          </div>
        </div>
      </div>
    </div>

    <section style={{margin:"15px 0"}}>
      <video src={video2} autoPlay loop muted/>
      <div className='our-service-content' style={{top:"440%"}}>We have some brilliant mind in our studio.</div>
    </section>


    <ul className="list-members">
      <li className="member">
        <div className="member-image">
          <img src="images/Hair-specialist.jpg" />
        </div>
        <div className="member-info">
          <h3>Hazel Andrea</h3>
          <p>Hair specialist</p>

          <div className="social-link">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </li>
      <li className="member">
        <div className="member-image">
          <img src="images/Makeup-artist.jpg" />
        </div>
        <div className="member-info">
          <h3>Lucas Jenny</h3>
          <p>Makeup artist</p>

          <div className="social-link">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </li>
      <li className="member">
        <div className="member-image">
          <img src="images/Cosmetic-Surgeon.jpg" />
        </div>
        <div className="member-info">
          <h3>Amy Hantigont</h3>
          <p>Cosmetic Surgeon</p>

          <div className="social-link">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </li>
      <li className="member">
        <div className="member-image">
          <img src="images/Nail-Artist.jpg" />
        </div>
        <div className="member-info">
          <h3>Jeniffer Henry</h3>
          <p>Nail Artist</p>
          <Link to="/staff"><p>view more <i class="fa-solid fa-arrow-right"></i></p></Link>
          <div className="social-link">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </li>
    </ul>

    <section className="fill-banner banner-2-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-xl-5">
            <h2>Best Skin <br className="d-none d-xl-inline-block" />Care Steps For Acne</h2>
            <p>Discover the best skincare routine to combat acne and achieve clear, radiant skin. Our expert tips and product recommendations will help you address acne concerns effectively and restore your skin's health and vitality.</p>
            <Link to="/register" className="btn">Free Consultation</Link>
          </div>
        </div>
      </div>
    </section>


    <section className="blog">
      <div className="container">
        <div className="row">
          <h2 className="col-12">Latest Blog Posts</h2>
          <article className="col-8 col-md-6 col-xl-4">
            <div className="post">
              <a className="img-hover" href="#">
                <img src="images/blog-1.jpg" />
              </a>
              <h2>
                <Link to="/service">Best Skin Care Products</Link>
              </h2>
              <h3 className="time">Jan 19, 2023 at 5:12pm</h3>
              <p>Discover the best skin care products to achieve a radiant complexion. From cleansers to serums, find out which products are must-haves for your skincare routine.</p>
            </div>
          </article>
          <article className="col-8 col-md-6 col-xl-4">
            <div className="post">
              <a className="img-hover" href="#">
                <img src="images/blog-2.jpg" />
              </a>
              <h2>
                <Link to="/staff">Skin Care Secrets</Link>
              </h2>
              <h3 className="time">Feb 1, 2024 at 9:45am</h3>
              <p>Uncover the secrets to healthy, glowing skin with our expert tips and advice. Learn how to care for your skin and achieve a beautiful complexion with simple yet effective skincare practices.</p>
            </div>
          </article>
          <article className="col-8 col-md-6 col-xl-4">
            <div className="post">
              <a className="img-hover" href="#">
                <img src="images/blog-3.jpg" />
              </a>
              <h2>
                <Link to="/service">Nail Polish Design Ideas</Link>
              </h2>
              <h3 className="time">Feb 05, 2024 at 5:12pm</h3>
              <p>Get inspired with the latest nail polish design ideas for your next manicure. From bold colors to intricate patterns, explore creative nail art designs to express your unique style.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section style={{margin:"15px 0"}}>
      <video src={video} autoPlay loop muted/>
    </section>


    </div>
  );
};

export default Home;

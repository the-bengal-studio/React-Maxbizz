import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-contact">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">Contacts</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="active">Contacts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section class="contact-page">
        <div class="container">
          <div class="space-110"></div>
          <div class="row">
            <div class="col-xl-5 col-lg-6 mb-5 mb-xl-0">
              <div class="ot-heading">
                <span class="is_highlight">contact details</span>
                <h3 class="main-head">Our Contacts</h3>
              </div>
              <div class="space-20"></div>
              <div class="space-2"></div>
              <p>
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.
              </p>
              <div class="space-10"></div>
              <div class="box-s1 icon-left">
                <div class="icon-box icon-box-2 contact-iconb">
                  <div class="icon-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256,0C150.125,0,64,86.135,64,192c0,141.646,177.146,310,184.688,317.104C250.75,511.031,253.375,512,256,512    s5.25-0.969,7.313-2.896C270.854,502,448,333.646,448,192C448,86.135,361.875,0,256,0z M256,298.667    c-58.813,0-106.667-47.854-106.667-106.667S197.188,85.333,256,85.333S362.667,133.188,362.667,192S314.813,298.667,256,298.667z"></path>
                    </svg>
                  </div>
                  <div class="content-box">
                    <h6 class="title-box">Visit Us Daily</h6>
                    <p>411 University St, Seattle, USA</p>
                  </div>
                </div>
                <div class="space-30"></div>
                <div class="icon-box icon-box-2 contact-iconb">
                  <div class="icon-main contact-icon-phone">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 384 384"
                    >
                      <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
                    </svg>
                  </div>
                  <div class="content-box">
                    <h6 class="title-box">
                      <a href="tel:+1-800-456-478-23">Call Us 24/7</a>
                    </h6>
                    <p>+1-800-456-478-23</p>
                  </div>
                </div>
                <div class="space-30"></div>
                <div class="icon-box icon-box-2 contact-iconb">
                  <div class="icon-main contact-icon-mail">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"></path>
                      <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"></path>
                    </svg>
                  </div>
                  <div class="content-box">
                    <h6 class="title-box">
                      <a href="mailto: Betazen Infotech@mail.com">Mail Us</a>
                    </h6>
                    <p>Betazen Infotech@mail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="contact-img">
                <img src="images/image-contacts.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-form">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <form
                action="https://thebengalstudio.com/BetazenInfotech/contact.php"
                method="post"
                class="wpcf7-form main-contact-form"
              >
                <div class="main-form">
                  <h4>Ready to Get Started?</h4>
                  <div class="row">
                    <p class="col-md-6">
                      <input
                        type="text"
                        name="name"
                        size="40"
                        aria-required="true"
                        placeholder="Your Name *"
                      />
                    </p>
                    <p class="col-md-6">
                      <input
                        type="email"
                        name="email"
                        size="40"
                        aria-required="true"
                        placeholder="Your Email *"
                      />
                    </p>
                  </div>
                  <p>
                    <input
                      type="url"
                      name="url"
                      aria-required="true"
                      placeholder="Website *"
                    />
                  </p>
                  <p>
                    <textarea
                      name="message"
                      cols="40"
                      rows="10"
                      placeholder="Message..."
                    ></textarea>
                  </p>
                  <p>
                    <button type="submit" class="octf-btn">
                      Send Message
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="contact-map">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86077.66255184308!2d-122.40402224079803!3d47.60810999586645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3f905c4b1%3A0x96bf575ff75ab1aa!2s411%20University%20St%2C%20Seattle%2C%20WA%2098101%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1584084043716!5m2!1svi!2s"
            height="522"
            style={{ border: 0 }}
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

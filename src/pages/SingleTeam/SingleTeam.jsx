import React from "react";
import { Link } from "react-router-dom";

const SingleTeam = () => {
  return (
    <div>
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-team">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">Single Team</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/ourteam">Our Team</Link>
                </li>
                <li>
                  <Link to="/singleteam">Single Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="space-60"></div>
          <div class="team-member-info">
            <div class="row align-items-center">
              <div class="col-lg-6 text-center text-lg-left mb-5 mb-lg-0">
                <img src="images/image1-single-team.jpg" alt />
              </div>
              <div class="col-lg-6">
                <h3>Peter Perish</h3>
                <h6>chief business project</h6>
                <ul class="member-info">
                  <li>
                    <span class>Department:</span> Business Department
                  </li>
                  <li>
                    <span class>Experience:</span> 15 Years
                  </li>
                  <li>
                    <span class>Email: </span>perish.Betazen Infotech@mail.com
                  </li>
                  <li>
                    <span class>Phone: </span>+1-800-456-478-23
                  </li>
                  <li>
                    <span class>Fax: </span>+1-800-456-478-24
                  </li>
                </ul>
                <div class="blog-post">
                  <span class="share-post float-none">
                    <a
                      class="twit"
                      target="_blank"
                      href="https://twitter.com/"
                      title="Twitter"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="face"
                      target="_blank"
                      href="https://www.facebook.com/"
                      title="Facebook"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="pint"
                      target="_blank"
                      href="https://www.pinterest.com/"
                      title="Pinterest"
                    >
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a
                      class="google"
                      target="_blank"
                      href="https://plus.google.com/"
                      title="Google Plus"
                    >
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="space-60"></div>
          <h5>My Biography</h5>
          <div class="space-5"></div>
          <p>
            A vast majority of the app marketers mainly concentrate on the
            post-launch app marketing techniques and measures while completely
            missing on the pre-launch campaign. This prevents the app to create
            buzz and hype just around the time when the app is launched. As and
            when you launch the app, already a considerable number of people
            should expectantly look forward to your app and this requires
            long-drawn marketing efforts leading up to the app launch event. To
            create pre-launch buzz and hype about the app{" "}
            <span class="text-color-primary">
              {" "}
              a mobile app development company{" "}
            </span>{" "}
            has an array of marketing options like social media campaign, search
            engine ads, video ads, email campaigns, etc. Apart from online
            options, you can also reach out to the wider audience with
            traditional marketing options like outdoor ads, print ads, media
            ads, and promotional events.
          </p>
          <div class="space-30"></div>
          <div class="row">
            <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <div
                class="circle-progress"
                data-color="#ff8523"
                data-height="4"
                data-size="160"
              >
                <div class="inner-bar" data-percent="75">
                  <span>
                    <span class="percent"></span>
                  </span>
                </div>
                <h6>marketing analysis</h6>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <div
                class="circle-progress"
                data-color="#ff8523"
                data-height="4"
                data-size="160"
              >
                <div class="inner-bar" data-percent="65">
                  <span>
                    <span class="percent"></span>
                  </span>
                </div>
                <h6>business innovation</h6>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-5 mb-sm-0">
              <div
                class="circle-progress"
                data-color="#ff8523"
                data-height="4"
                data-size="160"
              >
                <div class="inner-bar" data-percent="90">
                  <span>
                    <span class="percent"></span>
                  </span>
                </div>
                <h6>finance strategy</h6>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div
                class="circle-progress"
                data-color="#ff8523"
                data-height="4"
                data-size="160"
              >
                <div class="inner-bar" data-percent="45">
                  <span>
                    <span class="percent"></span>
                  </span>
                </div>
                <h6>corporate management</h6>
              </div>
            </div>
          </div>
          <div class="space-60"></div>
          <h5>My Soft & Hard Skills</h5>
          <div class="space-5"></div>
          <p>
            Just as a retail business in real life is remembered not just for
            its product offerings but also because of its services, support, and
            customer-friendliness, an app that offers a helpful customer support
            system for its valued users enjoy more traction and engagement than
            other apps. Great brands all over the globe enjoy appreciation and
            popularity because of their customer-friendly support and services.
          </p>
          <div class="space-50"></div>
          <form
            action="https://thebengalstudio.com/Betazen Infotech/contact.php"
            method="post"
            class="wpcf7-form main-contact-form"
          >
            <div class="main-form">
              <h4>Contact Me</h4>
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
                <input type="url" name="url" placeholder="Website" />
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
          <div class="space-50 d-none d-md-block"></div>
          <div class="space-60"></div>
        </div>
      </section>
    </div>
  );
};

export default SingleTeam;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // desktop menu
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    // Add or remove the 'side-panel-active' class on the body based on the state
    if (isPanelOpen) {
      document.body.classList.add("side-panel-active");
    } else {
      document.body.classList.remove("side-panel-active");
    }

    // Cleanup the class when the component is unmounted
    return () => {
      document.body.classList.remove("side-panel-active");
    };
  }, [isPanelOpen]);

  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
  };

  //mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add or remove classes on the body based on the state
    if (isMobileMenuOpen) {
      document.body.classList.add("mmenu-active");
    } else {
      document.body.classList.remove("mmenu-active");
    }

    // Cleanup the classes when the component is unmounted
    return () => {
      document.body.classList.remove("mmenu-active");
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header
        id="site-header"
        className="site-header header-static sticky-header"
      >
        <div className="header-desktop">
          {/* <!-- Main Header start --> */}
          <div className="header-topbar">
            <div className="container">
              <div className="row">
                <div className="col-md-3 align-self-center">
                  <div className="site-logo">
                    <Link to="/">
                      <img src="images/logo.svg" alt="image" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="topbar-right justify-content-end">
                    <div className="topbar-right-info phone-info">
                      <div className="topbar-right-icon phone-info-icon align-self-center">
                        <a href="tel:1-800-456-478-23">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 384 384"
                            style={{ enableBackground: "new 0 0 384 384" }}
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div className="topbar-right-desc phone-info-desc">
                        <h6>
                          <a href="tel:+1-800-456-478-23">
                            Have Any Questions?
                          </a>
                        </h6>
                        <p>+1-800-456-478-23</p>
                      </div>
                    </div>
                    <div className="topbar-right-info address-info">
                      <div className="topbar-right-icon align-self-center">
                        <a href="tel:1-800-456-478-23">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                <path d="M256,0C150.125,0,64,86.135,64,192c0,141.646,177.146,310,184.688,317.104C250.75,511.031,253.375,512,256,512    s5.25-0.969,7.313-2.896C270.854,502,448,333.646,448,192C448,86.135,361.875,0,256,0z M256,298.667    c-58.813,0-106.667-47.854-106.667-106.667S197.188,85.333,256,85.333S362.667,133.188,362.667,192S314.813,298.667,256,298.667z"></path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div className="topbar-right-desc">
                        <h6>Visit Us Daily</h6>
                        <p>411 University St, Seattle</p>
                      </div>
                    </div>
                    <div className="topbar-right-btn align-self-center">
                      <div className="button-info">
                        <a
                          href="about-us.html"
                          className="octf-btn btn-border-main"
                        >
                          Free Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="octf-main-header main-style main-header">
            <div className="octf-area-wrap">
              <div className="container">
                <div className="octf-mainbar">
                  <div className="octf-mainbar-row octf-row">
                    <div className="octf-col menu-col">
                      <nav id="site-navigation" className="main-navigation">
                        <ul className="menu">
                          <li className="menu-item-has-children">
                            <a href="index-2.html">Home</a>
                            <ul className="sub-menu">
                              <li className="current-menu-item">
                                <a href="index-2.html">Home Main</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Consulting</a>
                              </li>
                              <li>
                                <a href="index-4.html">Home Business</a>
                              </li>
                              <li>
                                <a href="index-5.html">Home Corporate</a>
                              </li>
                              <li>
                                <a href="index-6.html">Home Finance</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children current-menu-item">
                            <a href="#">Pages</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="about-us.html">About us</a>
                              </li>
                              <li>
                                <a href="service.html">Our Services 1</a>
                              </li>
                              <li>
                                <a href="service-2.html">Our Services 2</a>
                              </li>
                              <li>
                                <a href="core-values.html">Our Core Values</a>
                              </li>
                              <li>
                                <a href="our-team.html">Our team</a>
                              </li>
                              <li>
                                <a href="single-team.html">Single team</a>
                              </li>
                              <li className="menu-item-has-children">
                                <a href="shop.html">Shop</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="shop.html">Product Catalog</a>
                                  </li>
                                  <li>
                                    <a href="single-product.html">
                                      Single Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="cart-page.html">Cart</a>
                                  </li>
                                  <li>
                                    <a href="checkout-page.html">Checkout</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="typography.html">Typography</a>
                              </li>
                              <li>
                                <a href="faq.html">FAQS</a>
                              </li>
                              <li>
                                <a href="404-error.html">404</a>
                              </li>
                              <li>
                                <a href="cooming-soon.html">Coming Soon</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Portfolio</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="portfolio-grid.html">Portfolio Grid</a>
                              </li>
                              <li>
                                <a href="portfolio-masonry.html">
                                  Portfolio Masonry
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-carousel.html">
                                  Portfolio Carousel
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-details-1.html">
                                  Portfolio Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="service.html">Services</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="service-detail-1.html">
                                  Marketing Research
                                </a>
                              </li>
                              <li>
                                <a href="service-detail-2.html">
                                  Organizational Audit
                                </a>
                              </li>
                              <li>
                                <a href="service-detail-3.html">
                                  Business Consulting
                                </a>
                              </li>
                              <li>
                                <a href="service-detail-4.html">
                                  Project Management
                                </a>
                              </li>
                              <li>
                                <a href="service-detail-5.html">
                                  Support Function
                                </a>
                              </li>
                              <li>
                                <a href="service-detail-6.html">
                                  Finance Planning
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="blog.html">Blog</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="blog.html">Blog Listing</a>
                              </li>
                              <li>
                                <a href="post.html">Blog Post</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contacts</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="octf-col cta-col text-right">
                      {/* <!-- Call To Action --> */}
                      <div className="octf-btn-cta">
                        <div className="octf-cart octf-cta-header">
                          <a
                            className="cart-contents"
                            href="cart-page.html"
                            title="View your shopping cart"
                          >
                            <i className="ot-flaticon-business"></i>
                            <span className="count">2</span>
                          </a>

                          <div className="site-header-cart">
                            <div className="widget woocommerce widget_shopping_cart">
                              <div className="widget_shopping_cart_content">
                                <ul className="woocommerce-mini-cart cart_list product_list_widget">
                                  <li className="woocommerce-mini-cart-item mini_cart_item">
                                    <a
                                      className="remove remove_from_cart_button"
                                      href="#"
                                    >
                                      ×
                                    </a>
                                    <a href="single-product.html">
                                      <img
                                        src="images/product/product-3.png"
                                        alt="image"
                                      />
                                      Introduction to Business
                                    </a>
                                    <span className="quantity">
                                      1 ×
                                      <span className="amount">
                                        <bdi>
                                          <span>$</span>39.99
                                        </bdi>
                                      </span>
                                    </span>
                                  </li>
                                  <li className="woocommerce-mini-cart-item mini_cart_item">
                                    <a
                                      className="remove remove_from_cart_button"
                                      href="#"
                                    >
                                      ×
                                    </a>
                                    <a href="single-product.html">
                                      <img
                                        src="images/product/product-9.png"
                                        alt="image"
                                      />
                                      Introduction to Marketing
                                    </a>
                                    <span className="quantity">
                                      1 ×
                                      <span className="amount">
                                        <bdi>
                                          <span>$</span>49.99
                                        </bdi>
                                      </span>
                                    </span>
                                  </li>
                                </ul>

                                <p className="woocommerce-mini-cart__total total">
                                  <strong>Subtotal:</strong>
                                  <span className="amount">
                                    <bdi>
                                      <span>$</span>89.98
                                    </bdi>
                                  </span>
                                </p>
                                <p className="woocommerce-mini-cart__buttons buttons">
                                  <a
                                    href="cart-page.html"
                                    className="button wc-forward"
                                  >
                                    View cart
                                  </a>
                                  <a
                                    href="checkout-page.html"
                                    className="button checkout wc-forward"
                                  >
                                    Checkout
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="octf-search octf-cta-header">
                          <div className="toggle_search octf-cta-icons">
                            <i className="ot-flaticon-search-1"></i>
                          </div>
                          {/* <!-- Form Search on Header --> */}
                          <div className="h-search-form-field collapse">
                            <div className="h-search-form-inner">
                              <form
                                role="search"
                                method="get"
                                className="search-form"
                              >
                                <input
                                  type="search"
                                  className="search-field"
                                  placeholder="Search..."
                                  name="s"
                                />
                                <button type="submit" className="search-submit">
                                  <i className="ot-flaticon-search-1"></i>
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>

                        <div className="octf-sidepanel octf-cta-header">
                          <div className="site-overlay panel-overlay"></div>
                          <div
                            id="panel-btn"
                            className={`panel-btn octf-cta-icons ${
                              isPanelOpen ? "active" : ""
                            }`}
                            onClick={togglePanel}
                          >
                            <i className="ot-flaticon-menu"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_mobile">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="mobile_logo">
                  <a href="index-2.html">
                    <img src="images/logo.svg" alt="Betazen Infotech" />
                  </a>
                </div>
              </div>
              <div className="col-7 align-self-center text-right">
                <div className="octf-btn-cta">
                  <div className="octf-cart-mobile octf-cart octf-cta-header">
                    <a
                      className="cart-contents"
                      href="cart-page.html"
                      title="View your shopping cart"
                    >
                      <i className="ot-flaticon-business"></i>
                      <span className="count">2</span>
                    </a>
                  </div>
                  <div className="octf-search-mobile octf-search octf-cta-header">
                    <div className="toggle_search octf-cta-icons">
                      <i className="ot-flaticon-search-1"></i>
                    </div>
                    {/* <!-- Form Search on Header --> */}
                    <div className="h-search-form-field collapse">
                      <div className="h-search-form-inner">
                        <form
                          role="search"
                          method="get"
                          className="search-form"
                        >
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Search..."
                            name="s"
                          />
                          <button type="submit" className="search-submit">
                            <i className="ot-flaticon-search-1"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="octf-menu-mobile octf-cta-header text-left">
                    <div
                      id="mmenu-toggle"
                      className={`mmenu-toggle ${
                        isMobileMenuOpen ? "active" : ""
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <button>
                        <i className="ot-flaticon-menu"></i>
                      </button>
                    </div>
                    <div className="site-overlay mmenu-overlay"></div>
                    <div
                      id="mmenu-wrapper"
                      className={`mmenu-wrapper on-right ${
                        isMobileMenuOpen ? "mmenu-open" : ""
                      }`}
                    >
                      <div className="mmenu-inner">
                        <a
                          href="#"
                          className="mmenu-close"
                          onClick={toggleMobileMenu}
                        >
                          <i className="ot-flaticon-arrowsoutline"></i>
                        </a>
                        <div className="mobile-nav">
                          <ul
                            id="menu-mobile-main-menu"
                            className="mobile_mainmenu none-style"
                          >
                            <li className="menu-item-has-children">
                              <a href="index-2.html">Home</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="index-2.html">Home Main</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Home Consulting</a>
                                </li>
                                <li>
                                  <a href="index-4.html">Home Business</a>
                                </li>
                                <li>
                                  <a href="index-5.html">Home Corporate</a>
                                </li>
                                <li>
                                  <a href="index-6.html">Home Finance</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Pages</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="about-us.html">About us</a>
                                </li>
                                <li>
                                  <a href="service.html">Our Services 1</a>
                                </li>
                                <li>
                                  <a href="service-2.html">Our Services 2</a>
                                </li>
                                <li>
                                  <a href="core-values.html">Our Core Values</a>
                                </li>
                                <li>
                                  <a href="our-team.html">Our team</a>
                                </li>
                                <li>
                                  <a href="single-team.html">Single team</a>
                                </li>
                                <li className="menu-item-has-children">
                                  <a href="shop.html">Shop</a>
                                  <ul className="sub-menu">
                                    <li>
                                      <a href="shop.html">Product Catalog</a>
                                    </li>
                                    <li>
                                      <a href="single-product.html">
                                        Single Product
                                      </a>
                                    </li>
                                    <li>
                                      <a href="cart-page.html">Cart</a>
                                    </li>
                                    <li>
                                      <a href="checkout-page.html">Checkout</a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="typography.html">Typography</a>
                                </li>
                                <li>
                                  <a href="faq.html">FAQS</a>
                                </li>
                                <li>
                                  <a href="404-error.html">404</a>
                                </li>
                                <li>
                                  <a href="cooming-soon.html">Coming Soon</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Portfolio</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="portfolio-grid.html">
                                    Portfolio Grid
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-masonry.html">
                                    Portfolio Masonry
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-carousel.html">
                                    Portfolio Carousel
                                  </a>
                                </li>
                                <li>
                                  <a href="portfolio-details-1.html">
                                    Portfolio Details
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="service.html">Services</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="service-detail-1.html">
                                    Marketing Research
                                  </a>
                                </li>
                                <li>
                                  <a href="service-detail-2.html">
                                    Organizational Audit
                                  </a>
                                </li>
                                <li>
                                  <a href="service-detail-3.html">
                                    Business Consulting
                                  </a>
                                </li>
                                <li>
                                  <a href="service-detail-4.html">
                                    Project Management
                                  </a>
                                </li>
                                <li>
                                  <a href="service-detail-5.html">
                                    Support Function
                                  </a>
                                </li>
                                <li>
                                  <a href="service-detail-6.html">
                                    Finance Planning
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="blog.html">Blog</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="blog.html">Blog Listing</a>
                                </li>
                                <li>
                                  <a href="post.html">Blog Post</a>
                                </li>
                              </ul>
                            </li>
                            <li className="current-menu-item">
                              <a href="contact.html">Contacts</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        id="side-panel"
        className={`side-panel ${isPanelOpen ? "side-panel-open" : ""}`}
      >
        <a href="#" className="side-panel-close" onClick={togglePanel}>
          <i className="ot-flaticon-cancel"></i>
        </a>
        <div className="side-panel-block">
          <div className="side-panel-wrap">
            <div className="the-logo">
              <a href="index-html.html">
                <img src="images/logo.svg" alt="Betazen Infotech" />
              </a>
            </div>
            <div className="space-30"></div>
            <div className="site-panel-desc">
              <p>
                Over 10 years we help companies reach their financial and
                branding goals. Betazen Infotech is a values-driven consulting
                agency dedicated.
              </p>
            </div>
            <div className="ot-heading">
              <h4 className="main-heading">Gallery</h4>
            </div>
            <div className="image-gallery">
              <div
                id="gallery-1"
                className="gallery galleryid-102 gallery-columns-3 gallery-size-thumbnail"
              >
                <figure className="gallery-item">
                  <div className="gallery-icon landscape">
                    <a
                      data-elementor-open-lightbox="yes"
                      data-elementor-lightbox-slideshow="8701e24"
                      data-elementor-lightbox-title="p4-gallery1"
                      href="images/projects/project-5.jpg"
                    >
                      <img src="images/projects/project-5.jpg" />
                      <a href="#" className="overlay">
                        <i className="ot-flaticon-add"></i>
                      </a>
                    </a>
                  </div>
                </figure>
                <figure className="gallery-item">
                  <div className="gallery-icon landscape">
                    <a
                      data-elementor-open-lightbox="yes"
                      data-elementor-lightbox-slideshow="8701e24"
                      data-elementor-lightbox-title="p4-gallery1"
                      href="images/projects/project-6.jpg"
                    >
                      <img src="images/projects/project-6.jpg" alt="image" />
                      <a href="#" className="overlay">
                        <i className="ot-flaticon-add"></i>
                      </a>
                    </a>
                  </div>
                </figure>
                <figure className="gallery-item">
                  <div className="gallery-icon landscape">
                    <a
                      data-elementor-open-lightbox="yes"
                      data-elementor-lightbox-slideshow="8701e24"
                      data-elementor-lightbox-title="p4-gallery1"
                      href="images/projects/project-7.jpg"
                    >
                      <img src="images/projects/project-7.jpg" alt="image" />
                      <a href="#" className="overlay">
                        <i className="ot-flaticon-add"></i>
                      </a>
                    </a>
                  </div>
                </figure>
                <figure className="gallery-item">
                  <div className="gallery-icon landscape">
                    <a
                      data-elementor-open-lightbox="yes"
                      data-elementor-lightbox-slideshow="8701e24"
                      data-elementor-lightbox-title="p4-gallery1"
                      href="images/projects/project-9.jpg"
                    >
                      <img src="images/projects/project-9.jpg" alt="image" />
                      <a href="#" className="overlay">
                        <i className="ot-flaticon-add"></i>
                      </a>
                    </a>
                  </div>
                </figure>
                <figure className="gallery-item">
                  <div className="gallery-icon landscape">
                    <a
                      data-elementor-open-lightbox="yes"
                      data-elementor-lightbox-slideshow="8701e24"
                      data-elementor-lightbox-title="p4-gallery1"
                      href="images/projects/project-10.jpg"
                    >
                      <img src="images/projects/project-10.jpg" alt="image" />
                      <a href="#" className="overlay">
                        <i className="ot-flaticon-add"></i>
                      </a>
                    </a>
                  </div>
                </figure>
                <figure className="gallery-item">
                  <div className="gallery-icon landscape">
                    <a
                      data-elementor-open-lightbox="yes"
                      data-elementor-lightbox-slideshow="8701e24"
                      data-elementor-lightbox-title="p4-gallery1"
                      href="images/projects/project-12.jpg"
                    >
                      <img src="images/projects/project-12.jpg" alt="image" />
                      <a href="#" className="overlay">
                        <i className="ot-flaticon-add"></i>
                      </a>
                    </a>
                  </div>
                </figure>
              </div>
            </div>
            <div className="ot-heading">
              <h4 className="main-heading">Contact</h4>
            </div>
            <div className="side-panel-cinfo">
              <ul className="panel-cinfo">
                <li className="panel-list-item">
                  <span className="panel-list-icon">
                    <a href="tel:800 456 789 123">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 384"
                      >
                        <g>
                          <g>
                            <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </span>
                  <span className="panel-list-text">+1-800-456-478-23</span>
                </li>
                <li className="panel-list-item">
                  <span className="panel-list-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <g>
                          <path d="M256,0C150.125,0,64,86.135,64,192c0,141.646,177.146,310,184.688,317.104C250.75,511.031,253.375,512,256,512    s5.25-0.969,7.313-2.896C270.854,502,448,333.646,448,192C448,86.135,361.875,0,256,0z M256,298.667    c-58.813,0-106.667-47.854-106.667-106.667S197.188,85.333,256,85.333S362.667,133.188,362.667,192S314.813,298.667,256,298.667z"></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="panel-list-text">
                    411 University St, Seattle
                  </span>
                </li>
                <li className="panel-list-item">
                  <span className="panel-list-icon">
                    <a href="mailto:Betazen Infotech@mail.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"></path>
                        <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"></path>
                      </svg>
                    </a>
                  </span>
                  <span className="panel-list-text">
                    Betazen Infotech@mail.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="side-panel-social">
              <ul>
                <li>
                  <a
                    className="twitter"
                    href="http://twitter.com/"
                    target="_self"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="facebook"
                    href="http://facebook.com/"
                    target="_self"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="pinterest"
                    href="http://pinterest.com/"
                    target="_self"
                  >
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="http://instagram/"
                    target="_self"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

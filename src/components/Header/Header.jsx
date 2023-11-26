import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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

  const toggleMobileMenu = (e) => {
    e.preventDefault();
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
          <div className="consulting-topbar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="topbar-list-icon">
                    <a className="twitter" href="twitter.html">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="facebook" href="facebook.html">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="linkedin" href="linkedin.html">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a className="instagram" href="linkedin.html">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9">
                  <ul className="top-list-info justify-content-end">
                    <li>
                      <span className="top-list-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 384"
                        >
                          <path d="m343.59375 101.039062c-7.953125 3.847657-11.28125 13.417969-7.433594 21.367188 10.511719 21.714844 15.839844 45.121094 15.839844 69.59375 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c36.558594 0 70.902344 11.9375 99.328125 34.519531 6.894531 5.503907 16.976563 4.351563 22.480469-2.566406 5.503906-6.914063 4.351562-16.984375-2.570313-22.480469-33.652343-26.746094-76-41.472656-119.238281-41.472656-105.863281 0-192 86.136719-192 192s86.136719 192 192 192 192-86.136719 192-192c0-29.335938-6.40625-57.449219-19.039062-83.527344-3.839844-7.96875-13.441407-11.289062-21.367188-7.433594zm0 0"></path>
                          <path d="m192 64c-8.832031 0-16 7.167969-16 16v112c0 8.832031 7.167969 16 16 16h80c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-64v-96c0-8.832031-7.167969-16-16-16zm0 0"></path>
                        </svg>
                      </span>
                      <span className="top-list-text">
                        Mon - Sat: 8.00 - 18.00
                      </span>
                    </li>
                    <li>
                      <span className="top-list-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                        >
                          <g>
                            {" "}
                            <g>
                              <path d="M256,0C150.125,0,64,86.135,64,192c0,141.646,177.146,310,184.688,317.104C250.75,511.031,253.375,512,256,512    s5.25-0.969,7.313-2.896C270.854,502,448,333.646,448,192C448,86.135,361.875,0,256,0z M256,298.667    c-58.813,0-106.667-47.854-106.667-106.667S197.188,85.333,256,85.333S362.667,133.188,362.667,192S314.813,298.667,256,298.667z"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span className="top-list-text">
                        411 University St, Seattle
                      </span>
                    </li>
                    <li>
                      <a href="tel:1-800-456-478-23">
                        <span className="top-list-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 384 384"
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                {" "}
                                <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
                              </g>
                            </g>
                          </svg>
                        </span>
                        <span className="top-list-text">+1-800-456-478-23</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="consulting-header-main main-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3">
                  <div className="site-logo">
                    <Link to="/">
                      <img src="images/02_Black.svg" alt />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-9 text-center">
                  <nav id="site-navigation" className="main-navigation">
                    <ul className="menu">
                      <li className="menu-item-has-children">
                        <Link to="/">Home</Link>

                        <ul className="sub-menu">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li className="current-menu-item">
                            <Link to="/">Home Consulting</Link>
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
                            <Link to="/aboutus">About Us</Link>
                          </li>
                          <li>
                            <Link to="/service">Our Services</Link>
                          </li>
                          <li>
                            <a href="service-2.html">Our Services 2</a>
                          </li>
                          <li>
                            <a href="core-values.html">Our Core Values</a>
                          </li>
                          <li>
                            <Link to="/ourteam">Our Team</Link>
                          </li>
                          <li>
                            <Link to="/singleteam">Single Team</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="shop.html">Shop</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Product Catalog</a>
                              </li>
                              <li>
                                <a href="single-product.html">Single Product</a>
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
                            <a href="service-detail-5.html">Support Function</a>
                          </li>
                          <li>
                            <a href="service-detail-6.html">Finance Planning</a>
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
                <div className="col-xl-3 align-self-center text-right">
                  <div className="octf-btn-cta justify-content-end align-items-center">
                    {/* <div className="octf-cart octf-cta-header">
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
                            <ul className="woocommerce-mini-cart cart_list product_list_widget ">
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
                                    className
                                    alt
                                  />
                                  Introduction to Business
                                </a>
                                <span className="quantity">
                                  1 ×{" "}
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
                                    className
                                    alt
                                  />
                                  Introduction to Marketing
                                </a>
                                <span className="quantity">
                                  1 ×{" "}
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
                    </div> */}

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

                    <div className="octf-btn-header">
                      <div className="ot-button">
                        <a
                          href="contact.html"
                          className="octf-btn octf-btn-main"
                        >
                          free quote
                        </a>
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
                  <Link to="/">
                    <img src="images/02_Black.svg" alt />
                  </Link>
                </div>
              </div>
              <div className="col-7 align-self-center text-right">
                <div className="octf-btn-cta">
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
                              <Link to="/">Home</Link>

                              <ul className="sub-menu">
                                <li>
                                  <Link to="/">Home</Link>
                                </li>
                                <li>
                                  <Link to="/">Home Consulting</Link>
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
                                  <Link to="/aboutus">About Us</Link>
                                </li>
                                <li>
                                  <Link to="/service">Our Services</Link>
                                </li>
                                <li>
                                  <a href="service-2.html">Our Services 2</a>
                                </li>
                                <li>
                                  <a href="core-values.html">Our Core Values</a>
                                </li>
                                <li>
                                  <Link to="/ourteam">Our Team</Link>
                                </li>
                                <li>
                                  <Link to="/singleteam">Single Team</Link>
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
    </div>
  );
};

export default Header;

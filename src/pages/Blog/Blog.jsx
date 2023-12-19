import React from "react";
import { Link } from "react-router-dom";
import BlogCarousel from "../../components/BlogCarousel/BlogCarousel";

const Blog = () => {
  return (
    <div>
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-blog">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">Blog</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="active">Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="entry-content">
        <div class="container">
          <div class="row">
            <div class="content-area col-lg-9 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0">
              <article class="post-box">
                <div class="post-inner">
                  <div class="entry-media">
                    <div class="post-cat">
                      <span class="posted-in">
                        <a href="#">business</a>
                      </span>
                    </div>
                    <Link to="/post">
                      <img src="images/blog/blog-1.jpg" alt />
                    </Link>
                  </div>
                  <div class="inner-post">
                    <div class="entry-header">
                      <h4 class="entry-title">
                        <Link to="/post">
                          Contactless Payments’ Time Has Come
                        </Link>
                      </h4>
                    </div>
                    <div class="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div class="entry-meta">
                    <span class="posted-on">
                      <a href="#">November 21, 2023</a>
                    </span>
                    <span class="byline">
                      /{" "}
                      <a class="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span class="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" class="btn-details">
                      <i class="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article class="post-box">
                <div class="post-inner">
                  <div class="entry-media">
                    <div class="post-cat">
                      <span class="posted-in">
                        <a href="#">Design</a>
                        <a href="#">Development</a>
                      </span>
                    </div>
                    <a class="btn-play" href="https://vimeo.com/87959439">
                      <i class="ot-flaticon-play"></i>
                    </a>
                    <img src="images/blog/bg-video.jpg" alt />
                  </div>
                  <div class="inner-post">
                    <div class="entry-header">
                      <h4 class="entry-title">
                        <Link to="/post">
                          The Future of Retail: Asia’s Ecosystems
                        </Link>
                      </h4>
                    </div>
                    <div class="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div class="entry-meta">
                    <span class="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span class="byline">
                      /{" "}
                      <a class="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span class="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" class="btn-details">
                      <i class="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article class="post-box">
                <div class="post-inner">
                  <div class="quote-box padding-box font-second">
                    <i class="ot-flaticon-left-quote"></i>
                    <div class="quote-text">
                      I cannot give you the formula for success, but I can give
                      you the formula for failure. It is: Try to please
                      everybody.
                      <span>DAVID OSWALD</span>
                    </div>
                  </div>
                  <div class="inner-post">
                    <div class="entry-header">
                      <h4 class="entry-title">
                        <Link to="/post">
                          Digital Transformation Roadmap: Enablers
                        </Link>
                      </h4>
                    </div>
                    <div class="entry-summary the-excerpt">
                      <p>
                        The basic premise of search engine reputation management
                        is to use the following three strategies to accomplish
                        the goal of creating a completely positive first page of
                        search engine results for a specific term…
                      </p>
                    </div>
                  </div>
                  <div class="entry-meta">
                    <span class="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span class="byline">
                      /{" "}
                      <a class="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span class="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" class="btn-details">
                      <i class="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article class="post-box">
                <div class="post-inner">
                  <BlogCarousel></BlogCarousel>
                  <div class="inner-post">
                    <div class="entry-header">
                      <h4 class="entry-title">
                        <Link to="/post">
                          How to Write a Successful Grant Application
                        </Link>
                      </h4>
                    </div>
                    <div class="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div class="entry-meta">
                    <span class="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span class="byline">
                      /{" "}
                      <a class="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span class="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" class="btn-details">
                      <i class="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article class="post-box">
                <div class="post-inner">
                  <div class="inner-post">
                    <div class="post-cat">
                      <span class="posted-in">
                        <a href="#">Business</a>
                        <a href="#">Consulting</a>
                      </span>
                    </div>
                    <div class="entry-header">
                      <h4 class="entry-title">
                        <Link to="/post">
                          Crowdfunding. How to Get Funding Online?
                        </Link>
                      </h4>
                    </div>
                    <div class="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div class="entry-meta">
                    <span class="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span class="byline">
                      /{" "}
                      <a class="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span class="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" class="btn-details">
                      <i class="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article class="post-box">
                <div class="post-inner">
                  <div class="link-box padding-box">
                    <i class="ot-flaticon-multimedia"></i>
                    <a href="#">The Future of Marketing in Consumer Products</a>
                  </div>
                  <div class="inner-post">
                    <div class="post-cat">
                      <span class="posted-in">
                        <a href="#">Consulting</a>
                        <a href="#">Finance</a>
                      </span>
                    </div>
                    <div class="entry-header">
                      <h4 class="entry-title">
                        <Link to="/post">
                          In Media, Trimming Costs Boosts Value Transform
                        </Link>
                      </h4>
                    </div>
                    <div class="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div class="entry-meta">
                    <span class="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span class="byline">
                      /{" "}
                      <a class="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span class="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" class="btn-details">
                      <i class="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <article class="post-box">
                <div class="post-inner">
                  <div class="audio-box padding-box">
                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/139083759"></iframe>
                  </div>
                  <div class="inner-post">
                    <div class="post-cat">
                      <span class="posted-in">
                        <a href="#">Business</a>
                      </span>
                    </div>
                    <div class="entry-header">
                      <h4 class="entry-title">
                        <Link to="/post">
                          Entering the Next Phase of Digital Transformation
                        </Link>
                      </h4>
                    </div>
                    <div class="entry-summary the-excerpt">
                      <p>
                        Most firms have set up a war room to triage their
                        immediate response to the crisis. But the lack of
                        visibility around future demand complicates efforts to
                        restart stalled portfolio companies…
                      </p>
                    </div>
                  </div>
                  <div class="entry-meta">
                    <span class="posted-on">
                      <a href="#">November 21, 2019</a>
                    </span>
                    <span class="byline">
                      /{" "}
                      <a class="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span class="comment-num">
                      / <a href="#">3 Comments</a>
                    </span>
                    <Link to="/post" class="btn-details">
                      <i class="ot-flaticon-trajectory"></i>
                    </Link>
                  </div>
                </div>
              </article>
              <ul class="page-pagination none-style">
                <li>
                  <a class="prev page-numbers" href="#">
                    <i class="ot-flaticon-arrow-pointing-to-left"></i>
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="#">
                    1
                  </a>
                </li>
                <li>
                  <span aria-current="page" class="page-numbers current">
                    2
                  </span>
                </li>
                <li>
                  <a class="page-numbers" href="#">
                    3
                  </a>
                </li>
                <li>
                  <a class="next page-numbers" href="#">
                    <i class="ot-flaticon-trajectory"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="widget-area primary-sidebar col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <aside
                id="author_widget-1"
                class="widget Betazen Infotech_author-widget"
              >
                <div class="author-widget_wrapper text-center">
                  <div class="author-widget_image-wrapper">
                    <img
                      class="author-widget_image"
                      src="images/author-widget.png"
                      alt="Jina Peterson"
                    />
                  </div>
                  <div class="author-widget_info">
                    <h5 class="author-widget_title">Jina Peterson</h5>
                    <p class="author-widget_text">
                      She is the CEO. She's a big fan her cat Tux, &amp; dinner
                      parties.
                    </p>
                    <div class="author-widget_social">
                      <a class="social-twitter" href="twitter.html">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a class="social-facebook" href="facebook.html">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a class="social-linkedin" href="linkedin.html">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a class="social-instagram" href="instagram.html">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
              <aside id="search-2" class="widget widget_search">
                <form
                  role="search"
                  method="get"
                  id="search-form"
                  class="search-form"
                >
                  <input
                    type="search"
                    class="search-field"
                    placeholder="Search…"
                    value
                    name="s"
                  />
                  <button type="submit" class="search-submit">
                    <i class="ot-flaticon-search-1"></i>
                  </button>
                </form>
              </aside>
              <aside class="widget widget_categories">
                <h6 class="widget-title">Categories</h6>
                <ul>
                  <li>
                    <a href="#">Design</a> <span class="posts-count">(3)</span>
                  </li>
                  <li>
                    <a href="#">Development</a>{" "}
                    <span class="posts-count">(5)</span>
                  </li>
                  <li>
                    <a href="#">Startup</a> <span class="posts-count">(1)</span>
                  </li>
                  <li>
                    <a href="#">Technology</a>{" "}
                    <span class="posts-count">(3)</span>
                  </li>
                </ul>
              </aside>
              <aside class="widget widget_recent_news">
                <h6 class="widget-title">Recent Posts</h6>
                <ul class="recent-news clearfix">
                  <li class="clearfix">
                    <div class="thumb">
                      <Link to="/post">
                        <img src="images/blog/recent-post-1.jpg" alt />
                      </Link>
                    </div>
                    <div class="entry-header">
                      <h6>
                        <Link to="/post">
                          Contactless Payments’ Time Has Come
                        </Link>
                      </h6>
                      <span class="post-on">
                        <span class="entry-date">SEPTEMBER 4, 2023</span>
                      </span>
                    </div>
                  </li>

                  <li class="clearfix">
                    <div class="thumb">
                      <Link to="/post">
                        <img src="images/blog/recent-post-2.jpg" alt />
                      </Link>
                    </div>
                    <div class="entry-header">
                      <h6>
                        <Link to="/post">
                          The Future of Retail: Asia’s Ecosystems
                        </Link>
                      </h6>
                      <span class="post-on">
                        <span class="entry-date">FEBRUARY 24, 2023</span>
                      </span>
                    </div>
                  </li>

                  <li class="clearfix">
                    <div class="thumb">
                      <Link to="/post">
                        <img src="images/blog/recent-post-3.jpg" alt />
                      </Link>
                    </div>
                    <div class="entry-header">
                      <h6>
                        <Link to="/post">
                          Digital Transformation Roadmap: Enablers
                        </Link>
                      </h6>
                      <span class="post-on">
                        <span class="entry-date">AUGUST 14, 2019</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </aside>
              <aside class="widget widget_tag_cloud">
                <h6 class="widget-title">Tags</h6>
                <div class="tagcloud">
                  <a href="#">analysis</a>
                  <a href="#">business</a>
                  <a href="#">consulting</a>
                  <a href="#">finance</a>
                  <a href="#">marketing</a>
                  <a href="#">strategy</a>
                  <a href="#">tips</a>
                  <a href="#">trading</a>
                </div>
              </aside>
              <aside class="widget widget_media_image">
                <Link to="/contact">
                  <img src="images/promo-img.jpg" alt />
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

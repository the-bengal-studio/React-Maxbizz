import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div>
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-blog">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">Blog Single</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li class="active">Blog Single</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="entry-content">
        <div class="container">
          <div class="row">
            <div class="content-area col-lg-9 col-md-12 col-sm-12 col-xs-12 mb-5 mb-lg-0">
              <article class="post-box blog-single blog-post">
                <div class="entry-media">
                  <div class="post-cat">
                    <span class="posted-in">
                      <a href="#">business</a>
                    </span>
                  </div>
                  <img src="images/blog/blog-1.jpg" alt />
                </div>
                <div class="inner-post">
                  <div class="entry-header">
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
                      <div class="btn-details">
                        <a href="post.html">
                          <i class="ot-flaticon-trajectory"></i>
                        </a>
                      </div>
                    </div>
                    <h4 class="entry-title">
                      Contactless Payments’ Time Has Come
                    </h4>
                  </div>
                  <div class="entry-summary">
                    <p>
                      <span class="drop-cap">
                        <span class="drop-cap-letter">N</span>
                      </span>
                      ot so long ago, marketing consumer products felt like a
                      genteel game of lawn tennis: Established competitors
                      invested in creative with long lead times, using proven
                      models of TV and big-box retail, alongside trusted agency
                      partners. Today, it’s more like a sprawling contest of
                      mixed martial arts, with new competitors playing by
                      different rules; an unprecedented complexity of channels,{" "}
                      <span class="text-color-primary">
                        content and partners; and a step change
                      </span>
                      in speed and ways of working that has punches flying at
                      incumbent consumer products companies.
                    </p>
                    <p>
                      <span class="text-color-dark font-weight-600">
                        Fueling the blur of combat is a radical shift in brand
                        growth models.
                      </span>
                      Within the span of most executives’ careers, advances in
                      technology have reshaped how consumers engage with brands.
                      In the US and UK, more than 60% of consumers now discover
                      products online, and 85% of millennials trust reviews from
                      a faceless stranger more than traditional advertising. The
                      same technology advances have dramatically altered the
                      competitive landscape. CMOs can no longer forecast forward
                      their current profit pools only by looking to fill in
                      geographies and nearby product market segments. That
                      process risks ignoring the industry’s disruptive trends,
                      as profit pools shift quickly from products to services to
                      experiences and communities, and as mass products evolve
                      into new segments with accelerating personalization.{" "}
                      <em>
                        Growth strategy today requires consumer products
                        companies to look “present forward” and “future back”—to
                        create a faster horse while envisioning the car—in order
                        to define new growth platforms beyond their current
                        products, business model and capabilities.
                      </em>
                    </p>
                    <p>
                      <img src="images/blog/post.jpg" alt />
                    </p>
                    <h5>
                      <strong>Upgrade Content Creation Capabilities</strong>
                    </h5>
                    <p>
                      Fueling the blur of combat is a radical shift in brand
                      growth models. Within the span of most executives’
                      careers, advances in technology have reshaped how
                      consumers engage with brands. In the US and UK, more than
                      60% of consumers now discover products online, and 85% of
                      millennials trust reviews from a faceless stranger more
                      than traditional advertising.
                      <span class="text-color-dark font-weight-600">
                        The same technology advances have dramatically
                      </span>{" "}
                      altered the competitive landscape. However, the
                      transformation still required across the industry is
                      significant, involving far-reaching changes to consumer
                      products companies’ growth models and the largest buckets
                      of their discretionary spending. And it’s urgent, as
                      consumers and new competitors are moving faster than
                      incumbents can react.
                    </p>
                    <blockquote>
                      <p class="text-center">
                        “I cannot give you the formula for success, but I can
                        give you the formula for failure. It is: Try to please
                        everybody.”
                        <br />
                        <cite>DAVID OSWALD</cite>
                      </p>
                    </blockquote>
                    <p>
                      What’s the right path forward? Reinventing the brand
                      growth model requires more than a reallocation of
                      marketing budget to digital. CMOs need a reassessment of
                      growth platforms and future brand portfolios, a new
                      understanding of the consumer journey, a supporting
                      strategy on data and technology.
                    </p>
                    <p class="mb-0">
                      <em>
                        The consumer journey has fundamentally changed, and so
                        has the role of the brand manager. Once guardians of the
                        brief to agencies, today they must lead hands-on content
                        generation, data management.
                      </em>
                    </p>
                  </div>
                  <div class="entry-footer clearfix">
                    <div class="tagcloud">
                      <a href="#">analysis</a>
                      <a href="#">business</a>
                    </div>
                    <span class="share-post">
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
                  <div class="author-bio">
                    <div class="author-image">
                      <img
                        src="images/author-widget.png"
                        alt="Samanta Fox"
                        class="avatar"
                      />
                    </div>
                    <div class="author-info">
                      <p class="title text-color-primary font-second">Author</p>
                      <h6>Samanta Fox</h6>
                      <p class="des">
                        He is attended the State University of New York at
                        Oswego where he majored in English Literature and
                        Creative Writing.
                      </p>
                      <div class="author-socials">
                        <a href="twitter.html" target="_blank">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="facebook.html" target="_blank">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="linkedin.html" target="_blank">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="instagram.html" target="_blank">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="post-nav clearfix">
                    <div class="post-prev">
                      <a href="post.html">
                        <div class="thumb-post">
                          <img src="images/blog/recent-post-1.jpg" alt />
                        </div>
                        <div class="info-post">
                          <h6>Digital Transformation Roadmap: Enablers</h6>
                          <span>August 14, 2023</span>
                        </div>
                      </a>
                    </div>
                    <div class="post-next">
                      <a href="post.html">
                        <div class="thumb-post">
                          <img src="images/blog/recent-post-3.jpg" alt />
                        </div>
                        <div class="info-post">
                          <h6>Contactless Payments’ Time Has Come</h6>
                          <span>September 4, 2023</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="related-posts">
                    <h4>Related Posts</h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="post-box post-item relate-box">
                          <div class="post-inner">
                            <div class="entry-media post-cat-abs">
                              <a href="post.html">
                                <img src="images/blog/relate-post-1.jpg" alt />
                              </a>
                              <div class="post-cat">
                                <span class="posted-in">
                                  <a href="#" rel="category tag">
                                    Development
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div class="inner-post">
                              <div class="entry-header">
                                <h5 class="entry-title">
                                  <a href="post.html">
                                    Contactless Payments’ Time Has Come
                                  </a>
                                </h5>
                              </div>
                            </div>
                            <div class="entry-meta">
                              <span class="posted-on">
                                <a href="#">September 4, 2023</a>
                              </span>
                              <span class="comment-num">
                                / <a href="#">0 Comments</a>
                              </span>
                              <a class="btn-details" href="post.html">
                                <i class="ot-flaticon-trajectory"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="post-box blog-item relate-box">
                          <div class="post-inner">
                            <div class="entry-media post-cat-abs">
                              <a href="post.html">
                                <img src="images/blog/relate-post-2.jpg" alt />
                              </a>
                              <div class="post-cat">
                                <span class="posted-in">
                                  <a href="#" rel="category tag">
                                    marketing
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div class="inner-post">
                              <div class="entry-header">
                                <h5 class="entry-title">
                                  <a href="post.html">
                                    Digital Transformation Roadmap: Enablers
                                  </a>
                                </h5>
                              </div>
                            </div>
                            <div class="entry-meta">
                              <span class="posted-on">
                                <a href="#">September 4, 2023</a>
                              </span>
                              <span class="comment-num">
                                / <a href="#">0 Comments</a>
                              </span>
                              <a class="btn-details" href="post.html">
                                <i class="ot-flaticon-trajectory"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <div id="comments" class="comments-area">
                <h4 class="comments-title">
                  Comments <span>(02)</span>
                </h4>
                <ol class="comment-list">
                  <li class="comment even thread-even comment-item">
                    <article class="comment-wrap clearfix">
                      <div class="gravatar">
                        <img
                          src="images/blog/comment-img.jpg"
                          alt="Liza Benedict"
                          class="avatar"
                        />
                      </div>
                      <div class="comment-content">
                        <div class="comment-meta">
                          <h6 class="comment-author">Liza Benedict</h6>
                          <span class="comment-time">2 Days ago</span>
                          <div class="comment-reply">
                            <a class="comment-reply-link" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                        <div class="comment-text">
                          <p>
                            We have a lot of grateful customers who have
                            successfully established cooperation between the
                            community, business and government with our
                            assistance.
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                </ol>
                <ul class="children">
                  <li class="comment odd alt comment-item">
                    <article class="comment-wrap clearfix">
                      <div class="gravatar">
                        <img
                          src="images/blog/reply-img.jpg"
                          alt="Frank Barry"
                          class="avatar"
                        />
                      </div>

                      <div class="comment-content">
                        <div class="comment-meta">
                          <h6 class="comment-author">Frank Barry</h6>
                          <span class="comment-time">2 Days ago</span>
                          <div class="comment-reply">
                            <a class="comment-reply-link" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                        <div class="comment-text">
                          <p>
                            Betazen Infotech has been extremely consistent and
                            reliable through our entire engagement. Our results
                            speak for themselves.{" "}
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
              <div class="comment-respond">
                <h3 class="comment-reply-title">Leave a comment</h3>
                <form
                  action="https://thebengalstudio.com/BetazenInfotech/contact.php"
                  method="post"
                  class="comment-form"
                >
                  <p class="comment-notes">
                    <span id="email-notes">
                      Your email address will not be published.
                    </span>
                    Required fields are marked <span class="required">*</span>
                  </p>
                  <div class="row">
                    <p class="comment-form-author col-md-6">
                      <input
                        id="author"
                        name="name"
                        type="text"
                        value
                        size="30"
                        placeholder="Name*"
                        required
                      />
                    </p>
                    <p class="comment-form-email col-md-6">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        value
                        size="30"
                        placeholder="Email*"
                        required
                      />
                    </p>
                  </div>
                  <p class="comment-form-comment">
                    <textarea
                      id="comment"
                      name="message"
                      cols="45"
                      rows="8"
                      placeholder="Comment*"
                      required
                    ></textarea>
                  </p>
                  <p class="form-submit">
                    <input
                      name="submit"
                      type="submit"
                      id="submit"
                      class="octf-btn"
                      value="Post Comment"
                    />
                  </p>
                </form>
              </div>
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
                      <a href="post.html">
                        <img src="images/blog/recent-post-1.jpg" alt />
                      </a>
                    </div>
                    <div class="entry-header">
                      <h6>
                        <a href="post.html">
                          Contactless Payments’ Time Has Come
                        </a>
                      </h6>
                      <span class="post-on">
                        <span class="entry-date">SEPTEMBER 4, 2020</span>
                      </span>
                    </div>
                  </li>

                  <li class="clearfix">
                    <div class="thumb">
                      <a href="post.html">
                        <img src="images/blog/recent-post-2.jpg" alt />
                      </a>
                    </div>
                    <div class="entry-header">
                      <h6>
                        <a href="post.html">
                          The Future of Retail: Asia’s Ecosystems
                        </a>
                      </h6>
                      <span class="post-on">
                        <span class="entry-date">FEBRUARY 24, 2020</span>
                      </span>
                    </div>
                  </li>

                  <li class="clearfix">
                    <div class="thumb">
                      <a href="post.html">
                        <img src="images/blog/recent-post-3.jpg" alt />
                      </a>
                    </div>
                    <div class="entry-header">
                      <h6>
                        <a href="post.html">
                          Digital Transformation Roadmap: Enablers
                        </a>
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
                <a href="contact.html">
                  <img src="images/promo-img.jpg" alt />
                </a>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

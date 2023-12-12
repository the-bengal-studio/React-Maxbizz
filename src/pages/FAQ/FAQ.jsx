import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-team">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">FAQs</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="active">FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-60"></div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="ot-heading">
                <span class="is_highlight">faqs</span>
                <h3 class="main-head">Most Popular Questions</h3>
              </div>
              <div class="space-20"></div>
              <p class="px-xl-5">
                We help you see the world differently, discover opportunities
                you may never have imagined and achieve results that bridge what
                is with what can be.
              </p>
              <div class="space-40"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
              <div class="ot-accordions">
                <div class="acc-item current">
                  <div class="acc-toggle flex-middle" data-default="yes">
                    In what areas do you provide management consulting?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content active">
                    <p>
                      Our associate consultants specialize in a range of
                      business areas. These include strategic planning, issues
                      resolution, culture assessment, board effectiveness,
                      retention strategies.
                    </p>
                  </div>
                </div>
                <div class="acc-item">
                  <div class="acc-toggle flex-middle">
                    In which countries do you provide consulting services?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content">
                    <p>
                      Our associate consultants specialize in a range of
                      business areas. These include strategic planning, issues
                      resolution, culture assessment, board effectiveness,
                      retention strategies.
                    </p>
                  </div>
                </div>
                <div class="acc-item">
                  <div class="acc-toggle flex-middle">
                    How is a consulting project started and organized?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content">
                    <p>
                      Our associate consultants specialize in a range of
                      business areas. These include strategic planning, issues
                      resolution, culture assessment, board effectiveness,
                      retention strategies.
                    </p>
                  </div>
                </div>
                <div class="acc-item">
                  <div class="acc-toggle flex-middle">
                    Do you do fixed price or time and materials contracts?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content">
                    <p>
                      Our associate consultants specialize in a range of
                      business areas. These include strategic planning, issues
                      resolution, culture assessment, board effectiveness,
                      retention strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="ot-accordions">
                <div class="acc-item current">
                  <div class="acc-toggle flex-middle" data-default="yes">
                    Do you offer volume or loyalty discounts?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content active">
                    <p>
                      In healthy companies, changing directions or launching new
                      projects means combining underlying strengths and
                      capacities with new energy and support.
                    </p>
                  </div>
                </div>
                <div class="acc-item">
                  <div class="acc-toggle flex-middle">
                    What problems does business consulting typically solve?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content">
                    <p>
                      In healthy companies, changing directions or launching new
                      projects means combining underlying strengths and
                      capacities with new energy and support.
                    </p>
                  </div>
                </div>
                <div class="acc-item">
                  <div class="acc-toggle flex-middle">
                    How is the scope of a consulting project determined?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content">
                    <p>
                      In healthy companies, changing directions or launching new
                      projects means combining underlying strengths and
                      capacities with new energy and support.
                    </p>
                  </div>
                </div>
                <div class="acc-item">
                  <div class="acc-toggle flex-middle">
                    How long does a business consulting project last?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content">
                    <p>
                      In healthy companies, changing directions or launching new
                      projects means combining underlying strengths and
                      capacities with new energy and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-60"></div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

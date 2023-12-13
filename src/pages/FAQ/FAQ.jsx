import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccordionItem = ({ title, content }) => {
  const [isCurrent, setIsCurrent] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleCurrent = () => {
    setIsCurrent(!isCurrent);
    setIsActive(!isActive);
  };

  return (
    <div
      class={`acc-item ${isCurrent ? "current" : ""}`}
      onClick={toggleCurrent}
    >
      <div class="acc-toggle flex-middle">
        {title}
        <i class="ot-flaticon-arrowsoutline"></i>
      </div>
      <div
        class={`acc-content ${isActive ? "active" : ""}`}
        style={{ display: isActive ? "block" : "none" }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const accordionData1 = [
    {
      title: "In what areas do you provide management consulting?",
      content:
        "Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention strategies.",
    },
    {
      title: "In which countries do you provide consulting services?",
      content:
        "Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention strategies.",
    },
    {
      title: "How is a consulting project started and organized? ",
      content:
        "Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention strategies.",
    },
    {
      title: "Do you do fixed price or time and materials contracts?",
      content:
        "Our associate consultants specialize in a range of business areas. These     include strategic planning, issues resolution, culture assessment, board effectiveness, retention strategies.",
    },
  ];
  const accordionData2 = [
    {
      title: "Do you offer volume or loyalty discounts?",
      content:
        "In healthy companies, changing directions or launching new projects means combining underlying strengths  and capacities with new energy and    support.",
    },
    {
      title: "What  problems does business consulting typically solve?",
      content:
        "In healthy companies, changing directions or launching new projects  means combining underlying strengths and capacities with new energy and support",
    },
    {
      title: "How is the scope of a consulting project determined?",
      content:
        "In healthy companies, changing  directions or launching new projects  means combining underlying strengths   and capacities with new energy and   support.",
    },
    {
      title: "How long  does a business consulting project last?",
      content:
        "In healthy companies, changing  directions or launching new projects   means combining underlying strengths and capacities with new energy and    support.",
    },
  ];

  // pricing table:

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
                {accordionData1.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
            <div class="col-md-6">
              <div class="ot-accordions">
                {accordionData2.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
          <div class="space-60 d-none d-md-block"></div>
          <div class="space-60"></div>
        </div>
      </section>

      <section class="cta">
        <div class="container">
          <div class="space-80"></div>
          <div class="row align-items-center">
            <div class="col-lg-8 mb-4 mb-lg-0">
              <h2 class="mb-0 text-white">
                Looking for a First-Class Finance Firm?
              </h2>
              <div class="space-10"></div>
              <p class="mb-0 text-white">
                We welcome and celebrate different perspectives to help our
                firm, our clients and our people.
              </p>
            </div>
            <div class="col-lg-4 text-lg-right">
              <div class="ot-button">
                <a href="contact-us.html" class="octf-btn octf-btn-main">
                  get in touch
                </a>
              </div>
            </div>
          </div>
          <div class="space-80"></div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

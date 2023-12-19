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

const ServiceDetail2 = () => {
  const accordionData1 = [
    {
      title: "Exceptional Client Service",
      content:
        "In healthy companies, changing directions or launching new projects means combining underlying strengths  and capacities with new energy and     support.",
    },
    {
      title: "A Great  Team and Winning Culture",
      content:
        "In healthy companies, changing directions or launching new projects means combining underlying strengths  and capacities with new energy and     support.",
    },
    {
      title: "A Commitment to Integrity, Fairness ",
      content:
        "In healthy companies, changing directions or launching new projects means combining underlying strengths  and capacities with new energy and     support.",
    },
  ];
  const [activeTab, setActiveTab] = useState("tab-1841");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div>
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-service">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">Organizational Audit</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="active">Organizational Audit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="space-80"></div>
          <div class="service-top-detail2">
            <div class="row">
              <div class="col-lg-5">
                <h6>how we help</h6>
                <h1>Align Costs with Strategy & Focus on Growth</h1>
                <div class="space-20"></div>
                <div class="ot-button">
                  <a href="#" class="octf-btn octf-btn-dark">
                    get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="space-100"></div>
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="ot-heading">
                <span class="is_highlight">main principles</span>
                <h3 class="main-head">Global Reach with Local Understanding</h3>
              </div>
              <div class="space-30"></div>
              <div class="ot-accordions pr-xl-5">
                {accordionData1.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
            <div class="col-lg-6 align-self-end">
              <img src="images/chart-project.png" alt />
            </div>
          </div>
          <div class="space-120"></div>
        </div>
      </section>
      <section class="service-benefit-detail2">
        <div class="container">
          <div class="space-100"></div>
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="ot-heading">
                <span class="is_highlight">our benefits</span>
                <h3 class="main-head text-white">Why Clients Choose Us</h3>
              </div>
              <div class="space-50"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-md-6 mb-4 mb-xl-0">
              <div class="hover-dark-yes">
                <div class="icon-box icon-box-1 icon-service-2">
                  <div class="icon-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 511.999 511.999"
                    >
                      <g>
                        {" "}
                        <g>
                          <path d="M436.275,39.807H304.797C300.155,17.119,280.039,0,256,0s-44.156,17.119-48.798,39.807H75.725    c-14.771,0-26.789,12.018-26.789,26.789V351.16c0,14.771,12.017,26.789,26.789,26.789H200.63l-40.566,120.866    c-1.757,5.235,1.063,10.904,6.299,12.662c1.055,0.354,2.128,0.522,3.183,0.522c4.179,0,8.076-2.641,9.479-6.821l42.702-127.229    h68.546l42.702,127.229c1.403,4.181,5.3,6.821,9.479,6.821c1.055,0,2.128-0.169,3.183-0.522c5.236-1.758,8.056-7.427,6.299-12.662    l-40.566-120.866h124.905c14.771,0,26.789-12.018,26.789-26.789V66.596C463.063,51.824,451.046,39.807,436.275,39.807z M256,20    c12.93,0,23.963,8.274,28.082,19.807h-56.163C232.038,28.274,243.071,20,256,20z M443.063,351.16c0,3.743-3.045,6.789-6.789,6.789    h-26.121v-142.56c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10V357.95H359.39V245.979c0-5.522-4.477-10-10-10    c-5.523,0-10,4.478-10,10v111.97h-28.084v-79.255c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10v79.255h-25.308V253.277    c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10v104.672h-29.037v-55.023c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10v55.023    h-23.221v-50.985c0-5.522-4.477-10-10-10s-10,4.478-10,10v50.985h-26.777v-39.337c0-5.522-4.477-10-10-10s-10,4.478-10,10v39.337    h-31.24c-3.743,0-6.789-3.046-6.789-6.789V66.596c0-3.743,3.045-6.789,6.789-6.789h140.468h79.614h140.468    c3.743,0,6.789,3.046,6.789,6.789V351.16z"></path>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M410.105,106.884c-0.013-0.137-0.039-0.269-0.058-0.404c-0.026-0.188-0.049-0.377-0.086-0.564    c-0.031-0.158-0.075-0.312-0.114-0.467c-0.04-0.161-0.076-0.323-0.124-0.482c-0.046-0.153-0.104-0.301-0.158-0.451    c-0.056-0.158-0.109-0.317-0.173-0.473c-0.058-0.139-0.125-0.272-0.189-0.407c-0.075-0.161-0.147-0.323-0.231-0.48    c-0.068-0.127-0.146-0.249-0.22-0.373c-0.093-0.156-0.181-0.314-0.283-0.466c-0.089-0.134-0.19-0.259-0.285-0.388    c-0.098-0.133-0.191-0.268-0.297-0.397c-0.179-0.218-0.37-0.425-0.567-0.627c-0.033-0.033-0.06-0.07-0.093-0.103    c-0.032-0.032-0.068-0.059-0.1-0.09c-0.203-0.198-0.412-0.39-0.631-0.57c-0.122-0.1-0.25-0.188-0.376-0.281    c-0.136-0.102-0.269-0.207-0.41-0.302c-0.144-0.096-0.293-0.179-0.44-0.267c-0.133-0.08-0.264-0.163-0.401-0.237    c-0.146-0.078-0.296-0.144-0.445-0.214c-0.147-0.07-0.292-0.143-0.444-0.206c-0.141-0.058-0.285-0.105-0.427-0.156    c-0.166-0.06-0.329-0.123-0.499-0.174c-0.139-0.042-0.279-0.072-0.419-0.108c-0.176-0.045-0.35-0.094-0.53-0.129    c-0.156-0.031-0.314-0.049-0.471-0.072c-0.166-0.025-0.329-0.055-0.497-0.072c-0.267-0.026-0.535-0.036-0.804-0.041    c-0.06-0.001-0.118-0.009-0.178-0.009h-43.197c-5.523,0-10,4.478-10,10s4.477,10,10,10h19.054l-83.028,83.028l-21.797-21.798    c-1.875-1.875-4.419-2.929-7.071-2.929s-5.196,1.054-7.071,2.929l-72.161,72.162l-21.543-21.543    c-3.905-3.904-10.237-3.904-14.142,0l-36.492,36.492c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929    c2.559,0,5.119-0.977,7.071-2.929l29.42-29.421l21.543,21.542c3.905,3.904,10.237,3.904,14.142,0l72.161-72.161l21.797,21.798    c1.875,1.875,4.419,2.929,7.071,2.929s5.196-1.054,7.071-2.929l90.099-90.099v19.054c0,5.522,4.477,10,10,10    c5.523,0,10-4.478,10-10v-43.191C410.155,107.546,410.138,107.214,410.105,106.884z"></path>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle cx="119.779" cy="107.869" r="10"></circle>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle cx="119.779" cy="148.639" r="10"></circle>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle cx="119.779" cy="189.409" r="10"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="content-box">
                    <h5 class="title-box">
                      <a href="#">Consulting</a>
                    </h5>
                    <p>
                      We’ve been a strategy thought leader for nearly five
                      decades and we bring unrivaled{" "}
                    </p>
                  </div>
                  <div class="link-box">
                    <a href="#" class="link-details">
                      <i class="ot-flaticon-trajectory"></i>
                      Explore More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4 mb-xl-0">
              <div class="hover-dark-yes">
                <div class="icon-box icon-box-1 icon-service-2">
                  <div class="icon-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 511.999 511.999"
                    >
                      <g>
                        {" "}
                        <g>
                          <path d="M436.275,39.807H304.797C300.155,17.119,280.039,0,256,0s-44.156,17.119-48.798,39.807H75.725    c-14.771,0-26.789,12.018-26.789,26.789V351.16c0,14.771,12.017,26.789,26.789,26.789H200.63l-40.566,120.866    c-1.757,5.235,1.063,10.904,6.299,12.662c1.055,0.354,2.128,0.522,3.183,0.522c4.179,0,8.076-2.641,9.479-6.821l42.702-127.229    h68.546l42.702,127.229c1.403,4.181,5.3,6.821,9.479,6.821c1.055,0,2.128-0.169,3.183-0.522c5.236-1.758,8.056-7.427,6.299-12.662    l-40.566-120.866h124.905c14.771,0,26.789-12.018,26.789-26.789V66.596C463.063,51.824,451.046,39.807,436.275,39.807z M256,20    c12.93,0,23.963,8.274,28.082,19.807h-56.163C232.038,28.274,243.071,20,256,20z M443.063,351.16c0,3.743-3.045,6.789-6.789,6.789    h-26.121v-142.56c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10V357.95H359.39V245.979c0-5.522-4.477-10-10-10    c-5.523,0-10,4.478-10,10v111.97h-28.084v-79.255c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10v79.255h-25.308V253.277    c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10v104.672h-29.037v-55.023c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10v55.023    h-23.221v-50.985c0-5.522-4.477-10-10-10s-10,4.478-10,10v50.985h-26.777v-39.337c0-5.522-4.477-10-10-10s-10,4.478-10,10v39.337    h-31.24c-3.743,0-6.789-3.046-6.789-6.789V66.596c0-3.743,3.045-6.789,6.789-6.789h140.468h79.614h140.468    c3.743,0,6.789,3.046,6.789,6.789V351.16z"></path>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M410.105,106.884c-0.013-0.137-0.039-0.269-0.058-0.404c-0.026-0.188-0.049-0.377-0.086-0.564    c-0.031-0.158-0.075-0.312-0.114-0.467c-0.04-0.161-0.076-0.323-0.124-0.482c-0.046-0.153-0.104-0.301-0.158-0.451    c-0.056-0.158-0.109-0.317-0.173-0.473c-0.058-0.139-0.125-0.272-0.189-0.407c-0.075-0.161-0.147-0.323-0.231-0.48    c-0.068-0.127-0.146-0.249-0.22-0.373c-0.093-0.156-0.181-0.314-0.283-0.466c-0.089-0.134-0.19-0.259-0.285-0.388    c-0.098-0.133-0.191-0.268-0.297-0.397c-0.179-0.218-0.37-0.425-0.567-0.627c-0.033-0.033-0.06-0.07-0.093-0.103    c-0.032-0.032-0.068-0.059-0.1-0.09c-0.203-0.198-0.412-0.39-0.631-0.57c-0.122-0.1-0.25-0.188-0.376-0.281    c-0.136-0.102-0.269-0.207-0.41-0.302c-0.144-0.096-0.293-0.179-0.44-0.267c-0.133-0.08-0.264-0.163-0.401-0.237    c-0.146-0.078-0.296-0.144-0.445-0.214c-0.147-0.07-0.292-0.143-0.444-0.206c-0.141-0.058-0.285-0.105-0.427-0.156    c-0.166-0.06-0.329-0.123-0.499-0.174c-0.139-0.042-0.279-0.072-0.419-0.108c-0.176-0.045-0.35-0.094-0.53-0.129    c-0.156-0.031-0.314-0.049-0.471-0.072c-0.166-0.025-0.329-0.055-0.497-0.072c-0.267-0.026-0.535-0.036-0.804-0.041    c-0.06-0.001-0.118-0.009-0.178-0.009h-43.197c-5.523,0-10,4.478-10,10s4.477,10,10,10h19.054l-83.028,83.028l-21.797-21.798    c-1.875-1.875-4.419-2.929-7.071-2.929s-5.196,1.054-7.071,2.929l-72.161,72.162l-21.543-21.543    c-3.905-3.904-10.237-3.904-14.142,0l-36.492,36.492c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929    c2.559,0,5.119-0.977,7.071-2.929l29.42-29.421l21.543,21.542c3.905,3.904,10.237,3.904,14.142,0l72.161-72.161l21.797,21.798    c1.875,1.875,4.419,2.929,7.071,2.929s5.196-1.054,7.071-2.929l90.099-90.099v19.054c0,5.522,4.477,10,10,10    c5.523,0,10-4.478,10-10v-43.191C410.155,107.546,410.138,107.214,410.105,106.884z"></path>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle cx="119.779" cy="107.869" r="10"></circle>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle cx="119.779" cy="148.639" r="10"></circle>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle cx="119.779" cy="189.409" r="10"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="content-box">
                    <h5 class="title-box">
                      <a href="#">Planning</a>
                    </h5>
                    <p>
                      We’ve been a strategy thought leader for nearly five
                      decades and we bring unrivaled{" "}
                    </p>
                  </div>
                  <div class="link-box">
                    <a href="#" class="link-details">
                      <i class="ot-flaticon-trajectory"></i>
                      Explore More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4 mb-md-0">
              <div class="hover-dark-yes">
                <div class="icon-box icon-box-1 icon-service-2">
                  <div class="icon-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M489.129,42.371h-32.011V10c0-5.523-4.477-10-10-10s-10,4.477-10,10v38.237l-41.806,41.92    c-42.173-38.385-96.385-59.418-153.76-59.418c-61.083,0-118.511,23.787-161.703,66.979C36.657,140.91,12.87,198.338,12.87,259.421    s23.787,118.511,66.979,161.703c6.719,6.719,13.783,12.967,21.151,18.73l-55.074,55.074c-3.905,3.905-3.905,10.237,0,14.143    c1.953,1.952,4.512,2.929,7.071,2.929c2.559,0,5.119-0.977,7.071-2.929l57.452-57.453c36.629,23.742,79.348,36.485,124.031,36.485    c44.901,0,87.818-12.868,124.566-36.833l57.801,57.801c1.953,1.952,4.512,2.929,7.071,2.929c2.559,0,5.119-0.977,7.071-2.929    c3.905-3.905,3.906-10.237,0-14.143l-55.467-55.467c7.19-5.656,14.092-11.769,20.661-18.337    c43.192-43.192,66.979-100.62,66.979-161.703c0-34.789-7.614-68.199-22.63-99.303c-2.401-4.974-8.381-7.06-13.353-4.658    c-4.974,2.401-7.059,8.379-4.658,13.353c13.696,28.37,20.641,58.855,20.641,90.608c0,115.068-93.615,208.683-208.683,208.683    S32.867,374.49,32.867,259.421c0-115.068,93.615-208.683,208.683-208.683c52.045,0,101.242,18.958,139.627,53.59l-35.099,35.195    c-28.976-25.325-65.717-39.171-104.527-39.171c-87.711,0-159.069,71.358-159.069,159.069s71.36,159.069,159.071,159.069    s159.069-71.358,159.069-159.069c0-14.146-1.859-28.178-5.527-41.708c-6.436-23.746-18.393-45.726-34.797-64.125l42.276-42.391    c0.013-0.013,0.028-0.024,0.041-0.037c0.012-0.012,0.021-0.025,0.033-0.036l48.621-48.753h37.861c5.523,0,10-4.477,10-10    S494.652,42.371,489.129,42.371z M375.792,222.945c3.206,11.825,4.831,24.097,4.831,36.476    c0,76.683-62.386,139.069-139.069,139.069s-139.069-62.387-139.069-139.069s62.386-139.069,139.069-139.069    c33.479,0,65.202,11.779,90.375,33.362l-41.285,41.397c-13.628-10.428-30.644-16.643-49.09-16.643    c-44.637,0-80.953,36.315-80.953,80.953s36.315,80.953,80.953,80.953s80.953-36.315,80.953-80.953    c0-18.997-6.594-36.473-17.592-50.297l41.232-41.344C360.089,183.686,370.271,202.573,375.792,222.945z M235.828,264.236    c1.952,1.946,4.507,2.919,7.062,2.919c2.563,0,5.127-0.979,7.081-2.938l40.71-40.821c7.426,10.1,11.825,22.556,11.825,36.025    c0,33.609-27.343,60.953-60.953,60.953c-33.61,0-60.953-27.344-60.953-60.953s27.343-60.953,60.953-60.953    c12.935,0,24.933,4.062,34.81,10.961l-40.554,40.664C231.909,254.004,231.917,260.335,235.828,264.236z"></path>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle cx="419.22" cy="133.64" r="10"></circle>{" "}
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="content-box">
                    <h5 class="title-box">
                      <a href="#">Strategy</a>
                    </h5>
                    <p>
                      We’ve been a strategy thought leader for nearly five
                      decades and we bring unrivaled{" "}
                    </p>
                  </div>
                  <div class="link-box">
                    <a href="#" class="link-details">
                      <i class="ot-flaticon-trajectory"></i>
                      Explore More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="hover-dark-yes">
                <div class="icon-box icon-box-1 icon-service-2">
                  <div class="icon-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        {" "}
                        <g>
                          <circle cx="87.43" cy="406.69" r="10"></circle>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <circle cx="470.4" cy="287.44" r="10"></circle>{" "}
                        </g>
                      </g>
                      <g>
                        <g>
                          {" "}
                          <path d="M354.647,212.344h-5.797h-3.761h-5.797c-4.854,0-8.802-3.948-8.802-8.802v-8.931c0.001-4.854,3.949-8.802,8.802-8.802    h17.012c3.939,0,7.145,3.204,7.145,7.144c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10c0-14.743-11.818-26.771-26.479-27.127    v-8.584c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10v8.669c-14.798,1.188-26.479,13.602-26.479,28.7v8.931    c0,15.881,12.921,28.802,28.802,28.802h5.797h3.761h5.797c4.854,0,8.802,3.948,8.802,8.801v8.932c0,4.853-3.948,8.801-8.802,8.801    h-17.012c-3.939,0-7.145-3.204-7.145-7.144c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10c0,14.744,11.819,26.771,26.479,27.127    v8.584c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-8.669c14.798-1.188,26.479-13.601,26.479-28.699v-8.932    C383.449,225.264,370.528,212.344,354.647,212.344z"></path>
                        </g>
                      </g>
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M499.899,339.009c-4.115-9.319-11.613-16.479-21.112-20.159c-9.499-3.68-19.864-3.442-29.183,0.675    c-0.05,0.021-0.1,0.044-0.148,0.066l-62.989,29.048c-5.016,2.313-7.206,8.254-4.894,13.269c2.313,5.016,8.255,7.205,13.269,4.894    l62.908-29.011c4.415-1.927,9.317-2.03,13.813-0.291c4.518,1.751,8.083,5.155,10.04,9.588c1.958,4.433,2.071,9.361,0.321,13.879    c-1.751,4.519-5.155,8.084-9.588,10.041l-128.9,56.914c-20.326,8.975-43.397,8.453-63.301-1.435l-47.185-23.441    c-25.238-12.539-54.498-13.204-80.277-1.819l-0.6,0.264l-34.973-79.21l48.628-21.47c23.239-10.261,49.169-11.087,73.012-2.332    l94.885,34.845c8.475,3.112,12.992,12.594,10.069,21.135c-2.978,8.704-12.491,13.387-21.205,10.44l-73.375-24.818    c-5.233-1.77-10.907,1.037-12.677,6.269c-1.77,5.232,1.037,10.907,6.269,12.677l73.375,24.818    c3.88,1.313,7.831,1.936,11.721,1.936c15.283,0,29.606-9.62,34.816-24.848c6.413-18.746-3.501-39.553-22.099-46.382    l-94.885-34.845c-6.382-2.344-12.888-4.115-19.454-5.321v-55.277c0-54.504,44.343-98.847,98.847-98.847h36.524    c54.505,0,98.848,44.343,98.848,98.847v26.061c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-26.061    c0-57.721-41.365-105.956-96.008-116.636V72.349l25.267-43.222c1.429-2.443,1.755-5.378,0.897-8.075    c-0.858-2.697-2.817-4.905-5.394-6.076l-30.99-14.08c-2.373-1.078-5.072-1.187-7.523-0.305l-22.995,8.276l-20.396-8.153    c-2.345-0.936-4.956-0.951-7.312-0.044l-32.428,12.511c-2.698,1.041-4.813,3.2-5.801,5.919c-0.986,2.719-0.748,5.731,0.655,8.261    l24.881,44.867v30.038c-55.169,10.258-97.072,58.744-97.072,116.84v53.36c-16.52-0.156-33.022,3.199-48.53,10.046l-48.99,21.63    c-2.806-4.199-6.808-7.445-11.615-9.307c-6.172-2.392-12.907-2.236-18.938,0.427l-63.29,27.733    c-3.637,1.594-5.986,5.188-5.986,9.159V502c0,3.473,1.802,6.697,4.76,8.518c1.603,0.985,3.419,1.482,5.24,1.482    c1.542,0,3.088-0.356,4.509-1.074l122.873-62.071c5.926-2.698,10.477-7.518,12.833-13.6c1.925-4.969,2.199-10.302,0.839-15.352    l0.865-0.382c20.327-8.977,43.401-8.454,63.301,1.435l47.185,23.442c25.239,12.536,54.498,13.199,80.277,1.818l128.9-56.914    c9.319-4.114,16.479-11.612,20.159-21.111C504.252,358.692,504.013,348.328,499.899,339.009z M364.391,100.259h-2.84h-36.524    h-1.775V79.641h41.139V100.259z M301.431,27.704l18.049-6.961l20.275,8.105c2.272,0.908,4.798,0.953,7.099,0.123l22.744-8.187    l17.201,7.815l-18.146,31.04h-49.512L301.431,27.704z M137.868,430.678c-0.158,0.07-0.315,0.145-0.47,0.223L28.831,485.745    v-40.524l28.113-13.805c4.958-2.435,7.003-8.427,4.569-13.384c-2.435-4.958-8.425-7.005-13.384-4.569l-19.299,9.476V338.69    l57.329-25.122c1.575-0.694,2.97-0.352,3.661-0.084c0.689,0.268,1.951,0.951,2.647,2.528l2.292,5.19    c0.001,0.002,0.001,0.004,0.002,0.006c0.001,0.002,0.002,0.004,0.003,0.006l45.546,103.154    C141.377,426.782,140.282,429.612,137.868,430.678z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="content-box">
                    <h5 class="title-box">
                      <a href="#">Support</a>
                    </h5>
                    <p>
                      We’ve been a strategy thought leader for nearly five
                      decades and we bring unrivaled{" "}
                    </p>
                  </div>
                  <div class="link-box">
                    <a href="#" class="link-details">
                      <i class="ot-flaticon-trajectory"></i>
                      Explore More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-100"></div>
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
                <Link to="/contact" class="octf-btn octf-btn-main">
                  get in touch
                </Link>
              </div>
            </div>
          </div>
          <div class="space-80"></div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="space-100"></div>
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="ot-heading">
                <span class="is_highlight">reliable &amp; safe</span>
                <h3 class="main-head">Our Strategy Development</h3>
              </div>
              <div class="space-20"></div>
              <div class="ot-tabs pr-xl-5 ">
                <ul class="tabs-heading unstyle">
                  <li
                    className={`tab-link ${
                      activeTab === "tab-1841" ? "current" : ""
                    }`}
                    onClick={() => handleTabClick("tab-1841")}
                  >
                    Research
                  </li>
                  <li
                    className={`tab-link ${
                      activeTab === "tab-2841" ? "current" : ""
                    }`}
                    onClick={() => handleTabClick("tab-2841")}
                  >
                    Approach
                  </li>
                  <li
                    className={`tab-link ${
                      activeTab === "tab-3841" ? "current" : ""
                    }`}
                    onClick={() => handleTabClick("tab-3841")}
                  >
                    Result
                  </li>
                </ul>
                <div
                  id="tab-1841"
                  className={`tab-content ${
                    activeTab === "tab-1841" ? "current" : ""
                  }`}
                >
                  <p>
                    We are working in the format of an outsourcing project
                    office. We assume operational coordination and control over
                    the compliance with all project implementation parameters
                    that ensures the execution of works on time.
                  </p>
                  <p>
                    Integrated career development, business consulting and
                    digital media solutions connect your vision to results.
                    Instead of quick-fix, out of the box, buy-in-bulk products,
                    I develop highly customized solutions.
                  </p>
                </div>
                <div
                  id="tab-2841"
                  className={`tab-content ${
                    activeTab === "tab-2841" ? "current" : ""
                  }`}
                >
                  <p>
                    We can definitely define the provided level and range of
                    Synergy Development Consulting as a full-cycle support.
                    Therefore, we treat each client as an equal partner in the
                    long term. Our team consists of talented and motivated
                    people who are united by love to their work!
                  </p>
                  <p>
                    Integrated career development, business consulting and
                    digital media solutions connect your vision to results.
                    Instead of quick-fix, out of the box, buy-in-bulk products,
                    I develop highly customized solutions.
                  </p>
                </div>
                <div
                  id="tab-3841"
                  className={`tab-content ${
                    activeTab === "tab-3841" ? "current" : ""
                  }`}
                >
                  <p>
                    Successful experience of experts in structuring investment
                    projects, developing and implementing construction,
                    developers and energy projects, restructuring programs, etc.
                    provides a positive impact on your company profitability.
                  </p>
                  <p>
                    Integrated career development, business consulting and
                    digital media solutions connect your vision to results.
                    Instead of quick-fix, out of the box, buy-in-bulk products,
                    I develop highly customized solutions.
                  </p>
                </div>
              </div>
              <div class="space-40"></div>
              <div class="ot-button">
                <a href="#" class="octf-btn octf-btn-dark">
                  Explore More{" "}
                </a>
              </div>
            </div>
            <div class="col-lg-6 align-self-end">
              <div class="service-tab-img text-center">
                <img src="images/chart1-service.png" alt />
              </div>
            </div>
          </div>
          <div class="space-100"></div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail2;

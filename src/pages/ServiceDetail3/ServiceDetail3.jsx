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
const ServiceDetail3 = () => {
  const accordionData1 = [
    {
      title: "In what areas do you provide management consulting?",
      content:
        " Successful experience of experts in structuring investment projects, developing and implementing construction, developers and energy projects, restructuring programs,etc. provides a positive impact on your company profitability.",
    },
    {
      title: "In which countries do you provide consulting services?",
      content:
        " Successful experience of experts in structuring investment projects, developing and implementing construction, developers and energy projects, restructuring programs,etc. provides a positive impact on your company profitability.",
    },
    {
      title: "How is a consulting project started and organized? ",
      content:
        " Successful experience of experts in structuring investment projects, developing and implementing construction, developers and energy projects, restructuring programs,etc. provides a positive impact on your company profitability.",
    },
  ];
  return (
    <div>
      <div id="content" class="site-content">
        <div class="page-header flex-middle page-header-service">
          <div class="container">
            <div class="inner flex-middle">
              <h1 class="page-title">Business Consulting</h1>
              <ul id="breadcrumbs" class="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="active">Business Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="space-90"></div>
          <div class="row">
            <div class="col-xl-3 col-lg-4 widget-area mb-5 mb-lg-0">
              <aside class="widget widget_categories">
                <h6 class="widget-title">Services</h6>
                <ul>
                  <li>
                    <a href="service-detail-1.html">marketing research</a>
                  </li>
                  <li>
                    <a href="service-detail-2.html">Organizational Audit</a>
                  </li>
                  <li>
                    <a href="service-detail-3.html">business consulting</a>
                  </li>
                  <li>
                    <a href="service-detail-4.html">project management</a>
                  </li>
                  <li>
                    <a href="service-detail-5.html">support functions</a>
                  </li>
                  <li>
                    <a href="service-detail-6.html">finance planning</a>
                  </li>
                </ul>
              </aside>
              <aside class="widget">
                <h6 class="widget-title">Contacts</h6>
                <div class="d-flex">
                  <div class="widget-service-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xml:space="preserve"
                    >
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M256,0C150.125,0,64,86.135,64,192c0,141.646,177.146,310,184.688,317.104C250.75,511.031,253.375,512,256,512    s5.25-0.969,7.313-2.896C270.854,502,448,333.646,448,192C448,86.135,361.875,0,256,0z M256,298.667    c-58.813,0-106.667-47.854-106.667-106.667S197.188,85.333,256,85.333S362.667,133.188,362.667,192S314.813,298.667,256,298.667z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="widget-service-text">
                    <h6>Visit Us Daily</h6>
                    <p>411 University St, Seattle</p>
                  </div>
                </div>
                <div class="space-10"></div>
                <div class="space-6"></div>
                <div class="d-flex">
                  <div class="widget-service-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 384 384"
                      style={{ enableBackground: "new 0 0 384 384" }}
                      xml:space="preserve"
                    >
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="widget-service-text">
                    <h6>Have Any Questions?</h6>
                    <p>+1-800-456-478-23</p>
                  </div>
                </div>
                <div class="space-10"></div>
                <div class="space-6"></div>
                <div class="d-flex">
                  <div class="widget-service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"></path>
                      <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"></path>
                    </svg>
                  </div>
                  <div class="widget-service-text">
                    <h6>Mail Us</h6>
                    <p>Betazen Infotech@mail.com</p>
                  </div>
                </div>
              </aside>
              <aside class="widget">
                <h6 class="widget-title">Brochures</h6>
                <a href="#">
                  <img src="images/img-btn-pdf.jpg" alt class="rounded-img" />
                </a>
              </aside>
            </div>
            <div class="col-xl-9 col-lg-8">
              <h3>Strategic & Tactical Planning</h3>
              <p>
                It’s a daunting challenge: How do you move forward at speed
                despite enormous uncertainty? Radar Strategy provides the
                answer. Our unique “Today Forward, Future Back” approach enables
                you to create value now as you move toward your future vision,
                with the flexibility to adapt as scenarios change. We’ll help
                you make critical choices and choreograph your transformation
                journey as you bring your core to full potential and build new
                growth engines.
              </p>
              <p>
                Our team of global experts help you achieve sustainable, organic
                growth by focusing on three critical building blocks: an
                outside-in approach that puts customers first, a uniquely great
                customer experience and internal capabilities that ensure you
                deliver optimal customer interactions at every touchpoint.
              </p>
              <div class="space-40"></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="icon-left">
                    <div class="icon-box icon-box-2">
                      <div class="icon-main">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <path d="m257.756 273.413c75.381 0 136.707-61.326 136.707-136.707 0-75.38-61.326-136.706-136.707-136.706s-136.707 61.326-136.707 136.706c0 75.381 61.327 136.707 136.707 136.707zm0-258.384c67.093 0 121.677 54.584 121.677 121.677s-54.584 121.678-121.677 121.678-121.678-54.584-121.678-121.678c0-67.092 54.585-121.677 121.678-121.677z"></path>
                            <path d="m257.755 235.574c54.516 0 98.868-44.352 98.868-98.867s-44.352-98.867-98.868-98.867c-24.609 0-48.193 9.099-66.407 25.621-3.074 2.789-3.305 7.541-.517 10.615 2.789 3.074 7.542 3.307 10.615.517 15.443-14.009 35.441-21.724 56.309-21.724 46.229 0 83.839 37.61 83.839 83.838s-37.61 83.838-83.839 83.838c-46.228 0-83.837-37.609-83.837-83.838 0-13.96 3.497-27.777 10.114-39.957 1.981-3.647.631-8.209-3.016-10.19-3.646-1.982-8.208-.63-10.19 3.016-7.809 14.375-11.937 30.673-11.937 47.131 0 54.515 44.351 98.867 98.866 98.867z"></path>
                            <path d="m254.898 172.111c-11.802-.719-15.044-7.822-15.645-9.491-.86-3.212-3.782-5.58-7.265-5.58-4.158 0-7.529 3.371-7.529 7.53 0 .604.079 1.188.213 1.751l-.003.001c.007.027.021.079.04.144.092.355.201.703.342 1.036 1.39 3.834 6.959 15.729 23.371 18.907v9.999c0 4.15 3.365 7.515 7.515 7.515 4.151 0 7.515-3.364 7.515-7.515v-9.773c7.193-1.252 12.025-4.396 15.046-7.239 5.621-5.29 8.977-13.286 8.977-21.39 0-7.615-2.986-25.655-30.649-28.707-5.48-.605-9.389-2.349-11.62-5.183-1.969-2.503-2.182-5.268-2.182-6.341 0-1.322.363-12.913 12.913-12.913 8.234 0 11.559 5.237 12.184 6.376 1.114 2.766 3.818 4.72 6.982 4.72 4.158 0 7.529-3.371 7.529-7.529 0-1.236-.304-2.4-.832-3.429l.004-.002c-2.118-4.604-8.099-11.807-18.353-14.287v-10.087c0-4.15-3.364-7.515-7.515-7.515-4.15 0-7.515 3.365-7.515 7.515v10.055c-14.832 3.522-20.428 17.361-20.428 27.095 0 10.823 7.119 24.248 27.183 26.462 17.268 1.906 17.268 10.835 17.268 13.769 0 3.117-1.115 7.498-4.247 10.445-2.961 2.787-7.433 4.019-13.299 3.661z"></path>
                            <path d="m130.238 347.994c-1.42-1.51-3.401-2.366-5.474-2.366s-4.053.856-5.474 2.366l-51.047 54.268c-2.054 2.184-2.613 5.379-1.424 8.13 1.189 2.752 3.9 4.533 6.898 4.533h14.754v27.289c0 4.15 3.365 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-34.804c0-4.15-3.365-7.515-7.515-7.515h-4.884l33.661-35.786 33.661 35.786h-4.884c-4.15 0-7.515 3.365-7.515 7.515v89.56h-42.526v-24.697c0-4.15-3.365-7.515-7.515-7.515s-7.515 3.365-7.515 7.515v32.212c0 4.15 3.365 7.515 7.515 7.515h57.555c4.15 0 7.515-3.365 7.515-7.515v-89.56h14.754c2.997 0 5.708-1.781 6.898-4.533 1.189-2.751.63-5.947-1.424-8.13z"></path>
                            <path d="m263.229 296.294c-1.42-1.51-3.401-2.366-5.474-2.366s-4.053.856-5.474 2.366l-51.046 54.269c-2.054 2.184-2.614 5.379-1.424 8.13 1.189 2.752 3.9 4.533 6.898 4.533h14.754v141.259c0 4.15 3.365 7.515 7.515 7.515h57.555c4.151 0 7.515-3.365 7.515-7.515v-141.259h14.754c2.998 0 5.708-1.781 6.898-4.533 1.189-2.751.629-5.947-1.425-8.13zm23.304 51.903c-4.151 0-7.515 3.365-7.515 7.515v141.259h-42.526v-141.26c0-4.15-3.365-7.515-7.515-7.515h-4.884l33.661-35.786 33.661 35.786h-4.882z"></path>
                            <path d="m396.221 248.46c-1.42-1.51-3.401-2.366-5.474-2.366-2.072 0-4.054.856-5.474 2.366l-51.047 54.268c-2.054 2.183-2.614 5.379-1.425 8.13 1.19 2.752 3.9 4.533 6.898 4.533h14.754v45.859c0 4.15 3.364 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-53.373c0-4.15-3.364-7.515-7.515-7.515h-4.883l33.661-35.786 33.66 35.786h-4.883c-4.151 0-7.515 3.365-7.515 7.515v189.094h-42.526v-105.662c0-4.15-3.364-7.515-7.515-7.515s-7.515 3.364-7.515 7.515v113.177c0 4.15 3.364 7.515 7.515 7.515h57.556c4.151 0 7.515-3.365 7.515-7.515v-189.095h14.754c2.998 0 5.708-1.781 6.898-4.533 1.189-2.751.629-5.947-1.425-8.13z"></path>
                            <path d="m92.805 139.396c0-4.15-3.365-7.515-7.515-7.515h-44.075c-4.15 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h44.075c4.151-.001 7.515-3.365 7.515-7.515z"></path>
                            <path d="m95.012 198.37-15.676 6.141c-3.865 1.514-5.77 5.874-4.256 9.738 1.161 2.964 3.997 4.775 6.999 4.775.912 0 1.839-.167 2.739-.52l15.676-6.141c3.865-1.514 5.77-5.874 4.256-9.738-1.515-3.863-5.875-5.769-9.738-4.255z"></path>
                            <path d="m79.336 74.279 15.676 6.141c.901.353 1.827.52 2.739.52 3.002 0 5.838-1.812 6.999-4.775 1.514-3.864-.391-8.224-4.256-9.738l-15.676-6.141c-3.866-1.514-8.224.392-9.738 4.256-1.514 3.863.392 8.223 4.256 9.737z"></path>
                            <path d="m470.785 131.881h-44.075c-4.151 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h44.075c4.151 0 7.515-3.365 7.515-7.515-.001-4.15-3.365-7.515-7.515-7.515z"></path>
                            <path d="m411.506 212.365 15.675 6.141c.901.353 1.828.52 2.74.52 3.002 0 5.838-1.812 6.999-4.775 1.514-3.864-.391-8.224-4.255-9.738l-15.675-6.141c-3.868-1.514-8.224.392-9.739 4.256-1.514 3.862.391 8.222 4.255 9.737z"></path>
                            <path d="m414.25 80.94c.912 0 1.84-.167 2.74-.52l15.675-6.141c3.864-1.514 5.769-5.874 4.255-9.738-1.515-3.865-5.876-5.768-9.739-4.256l-15.675 6.141c-3.864 1.514-5.769 5.874-4.255 9.738 1.161 2.965 3.997 4.776 6.999 4.776z"></path>
                          </g>
                        </svg>
                      </div>
                      <div class="content-box">
                        <h5 class="title-box pt-0">
                          <a href="#">Financial Services</a>
                        </h5>
                        <p>
                          We help financial institutions, from banking and
                          insurance to wealth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="space-40"></div>
                </div>
                <div class="col-md-6">
                  <div class="icon-box icon-box-2">
                    <div class="icon-main">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path d="m257.756 273.413c75.381 0 136.707-61.326 136.707-136.707 0-75.38-61.326-136.706-136.707-136.706s-136.707 61.326-136.707 136.706c0 75.381 61.327 136.707 136.707 136.707zm0-258.384c67.093 0 121.677 54.584 121.677 121.677s-54.584 121.678-121.677 121.678-121.678-54.584-121.678-121.678c0-67.092 54.585-121.677 121.678-121.677z"></path>
                          <path d="m257.755 235.574c54.516 0 98.868-44.352 98.868-98.867s-44.352-98.867-98.868-98.867c-24.609 0-48.193 9.099-66.407 25.621-3.074 2.789-3.305 7.541-.517 10.615 2.789 3.074 7.542 3.307 10.615.517 15.443-14.009 35.441-21.724 56.309-21.724 46.229 0 83.839 37.61 83.839 83.838s-37.61 83.838-83.839 83.838c-46.228 0-83.837-37.609-83.837-83.838 0-13.96 3.497-27.777 10.114-39.957 1.981-3.647.631-8.209-3.016-10.19-3.646-1.982-8.208-.63-10.19 3.016-7.809 14.375-11.937 30.673-11.937 47.131 0 54.515 44.351 98.867 98.866 98.867z"></path>
                          <path d="m254.898 172.111c-11.802-.719-15.044-7.822-15.645-9.491-.86-3.212-3.782-5.58-7.265-5.58-4.158 0-7.529 3.371-7.529 7.53 0 .604.079 1.188.213 1.751l-.003.001c.007.027.021.079.04.144.092.355.201.703.342 1.036 1.39 3.834 6.959 15.729 23.371 18.907v9.999c0 4.15 3.365 7.515 7.515 7.515 4.151 0 7.515-3.364 7.515-7.515v-9.773c7.193-1.252 12.025-4.396 15.046-7.239 5.621-5.29 8.977-13.286 8.977-21.39 0-7.615-2.986-25.655-30.649-28.707-5.48-.605-9.389-2.349-11.62-5.183-1.969-2.503-2.182-5.268-2.182-6.341 0-1.322.363-12.913 12.913-12.913 8.234 0 11.559 5.237 12.184 6.376 1.114 2.766 3.818 4.72 6.982 4.72 4.158 0 7.529-3.371 7.529-7.529 0-1.236-.304-2.4-.832-3.429l.004-.002c-2.118-4.604-8.099-11.807-18.353-14.287v-10.087c0-4.15-3.364-7.515-7.515-7.515-4.15 0-7.515 3.365-7.515 7.515v10.055c-14.832 3.522-20.428 17.361-20.428 27.095 0 10.823 7.119 24.248 27.183 26.462 17.268 1.906 17.268 10.835 17.268 13.769 0 3.117-1.115 7.498-4.247 10.445-2.961 2.787-7.433 4.019-13.299 3.661z"></path>
                          <path d="m130.238 347.994c-1.42-1.51-3.401-2.366-5.474-2.366s-4.053.856-5.474 2.366l-51.047 54.268c-2.054 2.184-2.613 5.379-1.424 8.13 1.189 2.752 3.9 4.533 6.898 4.533h14.754v27.289c0 4.15 3.365 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-34.804c0-4.15-3.365-7.515-7.515-7.515h-4.884l33.661-35.786 33.661 35.786h-4.884c-4.15 0-7.515 3.365-7.515 7.515v89.56h-42.526v-24.697c0-4.15-3.365-7.515-7.515-7.515s-7.515 3.365-7.515 7.515v32.212c0 4.15 3.365 7.515 7.515 7.515h57.555c4.15 0 7.515-3.365 7.515-7.515v-89.56h14.754c2.997 0 5.708-1.781 6.898-4.533 1.189-2.751.63-5.947-1.424-8.13z"></path>
                          <path d="m263.229 296.294c-1.42-1.51-3.401-2.366-5.474-2.366s-4.053.856-5.474 2.366l-51.046 54.269c-2.054 2.184-2.614 5.379-1.424 8.13 1.189 2.752 3.9 4.533 6.898 4.533h14.754v141.259c0 4.15 3.365 7.515 7.515 7.515h57.555c4.151 0 7.515-3.365 7.515-7.515v-141.259h14.754c2.998 0 5.708-1.781 6.898-4.533 1.189-2.751.629-5.947-1.425-8.13zm23.304 51.903c-4.151 0-7.515 3.365-7.515 7.515v141.259h-42.526v-141.26c0-4.15-3.365-7.515-7.515-7.515h-4.884l33.661-35.786 33.661 35.786h-4.882z"></path>
                          <path d="m396.221 248.46c-1.42-1.51-3.401-2.366-5.474-2.366-2.072 0-4.054.856-5.474 2.366l-51.047 54.268c-2.054 2.183-2.614 5.379-1.425 8.13 1.19 2.752 3.9 4.533 6.898 4.533h14.754v45.859c0 4.15 3.364 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-53.373c0-4.15-3.364-7.515-7.515-7.515h-4.883l33.661-35.786 33.66 35.786h-4.883c-4.151 0-7.515 3.365-7.515 7.515v189.094h-42.526v-105.662c0-4.15-3.364-7.515-7.515-7.515s-7.515 3.364-7.515 7.515v113.177c0 4.15 3.364 7.515 7.515 7.515h57.556c4.151 0 7.515-3.365 7.515-7.515v-189.095h14.754c2.998 0 5.708-1.781 6.898-4.533 1.189-2.751.629-5.947-1.425-8.13z"></path>
                          <path d="m92.805 139.396c0-4.15-3.365-7.515-7.515-7.515h-44.075c-4.15 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h44.075c4.151-.001 7.515-3.365 7.515-7.515z"></path>
                          <path d="m95.012 198.37-15.676 6.141c-3.865 1.514-5.77 5.874-4.256 9.738 1.161 2.964 3.997 4.775 6.999 4.775.912 0 1.839-.167 2.739-.52l15.676-6.141c3.865-1.514 5.77-5.874 4.256-9.738-1.515-3.863-5.875-5.769-9.738-4.255z"></path>
                          <path d="m79.336 74.279 15.676 6.141c.901.353 1.827.52 2.739.52 3.002 0 5.838-1.812 6.999-4.775 1.514-3.864-.391-8.224-4.256-9.738l-15.676-6.141c-3.866-1.514-8.224.392-9.738 4.256-1.514 3.863.392 8.223 4.256 9.737z"></path>
                          <path d="m470.785 131.881h-44.075c-4.151 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h44.075c4.151 0 7.515-3.365 7.515-7.515-.001-4.15-3.365-7.515-7.515-7.515z"></path>
                          <path d="m411.506 212.365 15.675 6.141c.901.353 1.828.52 2.74.52 3.002 0 5.838-1.812 6.999-4.775 1.514-3.864-.391-8.224-4.255-9.738l-15.675-6.141c-3.868-1.514-8.224.392-9.739 4.256-1.514 3.862.391 8.222 4.255 9.737z"></path>
                          <path d="m414.25 80.94c.912 0 1.84-.167 2.74-.52l15.675-6.141c3.864-1.514 5.769-5.874 4.255-9.738-1.515-3.865-5.876-5.768-9.739-4.256l-15.675 6.141c-3.864 1.514-5.769 5.874-4.255 9.738 1.161 2.965 3.997 4.776 6.999 4.776z"></path>
                        </g>
                      </svg>
                    </div>
                    <div class="content-box">
                      <h5 class="title-box pt-0">
                        <a href="#">Financial Services</a>
                      </h5>
                      <p>
                        We help financial institutions, from banking and
                        insurance to wealth.
                      </p>
                    </div>
                  </div>
                  <div class="space-40"></div>
                </div>
                <div class="col-md-6">
                  <div class="icon-box icon-box-2">
                    <div class="icon-main">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path d="m257.756 273.413c75.381 0 136.707-61.326 136.707-136.707 0-75.38-61.326-136.706-136.707-136.706s-136.707 61.326-136.707 136.706c0 75.381 61.327 136.707 136.707 136.707zm0-258.384c67.093 0 121.677 54.584 121.677 121.677s-54.584 121.678-121.677 121.678-121.678-54.584-121.678-121.678c0-67.092 54.585-121.677 121.678-121.677z"></path>
                          <path d="m257.755 235.574c54.516 0 98.868-44.352 98.868-98.867s-44.352-98.867-98.868-98.867c-24.609 0-48.193 9.099-66.407 25.621-3.074 2.789-3.305 7.541-.517 10.615 2.789 3.074 7.542 3.307 10.615.517 15.443-14.009 35.441-21.724 56.309-21.724 46.229 0 83.839 37.61 83.839 83.838s-37.61 83.838-83.839 83.838c-46.228 0-83.837-37.609-83.837-83.838 0-13.96 3.497-27.777 10.114-39.957 1.981-3.647.631-8.209-3.016-10.19-3.646-1.982-8.208-.63-10.19 3.016-7.809 14.375-11.937 30.673-11.937 47.131 0 54.515 44.351 98.867 98.866 98.867z"></path>
                          <path d="m254.898 172.111c-11.802-.719-15.044-7.822-15.645-9.491-.86-3.212-3.782-5.58-7.265-5.58-4.158 0-7.529 3.371-7.529 7.53 0 .604.079 1.188.213 1.751l-.003.001c.007.027.021.079.04.144.092.355.201.703.342 1.036 1.39 3.834 6.959 15.729 23.371 18.907v9.999c0 4.15 3.365 7.515 7.515 7.515 4.151 0 7.515-3.364 7.515-7.515v-9.773c7.193-1.252 12.025-4.396 15.046-7.239 5.621-5.29 8.977-13.286 8.977-21.39 0-7.615-2.986-25.655-30.649-28.707-5.48-.605-9.389-2.349-11.62-5.183-1.969-2.503-2.182-5.268-2.182-6.341 0-1.322.363-12.913 12.913-12.913 8.234 0 11.559 5.237 12.184 6.376 1.114 2.766 3.818 4.72 6.982 4.72 4.158 0 7.529-3.371 7.529-7.529 0-1.236-.304-2.4-.832-3.429l.004-.002c-2.118-4.604-8.099-11.807-18.353-14.287v-10.087c0-4.15-3.364-7.515-7.515-7.515-4.15 0-7.515 3.365-7.515 7.515v10.055c-14.832 3.522-20.428 17.361-20.428 27.095 0 10.823 7.119 24.248 27.183 26.462 17.268 1.906 17.268 10.835 17.268 13.769 0 3.117-1.115 7.498-4.247 10.445-2.961 2.787-7.433 4.019-13.299 3.661z"></path>
                          <path d="m130.238 347.994c-1.42-1.51-3.401-2.366-5.474-2.366s-4.053.856-5.474 2.366l-51.047 54.268c-2.054 2.184-2.613 5.379-1.424 8.13 1.189 2.752 3.9 4.533 6.898 4.533h14.754v27.289c0 4.15 3.365 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-34.804c0-4.15-3.365-7.515-7.515-7.515h-4.884l33.661-35.786 33.661 35.786h-4.884c-4.15 0-7.515 3.365-7.515 7.515v89.56h-42.526v-24.697c0-4.15-3.365-7.515-7.515-7.515s-7.515 3.365-7.515 7.515v32.212c0 4.15 3.365 7.515 7.515 7.515h57.555c4.15 0 7.515-3.365 7.515-7.515v-89.56h14.754c2.997 0 5.708-1.781 6.898-4.533 1.189-2.751.63-5.947-1.424-8.13z"></path>
                          <path d="m263.229 296.294c-1.42-1.51-3.401-2.366-5.474-2.366s-4.053.856-5.474 2.366l-51.046 54.269c-2.054 2.184-2.614 5.379-1.424 8.13 1.189 2.752 3.9 4.533 6.898 4.533h14.754v141.259c0 4.15 3.365 7.515 7.515 7.515h57.555c4.151 0 7.515-3.365 7.515-7.515v-141.259h14.754c2.998 0 5.708-1.781 6.898-4.533 1.189-2.751.629-5.947-1.425-8.13zm23.304 51.903c-4.151 0-7.515 3.365-7.515 7.515v141.259h-42.526v-141.26c0-4.15-3.365-7.515-7.515-7.515h-4.884l33.661-35.786 33.661 35.786h-4.882z"></path>
                          <path d="m396.221 248.46c-1.42-1.51-3.401-2.366-5.474-2.366-2.072 0-4.054.856-5.474 2.366l-51.047 54.268c-2.054 2.183-2.614 5.379-1.425 8.13 1.19 2.752 3.9 4.533 6.898 4.533h14.754v45.859c0 4.15 3.364 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-53.373c0-4.15-3.364-7.515-7.515-7.515h-4.883l33.661-35.786 33.66 35.786h-4.883c-4.151 0-7.515 3.365-7.515 7.515v189.094h-42.526v-105.662c0-4.15-3.364-7.515-7.515-7.515s-7.515 3.364-7.515 7.515v113.177c0 4.15 3.364 7.515 7.515 7.515h57.556c4.151 0 7.515-3.365 7.515-7.515v-189.095h14.754c2.998 0 5.708-1.781 6.898-4.533 1.189-2.751.629-5.947-1.425-8.13z"></path>
                          <path d="m92.805 139.396c0-4.15-3.365-7.515-7.515-7.515h-44.075c-4.15 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h44.075c4.151-.001 7.515-3.365 7.515-7.515z"></path>
                          <path d="m95.012 198.37-15.676 6.141c-3.865 1.514-5.77 5.874-4.256 9.738 1.161 2.964 3.997 4.775 6.999 4.775.912 0 1.839-.167 2.739-.52l15.676-6.141c3.865-1.514 5.77-5.874 4.256-9.738-1.515-3.863-5.875-5.769-9.738-4.255z"></path>
                          <path d="m79.336 74.279 15.676 6.141c.901.353 1.827.52 2.739.52 3.002 0 5.838-1.812 6.999-4.775 1.514-3.864-.391-8.224-4.256-9.738l-15.676-6.141c-3.866-1.514-8.224.392-9.738 4.256-1.514 3.863.392 8.223 4.256 9.737z"></path>
                          <path d="m470.785 131.881h-44.075c-4.151 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h44.075c4.151 0 7.515-3.365 7.515-7.515-.001-4.15-3.365-7.515-7.515-7.515z"></path>
                          <path d="m411.506 212.365 15.675 6.141c.901.353 1.828.52 2.74.52 3.002 0 5.838-1.812 6.999-4.775 1.514-3.864-.391-8.224-4.255-9.738l-15.675-6.141c-3.868-1.514-8.224.392-9.739 4.256-1.514 3.862.391 8.222 4.255 9.737z"></path>
                          <path d="m414.25 80.94c.912 0 1.84-.167 2.74-.52l15.675-6.141c3.864-1.514 5.769-5.874 4.255-9.738-1.515-3.865-5.876-5.768-9.739-4.256l-15.675 6.141c-3.864 1.514-5.769 5.874-4.255 9.738 1.161 2.965 3.997 4.776 6.999 4.776z"></path>
                        </g>
                      </svg>
                    </div>
                    <div class="content-box">
                      <h5 class="title-box pt-0">
                        <a href="#">Government Services</a>
                      </h5>
                      <p>
                        We help financial institutions, from banking and
                        insurance to wealth.
                      </p>
                    </div>
                  </div>
                  <div class="space-40"></div>
                </div>
                <div class="col-md-6">
                  <div class="icon-box icon-box-2">
                    <div class="icon-main">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path d="m257.756 273.413c75.381 0 136.707-61.326 136.707-136.707 0-75.38-61.326-136.706-136.707-136.706s-136.707 61.326-136.707 136.706c0 75.381 61.327 136.707 136.707 136.707zm0-258.384c67.093 0 121.677 54.584 121.677 121.677s-54.584 121.678-121.677 121.678-121.678-54.584-121.678-121.678c0-67.092 54.585-121.677 121.678-121.677z"></path>
                          <path d="m257.755 235.574c54.516 0 98.868-44.352 98.868-98.867s-44.352-98.867-98.868-98.867c-24.609 0-48.193 9.099-66.407 25.621-3.074 2.789-3.305 7.541-.517 10.615 2.789 3.074 7.542 3.307 10.615.517 15.443-14.009 35.441-21.724 56.309-21.724 46.229 0 83.839 37.61 83.839 83.838s-37.61 83.838-83.839 83.838c-46.228 0-83.837-37.609-83.837-83.838 0-13.96 3.497-27.777 10.114-39.957 1.981-3.647.631-8.209-3.016-10.19-3.646-1.982-8.208-.63-10.19 3.016-7.809 14.375-11.937 30.673-11.937 47.131 0 54.515 44.351 98.867 98.866 98.867z"></path>
                          <path d="m254.898 172.111c-11.802-.719-15.044-7.822-15.645-9.491-.86-3.212-3.782-5.58-7.265-5.58-4.158 0-7.529 3.371-7.529 7.53 0 .604.079 1.188.213 1.751l-.003.001c.007.027.021.079.04.144.092.355.201.703.342 1.036 1.39 3.834 6.959 15.729 23.371 18.907v9.999c0 4.15 3.365 7.515 7.515 7.515 4.151 0 7.515-3.364 7.515-7.515v-9.773c7.193-1.252 12.025-4.396 15.046-7.239 5.621-5.29 8.977-13.286 8.977-21.39 0-7.615-2.986-25.655-30.649-28.707-5.48-.605-9.389-2.349-11.62-5.183-1.969-2.503-2.182-5.268-2.182-6.341 0-1.322.363-12.913 12.913-12.913 8.234 0 11.559 5.237 12.184 6.376 1.114 2.766 3.818 4.72 6.982 4.72 4.158 0 7.529-3.371 7.529-7.529 0-1.236-.304-2.4-.832-3.429l.004-.002c-2.118-4.604-8.099-11.807-18.353-14.287v-10.087c0-4.15-3.364-7.515-7.515-7.515-4.15 0-7.515 3.365-7.515 7.515v10.055c-14.832 3.522-20.428 17.361-20.428 27.095 0 10.823 7.119 24.248 27.183 26.462 17.268 1.906 17.268 10.835 17.268 13.769 0 3.117-1.115 7.498-4.247 10.445-2.961 2.787-7.433 4.019-13.299 3.661z"></path>
                          <path d="m130.238 347.994c-1.42-1.51-3.401-2.366-5.474-2.366s-4.053.856-5.474 2.366l-51.047 54.268c-2.054 2.184-2.613 5.379-1.424 8.13 1.189 2.752 3.9 4.533 6.898 4.533h14.754v27.289c0 4.15 3.365 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-34.804c0-4.15-3.365-7.515-7.515-7.515h-4.884l33.661-35.786 33.661 35.786h-4.884c-4.15 0-7.515 3.365-7.515 7.515v89.56h-42.526v-24.697c0-4.15-3.365-7.515-7.515-7.515s-7.515 3.365-7.515 7.515v32.212c0 4.15 3.365 7.515 7.515 7.515h57.555c4.15 0 7.515-3.365 7.515-7.515v-89.56h14.754c2.997 0 5.708-1.781 6.898-4.533 1.189-2.751.63-5.947-1.424-8.13z"></path>
                          <path d="m263.229 296.294c-1.42-1.51-3.401-2.366-5.474-2.366s-4.053.856-5.474 2.366l-51.046 54.269c-2.054 2.184-2.614 5.379-1.424 8.13 1.189 2.752 3.9 4.533 6.898 4.533h14.754v141.259c0 4.15 3.365 7.515 7.515 7.515h57.555c4.151 0 7.515-3.365 7.515-7.515v-141.259h14.754c2.998 0 5.708-1.781 6.898-4.533 1.189-2.751.629-5.947-1.425-8.13zm23.304 51.903c-4.151 0-7.515 3.365-7.515 7.515v141.259h-42.526v-141.26c0-4.15-3.365-7.515-7.515-7.515h-4.884l33.661-35.786 33.661 35.786h-4.882z"></path>
                          <path d="m396.221 248.46c-1.42-1.51-3.401-2.366-5.474-2.366-2.072 0-4.054.856-5.474 2.366l-51.047 54.268c-2.054 2.183-2.614 5.379-1.425 8.13 1.19 2.752 3.9 4.533 6.898 4.533h14.754v45.859c0 4.15 3.364 7.515 7.515 7.515s7.515-3.365 7.515-7.515v-53.373c0-4.15-3.364-7.515-7.515-7.515h-4.883l33.661-35.786 33.66 35.786h-4.883c-4.151 0-7.515 3.365-7.515 7.515v189.094h-42.526v-105.662c0-4.15-3.364-7.515-7.515-7.515s-7.515 3.364-7.515 7.515v113.177c0 4.15 3.364 7.515 7.515 7.515h57.556c4.151 0 7.515-3.365 7.515-7.515v-189.095h14.754c2.998 0 5.708-1.781 6.898-4.533 1.189-2.751.629-5.947-1.425-8.13z"></path>
                          <path d="m92.805 139.396c0-4.15-3.365-7.515-7.515-7.515h-44.075c-4.15 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h44.075c4.151-.001 7.515-3.365 7.515-7.515z"></path>
                          <path d="m95.012 198.37-15.676 6.141c-3.865 1.514-5.77 5.874-4.256 9.738 1.161 2.964 3.997 4.775 6.999 4.775.912 0 1.839-.167 2.739-.52l15.676-6.141c3.865-1.514 5.77-5.874 4.256-9.738-1.515-3.863-5.875-5.769-9.738-4.255z"></path>
                          <path d="m79.336 74.279 15.676 6.141c.901.353 1.827.52 2.739.52 3.002 0 5.838-1.812 6.999-4.775 1.514-3.864-.391-8.224-4.256-9.738l-15.676-6.141c-3.866-1.514-8.224.392-9.738 4.256-1.514 3.863.392 8.223 4.256 9.737z"></path>
                          <path d="m470.785 131.881h-44.075c-4.151 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h44.075c4.151 0 7.515-3.365 7.515-7.515-.001-4.15-3.365-7.515-7.515-7.515z"></path>
                          <path d="m411.506 212.365 15.675 6.141c.901.353 1.828.52 2.74.52 3.002 0 5.838-1.812 6.999-4.775 1.514-3.864-.391-8.224-4.255-9.738l-15.675-6.141c-3.868-1.514-8.224.392-9.739 4.256-1.514 3.862.391 8.222 4.255 9.737z"></path>
                          <path d="m414.25 80.94c.912 0 1.84-.167 2.74-.52l15.675-6.141c3.864-1.514 5.769-5.874 4.255-9.738-1.515-3.865-5.876-5.768-9.739-4.256l-15.675 6.141c-3.864 1.514-5.769 5.874-4.255 9.738 1.161 2.965 3.997 4.776 6.999 4.776z"></path>
                        </g>
                      </svg>
                    </div>
                    <div class="content-box">
                      <h5 class="title-box pt-0">
                        <a href="#">Natural Resources</a>
                      </h5>
                      <p>
                        We help financial institutions, from banking and
                        insurance to wealth.
                      </p>
                    </div>
                  </div>
                  <div class="space-40"></div>
                </div>
              </div>
              <div class="space-20"></div>
              <div class="service-top-detail3">
                <div class="row">
                  <div class="col-xl-5 col-lg-10">
                    <h6>how we help</h6>
                    <h2>Align Costs with Strategy &amp; Focus on Growth</h2>
                    <div class="space-20"></div>
                    <div class="ot-button">
                      <a href="#" class="octf-btn octf-btn-light">
                        get in touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-60"></div>
              <div class="row align-items-center">
                <div class="col-md-6 mb-5 mb-md-0">
                  <h5>How It Works & How We Do It</h5>
                  <p>
                    We are working in the format of an outsourcing project
                    office. We assume operational coordination and control over
                    the compliance with all project implementation parameters
                    that ensures the execution of works on time.
                  </p>
                  <p>
                    Integrating of innovation and public benefit into your
                    workflows; ensuring strategic and sustainable development of
                    your organization from project.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="line-progress" data-percent="60">
                    <h6>marketing analysis</h6>
                    <div class="iprogress">
                      <div class="progress-bar">
                        <span class="percent">0</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-20"></div>
                  <div class="line-progress" data-percent="80">
                    <h6>finance strategy</h6>
                    <div class="iprogress">
                      <div class="progress-bar">
                        <span class="percent">0</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-20"></div>
                  <div class="line-progress" data-percent="58">
                    <h6>business innovation</h6>
                    <div class="iprogress">
                      <div class="progress-bar">
                        <span class="percent">0</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-20"></div>
                  <div class="line-progress" data-percent="70">
                    <h6>CORPORATE MANAGEMENT</h6>
                    <div class="iprogress">
                      <div class="progress-bar">
                        <span class="percent">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-60"></div>
              <div class="service-blockquote">
                <blockquote>
                  “I cannot give you the formula for success, but I can give you
                  the formula for failure. It is: Try to please everybody.”
                  <cite>david oswald</cite>
                </blockquote>
              </div>
              <div class="space-60"></div>
              <h5>Business Planning & Strategy</h5>
              <div class="space-20"></div>
              <div class="ot-accordions">
                {/* <div class="acc-item current">
                  <div class="acc-toggle flex-middle" data-default="yes">
                    In what areas do you provide management consulting?
                    <i class="ot-flaticon-arrowsoutline"></i>
                  </div>
                  <div class="acc-content">
                    <p>
                      Successful experience of experts in structuring investment
                      projects, developing and implementing construction,
                      developers and energy projects, restructuring programs,
                      etc. provides a positive impact on your company
                      profitability.
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
                      Successful experience of experts in structuring investment
                      projects, developing and implementing construction,
                      developers and energy projects, restructuring programs,
                      etc. provides a positive impact on your company
                      profitability.
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
                      Successful experience of experts in structuring investment
                      projects, developing and implementing construction,
                      developers and energy projects, restructuring programs,
                      etc. provides a positive impact on your company
                      profitability.
                    </p>
                  </div>
                </div> */}
                {accordionData1.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
          <div class="space-100"></div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail3;
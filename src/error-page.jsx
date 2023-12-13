import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div id="page" class="site">
        <section class="error-404">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="error-logo">
                  <div class="the-logo">
                    <a href="index-2.html">
                      <img src="images/logo-white.svg" alt />
                    </a>
                  </div>
                </div>
                <div class="page-content">
                  <h1>404</h1>
                  <h2>Sorry! Page Not Found!</h2>
                  <p>
                    Oops! The page you are looking for does not exist. Please
                    return to the site’s homepage.
                  </p>
                  <form role="search" method="get" class="search-form">
                    <input
                      type="search"
                      class="search-field"
                      placeholder="SEARCH..."
                    />
                    <button type="submit" class="search-submit">
                      <i class="ot-flaticon-search"></i>
                    </button>
                  </form>
                  <div class="ot-button">
                    <Link class="octf-btn" to="/">
                      TAKE ME HOME
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const pageFooter = document.querySelector("#page-footer");
const pageNav = document.querySelector("#page-nav");
const pageHeader = document.querySelector("#page-header");

async function renderHeaderFooter() {

  pageNav.insertAdjacentHTML(
    "beforeend",
    `
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dropdown"
        aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="dropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active fw-bold" aria-current="page" href="#">Store Data</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">More</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://dspyk77.github.io/landing-page/index.html">Landing Page</a>
              </li>
              <li><a class="dropdown-item" href="https://github.com/dspyk77">GitHub</a></li>
              <li><a class="dropdown-item" href="https://www.linkedin.com/in/daniel-spykstra-0b3045218/">Linkedin</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    `
  );

  pageHeader.insertAdjacentHTML(
    "beforeend",
    `
    <div class="container d-flex flex-wrap justify-content-center">
      <img src="/img/store-data-logo.png"
        alt="store logo, black computer screen with green bionary text, to the right says you store, we analize">
    </div>
    `
  );

  pageFooter.insertAdjacentHTML(
    "beforeend",
    `
    <div>
      <span class="text-decoration-underline fs-4">Dan Spykstra</span>
    </div>
    <div class="d-flex justify-content-center gap-3">
      <a href="mailto:blah@gmail.com" target="_blank" class="text-decoration-none link-light">
        <i class="bi bi-envelope-fill fs-3"></i>
      </a>

      <a href="https://github.com/dspyk77" target="_blank" class="text-decoration-none link-light">
        <i class="bi bi-github fs-3"></i>
      </a>

      <a href="https://linkedin.com" target="_blank" class="text-decoration-none link-light">
        <i class="bi bi-linkedin fs-3"></i>
      </a>
    </div>

    <div>
      <span>
        &copy;
        <span id="copyright">

        </span>
      </span>
    </div>
    `
  );
}

renderHeaderFooter();

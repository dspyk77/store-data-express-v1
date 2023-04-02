const pageFooter = document.querySelector("#page-footer");

async function renderFooter() {
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
    `)
}

renderFooter();

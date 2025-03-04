document.getElementById("navbar").innerHTML=`<div class="container">
              <div class="row d-flex justify-content-between">
                <div
                  class="col-md-6 col-sm-12 d-flex justify-content-md-start justify-content-sm-center justify-content-center align-middle px-auto"
                >
                  <img
                    class="img-fluid"
                    src="Images/Logo.svg"
                    alt=""
                    width="150px"
                  />
                </div>
                <div
                  class="col-md-6 col-sm-12 justify-content-md-end justify-content-sm-center justify-content-center align-middle d-md-flex d-sm-none d-none py-3 px-auto"
                >
                  <form class="d-flex" id="search_bar">
                    <input
                      class="px-2 py-1"
                      id="search_field"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="py-1 px-3" id="search_btn" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>`

document.getElementById("lower_navbar").innerHTML=`<nav class="navbar navbar-expand-lg mt-2 p-0" id="button_navbar">
        <div class="container">
          <button
            class="navbar-toggler p-0 my-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon p-0" id="toggle_icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link px-5 active"
                  id="home"
                  aria-current="page"
                  href="Index.html"
                  >Home</a
                >
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link px-5 dropdown-toggle"
                  href="projects.html"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul
                  class="dropdown-menu w-100"
                  id="nav_drop"
                  aria-labelledby="navbarDropdown"
                >
                  <li><a class="dropdown-item" href="projectsr.html">Residential</a></li>
                  <li><a class="dropdown-item" href="projectsc.html">Commercial</a></li>
                  <li><a class="dropdown-item" href="projectsi.html">Industrial</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="gallery.html">Gallery</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link px-5" id="aboutus" href="aboutus.html"
                  >About us</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link px-5" id="contact" href="contact.html"
                  >Contact</a
                >
              </li>
            </ul>
            <form
              class="d-flex justify-content-md-end justify-content-sm-center justify-content-center align-middle d-md-none d-sm-flex mb-2"
              id="search_bar"
            >
              <input
                class="px-2 py-1"
                id="search_field"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="py-1 px-3" id="search_btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>`

    document.getElementById("footer").innerHTML=`<div class="container">
          <div class="row d-flex justify-content-center py-3">
            <div
              class="col-12 col-md-4 col-sm-12 d-block justify-content-center align-middle"
            >
              <img
                src="Images/Logo.svg"
                class="img-fluid mb-4"
                alt=""
                width="200px"
                height="100pc"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  align-content: center;
                  align-self: center;
                "
              />
              <p
                class="text-fluid"
                style="
                  text-align: justify;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                At our core, we aim to deliver Architectural, Interior Design,
                Renovation, and Construction services that not only meet
                expectations but also build meaningful connections with every
                client. We take pride in creating bold, innovative designs that
                reflect each client’s unique style while respecting their
                budget.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto my-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Important Links</h6>
              <p>
                <a href="Index.html" class="text-reset text-decoration-none"
                  >Home</a
                >
              </p>
              <p>
                <a href="Gallery.html" class="text-reset text-decoration-none"
                  >Gallery</a
                >
              </p>
              <p>
                <a href="aboutus.html" class="text-reset text-decoration-none"
                  >About Us</a
                >
              </p>
              <p>
                <a href="contact.html" class="text-reset text-decoration-none"
                  >Contact Us</a
                >
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto my-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Projects</h6>
              <p>
                <a href="projectsr.html" class="text-reset text-decoration-none"
                  >Residential Projects</a
                >
              </p>
              <p>
                <a href="projectsc.html" class="text-reset text-decoration-none"
                  >Commercial Projects</a
                >
              </p>
              <p>
                <a href="projectsi.html" class="text-reset text-decoration-none"
                  >Industrial Projects</a
                >
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 my-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> Shah-Faisal-Colony#03, Alfalah
                Society
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                farhanulhaq728@gmail.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 92 333 335 6062</p>
            </div>
          </div>
        </div>`
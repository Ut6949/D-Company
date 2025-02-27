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
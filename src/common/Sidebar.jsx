function Sidebar(params) {
  return (
    <div
  className="main-sidebar sidebar-style-2"
  tabIndex={1}
  style={{ overflow: "hidden", outline: "none" }}
>
  <aside id="sidebar-wrapper">
    <div className="sidebar-brand">
      <a href="index.html">Stisla</a>
    </div>
    <div className="sidebar-brand sidebar-brand-sm">
      <a href="index.html">St</a>
    </div>
    <ul className="sidebar-menu">
      <li className="dropdown active">
        <a href="/Dashboard" className="nav-link ">
          <i className="fas fa-fire" />
          <span>Dashboard</span>
        </a>
      </li>

      <li className="dropdown">
        <a href="#" className="nav-link" data-toggle="dropdown">
          <i className="fas fa-user" /> <span>User</span>
        </a>
      </li>

      
    
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="fas fa-th" /> <span>Bootstrap</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="nav-link" href="bootstrap-alert.html">
              Alert
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-badge.html">
              Badge
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-breadcrumb.html">
              Breadcrumb
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-buttons.html">
              Buttons
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-card.html">
              Card
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-carousel.html">
              Carousel
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-collapse.html">
              Collapse
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-dropdown.html">
              Dropdown
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-form.html">
              Form
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-list-group.html">
              List Group
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-media-object.html">
              Media Object
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-modal.html">
              Modal
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-nav.html">
              Nav
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-navbar.html">
              Navbar
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-pagination.html">
              Pagination
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-popover.html">
              Popover
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-progress.html">
              Progress
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-table.html">
              Table
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-tooltip.html">
              Tooltip
            </a>
          </li>
          <li>
            <a className="nav-link" href="bootstrap-typography.html">
              Typography
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-header">Stisla</li>
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="fas fa-th-large" /> <span>Components</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="nav-link" href="components-article.html">
              Article
            </a>
          </li>{" "}
          <li>
            <a
              className="nav-link beep beep-sidebar"
              href="components-avatar.html"
            >
              Avatar
            </a>
          </li>{" "}
          <li>
            <a className="nav-link" href="components-chat-box.html">
              Chat Box
            </a>
          </li>{" "}
          <li>
            <a
              className="nav-link beep beep-sidebar"
              href="components-empty-state.html"
            >
              Empty State
            </a>
          </li>{" "}
          <li>
            <a className="nav-link" href="components-gallery.html">
              Gallery
            </a>
          </li>
          <li>
            <a
              className="nav-link beep beep-sidebar"
              href="components-hero.html"
            >
              Hero
            </a>
          </li>{" "}
          <li>
            <a className="nav-link" href="components-multiple-upload.html">
              Multiple Upload
            </a>
          </li>
          <li>
            <a
              className="nav-link beep beep-sidebar"
              href="components-pricing.html"
            >
              Pricing
            </a>
          </li>{" "}
          <li>
            <a className="nav-link" href="components-statistic.html">
              Statistic
            </a>
          </li>{" "}
          <li>
            <a className="nav-link" href="components-tab.html">
              Tab
            </a>
          </li>
          <li>
            <a className="nav-link" href="components-table.html">
              Table
            </a>
          </li>
          <li>
            <a className="nav-link" href="components-user.html">
              User
            </a>
          </li>{" "}
          <li>
            <a
              className="nav-link beep beep-sidebar"
              href="components-wizard.html"
            >
              Wizard
            </a>
          </li>{" "}
        </ul>
      </li>
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="far fa-file-alt" /> <span>Forms</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="nav-link" href="forms-advanced-form.html">
              Advanced Form
            </a>
          </li>
          <li>
            <a className="nav-link" href="forms-editor.html">
              Editor
            </a>
          </li>
          <li>
            <a className="nav-link" href="forms-validation.html">
              Validation
            </a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="fas fa-map-marker-alt" /> <span>Google Maps</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="gmaps-advanced-route.html">Advanced Route</a>
          </li>
          <li>
            <a href="gmaps-draggable-marker.html">Draggable Marker</a>
          </li>
          <li>
            <a href="gmaps-geocoding.html">Geocoding</a>
          </li>
          <li>
            <a href="gmaps-geolocation.html">Geolocation</a>
          </li>
          <li>
            <a href="gmaps-marker.html">Marker</a>
          </li>
          <li>
            <a href="gmaps-multiple-marker.html">Multiple Marker</a>
          </li>
          <li>
            <a href="gmaps-route.html">Route</a>
          </li>
          <li>
            <a href="gmaps-simple.html">Simple</a>
          </li>
        </ul>
      </li>{" "}
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="fas fa-plug" /> <span>Modules</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="nav-link" href="modules-calendar.html">
              Calendar
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-chartjs.html">
              ChartJS
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-datatables.html">
              DataTables
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-flag.html">
              Flag
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-font-awesome.html">
              Font Awesome
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-ion-icons.html">
              Ion Icons
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-owl-carousel.html">
              Owl Carousel
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-sparkline.html">
              Sparkline
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-sweet-alert.html">
              Sweet Alert
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-toastr.html">
              Toastr
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-vector-map.html">
              Vector Map
            </a>
          </li>
          <li>
            <a className="nav-link" href="modules-weather-icon.html">
              Weather Icon
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-header">Pages</li>
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="far fa-user" /> <span>Auth</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="auth-forgot-password.html">Forgot Password</a>
          </li>
          <li>
            <a href="auth-login.html">Login</a>
          </li>
          <li>
            <a href="auth-register.html">Register</a>
          </li>
          <li>
            <a href="auth-reset-password.html">Reset Password</a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="fas fa-exclamation" /> <span>Errors</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="nav-link" href="errors-503.html">
              503
            </a>
          </li>
          <li>
            <a className="nav-link" href="errors-403.html">
              403
            </a>
          </li>
          <li>
            <a className="nav-link" href="errors-404.html">
              404
            </a>
          </li>
          <li>
            <a className="nav-link" href="errors-500.html">
              500
            </a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="fas fa-bicycle" /> <span>Features</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="nav-link" href="features-activities.html">
              Activities
            </a>
          </li>
          <li>
            <a className="nav-link" href="features-post-create.html">
              Post Create
            </a>
          </li>
          <li>
            <a className="nav-link" href="features-posts.html">
              Posts
            </a>
          </li>
          <li>
            <a className="nav-link" href="features-profile.html">
              Profile
            </a>
          </li>
          <li>
            <a className="nav-link" href="features-settings.html">
              Settings
            </a>
          </li>
          <li>
            <a className="nav-link" href="features-setting-detail.html">
              Setting Detail
            </a>
          </li>
          <li>
            <a className="nav-link" href="features-tickets.html">
              Tickets
            </a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#" className="nav-link has-dropdown">
          <i className="fas fa-ellipsis-h" /> <span>Utilities</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="utilities-contact.html">Contact</a>
          </li>
          <li>
            <a className="nav-link" href="utilities-invoice.html">
              Invoice
            </a>
          </li>
          <li>
            <a href="utilities-subscribe.html">Subscribe</a>
          </li>
        </ul>
      </li>{" "}
     
    </ul>
    <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
      <a
        href="https://getstisla.com/docs"
        className="btn btn-primary btn-lg btn-block btn-icon-split"
      >
        <i className="fas fa-rocket" /> Documentation
      </a>
    </div>{" "}
  </aside>
</div>

  )  
}

export default Sidebar
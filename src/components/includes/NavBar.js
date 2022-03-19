import React from 'react';
import $ from "jquery";

const NavBar = () => {

    const toggleLeftMenu = () => {
        $("html").toggleClass("layout-menu-expanded");
    }

    return (
        <>
          <nav
            class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)" onClick={toggleLeftMenu}>
                <i class="bx bx-menu bx-sm"></i>
              </a>
            </div>
          </nav> 
        </>
    );
}

export default NavBar;
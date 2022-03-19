import React from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import my_img from '../../images/Sourav Saha.jpg';

const LeftSidebar = (props) => {

    const toggleLeftMenu = () => {
        $("html").toggleClass("layout-menu-expanded");
    }

    return (
        <>
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo d-flex justify-content-center">
            <Link to="/" className="app-brand-link">
              
                <img src={my_img} className="img-fluid" width="150"/>
              
            </Link>

            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none" onClick={toggleLeftMenu}>
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/sourav.saha.71868964" target="_blank"><i class="fa-brands fa-facebook-square h3 text-white social-links"></i></a>&nbsp;
              <a href="https://www.linkedin.com/in/sourav-saha-ba8161191/" target="_blank"><i class="fa-brands fa-linkedin h3 text-white social-links"></i></a>
          </div>

          <div className="menu-inner-shadow"></div>
          <ul className="menu-inner py-1">
            {/* <!-- Dashboard --> */}
            <li className={props.tab === "home" ? "menu-item active" : "menu-item"}>
              <Link to="/" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Home</div>
              </Link>
            </li>
            <li className={props.tab === "about" ? "menu-item active" : "menu-item"}>
              <Link to="/about" className="menu-link">
                <i class='menu-icon bx bxs-user'></i>
                <div data-i18n="Analytics">About Me</div>
              </Link>
            </li>
            <li className={props.tab === "experience" ? "menu-item active" : "menu-item"}>
              <Link to="/experience" className="menu-link">
                <i class='menu-icon bx bx-right-top-arrow-circle'></i>
                <div data-i18n="Analytics">Experience</div>
              </Link>
            </li>
            <li className={props.tab === "projects" ? "menu-item active" : "menu-item"}>
              <Link to="/projects" className="menu-link">
              <i class="menu-icon fas fa-project-diagram"></i>
                <div data-i18n="Analytics">Projects</div>
              </Link>
            </li>
            <li className={props.tab === "contact" ? "menu-item active" : "menu-item"}>
              <Link to="/contact" className="menu-link">
              <i class="menu-icon fa-solid fa-envelope"></i>
                <div data-i18n="Analytics">Contact</div>
              </Link>
            </li>
          </ul>
        </aside>
        </>
    );
}

export default LeftSidebar;
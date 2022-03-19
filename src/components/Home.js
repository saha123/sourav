import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from './includes/LeftSidebar';
import NavBar from './includes/NavBar';

const Home = () => {

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

          <LeftSidebar tab="home"/>
        
        {/* <!-- / Menu -->

        <!-- Layout container --> */}
        <div className="layout-page">

        <NavBar />

          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-lg-12 mb-4 order-0">
                  <div className="card">
                    <div className="d-flex align-items-end row">
                      <div className="col-sm-12">
                        <div className="card-body">
                          <h5 className="card-title text-primary">Welcome! 🎉</h5>
                          <h2>I'm Sourav Saha</h2>
                          <h6>CodeIgniter | Laravel | React JS</h6>
                          <p>
                          Right now I'm working in <a href="https://mpsinfoservices.com/" target="_blank">MPS InfoServices</a> , a Web and App Design and Development Company situated in Salt lake city Sector 1, Kolkata since two year. Here I am working in php, Core PHP , PHP frameworks like codeigniter , Laravel , CMS like wordpress, html. css , Javascript , JQuery ,Ajax.
                          <span className="text-danger"> Recently finished one project with React JS as FrontEnd and Laravel as Backend.</span> To know more about me <Link to="/about">Click here</Link>.
                          </p>
                          <a href="https://drive.google.com/file/d/1B3uhBRiQGCmB6OYL-yGAEqU8ff9eYm3S/view?usp=sharing" target="_blank" className="btn btn-success text-white rounded-pill d-flex justify-content-center">View C.V</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
        </>
    );
}

export default Home;
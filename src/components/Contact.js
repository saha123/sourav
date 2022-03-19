import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from './includes/LeftSidebar';
import NavBar from './includes/NavBar';

const Contact = () => {

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

          <LeftSidebar tab="contact"/>
        
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
                          <h5 className="card-title text-primary">Contact Me</h5>
                          <h6>Feel free to call or email me</h6>
                         
                          <div className="card">
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <th>Mobile</th>
                        <td>+91 9547910980</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>souravsaha964@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

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

export default Contact;
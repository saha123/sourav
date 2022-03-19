import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from './includes/LeftSidebar';
import NavBar from './includes/NavBar';

const About = () => {

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

          <LeftSidebar tab="about"/>
        
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
                          <h5 className="card-title text-primary">About Me</h5>

                          <h5>Technical Skills</h5>

                          <div className="card">
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <tbody className="table-border-bottom-0">
                      <tr>
                        <th>Language</th>
                        <td>PHP , Javascript</td>
                      </tr>
                      <tr>
                        <th>Frameworks</th>
                        <td>CodeIgniter , Laravel</td>
                      </tr>
                      <tr>
                        <th>CMS</th>
                        <td>Wordpress</td>
                      </tr>
                      <tr>
                        <th>Library</th>
                        <td>React JS</td>
                      </tr>
                      <tr>
                        <th>Database</th>
                        <td>Mysqli</td>
                      </tr>
                      <tr>
                        <th>Other Technologies</th>
                        <td>ES6 , HTML , CSS , jQuery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
                          
                          <h5>Academic Qualifications</h5>
                          <ul>
                              <li>B.Tech in Computer Science from Jalpaiguri Government Engineering College , 2017 ( 8.32 / 10 )</li>
                              <li>12th under West Bengal Board Of Secondary Education</li>
                              <li>10th under West Bengal Council of Higher Secondary Education</li>
                          </ul>

                          <h5>Personal Details</h5>
                          <ul>
                              <li>Date Of Birth - 24th February 1994</li>
                              <li>Nationality - Indian</li>
                              <li>Address - New Circular Road , Jalpaiguri , West Bengal</li>
                              <li>Language - Bengali , English , Hindi</li>
                              <li>Strong Point - Patience, Flexible, Self motivated.</li>
                              <li>Hobbies - Meditation, Reading and Watching videos on Vedanta, Gita.</li>
                          </ul>
                         
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

export default About;
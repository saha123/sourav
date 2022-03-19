import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from './includes/LeftSidebar';
import NavBar from './includes/NavBar';

const Project = () => {

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

          <LeftSidebar tab="projects"/>
        
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
                          <h5 className="card-title text-primary">My Projects</h5>

                          <h5><i class="fa-solid fa-building"></i> Organization : <span className="text-success">Mps InfoServices</span></h5>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE FOR AN INSURANCE COMPANY USING LARAVEL
FRAMEWORK
</h6>
                          <ul>
                              <li>Link : <a href="http://skynetserve.co.in/dev/" target="_blank">www.skynetserve.co.in/dev</a></li>
                              <li>Description : This is website for an Insurance Company. There are four admins
Super admin , Admin , Partner , Back office. This project is onging. Super admin can assign
Admins in different territories. Each admin have some partner and back office working
under him. Super admin can assign partners to a particular admin and add privileges like add
mis edit mis delete mis , add business etc to either admin or partner or back office.
Depending on the privileges given by super admin , each admin can give to its partner as
well as back office. Each partner’s no of mis and business will be shown to admin as well as
super admin. An admin can be given charge of two or more than two territories. Super admin
can give this privilege. For more details you can visit the link</li>
<li>Status : <span className="text-danger">Ongoing</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A MULTI VENDOR WEBSITE USING REACT JS AS FRONTEND AND LARAVEL AS BACKEND</h6>
                          <ul>
                              <li>Link : <a href="https://mpsinfoservices.com/belux_react/" target="_blank">www.mpsinfoservices.com/belux_react</a></li>
                              <li>Description : Different types of vendor can register and add their services.
                                  Customer can register and order these services. I've used Laravel Sanctum authentication system for authenticating the
                                  users. Here mainly three type of users 1. Admin 2. Vendors 3. Customers. For payment gateway Stripe Payment Gateway has
                                  been used. Its going to be live soon.
                              </li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE FOR A CONSTRUCTION COMPANY USING CODEIGNITER FRAMEWORK</h6>
                          <ul>
                              <li>Link : <a href="https://abciinfra.com/" target="_blank">www.abciinfra.com</a></li>
                              <li>Description : This website has been made using codeigniter framework. Here, Header
is dynamic. Admin can add/edit/delete menu, submenu from the admin panel. Admin can add
different clients as well as different projects corresponding to it as per his/her choice. Admin can
add/edit/delete job vacancies as per his/her choice. You can visit the link to look over to the
project</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING AN ECOMMERCE WEBSITE USING
WORDPRESS CMS</h6>
                          <ul>
                              <li>Link : <a href="https://riverdene.in/" target="_blank">www.riverdene.in</a></li>
                              <li>Description : This website has been made using wordpress CMS. Here, I have used
woocommerce plugin to make this website. No payment gateway has been used only cash on
delivery is there. You can visit the link to look over to the project
project.</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE USING CODEIGNITER
FRAMEWORK
</h6>
                          <ul>
                              <li>Link : <a href="https://engineerschamber.com/" target="_blank">www.engineerschamber.com</a></li>
                              <li>Description : This website has been made using codeigniter framework. Here, the
users having nor not having experience can make their own profile. All the user’s details show
on the website. The employers can hire the users form this site. You can visit the link to look
over to the project
project.</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING AN ECOMMERCE WEBSITE USING
LARAVEL FRAMEWORK
</h6>
                          <ul>
                              <li>Link : <span className="text-primary">Unavailable</span></li>
                              <li>Description : <br/>
                              <span className="text-primary">About Front End : </span><br/> Customers have to register first. After that they can login into their account. Navbar is
dynamic and it contents the category and subcategory names with the respective links. By
clicking on various products customers can see the product description. They can add the
products to cart. Also change the product quantity from the cart. The product checkout page
consists of two ways to place the order. One way is Cash on delivery and other way is through
payment gateway. I have used Razorpay payment gateway. <br/>
<span className="text-primary">About Back End :</span><br/>
It has the following options.<br/>
1. Dashboard - admin can look sales report of each and every month as well as the no of COD and order
through payment gateway of each day.<br/>
2. Banner Management - admin can manage banner section of thewebsite.<br/>
3. Order Management - admin can see theorders.<br/>
4. Product Review - admin can see reviews ofcustomers.<br/>
5. Category - admin can add product category.<br/>
6. Coupon Management - admin can manage coupon.<br/>
7. Size Management - admin can manage size of the variousproducts.<br/>
8. Color Management - admin can manage color of the variousproducts.<br/>
9. Product Management - admin can add products name , slug , description as well as various images ,
product attributes.<br/>
10. Tax Management - admin can add tax value , taxdescription.<br/>
11. Brand Management - admin can manage variousbrands.

                              </li>
                              <li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE USING WORDPRESS CMS
</h6>
                          <ul>
                              <li>Link : <a href="https://shoppingforsoldiers.org/" target="_blank">www.shoppingforsoldiers.org</a></li>
                              <li>Description : Shopping For Soldiers is an NGO in the United States. For more
details you can visit the link</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE FOR A LEADING
DISTRIBUTION HOUSE OF FOOD INGREDIENTS USING CORE PHP
</h6>
                          <ul>
                              <li>Link : <a href="http://www.mohanimpex.com/" target="_blank">www.mohanimpex.com</a></li>
                              <li>Description : This is a website for a leading distribution house of food
ingredients. Buyers can order different types of food ingredients from this website</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE FOR A SOFT SKILLS AND CORPORATE
TRAINING COMPANY USING CORE PHP
</h6>
                          <ul>
                              <li>Link : <a href="http://www.theiitm.com/" target="_blank">www.theiitm.com</a></li>
                              <li>Description : This is a website for a soft skill and corporate training company.
For more details you can visit the link</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE FOR A MANUFACTURING COMPANY
USING CORE PHP
</h6>
                          <ul>
                              <li>Link : <a href="http://wesman.com/" target="_blank">www.wesman.com</a></li>
                              <li>Description : This is a website for a manufacturing company. All the products
manufactures by this company can be managed from the admin panel. For more details you
can visit the link</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A JOB SEEKING WEBSITE USING CODEIGNITER FRAMEWORK
</h6>
                          <ul>
                              <li>Link : <a href="https://jobsncareers.net/" target="_blank">www.jobsncareers.net</a></li>
                              <li>Description : This is a job seeking website. The Recruiters can post different job
vacancies of their organization. The job seekers can apply to different jobs. For more
details you can visit the link</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE FOR A WINE CLUB USING CORE PHP
</h6>
                          <ul>
                              <li>Link : <a href="https://www.calcuttawineclub.com/" target="_blank">www.calcuttawineclub.com</a></li>
                              <li>Description : This is website for a wine club. The Different types of events and
wines can be managed from the admin panel. For more details you can visit the link</li>
<li>Status : <span className="text-success">Completed</span></li>
                          </ul>

                          <h6><i class="fa-solid fa-arrow-right"></i> PROJECT NAME : MAKING A WEBSITE FOR A FINALCIAL SERVICES COMPANY USING
LARAVEL FRAMEWORK
</h6>
                          <ul>
                              <li>Link : <a href="https://taxurban.com/" target="_blank">www.taxurban.com</a></li>
                              <li>Description : This is website for a Financial Services Company. User can book the
services offered by this company. All the services are render on services page. Admin can
add different blogs from the admin panel. Users can navigate to different blogs through next
and previous button and comment also. Facebook sharing button has also been added by
which the blogs can be shared in facebook. For more details you can visit the link</li>
<li>Status : <span className="text-success">Completed</span></li>
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

export default Project;
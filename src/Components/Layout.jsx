import React from "react";
import Navbar from "./Navbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      {/* <div className='container-fluid'>
            <div className='col-12'>
                <div className="row">
                    <Navbar/>
                </div>
            </div>
        </div> */}
      <div className="container-fluid h-100">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

import { faDiscourse } from '@fortawesome/free-brands-svg-icons';
import { faBookReader, faChartBar, faCoffee, faLayerGroup, faSignOutAlt, faSpinner, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="container sidebar-container" >
            <div className=" text-center text-primary">
            <h3 className="mt-5">DASHBOARD</h3>
            </div>
            <div className="mt-5 dashboard-content">
                <div className="logo d-flex">
                <FontAwesomeIcon className="ms-5 fs-4  text-info" icon={faLayerGroup} />
                <h5 className="ms-3">Dashboard</h5>
                </div>
                <div className="logo d-flex mt-5">
                <FontAwesomeIcon className="ms-5 fs-4 text-info" icon={faBookReader} />
                <h5 className="ms-3">Upcoming Lesson</h5>
                </div>
                <div className="logo d-flex mt-5">
                <FontAwesomeIcon className="ms-5 fs-4 text-info" icon={faTasks} />
                <h5 className="ms-3">Task Tab</h5>
                </div>
                <div className="logo d-flex mt-5">
                <FontAwesomeIcon className="ms-5 fs-4 text-info" icon={faDiscourse} />
                <h5 className="ms-3">My Courses</h5>
                </div>
                <div className="logo d-flex mt-5">
                <FontAwesomeIcon className="ms-5 fs-4 text-info" icon={faChartBar} />
                <h5 className="ms-3">Analytics</h5>
                </div>
                <div className="logo d-flex mt-5">
                <FontAwesomeIcon className="ms-5 fs-4 text-info" icon={faSpinner} />
                <h5 className="ms-3">Progress</h5>
                </div>
                <div className="logo d-flex mt-5">
                <FontAwesomeIcon className="ms-5 fs-4 text-info" icon={faSignOutAlt} />
                <h5 className="ms-3">Logout</h5>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
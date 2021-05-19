import React from 'react';
import Analytics from '../Analytics/Analytics';
import Card from '../Card/Card';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import Progress from '../Progress/Progress';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="row container-fluid">
            <div className="col-md-3 sidebar">
                 <Sidebar></Sidebar>
            </div>
            {/* dashboard */}
            <div className="col-md-6 ms-5 dashboard-content">
            <div className="mt-2 student-information d-flex p-3">
                <div className="ms-3">
                    <img className="profile-pic" src="https://avatars.githubusercontent.com/u/60176620?v=4" alt="" />
                </div>
                <div className="ms-3 mt-2 student-name">
                    <h2><span className="text-warning">Farhan Ahmed's</span> Dashboard</h2>
                </div>
            </div>
            <Card></Card>
            <div className="d-flex mt-5">
                <div>
                <Analytics></Analytics>
                </div>
                <div className="ms-md-5">
                    <LeaderBoard></LeaderBoard>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
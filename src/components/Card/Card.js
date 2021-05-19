import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div>
            <div className="card-container">
                <div className="">
                    <h5 className="mt-3">Upcoming Lesson</h5>
                    <div className="d-flex mt-3">
                    <div className="col-md-4 card-bg p-2 rounded">
                        <p>Class No: 12</p>
                        <h4>React Routing</h4>
                        <p><small>By Jhankar Mahbub</small></p>
                    </div>
                    <div className="col-md-4 ms-3  card-bg p-2 rounded">
                        <p>Class No: 12</p>
                        <h4>React Routing</h4>
                        <p><small>By Jhankar Mahbub</small></p>
                    </div>
                    <div className="col-md-4 ms-3  card-bg p-2 rounded">
                        <p>Class No: 12</p>
                        <h4>React Routing</h4>
                        <p><small>By Jhankar Mahbub</small></p>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Card;
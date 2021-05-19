import React from 'react';

const LeaderBoard = () => {
    return (
        <div>
            <div className="">
                <h4 className="mb-3 bg-success p-2 text-white rounded">Leader Board</h4>
                <div className="text-center">
                 <div className="leader1 ">
                    <img className="profile-pic" src="https://avatars.githubusercontent.com/u/60176620?v=4" alt="" />
                    
                    <h5 className="mt-3">Farhan Ahmed</h5>
                 </div>
                 <div className="leader1">
                    <img className="profile-pic mt-2" src="https://avatars.githubusercontent.com/u/60176620?v=4" alt="" />
                    <h5 className="mt-3">Farhan Ahmed</h5>
                 </div>
                 <div className="leader1">
                    <img className="profile-pic mt-3" src="https://avatars.githubusercontent.com/u/60176620?v=4" alt="" />
                    <h5 className="mt-3">Farhan Ahmed</h5>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;
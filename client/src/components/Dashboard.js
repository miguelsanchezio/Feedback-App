import React from 'react';
import { Link }  from 'react-router-dom';
import SurveyList from './surveys/SurveyList';


const Dashboard = () => {
    return <div>
            <SurveyList />
            <div>
                <Link to="/surveys/new" className="fixed-action-btn">
                    New Survey<i className="fa fa-plus-circle" />
                </Link>
            </div>
        </div>;
};

export default Dashboard;
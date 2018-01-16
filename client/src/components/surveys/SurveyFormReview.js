import React from 'react';
import { connect }  from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label className='form-label'>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    })

    return <div className="form-container">
            <div className="entries">
                <h3>Comfirm your entries</h3>
                {reviewFields}
            </div>
            <button className="button cancel" onClick={onCancel}>
                Back
            </button>
            <button className="button next" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
            </button>
        </div>;
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
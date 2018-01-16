import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return <div className="card" key={survey._id}>
                    <div className="card-divider">
                        <h3 className="card-title">
                            {survey.title}
                        </h3>
                    </div>
                    <div className="card-section">
                        <p>{survey.body}</p>
                        <p className="date">
                            Sent On:{' '}
                            {new Date(
                                survey.dateSent
                            ).toLocaleDateString()}
                        </p>
                        <span className="label success">
                            Yes: {survey.yes}
                        </span>
                        <span className="label alert">
                            No: {survey.no}
                        </span>
                    </div>
                </div>;
        })
    }

    render() {
        return(
            <div className='grid-container'>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
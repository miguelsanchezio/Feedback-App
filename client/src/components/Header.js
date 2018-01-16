import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';
import Payments from './Payments'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                );
            default:
                return [
                    <li key="1">
                        <Payments />
                    </li>,
                    <li key="2" className="credits">
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="3">
                        <a href="/api/logout">Logout</a>
                    </li>
                ];
        }
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="">
                        <i className='fa fa-envelope'></i>
                        YorN
                    </Link>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">{this.renderContent()}</ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
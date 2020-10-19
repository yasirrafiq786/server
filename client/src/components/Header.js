import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google" className="waves-effect waves-light btn red">
              Login With Google<i class="material-icons right">send</i>
            </a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <Payments />
            </li>
            <li style={{margin: '0 10px'}}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/api/logout">Log Out</a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <nav>
        <div
          className="nav-wrapper blue darken-4"
          style={{fontFamily: 'Poppins'}}
        >
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo hide-on-small-only"
            style={{fontFamily: 'Pacifico'}}
          >
            <i
              className="material-icons"
              style={{marginRight: '2px', fontSize: '40px'}}
            >
              assignment
            </i>
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Header);

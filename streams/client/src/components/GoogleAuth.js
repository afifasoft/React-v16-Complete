import React, { Component } from 'react';

class GoogleAuth extends Component {

  componentDidMount() {

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({

        clientId: '564012691152-mfadgrurg8c9dlr6bnmgknqbjnnn0dmr.apps.googleusercontent.com',
        scope : 'email'

      });
    });

  }

  render() {
    return (
      <div>Google Auth</div>
    );
  }
};

export default GoogleAuth;

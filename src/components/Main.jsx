require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'fHidd'
    }

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({title: 'changed'});
  }

  render() {
    return (
      <div className="wraper" >
        <h1>{this.state.title}</h1>
        <button onClick={this.buttonClickHandler} >click!</button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

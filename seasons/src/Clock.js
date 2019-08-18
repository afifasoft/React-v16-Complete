import React from 'react'

class Clock extends React.Component {

  state = { time: new Date().toLocaleTimeString('en-US') };

  componentDidMount() {
    setInterval(() => {
      this.setState({
          time: new Date().toLocaleTimeString('en-US')
        });
      }, 1000);
  }

  render() {
    return (
      <div className="time">
        The time is: {this.state.time}
      </div>
    );
  };

}

export default Clock;

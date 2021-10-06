import React from 'react'

class Clock extends React.Component<any, any> {
  timerId: number;

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
    }
    this.timerId = 0;
  }

  componentDidMount() {
    this.timerId = window.setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return ( 
            <div> 
              <h2>Now is  {this.state.date.toLocaleTimeString()}</h2>
            </div>
          )
  }
}
  export default Clock;
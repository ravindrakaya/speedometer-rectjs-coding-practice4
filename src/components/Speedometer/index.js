// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : null,
    )
  }

  onDecrement = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : null,
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speed-block">Speed is {count}mph</h1>
        <p className="paragraph">Min limit is 0mph, Max limit is 200mph</p>
        <div className="button-container">
          <button
            className="button acc-btn"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="button brake-btn"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer

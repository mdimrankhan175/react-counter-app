import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onReset = () => {
    this.setState(prevState => {
      return {count: prevState.count * 0}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state

    const getColor = () => {
      if (count === 0) {
        return 'orange'
      } else if (count < 0) {
        return 'red'
      } else {
        return 'green'
      }
    }

    return (
      <div className="container">
        <div className="counter-card">
          <h1 className="heading">COUNTER</h1>
          <p style={{color: getColor()}} className="count">
            {count}
          </p>
          <div>
            <button onClick={this.onIncrement} className="button">
              Increase
            </button>
            <button onClick={this.onReset} className="button">
              Reset
            </button>
            <button onClick={this.onDecrement} className="button">
              Decrease
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter

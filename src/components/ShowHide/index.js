import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isJoe: false,
  }

  state = {
    isJonas: false,
  }

  joeCall = () => {
    // const {isJoe} = this.state

    this.setState(prevState => ({isJoe: !prevState.isJoe}))
  }

  jonasCall = () => {
    // const {isJonas} = this.state

    this.setState(prevState => ({isJonas: !prevState.isJonas}))
  }

  render() {
    const {isJoe} = this.state
    const {isJonas} = this.state

    const joebox = isJoe ? 'show-hide-box' : 'display-none-box'

    const jonasbox = isJonas ? 'show-hide-box' : 'display-none-box'

    return (
      <div className="bg-container">
        <div className="show-hide-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div>
              <div>
                <button className="button" onClick={this.joeCall} type="button">
                  Show/Hide Firstname
                </button>
              </div>

              <div>
                <div className={`${joebox}`}>
                  <p>Joe</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <button
                  className="button"
                  onClick={this.jonasCall}
                  type="button"
                >
                  Show/Hide Lastname
                </button>
              </div>

              <div className={`${jonasbox}`}>
                <p>Jonas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

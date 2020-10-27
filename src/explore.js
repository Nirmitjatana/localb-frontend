import React from 'react';
import location from './Assets/location.png'

class Explore extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {
      }
      render() {
        return(
          <div className="explore">
              <h1>You are in Patiala</h1>
              <button className="change">
                <span>
                  <img src={location} alt="location" className="location"/>
                </span>
                Change location
              </button>
              <h2>Near You</h2>
          </div>
              )
      }
}
export default Explore;
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
              <h4 className="subtext">Find and explore local businesses near you.</h4>
              <div className="search">
                searchbox
              </div>
              <h2>All Listings</h2>
              <h4 className="subtext">Find the local business you are looking for.</h4>
              <div className="search">
                searchbox
              </div>
          </div>
              )
      }
}
export default Explore;
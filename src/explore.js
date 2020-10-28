import React from 'react';
import location from './Assets/location.png'
import sample from './Assets/sample.png'

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
                <input type="text" placeholder="Search" name="Search1" className="searchbox"/>
              </div>
              <div className="cards">
              <div className="card">
                <img src={sample} alt="businessimage" className="image"/>
                <div>
                <h1 className="businesshead">Cooper's kitchen</h1>
                <h4 className="typetext">Restaurant</h4>
                <h6 className="subtitle">An authentic fine-dining restaurant serving variations of North-American fast food</h6>
                </div>
              </div>
              <div className="card">
                <img src={sample} alt="businessimage" className="image"/>
                <div>
                <h1 className="businesshead">Cooper's kitchen</h1>
                <h4 className="typetext">Restaurant</h4>
                <h6 className="subtitle">An authentic fine-dining restaurant serving variations of North-American fast food</h6>
                </div>
              </div>
              <div className="card">
                <img src={sample} alt="businessimage" className="image"/>
                <div>
                <h1 className="businesshead">Cooper's kitchen</h1>
                <h4 className="typetext">Restaurant</h4>
                <h6 className="subtitle">An authentic fine-dining restaurant serving variations of North-American fast food</h6>
                </div>
              </div>
              <div className="card">
                <img src={sample} alt="businessimage" className="image"/>
                <div>
                <h1 className="businesshead">Cooper's kitchen</h1>
                <h4 className="typetext">Restaurant</h4>
                <h6 className="subtitle">An authentic fine-dining restaurant serving variations of North-American fast food</h6>
                </div>
              </div>
              </div>
              <h2>All Listings</h2>
              <h4 className="subtext">Find the local business you are looking for.</h4>
              <div className="search">
              <input type="text" placeholder="Search" name="Search2" className="searchbox"/>
              </div>
              <div className="cards">
              <div className="card">
                <img src={sample} alt="businessimage" className="image"/>
                <div>
                <h1 className="businesshead">Cooper's kitchen</h1>
                <h4 className="typetext">Restaurant</h4>
                <h6 className="subtitle">An authentic fine-dining restaurant serving variations of North-American fast food</h6>
                </div>
              </div>
              <div className="card">
                <img src={sample} alt="businessimage" className="image"/>
                <div>
                <h1 className="businesshead">Cooper's kitchen</h1>
                <h4 className="typetext">Restaurant</h4>
                <h6 className="subtitle">An authentic fine-dining restaurant serving variations of North-American fast food</h6>
                </div>
              </div>
              <div className="card">
                <img src={sample} alt="businessimage" className="image"/>
                <div>
                <h1 className="businesshead">Cooper's kitchen</h1>
                <h4 className="typetext">Restaurant</h4>
                <h6 className="subtitle">An authentic fine-dining restaurant serving variations of North-American fast food</h6>
                </div>
              </div>
              <div className="card">
                <img src={sample} alt="businessimage" className="image"/>
                <div>
                <h1 className="businesshead">Cooper's kitchen</h1>
                <h4 className="typetext">Restaurant</h4>
                <h6 className="subtitle">An authentic fine-dining restaurant serving variations of North-American fast food</h6>
                </div>
              </div>
              </div>
          </div>
              )
      }
}
export default Explore;
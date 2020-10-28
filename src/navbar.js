import React from 'react';
import logo from './Assets/logo.png';
import plus from './Assets/plus.png';
import home from './Assets/home.png';
import explore from './Assets/explore.png';
import faq from './Assets/faq.png';
class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {
      }
      render() {
        return(
          <div className="navbar">
              <img src={logo} alt="logo" className="logo"/>
              <div className="options">
                  <div className="tab">
                      <table>
                      <tbody>
                      <tr>
                        <td>
                            <img src={home} alt="logo" className="icon"/>
                        </td>
                        <td>
                            <h3>Home</h3>
                            <h6 className="subtitle">Learn about using Locale to list and help out a local business </h6>
                        </td>
                      </tr>
                      </tbody>
                      </table>
                      
                  </div>
                  <div className="tab-active">
                  <table>
                  <tbody>
                      <tr>
                        <td>
                            <img src={explore} alt="logo" className="icon"/>
                        </td>
                        <td>
                            <h3>Explore</h3>
                            <h6 className="subtitle">Check out the local business lisitings around your area</h6>
                        </td>
                      </tr>
                      </tbody>
                      </table>
                      
                  </div>
                  <div className="tab">
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <img src={faq} alt="logo" className="icon"/>
                                </td>
                                <td>
                                    <h3>FAQs</h3>
                                    <h6 className="subtitle">The most frequently-asked questions answered by the devs</h6>
                                </td>
                            </tr>
                            </tbody>
                      </table>

                  </div>
              </div>
              <button className="addbutton">
                  <span>
                  <img src={plus} alt="logo" className="plus"/>
                  </span>
                  Add a local business
              </button>
          </div>
              )
      }
}
export default Navbar;
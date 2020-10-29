import React from 'react';
import pen from './Assets/pen.png';
import mark from './Assets/mark.png';

class Add extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {
      }
      render() {
        return(
          <div className="add">
            <h1>Add a Local Business</h1>
            <h4 className="subtext1">Fill out the information below about the local business you want to list on Locale. This information cannot be edited later.</h4>
            <br/>
            <br/>
            <br/>
            <form>
              <div className="flex2">
                <div>
                  <input type="file" className="upload" name="img" accept="image/*" id="actual-btn" hidden required/>
                  <label for="actual-btn" className="up">
                    <img src={pen} alt="pen" className="pen"/>
                  </label>
                </div>
                <div style={{marginLeft:"20px"}}>
                  <h4 className="light-text">Upload Image <span style={{color:"red"}}>*</span></h4>
                  <h6 className="subtitle1">The dimensions should be 1080x1080px with 1:1 aspect ratio.</h6>
                </div>
              </div>
              <h2>Business Information</h2>
              <h6 className="subtitle1">Enter the details of the local business that you want to list on this platform.</h6>
              <label for="Name">Name</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text" name="Name" id="Name" className="text-input" placeholder="Enter the registered name of the business" required/>
              <br/>
              <br/>
              <br/>
              <label for="Number">Phone Number</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text" name="Number" id="Number" className="text-input" placeholder="Enter the phone number" required/>
              <br/>
              <br/>
              <br/>
              <label for="Description">Description</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text-area" name="Description" id="Description" className="text-des" placeholder="Enter a short description of the business" required/>
              <br/>
              <br/>
              <br/>
              <label for="type">Type</label><span style={{color:"red"}}>*</span>
              <br/>
              <select name="type" id="type" className="dropdown">
                <option value="food">Food</option>
                <option value="clothing">Clothing</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <br/>
              <br/>
              <br/>
              <label for="location">Location</label><span style={{color:"red"}}>*</span>
              <br/>
              {/* <span> */}
              <input type="text" name="location" id="location" className="text-input" placeholder="Enter location"/>
              <span style={{color:"grey",padding:"20px"}}>or</span>
              <button className="change">
                <span>
                  <img src={mark} alt="location" className="plus"/>
                </span>
                Change location
              </button>
              <br/>
              <br/>
              <br/>
              <h1>Contact Information</h1>
              <h4 className="subtext1">Enter your personal details for verification. These details will not be mentioned in the listing.</h4>
              <label for="Namep">Name</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text" name="Namep" id="Namep" className="text-input" placeholder="Enter your full name" required/>
              <br/>
              <br/>
              <br/>
              <label for="Numberp">Phone Number</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text" name="Numberp" id="Numberp" className="text-input" placeholder="Enter your phone number" required/>
              <br/>
              <br/>
              <br/>
              <label for="email">Email</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text" name="email" id="email" className="text-input" placeholder="Enter your email address" required/>
              <br/>
              <br/>
              <br/>
              <h1>Social Media Reference</h1>
              <h4 className="subtext1">Enter the details of the social media reference you saw that made you add this business to our platform.</h4>
              <label for="Name">Name</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text" name="Name" id="Name" className="text-input" placeholder="Enter the registered name of the business" required/>
              <br/>
              <br/>
              <br/>
              <label for="Number">Phone Number</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text" name="Number" id="Number" className="text-input" placeholder="Enter the phone number" required/>
              <br/>
              <br/>
              <br/>
              <label for="Description">Description</label><span style={{color:"red"}}>*</span>
              <br/>
              <input type="text-area" name="Description" id="Description" className="text-des" placeholder="Enter a short description of the business" required/>
              <br/>
              <br/>
              <br/>
              {/* </span> */}
            </form>
          </div>
              )
      }
}
export default Add;
import { Component } from "react";
import './form.css';

class FormsClass extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: ""
        };
      }
    
      resetData() {
        this.setState({ data: "" });
      }
    
      render() {
        return (
          <div className="container">
            <div className="content">
              <input
                type="text"
                id="enter"
                value={this.state.data}
                onChange={(e) => this.setState({ data: e.target.value })}
              />
              <button id="clear" onClick={() => this.resetData()}>Reset</button>
            </div>
            <p>Output: <span id="result">{this.state.data}</span></p>
          </div>
        );
      }
}

export default FormsClass;
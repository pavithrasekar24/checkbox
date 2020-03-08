import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBranch: [],
      branch: [{ bName: "velachery", bId: 1 }, { bName: "vijayaNagar", bId: 2 }]
    };
  }
  handleChange = (e, i) => {
    let branch = {
      ...i,
      checked: e.target.checked
    };

    this.setState({ selectedBranch: branch }, () => {
      console.log(this.state.selectedBranch);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.branch.map((i, j) => {
          return (
            <div>
              <input
                key={j}
                type="checkbox"
                name={`selectedBranch${j}`}
                value={this.state.selectedBranch}
                onChange={e => {
                  this.handleChange(e, i);
                }}
              />
              {i.bName}
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

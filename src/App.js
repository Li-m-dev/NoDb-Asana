import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Asana from "./components/Asana/Asana";
import MySequence from "./components/MySequence/MySequence";
import Header from "./components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      asana: [],
      listSwitch: false,
      asanaSearch: ""
    };
  }
  handleInput(name) {
    this.setState({ asanaSearch: name });
  }
  // handleSearch(filter) {
  //   this.setState({ asana: filter });
  // }

  render() {
    // console.log(this.state.asanaSearch);
    // let asanaToDisplay = this.state.asana
    //   .filter((element, index) => {
    //     return element.includes(this.state.asanaSearch);
    //   })
    //   .map((element, index) => {
    //     return <p key={index}>{element}</p>;
    //   });

    return (
      <div className="App">
        <Header />
        <input
          value={this.state.asanaSearch}
          placeholder="Search for poses"
          onChange={e => this.handleInput(e.target.value)}
          type="text"
        />
        {/* {asanaToDisplay} */}

        <button onClick={() => this.setState({ listSwitch: false })}>
          Home
        </button>
        <button onClick={() => this.setState({ listSwitch: true })}>
          My Sequence
        </button>

        {this.state.listSwitch ? (
          <MySequence />
        ) : (
          <Asana searchTerm={this.state.asanaSearch} />
        )}
      </div>
    );
  }

  // componentDidMount() {
  //   axios
  //     .get("/api/asana")
  //     .then(response => {
  //       console.log(response);
  //       this.setState({
  //         asana: response.data
  //       });
  //     })
  //     .catch(console.log);
  // }

  // render() {
  //   const { asana } = this.state;
  //   let mapAsana = asana.map((element, index) => {
  //     return (
  //       <div className="App">
  //         <h1> Basic Yoga Poses </h1>
  //         <Asana
  //           englishName={element.english_name}
  //           sanskritName={element.sanskrit_name}
  //           imgUrl={element.img_url}
  //           key={index}
  //           buttonName={this.state.buttonName}
  //         />
  //       </div>
  //     );
  //   });

  //   return mapAsana;
  // }
}
export default App;

import React, { Component } from "react";
import axios from "axios";
import "./Asana.css";

class Asana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asana: []
    };
    this.addToMySequence = this.addToMySequence.bind(this);
  }
  // handleSearch(filter) {
  //   this.setState({ asana: filter });
  // }

  componentDidMount() {
    axios
      .get("/api/asana")
      .then(response => {
        // console.log(response);
        this.setState({
          asana: response.data
        });
      })
      .catch(console.log);
  }

  addToMySequence(id, element) {
    console.log("id:", id);
    axios.post(`/api/mySequence/${id}`, { element }).then(res => {
      console.log(res.data);
    });
  }

  render() {
    // console.log(this.state.asanaSearch);
    let asanaToDisplay = this.state.asana
      .filter((element, index) => {
        // console.log(element.english_name);
        if (element.english_name.includes(this.props.searchTerm)) {
          return element;
        }
      })
      .map((element, index) => {
        return (
          <div key={index} className="container">
            <span className="pose-container">
              {element.english_name}
              {element.sanskrit_name}
              <img src={element.img_url} alt="poses" />
              <button
                className="addBtn"
                onClick={() => this.addToMySequence(element.id, element)}
              >
                {" "}
                Add to my sequence{" "}
              </button>
            </span>
          </div>
        );
      });
    // console.log("look here, is it zero?", asanaToDisplay);

    // console.log("the search term from Nav: ", this.props.searchTerm);
    const { asana } = this.state;
    let mapAsana = asana.map((element, index) => {
      return (
        <div key={index} className="container">
          <div className="pose-container">
            <p>{element.english_name}</p>
            <p>{element.sanskrit_name}</p>
            <img src={element.img_url} alt="poses" />
            <button
              className="addBtn"
              onClick={() => this.addToMySequence(element.id, element)}
            >
              {" "}
              Add to my sequence{" "}
            </button>
          </div>
        </div>
        //--------------------Shea and Steven's way------------
        //   <div>
        //     <p>{this.props.englishName}</p>
        //     <p>{this.props.sanskritName}</p>
        //     <img src={this.props.imgUrl} />
        //     <button> {this.props.buttonName} </button>
        //   </div>
        //-----------------------------------------------
      );
    });
    return (
      <div>{this.props.searchTerm === "" ? mapAsana : asanaToDisplay}</div>
    );
  }
}

export default Asana;

/*
1)import dependencies
2)make class component
3)render component you want to see for each asana
4)pass down data from App.js to Asana.js as props
5)go back to App.js specify what you want to pass down as props
*/

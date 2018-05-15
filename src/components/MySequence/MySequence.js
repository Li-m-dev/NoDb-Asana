import React, { Component } from "react";
import axios from "axios";
import "./MySequence.css";
// import Edit from "../../components/Edit/Edit";

class MySequence extends Component {
  constructor() {
    super();

    this.state = {
      poseList: [],
      id: "",
      notes: ""
    };
    //   this.addToMySequence = this.addToMySequence.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateMyPoseName = this.updateMyPoseName.bind(this);
  }

  componentDidMount() {
    axios.get("/api/mySequence").then(results => {
      this.setState({ poseList: results.data });
      console.log(results.data.element);
    });
  }

  updateMyPoseName(id) {
    axios
      .put(`/api/mySequence/${id}`, { notes: this.state.notes })
      .then(res => {
        console.log(res.data);
        this.setState({ poseList: res.data });
      });
  }

  deleteAsana(id) {
    axios
      .delete(`/api/mySequence/${id}`)
      .then(result => {
        console.log(result.data, id);

        this.setState({ poseList: result.data });
      })
      .catch(err => console.log(err));
  }

  handleInput(e) {
    // console.log("e from input", e);
    console.log(this.state.notes);
    this.setState({
      notes: e.target.value
    });
  }

  render() {
    const { poseList } = this.state;
    // console.log(`LOOK HERE`, poseList);
    const myPoseList = poseList.map((element, i) => {
      return (
        <div className="mySeq" key={i}>
          <p>{element.element.english_name}</p>
          <p>{element.element.sanskrit_name}</p>
          <img src={element.element.img_url} alt="poses" />
          <button
            className="dltBtn"
            onClick={() => this.deleteAsana(element.element.id)}
          >
            {" "}
            Delete
          </button>
          {/* <Edit updateNotes={this.state.notes}/> */}
          <p className="note-box"> Add Notes:{element.notes}</p>
          <input
            onChange={e => {
              this.handleInput(e);
            }}
          />
          <button
            className="editBtn"
            onClick={() => this.updateMyPoseName(element.element.id)}
          >
            {" "}
            Edit
          </button>
        </div>
      );
    });
    return <div> {myPoseList}</div>;
  }
}

export default MySequence;

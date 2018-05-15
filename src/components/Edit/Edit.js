import React from "react";

export default function Edit(props) {
  return (
    <div>
      <input
        className="edit-box"
        onChange={e => this.handleInput(e.target.value)}
      />
    </div>
  );
}

//onChange={e => this.handleInput(e.target.value)}

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Form from "./Form.js";

function App() {
  const [members, setMembers] = useState([]);
  const [edit, setEdit] = useState({ action: "create", index: 0 });

  return (
    <div>
      <Form
        members={members}
        setMembers={setMembers}
        edit={edit}
        setEdit={setEdit}
      />
     
      {members.map((member, index) => {
        return (
          <div key={index}>
            <p>{index}</p>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <button onClick={() => setEdit({ action: "edit", index: index })}>
              Edit?
            </button>
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

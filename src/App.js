import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { TextField, Button } from "@mui/material";
import Todo from "./components/Todo";
import { db } from "./firebase.js";
import Logo from "./assets/theoneFROG.svg";
import "./App.css";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        })),
      );
    });
  }, [input]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      description: descInput,
      tag: tagInput,
      timestamp: serverTimestamp(),
    });
    setInput("");
    setDescInput("");
    setTagInput("");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="grid place-items-center bg-opacity-0">
        <img src={Logo} alt="Logo of Frog" className="h-40 w-42"></img>
        <h1 className="text-5xl text-orange-600">Froggy</h1>
        <form className="mt-10 bg-opacity-95">
          <TextField
            className="matrix rounded-xl"
            id="outline-basic"
            label="New To-Do"
            variant="outlined"
            style={{ margin: "0 5px" }}
            size="small"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <TextField
            className="matrix"
            id="desc-input"
            label="Notes"
            variant="outlined"
            style={{ margin: "0 5px" }}
            size="small"
            value={descInput}
            onChange={(e) => setDescInput(e.target.value)}
          />
          <TextField
            className="matrix"
            id="tag-input"
            label="#"
            variant="outlined"
            style={{ margin: "0 5px" }}
            size="small"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={addTodo}>
            Add Todo
          </Button>
        </form>
        <ul>
          {todos.map((item) => (
            <Todo key={item.id} arr={item} />
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
}

export default App;

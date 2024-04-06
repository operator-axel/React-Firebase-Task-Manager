import { useState } from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
import "../todo.css";

const Todo = ({ arr }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText
          primary={arr.item.todo}
          secondary={
            <>
              {arr.item.description || "No additional info provided"}
              <span className="tag-bubble">
                {"#" + arr.item.tag || "No tag"}
              </span>
            </>
          }
        />
      </ListItem>
      <DeleteIcon
        className="deleteIcon"
        fontSize="large"
        style={{
          opacity: 0.9,
          marginRight: "40px",
          color: isHovered ? "#b45c00" : "#ff6600",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </List>
  );
};

export default Todo;

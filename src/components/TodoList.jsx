import {
  Table,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const toggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const deleteT = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Completed</TableCell>
            <TableCell>Text</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((row) => (
            <TodoItem
              key={row.id}
              todo={row}
              toggle={toggle}
              deleteT={deleteT}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

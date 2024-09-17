import {
  Button,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export const TodoItem = ({ todo, toggle, deleteT }) => {
  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={todo.isDone} onChange={() => toggle(todo.id)} />
      </TableCell>
      <TableCell>
        <Typography
          sx={{ textDecoration: todo.isDone ? "Line-through" : "none" }}
        >
          {todo.body}
        </Typography>
      </TableCell>
      <TableCell>
        <Button onClick={() => deleteT(todo.id)} startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

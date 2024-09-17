import { Container } from "@mui/material";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

export const TodoPage = () => {
  return (
    <Container>
      <TodoForm />
      <TodoList />
    </Container>
  );
};

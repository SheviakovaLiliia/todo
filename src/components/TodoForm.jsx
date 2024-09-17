import { Button, Grid2, Paper, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { v4 } from "uuid";
import AddIcone from "@mui/icons-material/Add";

export const TodoForm = () => {
  const { handleSubmit, reset, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (val) => {
    dispatch(
      addTodo({
        body: val.todo,
        id: v4(),
        isDone: false,
      })
    );

    reset();
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mt: 4, mb: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container spacing={2} alignItems="center">
          <Controller
            name="todo"
            control={control}
            defaultValue=""
            rules={{ required: "Please input text for todo" }}
            render={({
              field: { value, onChange, ref },
              fieldState: { error },
            }) => (
              <TextField
                sx={{ width: "80%" }}
                error={Boolean(error)}
                value={value}
                inputRef={ref}
                onChange={(val) => onChange(val)}
                label="Input new todo"
                helperText={error?.message}
              ></TextField>
            )}
          />
          <Button type="submit" startIcon={<AddIcone />}>
            Add
          </Button>
        </Grid2>
      </form>
    </Paper>
  );
};

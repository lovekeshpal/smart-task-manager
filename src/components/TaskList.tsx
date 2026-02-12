import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTaskStore } from "../store/taskStore";

export default function TaskList() {
  const tasks = useTaskStore((s) => s.tasks);
  const toggleTask = useTaskStore((s) => s.toggleTask);
  const deleteTask = useTaskStore((s) => s.deleteTask);

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <ListItemText
            primary={task.title}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          />
          <IconButton onClick={() => deleteTask(task.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

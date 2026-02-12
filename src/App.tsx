import "./App.css";
import { Container, Typography } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" mt={4} mb={2}>
        Smart Task Manager
      </Typography>

      <TaskForm />
      <TaskList />
    </Container>
  );
}

export default App;

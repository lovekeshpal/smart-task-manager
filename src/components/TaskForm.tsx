import { useState } from "react";
import { useTaskStore } from "../store/taskStore";
import { Box, Button, TextField } from "@mui/material";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const addTask = useTaskStore((s) => s.addTask);

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <Box display="flex" gap={2} mb={3}>
      <TextField
        label="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
}

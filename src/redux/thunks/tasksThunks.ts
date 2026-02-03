import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDados, postTask } from "../tasksSlice"; 
import { Task } from "../../interface/types";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks`); 
    thunkAPI.dispatch(getDados(response.data)); 
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
});

export const postNewTask = createAsyncThunk("tasks/addNewTask", async (newTask: Task, thunkAPI) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tasks`, newTask);
    console.log("Tarefa adicionada com sucesso!");

    thunkAPI.dispatch(postTask(response.data));
    thunkAPI.dispatch(fetchTasks()); 
    
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
  }
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (taskId: number, thunkAPI) => {
  try {
    await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
    console.log("Tarefa deletada com sucesso!");

    thunkAPI.dispatch(fetchTasks());
    
  } catch (error) {
     console.error("Erro ao deletar tarefa:", error);
  }
});

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (updatedTask: Task, thunkAPI) => {
    try {
      await axios.put(
        `${API_BASE_URL}/tasks/${updatedTask.id}`,
        updatedTask
      );
      console.log(`Task ${updatedTask.id} updated successfully!`);

      thunkAPI.dispatch(fetchTasks()); 
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }
);

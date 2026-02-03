import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDados, postUser } from "../usersSlice";
import { User } from "../../interface/types";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    thunkAPI.dispatch(getDados(response.data));
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
});

export const postNewUser = createAsyncThunk("users/addNewUser", async (newUser: User, thunkAPI) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, newUser);
    console.log("Usuário adicionado com sucesso!");

    thunkAPI.dispatch(postUser(response.data));
    thunkAPI.dispatch(fetchUsers());
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (userId: number, thunkAPI) => {
  try {
    await axios.delete(`${API_BASE_URL}/users/${userId}`);
    console.log("Usuário deletado com sucesso!");

    thunkAPI.dispatch(fetchUsers());
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
  }
});
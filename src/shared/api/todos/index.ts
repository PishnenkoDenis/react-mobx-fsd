import { kyClient } from "../http-client";
import { ITodo, TQueryParams } from "./model";

const TODOS = "todos";

export const fetchTodos = (params: TQueryParams) =>
  kyClient.get(TODOS, { searchParams: params }).json<ITodo[]>();

export const fetchTodoById = (id: string) =>
  kyClient.get(`${TODOS}/${id}`).json<ITodo>();

export const updateTodo = (todo: ITodo) =>
  kyClient.put(`${TODOS}/${todo.id}`, { json: todo }).json<ITodo>();

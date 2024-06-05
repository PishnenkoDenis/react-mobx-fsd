import { makeAutoObservable, runInAction } from "mobx";
import { ITodo, TQueryParams } from "../../../shared/api/todos/model";
import {
  fetchTodoById,
  fetchTodos,
  updateTodo,
} from "../../../shared/api/todos";

class TodoStore {
  todos: ITodo[] = [];
  todo?: ITodo;
  isFetching = false;
  isUpateLoading = false;
  todosError = "";
  todoError = "";

  constructor() {
    makeAutoObservable(this);
  }

  getTodos = async (params: TQueryParams) => {
    try {
      this.isFetching = true;
      const data = await fetchTodos(params);
      runInAction(() => {
        this.isFetching = false;
        this.todos = data;
      });
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.isFetching = false;
          this.todosError = "something went wrong";
        });
      }
    }
  };

  getTodo = async (id: string) => {
    try {
      this.isFetching = true;
      const data = await fetchTodoById(id);
      runInAction(() => {
        this.isFetching = false;
        this.todo = data;
      });
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.isFetching = false;
          this.todoError = "something went wrong";
        });
      }
    }
  };

  editTodo = async (todo: ITodo) => {
    try {
      this.isUpateLoading = true;
      const data = await updateTodo(todo);
      runInAction(() => {
        this.isUpateLoading = false;
        this.todo = data;
      });
    } catch (error) {
      if (error instanceof Error) {
        this.isUpateLoading = false;
        this.todoError = "something went wrong";
      }
    }
  };
}

const todoStore = new TodoStore();
export default todoStore;

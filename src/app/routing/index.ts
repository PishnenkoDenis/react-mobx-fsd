import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../shared/ui/MainLayout";
import TodoListPage from "../../pages/todo-list-page/TodoListPage";
import TodoDetailsPage from "../../pages/todo-detail-page/TodoDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: TodoListPage,
      },
      {
        path: ":id",
        Component: TodoDetailsPage,
      },
    ],
  },
]);

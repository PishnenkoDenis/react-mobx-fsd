import todoStore from "../../entities/todo/model/todoStore";
import { FC } from "react";
import { Checkbox, Spin } from "antd";
import { ITodo } from "../../shared/api/todos/model";
import { observer } from "mobx-react-lite";

type TToggleProps = {
  todo: ITodo;
};

export const ToggleTodo: FC<TToggleProps> = observer(({ todo }) => {
  const { editTodo, isUpateLoading } = todoStore;
  return isUpateLoading ? (
    <Spin />
  ) : (
    <Checkbox
      checked={todo.completed}
      onChange={(val) => editTodo({ ...todo, completed: val.target.checked })}
    />
  );
});

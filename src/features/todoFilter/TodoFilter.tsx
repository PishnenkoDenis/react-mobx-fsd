import { Radio } from "antd";
import { TQueryParams } from "../../shared/api/todos/model";
import { buttons } from "./config";
import { FC } from "react";

const { Group, Button } = Radio;

type TFilterProps = {
  onClick: (params: TQueryParams) => void;
};

export const TodoFilter: FC<TFilterProps> = ({ onClick }) => {
  return (
    <Group defaultValue={"3"}>
      {buttons.map(({ id, title, params }) => (
        <Button key={id} value={id} onClick={() => onClick(params)}>
          {title}
        </Button>
      ))}
    </Group>
  );
};

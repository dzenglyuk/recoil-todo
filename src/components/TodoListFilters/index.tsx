import type { FC } from "react";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { Select } from "antd";
import { TodoFilter } from "../../enums/todoFilter";
import { todoListFilterState } from "../../state/todoList";

const TodoListFilters: FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (value: TodoFilter) => {
    setFilter(value);
  };

  return (
    <Select
      defaultValue={filter}
      onChange={updateFilter}
      style={{ width: "30%" }}
    >
      <Select.Option value={TodoFilter.SHOW_ALL}>All</Select.Option>
      <Select.Option value={TodoFilter.SHOW_COMPLETED}>Completed</Select.Option>
      <Select.Option value={TodoFilter.SHOW_UNCOMPLETED}>
        Uncompleted
      </Select.Option>
    </Select>
  );
};

export default memo(TodoListFilters);

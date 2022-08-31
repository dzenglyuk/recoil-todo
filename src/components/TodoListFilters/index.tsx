import type { ChangeEventHandler, FC } from "react";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { TodoFilter } from "../../enums/todoFilter";
import { todoListFilterState } from "../../state/todoList";

const TodoListFilters: FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setFilter(value as TodoFilter);
  };

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={TodoFilter.SHOW_ALL}>All</option>
        <option value={TodoFilter.SHOW_COMPLETED}>Completed</option>
        <option value={TodoFilter.SHOW_UNCOMPLETED}>Uncompleted</option>
      </select>
    </div>
  );
};

export default memo(TodoListFilters);

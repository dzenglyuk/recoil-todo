import { FC, ChangeEventHandler } from "react";
import { memo, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../state/todoList";
import { generateId } from "../../utils/generateId";

const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((todoList) => [
      ...todoList,
      {
        id: generateId(),
        value: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default memo(TodoItemCreator);

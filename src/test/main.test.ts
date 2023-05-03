import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

describe("addTodo", () => {
  test("lägger till", () => {
    const todos: Todo[] = [];
    const result = addTodo("Test todo", todos);
    expect(result.success).toBe(true);
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe("Test todo");
    expect(todos[0].done).toBe(false);
  });

  test("Minst tre bokstäver", () => {
    const todos: Todo[] = [];
    const result = addTodo("Tt", todos);
    expect(result.success).toBe(false);
    expect(todos.length).toBe(0);
    expect(result.error).toBe("Du måste ange minst tre bokstäver");
  });
});

describe("changeTodo", () => {
  test("togglar", () => {
    const todo = new Todo("Test todo", false);
    changeTodo(todo);
    expect(todo.done).toBe(true);
    changeTodo(todo);
    expect(todo.done).toBe(false);
  });
});

describe("removeAllTodos", () => {
  test("Tar bort alla todos", () => {
    const todos: Todo[] = [
      new Todo("Test todo 1", false),
      new Todo("Test todo 2", true),
      new Todo("Test todo 3", false),
    ];
    removeAllTodos(todos);
    expect(todos.length).toBe(0);
  });
});


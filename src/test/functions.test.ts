import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

describe("addTodo", () => {
    let todos: Todo[];
  
    beforeEach(() => {
      todos = [
        new Todo("Test1", false),
        new Todo("Test2", true),
        new Todo("Test3", false),
      ];
    });
  
    it("Lägger till en ny todo", () => {
      const result = addTodo("New Todo", todos);
  
      expect(result.success).toBe(true);
      expect(todos.length).toBe(4);
      expect(todos[todos.length - 1].text).toBe("New Todo");
      expect(todos[todos.length - 1].done).toBe(false);
    });
  
    it("Minst tre bokstäver", () => {
      const result = addTodo("Te", todos);
  
      expect(result.success).toBe(false);
      expect(todos.length).toBe(3);
      expect(result.error).toBe("Du måste ange minst tre bokstäver");
    });
  });
  
  describe("changeTodo", () => {
    it("Togglar todo", () => {
      const todo = new Todo("Test", false);
      changeTodo(todo);
      expect(todo.done).toBe(true);
      changeTodo(todo);
      expect(todo.done).toBe(false);
    });
  });
  
  describe("removeAllTodos", () => {
    it("Tar bort alla ToDo's", () => {
      let todos = [new Todo("Test", false), new Todo("Test2", true)];
      removeAllTodos(todos);
      expect(todos.length).toBe(0);
    });
  });
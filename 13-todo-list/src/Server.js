
function createTodo(text) {
  return { text: text, done: false };
}

export function saveTodo(text, callback) {
  //This function simulates the delay caused by creating a TODO on
  //a server. It just uses setTimeout instead of a real server communication.
  setTimeout(() => callback(createTodo(text)), 2000);
}

export function loadAllTodos(callback) {
  const allTodos = [
    { text: "Buy Milk", done: true },
    { text: "Buy Beer", done: true },
    { text: "Write workshop examples", done: false},
    { text: "Host workshop", done: false }
  ];

  setTimeout(() => callback(allTodos), 3000);
}

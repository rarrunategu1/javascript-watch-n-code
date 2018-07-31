//in order to escape the console:

var todoList = {
  todos: [],
   addTodo: function(todoText) { 
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    
  },

  changeTodo: function(position, todoText) { 
    this.todos[position].todoText = todoText;

  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
   
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    //if everything's true, make it false
    if (completedTodos === totalTodos) {
      for (var i =0; i <totalTodos; i++) {
        this.todos[i].completed = false;
      }
      //CASE 2: Other wise, make everything true.
    }else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  },
};
  var handlers = {
   
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById ('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
       view.displayTodos();
  },

  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
     view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
     view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
     view.displayTodos();
  }
  };

  var view = {
displayTodos:function() {
  var todosUl = document.querySelector('ul');
  todosUl.innerHTML = ''; //for whatever html is inside the unordered list and it clears out the list before it starts adding the new li elements
  for (var i = 0; i < todoList.todos.length; i++) {
  var todoLi = document.createElement('li');
  var todoTextWithCompletion = '';
  var todo = todoList.todos[i];

  if (todo.completed === true) {
    todoTextWithCompletion = '(x) ' + todo.todoText;
  } else {
    todoTextWithCompletion = '( ) ' + todo.todoText;
  }

  todoLi.textContent = todoTextWithCompletion;
  todosUl.appendChild(todoLi);

  }
}
  };

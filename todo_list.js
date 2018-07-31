/*V1 REQUIREMENTS
It should have a place to store todos
It should have a place to display todos
It should have a way to add new todos
It should have a way to change todos
It should hae a way to delete todos */

/*Store todos*/

> ['item 1', 'item 2', 'item 3'] /* this is a list.  the console creates an array next */
[ 'item 1', 'item 2', 'item 3' ] /* it created an array but it's not stored */
> var todos = ['item 1', 'item 2', 'item 3'] /* to store it and reuse store it in a variable */
undefined
> todos /* call out the variable and it returns the array */
[ 'item 1', 'item 2', 'item 3' ]
> 

/*Display todos*/

> console.log('hello there') 
hello there
undefined
> console.log('hello there', 'rose')
hello there rose
undefined
> console.log(todos)  /* This displays the todos but you can make it neater with the following: */
[ 'item 1', 'item 2', 'item 3' ]
undefined
> console.log('My Todos:', todos) /* Here we added "My Todos:" before it to explain what we're displaying*/
My Todos: [ 'item 1', 'item 2', 'item 3' ]
undefined
> 

/* Add New todos*/

> todos.push('item 4') /* .push will add new items to the array and return the number of items in your array */
4
> todos
[ 'item 1', 'item 2', 'item 3', 'item 4' ]
> todos.push('item 5')
5
> todos
[ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ]
> 

/* Change todos*/

> todos
[ 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ]
> todos[0] /* the and number inside will get the 0 value in the array which is item 1 */
'item 1'
> todos[1]
'item 2'
> todos[2]
'item 3'
> todos[4]
'item 5'
> todos[5]
undefined
> todos[0] = 'item 1 updated' /* just add an equal sign and new value to update it*/
'item 1 updated'
> todos
[ 'item 1 updated', 'item 2', 'item 3', 'item 4', 'item 5' ]
> 

/* Delete todos */

> todos
[ 'item 1 updated', 'item 2', 'item 3', 'item 4', 'item 5' ]
> todos.splice(0, 1) /* .splice (0,1) deletes starting from the 0 position and deleting 1 from that point.*/
[ 'item 1 updated' ]
> todos
[ 'item 2', 'item 3', 'item 4', 'item 5' ]
> todos.splice(3, 1)
[ 'item 5' ]
> todos
[ 'item 2', 'item 3', 'item 4' ]
> todos.splice(3, 1)
[]
> 

/* V2 FUNCTIONS*/

/* Functions are just recipes

makeTurkeySandwich
    Get one slice of bread.
    Add turkey.
    Put a slice of bread on top. */
    
function makeTurkeySandwich() {
    Get one slice of bread;
    Add turkey;
    Put a slice of bread on top;
}

makeTurkeySandwich()

/* Customizing functions */

/*makeSandwichWith______
    Get one slice of bread.
    Add _____.
    Put a slice of bread on top. */

function makeSandwichWith(filling) {
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top;
}

makeSandwichWith('ham')

/* More on customizing functions */
function sayHiTo(person) {
    console.log('hi', person);
}
undefined

sayHiTo('rose')
hi rose
undefined

/*
V2 REQUIREMENTS
It should have a function to display todos
It should have a function to add todos
It should have a function to change todos
It should have a function to delete todos
*/

//function to display todos

> var todos = ['item 1', 'item 2', 'item 3']
undefined
> function functionName() {}
undefined
> function displayTodos() {
... console.log('My todos:', todos);  //this function displays the todos
... }
undefined
> displayTodos() //this calls the function
My todos: [ 'item 1', 'item 2', 'item 3' ]
undefined
> 

//function to add new todos

> function addTdodo() {
... todos.push('new todo');
... }
undefined
> addTdodo()  //function being called only adds the todo.  It doesn't display it.
undefined
> displayTodos()
My todos: [ 'item 1', 'item 2', 'item 3', 'new todo' ]
undefined
> function addTdodo() {
... todos.push('new todo');
... displayTodos(); //this function being called inside of the addtdodo function will display the todo when you call the addtdodo function
... }
undefined
> displayTodos()
My todos: [ 'item 1', 'item 2', 'item 3', 'new todo' ]
undefined
> function addTodo(todo) {  //this function shows a variable instead
... todos.push(todo);
... displayTodos();
... }
undefined
> addTodo('hello there') //hello there ends ups taking the var todo's place and adds it to the todos
My todos: [ 'item 1', 'item 2', 'item 3', 'new todo', 'hello there' ]
undefined
> 

//function to change todos

> function changeTodo() {
... todos[0] = 'some new value';
... } // to change a todo you need two parameters, the position you want to change and the newValue you want to change it to
undefined
> function changeTodo(position, newValue) {
... todos[position] = newValue;
... }
undefined
> displayTodos()
My todos: [ 'item 1', 'item 2', 'item 3', 'new todo', 'hello there' ]
undefined
> changeTodo(0, 'changed')
undefined
> displayTodos()
My todos: [ 'changed', 'item 2', 'item 3', 'new todo', 'hello there' ]
undefined
> function changeTodo(position, newValue) {
... todos[position] = newValue;
... displayTodos(); //this will allow the change to be displayed
... }
undefined
> displayTodos()
My todos: [ 'changed', 'item 2', 'item 3', 'new todo', 'hello there' ]
undefined
> changeTodo(0, 'changed again')
My todos: [ 'changed again', 'item 2', 'item 3', 'new todo', 'hello there' ]
undefined
> 

//function to delete a todo

> function deleteTodo() {
... todos.splice(0, 1); //this is example of how we learned it
... }
undefined
> function deleteTodo(position) {
... todos.splice(position, 1); //we just want to replafce the 0 with the parameter position.
... displayTodos();
... }
undefined
> displayTodos()
My todos: [ 'changed again', 'item 2', 'item 3', 'new todo', 'hello there' ]
undefined
> deleteTodo(0)  //delete todo by pickin the position and it will delete it.
My todos: [ 'item 2', 'item 3', 'new todo', 'hello there' ]
undefined
> deleteTodo(2)
My todos: [ 'item 2', 'item 3', 'hello there' ]

// V3 Objects

/*Objects are used to group related data and functions togeether*/

operatingSystem mac 
screenSize 15 inches
purchase Year 2011  //to turn this info into an object you'd do the following:

var myComputer ={
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
};

> myComputer.operatingSystem
'mac'
> 

//Object and functions

//what is the relationship with objects and functions?

//you can place functions on objects in example below

var rose = {
    name: 'Rose',
    sayName: function () {  //function with no name is called an anonymous function.  a function inside an object is called a method 
    console.log(this.name);  //inside a function "this" refers to the entire object.  .name accesses thee property of the object.  
    }
}

> rose.sayName() //this is how you call the functio inside the object
Rose
undefined

/* V3 Requirements
It should store the todos array on an object
It should have a displayTodos method
It should have an addTodo method
It should have a changeTodo method
It should have a deleteTodo method */

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {this.todos[position] = newValue;this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

/*V7 REQUIREMENTS
    There should be a "Display todos" button and a "Toggle all" button in the app
    Clicking "Display Todos" should run todolist.displayTodos
    Clicking "toggle All" should run todoList.toggleAll
*/

// There should be a "Display todos" button and a "Toggle all" button in the app
  
//inside my html doc add the buttons    
 <body>
    <h1>Todo List</h1>
    <button>Display Todos</button>
    <button>Toggle All</button>
  </body>

//Clicking "Display Todos" should run todolist.displayTodos
    
//We want to get access to the display todos button.


   /*CASE 2: Other wise, make everything true.
    }else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  },
  };  */
  var displayTodosButton = document.getElementById('displayTodosButton'); //this is the part that was added
  console.log(displayTodosButton); //don't forget to give the button in the html document the id of displayTodosButton!!!!
 

//We want to run displayTodos method, when someone clicks the button

displayTodosButton.addEventListener('click', function() {
todoList.displayTodos();
  });
  
//last, if the button is after the script in the html document, move it to the end of the body so that it'll run right

//hit the display Todos button and it should say, your todo list is empty!

todoList.addTodo('first'); //will return first now

//toggleAll button will be the same.  add the id to the button on the html and then:


  var toggleAllButton = document.getElementById('toggleAllButton');
  console.log(toggleAllButton);

  toggleAllButton.addEventListener('click', function () {
   todoList.toggleAll();
  });
  
//when you todoList.addTodo, it will toggleAll when you click the button.




/*V8 GETTING DATA FROM INPUTS

Our first refactoring!! */

//first go into html and change the buttons:

<button id = "displayTodosButton">Display Todos</button>
    <button id = "toggleAllButton">Toggle All</button>
    
//to this:


    <button onclick="handlers.displayTodos()">Display Todos</button>
    <button onclick="handlers.toggleAll()">Toggle All</button>
    
//and change js file:
    

var displayTodosButton = document.getElementById('displayTodosButton');
  console.log(displayTodosButton);

   var toggleAllButton = document.getElementById('toggleAllButton');
  console.log(toggleAllButton);
 

  displayTodosButton.addEventListener('click', function() {
todoList.displayTodos();
  });

  toggleAllButton.addEventListener('click', function () {
   todoList.toggleAll();
  }); 
  
  
//to this, which is much neater:

var handlers = {
    displayTodos: function() {
todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
  
/* V8 REQUIREMENTS
    It should have working controls for .addTodo 
    It should have working controls for .changeTodo
    It should have working controls for .deleteTodo
    It should have working controls for .toggleCompleted */
    
    //button for adding todos
    
    //in html document do the following:
    
    <div>
    <button onclick="handlers.addTodo()">Add</button>
    <input id = "addTodoTextInput"type="text">
  </div>
  
  //in JS file do the following:
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';  //this part clears the input so it's empty for next add on
  }
    
    
    //button for changing a todo
    
    //in html do the following:
    
     <div>
    <button onclick="handlers.changeTodo()">Change Todo</button>
    <input id="changeTodoPositionInput" type = "number">
    <input id = "changeTodoTextInput" type = "text">
    </div>
 
//in js do the following:

 changeTodo: function () {
    var changeTodoPositionInput = document.getElementById ('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
  }
  
// There should be a button for deleting todos

//in the html document:

<div>
    <button onclick="handlers.deleteTodo()">Delete </button>
    <input id = "deleteTodoPositionInput" type = "number">
  </div>
  
//in the js file:

 deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  }
  
//button for toggling a todo

// in html:

  <div>
    <button onclick="handlers.toggleCompleted()">Toggle Completed</button>
    <input id = "toggleCompletedPositionInput" type = "number">
  </div>
  
//in js:

toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  
/*V9 REQUIREMENTS
    There should be an li element for every todo
    Each li element should contain .todoText
    Each li element should show .completed
    

//inserting li elements into the DOM

//to do this dynamically on the inspect element
first on the html put <ul> tags

then in the inspect element

var todoLi = document.createElement('li');

todoLi          //will return
<li>​</li>​

var todosUl = document.querySelector('ul');

todosUl       //will return
<ul>​
​</ul>​

todosUl.appendChild(todoLi);  //this is what will give you your first bullet
<li>​</li>​



//There should be an li element for every todo

//in js:

var view = {
displayTodos:function() {
  var todosUl = document.querySelector('ul');
  todosUl.innerHTML = ''; //for whatever html is inside the unordered list and it clears out the list before it starts adding the new li elements
  for (var i = 0; i < todoList.todos.length; i++) {
  var todoLi = document.createElement('li');
  todosUl.appendChild(todoLi);

  }
}

view.displayTodos(); //on inspect will give you the same amount of bullets as the items that you added


// each li element should contain .todoText

 for (var i = 0; i < todoList.todos.length; i++) {
  var todoLi = document.createElement('li');
  todoLi.textContent = todoList.todos[i].todoText; //this is the line that was added to the for loop so that text could appear next to the bullet
  todosUl.appendChild(todoLi);

  }

//each li element should show .completed

/*for (var i = 0; i < todoList.todos.length; i++) {
  var todoLi = document.createElement('li');*/
  var todoTextWithCompletion = '';
  var todo = todoList.todos[i];
  
  if (todo.completed === true) {
    todoTextWithCompletion = '(x) ' + todo.todoText;
  } else {
    todoTextWithCompletion = '( ) ' + todo.todoText;
  }

/*  todoLi.textContent = todoTextWithCompletion;
  todosUl.appendChild(todoLi);

  }
}*/








  
    
    
    
    
    
    
    
    
  
  
  
  
  
  
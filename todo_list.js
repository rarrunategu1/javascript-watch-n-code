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

/*V4 BOOLEANS

V4 Requirements
todoList.addTodo should add objects
todoList.changeTodo should change the todoText property
todoList.toggleCompleted should change the completed property */

//todoList.addTodo should add objects

//todos property in the todoList should be removed so its empty []; then change addTodo to below:

  addTodo: function(todoText) { 
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    
    todoList.addTodo('this is an object'); // adds this is an object onto the array

//todoList.changeTodo should change the todoText property

 changeTodo: function(position, todoText) { //todo text used to be newValue
    this.todos[position].todoText = todoText; //used to be this.todos[position] = newValue;
  this.displayTodos();

  },
  
  todoList.changeTodo(0, 'second try');
  
//todoList.toggleCompleted should flip the completed property

!true
false
!false
true
var roseBoolean = false;
undefined
!roseBoolean
true
roseBoolean
false
roseBoolean = !roseBoolean;
true
roseBoolean
true

//above is example of how ! flips a boolean

/*var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) { 
    this.todos.push({
      todoText: todoText,
      completed: false
    });
      this.displayTodos();
  },

  changeTodo: function(position, todoText) { 
    this.todos[position].todoText = todoText;
  this.displayTodos();

  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
*/
  toggleCompleted: function(position) { //this is all we added
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
todoList.addTodo('boolean testing'); // returns false
todoList.toggleCompleted(0); // returns true

//V5 LOOPS OF LOGIC

//FOR LOOPS

i=0                 //initialization      
say "hey" if i<3    //condition
increase i by 1     //final expression

0 "hey"
1 "hey"
2 "hey"
3

for (var i =0; i<3; i++) {
  console.log("hey");
}

node
> for (var i=0; i<10; i++) {
... console.log("hey");
... }
hey
hey
hey
hey
hey
hey
hey
hey
hey
hey
undefined

> for (var i = 0; i < 10; i = i + 2) {
... console.log("hey");
... }
hey
hey
hey
hey
hey

//Looping over arrays

for (var i =0; i<3; i++) {
  console.log(i);
}
 0
 1
 2
 
 //with array
 
 > var testArray = ['item 1', 'item 2', 'item 3'];
undefined
> testArray[0]
'item 1'
> for (var i = 0; i < 3; i++) {
... console.log(testArray[i]);
... }
item 1
item 2
item 3
undefined

// with array that has many items

> for (var i =0; i < testArray.length; i++) {  //.length does the trick
... console.log(testArray[i]);
... }
item 1
item 2
item 3
undefined

/*V5 REQUIREMENTS
.displayTodos should show .todoText
.displayTodos should tell you if .todos is empty
.displayTodos should show .completed */

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:'); //this.todos which was to console before has been removed.  no longer needed
    for(var i = 0; i < this.todos.length; i++) {console.log(this.todos[i].todoText);

    }

todoList.addTodo('first'); // will return first

todoList.addTodo('second'); // will return first second


//displayTodos should tell you if .todos is empty

var todoList = {   //We moved the for loop inside of the if statement
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!')
    } else {  //writing else is optional
      console.log('My Todos:');
    for(var i = 0; i < this.todos.length; i++) 
    {console.log(this.todos[i].todoText);
    }
    }
    }
  },

todoList.addTodo('first'); //returns My Todos: first

todoList.deleteTodo(0); //returns Your todo list is empty

//displayTodos should show .completed

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!')
    } else {
      console.log('My Todos:');
    for(var i = 0; i < this.todos.length; i++) { 
    if (this.todos[i].completed === true) {  //from here down is the added code
      {console.log("(x)",this.todos[i].todoText);
    } else {
      {console.log("( )",this.todos[i].todoText);
    }
    }
    }
  },

todoList.addTodo('first');
todoList.addTodo('second');
todoList.displayTodos();  //returns
( ) first
( ) second

todoList.toggleCompleted(0); //returns
(x) first

/* V6 THINKING IN CODE

V6 Requirements
 .toggleAll: if everything's true, make everything false.
 toggleAll: Otherwise, make everything true. */
 
//.toggleAll: if everything's true, make everything false.

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
    }
    this.displayTodos();
  }
  
  //after all items have been togglecompleted and you do run todoList.toggleAll();  it will uncheck everything
  
  
  
  //toggleAll: Otherwise, make everything true. */
  
  
 /* toggleAll: function() {
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
      } */
      //CASE 2: Other wise, make everything true.
    }else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }


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



V10 CLICK TO DELETE

Introducting Glitch

Glitch.com will allow you to inspect your code without having to going into
run, inspect, plunker preview target.  It makes things easier


The 'return' statement

function multiplyTwoNumbers(a, b) {
  var result = a * b;
  return result;    // without the return you wouldn't get the value that you want
}

var theProductOf2And10 = multiplyTwoNumbers(2, 10);  //this would store the product in the variable

theProductOf2And10  //this now holds the value of 20

20


/* V10 REQUIREMENTS

There should be a way to create delete buttons
There should be a delete button for each todo
Each li should have an id that has the todo position
Delete buttons should have access to the todo id
Clicking delete should update todoList.todos and the DOM
*/


//Create Delete Buttons
//In the view object at the end of the javascript file do:

 createDeleteButton: function() {
    var deleteButton = document.createElement('button');  //creates the button
    deleteButton.textContent = 'Delete'; // give the button a name
    deleteButton.className = 'deleteButton'; //gives you a class to use on other elements
    return deleteButton;
  } 
  

//There should be a Delete Button for each todo

//IN the todoli section in the js file of my todo list;

 todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton()); //this line is what was added.  'this' works because the createDeleteButton is on the same object
      todosUl.appendChild(todoLi);


//Each Li should have an id that has the todo position

//since 'i' in the for loop iterates through every item in the array and 
//each time it iterates through each item it gives it a unique position.  That's why
//I can use ID.


      todoLi.id = i;  //this is what we added
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);


//Delete buttons should have access to the todo id


//after the createDeleteButton

var todosUl = document.querySelector('ul'); //you want to access the ul because it has all the li elements.

todosUl.addEventListener('click', function(event) {
   console.log(event.target.parentNode.id); //target.parentNode.id is info that was found in the inspect element
});
//so now anything clicked in the unordered list will have an id



//Clicking delete should update todoList.todos and the DOM

/* On my deleteTodo function I'm now deleting the following because I no longer need it. :

    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    deleteTodoPositionInput.value = '';

***We basically modify the deleteTodo handler to be the following:

  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();*/
    
//AWESOME NOTE ALERT!!  parseInt turns a string into a number.  See exampe below:

 //Get the element that was clicked on
  var elementClicked = event.target;
  
  //Check if elementClicked is a delete button
  if (elementClicked.className === 'deleteButton') {
    //run handlers.deleteTodo
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
  }
  
  
//It is a good idea to move this into the view object like so:


    
    
    












  
    
    
    
    
    
    
    
    
  
  
  
  
  
 

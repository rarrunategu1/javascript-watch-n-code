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
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
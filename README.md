# todo-app-revenge-taken
----

Initially I used to do the following to delete the todos!
---------
```javascript
let deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach((btn,index) => {
	btn.addEventListener('click',e=>{
		e.preventDefault();
		deleteMe(index);	
	});
});
```

* In the above piece of code I used to add an event listener to all the delete buttons 
* problem with this approach is that once the delete function is called then the eventlistener is not again avaialbe to continue
* I was supposed to refresh the page again to get that functionality back

### Solution found
--------
```html
<li>
    <span class="todo-text">${item}</span>
    <button class="delete-btn" onClick="deleteMe(${index})">Delete</button>
</li>
```

* By adding that onclick function inline to the button this removed the problem of losing the event!
* This is one of my happiest days since I found the error for such a long time I quit doing a todo app because of this bug 😂😂😂😂😂(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)❤❤
